// part 01 - assign: evaluation

function assignEvaluation() {
    let a = 5
    let b, c

    b = (a * 5)
    b = (c = (b/2))

    document.getElementById('assignEvaluationRes').innerHTML = b
}

// part 04 - Number: age

function numberAge() {
    let a = prompt(`Сколько тебе лет?`);
    age = (2020 - +a)

    alert(`Ты родился в ${age}`)

    document.getElementById('numberAgeRes').innerHTML = age
}

// part 05 - Number: temperature

function numberTemperature() {
    let a = prompt(`Введите пожалуйста температуру в градусах Цельсия`)
    fahrenheit = (9/5 * +a + 32)

    alert(`Температура по Фаренгейту: ${fahrenheit}`)

    document.getElementById('numberTemperatureRes').innerHTML = fahrenheit
}

// part 06 - Number: divide

function numberDivide() {
    let a = prompt(`Введите пожалуйста первое число`)
    let b = prompt(`Введите пожалуйста второе число`)

    devide = Math.floor(a/b)
    alert(`Результат от деления нацело: ${devide}`)

    document.getElementById('numberDivideRes').innerHTML = devide
}

// part 07 - Number: odd

function numberOdd() {
    let a = +prompt(`Введите пожалуйста число`)

    if (isNaN(a)) alert(`Введите пожалуйста число повторно`);
    else    if (a >= 0) alert(`Введено число ${a}`);
            else alert(`Число отрицательное`);

    document.getElementById('numberOddRes').innerHTML = a
}

// part 08 - String: greeting

function stringGreeting() {
    let a = prompt(`Как тебя зовут?`)
    alert(`Добрый день, ${a}`);

    document.getElementById('stringGreetingRes').innerHTML = a
}

// part 9 - String: lexics

function stringLexics() {
    let a = prompt(`Введите пожалуйста несколько слов`)

    let b = a.includes(`Матюк`)

    if (b == true) alert(`Плохое воспитание`);
    else alert(`Хорошее воспитание`)

    document.getElementById('stringLexicsRes').innerHTML = a
}

// part 10 - confirm

function confirmFn() {
    let a = confirm(`Получается у тебя домашнее задание?`)

    if (a == true) alert(`Молодец!`);
    else alert(`Работай больше!`)

    document.getElementById('confirmRes').innerHTML = a
}

// part 11 - Boolean

function booleanFn() {
    let a = confirm(`Мороженное или пироженное?`)
    let b = confirm(`Сидр или пиво?`)

    let boolean = `${a} и ${b}`

    document.getElementById('BooleanRes').innerHTML = boolean
}

// part 12 - Boolean: if

function booleanIf() {
    let a = confirm(`Ваш пол женский?`)

    if (a == true) alert(`Вы женщина`);
    else alert(`Вы мужчина!`)

    document.getElementById('booleanIfRes').innerHTML = a
}

// part 13 - Array: real

let a = ["Носки", "Брюки", "Рубкашка", "Трусы", "Туфли"]

// part 14 - Array: booleans

function arrayBooleans() {
    let a = confirm(`Мороженное или пироженное?`)
    let b = confirm(`Сидр или пиво?`)
    let c = confirm(`Ваш пол женский?`)

    if (c == true) alert(`Вы женщина(`);
    else alert(`Вы мужчина!`)

    let d = [a, b, c]

    document.getElementById('arrayBooleansRes').innerHTML = d
}

// part 15 - Array: plus

function arrayPlus() {
    let a = [prompt(`Введите 1 число массива`), prompt(`Введите 2 число массива`), prompt(`Введите 3 число массива`), prompt(`Введите 4 число массива`), prompt(`И введите 5 число массива`)]
    let b = [a[0], a[1], +a[0] + +a[1], a[3], a[4]]

    let c = `Первый массив - ${a} Второй массив - ${b}`

    document.getElementById('arrayPlusRes').innerHTML = c
}

// part 16 - Array: plus string

