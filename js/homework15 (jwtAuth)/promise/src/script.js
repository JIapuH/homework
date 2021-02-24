const url = "http://shop-roles.asmer.fs.a-level.com.ua/graphql"

function jwtDecode(token) {
    return JSON.parse(atob(token.split('.')[1]))
}

const getGQL = (url) => (query, variables = {}) => fetch(url, {
    method: 'POST',
    headers: {
        "Content-type": "application/json",
        "accept": "application/json"
    },
    body: JSON.stringify({
        query,
        variables
    })
}).then(res => res.json())

let gql = getGQL(url)

function createStore(reducer) {
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

function promiseReducer(state = {}, action) {
    if (state === {} || !state) {
        if (localStorage.saveToken) {
            action.token = localStorage.saveToken
            action.type = "LOGIN"
        } else return {}
    }

    if (action.type !== undefined && action.type === "LOGIN") {
        localStorage.saveToken = action.token;
        return {
            ...state,
            login: {
                ...state.login,
                payload: {
                    token: action.token,
                    data: jwtDecode(action.token)
                }
            }
        }
    }
    if (action.type != undefined && action.type === "LOGOUT") {
        localStorage.removeItem("saveToken")
        logoutButton.setAttribute('style', 'display: inline-block;');
        return {}
    }
    if (action.type === 'PROMISE') {
        const {
            name = "default", status, payload, error
        } = action
        if (status) {
            return {
                ...state,
                [name]: {
                    status,
                    payload: (status === 'PENDING' && state[name] && state[name].payload) || payload,
                    error
                }
            }
        }
    }
    return state;
}

const store = createStore(promiseReducer)

const actionPromise = (name, promise) => {
    const actionPending = () => ({
        type: 'PROMISE',
        name,
        status: 'PENDING',
        payload: null,
        error: null
    })
    const actionResolved = payload => ({
        type: 'PROMISE',
        name,
        status: 'RESOLVED',
        payload,
        error: null
    })
    const actionRejected = error => ({
        type: 'PROMISE',
        name,
        status: 'REJECTED',
        payload: null,
        error
    })

    return async dispatch => {
        dispatch(actionPending())
        let payload
        payload = await promise
            dispatch(actionResolved(payload))

        return payload;
    }
}

function actionLogin(login, password) {
    return actionPromise('login', gql(`query login{login(login:"${login}", password:"${password}")}`)) //
}

const authLogin = token => store.dispatch({
    type: "LOGIN",
    token
})


function actionFullLogin(login, password) {
    return async dispatch => {
        const tokenData = await dispatch(actionLogin(login, password))
        authLogin(tokenData.data.login)
    }
}

store.subscribe(fullLogIn)

inputNick.innerHTML = `Hi, <b><font color = red><u>Anonymous</b></font></u>, please LogIn`

if (localStorage.saveToken) authLogin(localStorage.saveToken)

function fullLogIn() {
    const currentState = store.getState()
    if (Object.keys(currentState).length === 0) {
        inputNick.innerHTML = `Hi, <b><font color = red><u>Anonymous</b></font></u>, please LogIn`
        loginInput.setAttribute('style', 'display: inline-block;');
        passwordInput.setAttribute('style', 'display: inline-block;');
        logoutButton.setAttribute('style', 'display: none;');

    } else {

        for (let key in currentState) {
            "payload" in currentState[key] && currentState[key].payload !== null && "data" in currentState[key].payload && currentState[key].payload.data !== null && "sub" in currentState[key].payload.data && (inputNick.innerHTML = `Hi, <b><font color = darkgreen><u>${currentState[key].payload.data.sub.login}</b></font></u>`)
        }


        loginButton.setAttribute('style', 'display: none;');
        loginInput.setAttribute('style', 'display: none;');
        passwordInput.setAttribute('style', 'display: none;');
        sendUser.setAttribute('style', 'display: none;');
    }

}


loginButton.onclick = () => {

    store.dispatch(actionFullLogin(loginInput.value, passwordInput.value));

    loginButton.setAttribute('style', 'display: none;');
    loginInput.setAttribute('style', 'display: none;');
    passwordInput.setAttribute('style', 'display: none;');
    logoutButton.setAttribute('style', 'display: inline-block;');
}

logoutButton.onclick = () => {
    store.dispatch({
        type: "LOGOUT"
    })

    loginInput.value = ''
    passwordInput.value = ''
    sendUser.setAttribute('style', 'display: inline-block;');
    loginButton.setAttribute('style', 'display: inline-block;');
    logoutButton.setAttribute('style', 'display: none;');
}

sendUser.onclick = () => {
    loginInput.value = 'JIapuH'
    passwordInput.value = '9379992'
    sendUser.setAttribute('style', 'display: none;');
}