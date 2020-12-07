// part 01 - switch: sizes

function switchSizes() {
    let size = prompt("Укажите ваш размер (XXS - XXL)","");
    switch (size){
        case "XXS": alert("Ваш обхват талии от 63 - до 65");
        break;
        case "XS": alert("Ваш обхват талии от 66 - до 69");
        break;
        case "S": alert("Ваш обхват талии от 70 - до 74");
        break;
        case "M": alert("Ваш обхват талии от 75 - до 78");
        break;
        case "L": alert("Ваш обхват талии от 79 - до 83");
        break;
        case "XL": alert("Ваш обхват талии от 84 - до 89");
        break;
        case "XXL": alert("Ваш обхват талии от 95 - до 97");
        break;
        default: alert("Укажите точный размер");
    }

    document.getElementById('switchSizesRes').innerHTML = size
}

// part 02 - switch: if

function switchIf() {
    let color = prompt("Введите цвет: red, black, blue или green" ,"");

    if (color == "red") document.getElementById('switchIfRes').innerHTML = color;
    else    if (color == "black") document.getElementById('switchIfRes').innerHTML = color;
            else    if (color == "blue") document.getElementById('switchIfRes').innerHTML = color;
                    else    if (color == "green") document.getElementById('switchIfRes').innerHTML = color;
                            else document.getElementById('switchIfRes').innerHTML = `Введи цвет корректно`;

    document.getElementById('switchIfRes').innerHTML = size
}

// part 03 - prompt: or

function promptOr() {
    let a = prompt(`Сколько тебе лет?`)
    age = (2020 - +a)

    if (a === null || a == "" || isNaN(a)) alert(`Ошибка`);
    else alert(`Ты родился в ${age}`);
}

// part 04 - confirm: or this days

function confirmIfThisDays() {
    let a = confirm (`Шопинг?`)

    if (a == false) alert(`Ты - бяка`);
}

// part 05 - confirm: if this days

function confirmIfThisDays() {
    let a = confirm (`Шопинг?`)

    if (a == false) alert(`Ты - бяка`);
}

// part 06 - triple prompt

function triplePrompt() {
    let a = prompt("Введите фамилию")
    let b = prompt("Введите имя")
    let c = prompt("Введите отчество")

    alert(`Ваша фамилия: ${a} ${b} ${c}`)

    let fio = `${a} ${b} ${c}`

    document.getElementById('triplePromptRes').innerHTML = fio
}

// part 06 - triple prompt

function defaultOr() {
    let a = prompt("Введите фамилию") || "Иванов"
    let b = prompt("Введите имя") || "Иван"
    let c = prompt("Введите отчество") || "Иванович"

    alert(`Ваша фамилия: ${a} ${b} ${c}`)

    let fio = `${a} ${b} ${c}`

    document.getElementById('defaultOrRes').innerHTML = fio
}

// part 07 - triple prompt

function defaultIf() {
    let a = prompt("Введите фамилию")
    let b = prompt("Введите имя")
    let c = prompt("Введите отчество")

    if (a === null || a == "") a = "Иванов";
    if (b === null || b == "") b = "Иван";
    if (c === null || c == "") c = "Иванович";

    alert(`Ваша фамилия: ${a} ${b} ${c}`)

    let fio = `${a} ${b} ${c}`

    document.getElementById('defaultIfRes').innerHTML = fio
}

// part 08 - login and password

function loginAndPassword() {
    let a = prompt("Введите логин")

    if (a !== "admin") alert("Введите корректный логин");
    else b = prompt("Введите пароль");

    if (b !== "qwerty") alert("Введите корректный пароль");
    else alert("Вы ввели корректные данные");

    let logpas = `${a} / ${b}`

    document.getElementById('loginAndPasswordRes').innerHTML = logpas
}

// part 09 - currency calc

function currencyCalc() {
    let a = prompt("Введите код валюты: USD / EUR")
    let b

    switch (a){
        case "USD": b = 28.400;
        break;
        case "EUR": b = 34.475;
        break;
        default: alert("Не правильный код");
    }

    let c = prompt("Введите количество гривен, которые необхолдимо перевести")

    alert(`Резуьтат перевода: ${(c/b).toFixed(2)} грн.`)

    let d = `${(c/b).toFixed(2)} грн.`

    document.getElementById('currencyCalcRes').innerHTML = d
}