function arrayPlusString() {
    let a = [prompt(`Введите 1 элемент массива`), prompt(`Введите 2 элемент массива`), prompt(`Введите 3 элемент массива`), prompt(`Введите 4 элемент массива`), prompt(`И введите 5 элемент массива`)]
    let b = [a[0], a[1], a[2], a[0] + a[1] + a[2], a[4]]

    let c = `Первый массив - ${a} Второй массив - ${b}`

    document.getElementById('arrayPlusStringRes').innerHTML = c
}

// part 17 - Object: real

function objectReal() {
    let disk
    let pc = {
        processor: prompt(`Какой у вас процессов?`),
        motherboard: prompt(`Какая материнская плата?`),
        ram: prompt(`Количесво оперативной памяти?`),
        harddrive: confirm(`У вас SSD?`)
    }

    if (harddrive = true) disk = "SSD";
    else disk = "HDD";

    let pcname = `Проц: ${pc.processor}, Материнка: ${pc.motherboard}, ОЗУ: ${pc.ram} Gb Ram, ${disk} диск`

    document.getElementById('objectRealRes').innerHTML = pcname
}

// part 18 - Object: change

function objectChange() {
    let disk
    let pc = {
        processor: prompt(`Какой у вас процессов?`),
        motherboard: prompt(`Какая материнская плата?`),
        ram: prompt(`Количесво оперативной памяти?`),
        harddrive: confirm(`У вас SSD?`)
    }

    pc.processor = "AMD"
    pc.motherboard = "Gigabyte"
    pc.ram = 32
    pc.harddrive = false


    if (harddrive = true) disk = "SSD";
    else disk = "HDD";

    let pcname = `Proc: ${pc.processor}, MB: ${pc.motherboard}, ${pc.ram} Gb Ram, ${disk} disk`

    document.getElementById('objectChangeRes').innerHTML = pcname
}

// part 19 - Comparison if

function comparisonIf() {
    let age = +prompt("Сколько вам лет?","");

    if (age <0) alert("Введите коректные данные", "");
    else    if (age < 18) alert("Школьник");
            else    if (age > 18 && age < 30) alert("Молодеж");
                    else    if (age > 30 && age < 45) alert("Зрелость");
                            else    if (age > 45 && age < 60) alert("Закат");
                                    else    if (age > 60) alert("Как пенсия?");
                                            else alert("То ли киборг, то ли ошибка");

    document.getElementById('comparisonIfRes').innerHTML = age
}

// part 20 - Comparison: sizes

function comparisonSizes() {
    let size = +prompt("Какой у вас обхват талии?","");

    if (size <65) alert("Мы вам ничего не подберём(", "");
    else    if (size >= 63 && size <= 65) alert("Ваш размер XXS");
            else    if (size >= 66 && size <= 69) alert("Ваш размер XS");
                    else    if (size >= 70 && size <= 74) alert("Ваш размер S");
                            else    if (size >= 75 && size <= 78) alert("Ваш размер M");
                                    else    if (size >= 79 && size <= 83) alert("Ваш размер L");
                                            else    if (size >= 84 && size <= 89) alert("Ваш размер XL");
                                                    else    if (size >= 90 && size <= 94) alert("Ваш размер XXL");
                                                            else    if (size >= 95 && size <= 97) alert("Ваш размер XXXL");
                                                                    else alert("Введите корректные данные");

    document.getElementById('comparisonSizesRes').innerHTML = size
}

// part 21 - Comparison: object

function comparisonObject() {

    let shoes40 = {
        inRussia: +prompt("Размер ноги, 40 или другой подалуйста)",""),
        inNorway: 34,
        inItaly: 38,
        inUSA: 6
    }

    if (shoes40.inRussia == 40) alert(`Ваш размер в норвегии: ${shoes40.inNorway}`);
    else alert(`Пока база обновляется)`);
}

// part 22 - Ternary

function ternary() {

    let gender = confirm("Ваш пол женский?") ? alert("Вы женщина") : alert("Вы мужчина");

    document.getElementById('ternaryRes').innerHTML = gender
}

// part 23 - Number: flats

function numberflats() {

    let floor = +prompt("Введите количество этажей")
    let apartments = +prompt("Введите количество квартир на этаже")
    let apartment = +prompt("Введите номер квартиры")

}