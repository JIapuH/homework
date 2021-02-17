function jwtDecode(token) {
    return JSON.parse(atob(token.split('.')[1]))
}

function authentication(reducer) {
    let state = reducer(undefined, {})

    let subscribers = []

    function dispatch(action) {
        if (typeof (action) === "function") {
            return action(dispatch)
        }
        const newState = reducer(state, action)

        if (state !== newState) {
            state = newState;
            subscribers.forEach(cb => cb())
        }
    }

    return {
        getState() {
            return state;
        },
        subscribe(cb) {
            subscribers.push(cb)
            return () => subscribers = subscribers.filter(c => c !== cb)
        },
        dispatch
    }
}

const user = authentication(function tokenInfo(state = undefined, {
    type,
    token
}) {

    if (state === undefined) {
        if (localStorage.saveToken) {
            token = localStorage.saveToken
            type = "login"
        } else return {}
    }
    if (type === "login") {
        localStorage.saveToken = token;
        return {
            token,
            data: jwtDecode(token)
        }
    }
    if (type === "logout") {
        localStorage.removeItem("saveToken")

        return {}
    } else return state
})

const displayUser = () => {
    let currentState = user.getState()
    console.log(currentState)
    if (("data" in currentState) && currentState.data !== undefined && ("login" in currentState.data)) {
        inputNick.innerHTML = `Hi, <b><font color = darkgreen><u>${currentState.data.login}</b></font></u>`
        inputToken.setAttribute('style', 'display: none;');
        inputToken.value = ''
        login.setAttribute('style', 'display: none;');
        logout.setAttribute('style', 'display: inline-block;');
        sendToken.setAttribute('style', 'display: none;');
    } else {
        inputNick.innerHTML = `Hi, <b><font color = red><u>Anonymous</b></font></u>, please LogIn`;
        login.setAttribute('style', 'display: inline-block;');
        inputToken.setAttribute('style', 'display: inline-block;');
        logout.setAttribute('style', 'display: none;');
        sendToken.setAttribute('style', 'display: inline-block;');
    }
}

displayUser();

user.subscribe(displayUser)
const authLogin = token => user.dispatch({
    type: "login",
    token
})
const authLogout = () => user.dispatch({
    type: "logout"
})

login.onclick = () => {
    if (inputToken.value && !(+inputToken.value)) {
        authLogin(inputToken.value)
    }
}

sendToken.onclick = () => {
    inputToken.value = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDE4MTNjNTZmODcxZjE1NmJmNGI0NmYiLCJsb2dpbiI6IkpJYXB1SCJ9.FzNZS0hX_Ma7KIkqW0f86Xh_nNO6z4jrerPQVPwYZTg'
    sendToken.setAttribute('style', 'display: none;');
}

logout.onclick = () => authLogout();