// part 10 - currency calc: improved

function currencyCalcImproved() {
    let a = prompt("Введите код валюты: USD / EUR")
    let b

    switch (a.toUpperCase()){
        case "USD": b = 28.400;
        break;
        case "EUR": b = 34.475;
        break;
        default: alert("Не правильный код");
    }

    let c = prompt("Введите количество гривен, которые необхолдимо перевести")

    alert(`Резуьтат перевода: ${(c/b).toFixed(2)} грн.`)

    let d = `${(c/b).toFixed(2)} грн.`

    document.getElementById('currencyCalcImprovedRes').innerHTML = d
}

// part 11 - currency calc: two rates

function currencyCalcTwoRates() {
    let buy = 28.400
    let sell = 28.200

    confirm("Вы продаёте вылюту?") ? prompt("Введите количество") && alert(`Вы получите ${(currency * sell).toFixed(2)} гривен`) : prompt("Введите количество") && alert(`Вы получите ${(currency / buy).toFixed(2)} у.е.`)
}

// part 11 - currency calc: two rates

function currencyCalcIf() {
    let buy = 28.400
    let sell = 28.200

    if (confirm("Вы продаёте вылюту?") == true) prompt("Введите количество") && alert(`Вы получите ${(currency * sell).toFixed(2)} гривен`);
    else prompt("Введите количество") && alert(`Вы получите ${(currency / buy).toFixed(2)} у.е.`);
}

// part 12 - scissors

function scissors() {
    let a = +prompt("Введите число от 0 - 999")
    let b = +(Math.random() * Math.pow(10, 3)).toFixed(0)

    alert(`У компютера получилось число ${b}`)

    if (a > b) alert(`Победил человек`);
    else    if (a == b) alert(`Ничья`);
            else alert(`Победил робот`);
}

// part 13 - Задание на синий пояс

function blueBeltChallenge() {

    let ratios = {
        usd: prompt("Введите курс доллара"),
        eur: prompt("Введите курс евро")
    }

    let a = prompt("Введите код валюты: USD / EUR")
    let b

    switch (a.toUpperCase()){
        case "USD": b = ratios["usd"];
        break;
        case "EUR": b = ratios["eur"];
        break;
        default: alert("Правильный код");
    }

    let c = prompt("Введите количество гривен, которые необхолдимо перевести")

    alert(`Резуьтат перевода: ${(c/b).toFixed(2)} у.е.`)

    let d = `${(c/b).toFixed(2)} у.е.`

    document.getElementById('blueBeltChallengeRes').innerHTML = d
}

// part 14 - real data

function realData() {
    fetch('https://api.exchangeratesapi.io/latest')
    .then(res => res.json())
    .then(d => {
        console.log(d)

        let a = +prompt("Введите валюту")
        currency = (temp1.rates.JPY) * a

        alert(`Резуьтат вот такой ${currency}`)

        document.getElementById('realDataRes').innerHTML = currency
    })
}

// part 15 - Additional task

function additionalTask() {

    let a = prompt(`Введите названия задания`)

    switch (a) {
        case "switch: sizes": switchSizes();
        break;
        case "switch: if": switchIf();
        break;
        case "prompt: or": promptOr();
        break;
        case "confirm: or this days": confirmIfThisDays();
        break;
        case "confirm: if this days": confirmIfThisDays();
        break;
        case "triple prompt": triplePrompt();
        break;
        case "default: or": defaultOr();
        break;
        case "default: if": defaultIf();
        break;
        case "login and password": loginAndPassword();
        break;
        case "currency calc": currencyCalc();
        break;
        case "currency calc: improved": currencyCalcImproved();
        break;
        case "currency calc: two rates": currencyCalcTwoRates();
        break;
        case "currency calc: if": currencyCalcIf();
        break;
        case "scissors": scissors();
        break;
        case "Blue Belt Challenge": blueBeltChallenge();
        break;
        case "real data": realData();
        break;
        default: alert("Нет задания с таким названием");
    }

    document.getElementById('additionalTaskRes').innerHTML = d
}