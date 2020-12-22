// a
function a(text){
    alert(text)
}
    a("Привет!") // вызывает alert("Привет!")

// cube

function cube(a){
    return a*a*a
}
cube(3)

// cube

function avg2(a, b){
    return ((a + b) / 2)
}
avg2(1,2)
avg2(10,5)


// sum3

function sum3(a, b, c = 0) {
    return a + b + c;
}

sum3(1,2,3) // => 6
sum3(5,10,100500) // => 100515
sum3(5,10) // => 15


// intRandom

function intRandom(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
intRandom(-1,-1) // вернет -1
intRandom(0,1) // вернет 0 или 1
intRandom(10) // вернет 0 до 10 включительно

// greetAll

function greetAll(){

    let hello = "Hellow"

    for (let i = 0; i < arguments.length; i++) {
        hello += ` ${arguments[i]},`
    }
    return(hello)
}

greetAll("Superman") // выводит alert "Hello Superman"
greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
greetAll("Superman", "SpiderMan", "Captain Obvious") // выводит alert "Hello Superman, SpiderMan, Captain Obvious"


// sum
function sum() {
    let result = 0;

    for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
    }

    return result;
}

sum(1) // => 1
sum(2) // => 2
sum(10,20,40,100) // => 170


// Union

function aSample(){
    a("Привет!") // вызывает alert("Привет!")
}

function cubeSample(){
    cube(5) // => 125
}

function sum3Sample() {
    sum3(5,10) // => 15
}

function intRandomSample() {
    intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
}

function greetAllSample(){
    greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
}

function sumSample() {
    sum(10,20,40,100) // => 170
}

let sample = prompt("Введите название задания")
switch (sample.toLowerCase()){
    case "a": aSample()
    break
    case "cube": cubeSample()
    break
    case "sum3": sum3Sample()
    break
    case "intRandom": intRandomSample()
    break
    case "greetAll": greetAllSample()
    break
    case "sum": sumSample()
    break
}

// Union declarative ПОКА НЕ ПРИДУМАЛ

function aSample(){
    a("Привет!") // вызывает alert("Привет!")
}

function cubeSample(){
    cube(5) // => 125
}

function sum3Sample() {
    sum3(5,10) // => 15
}

function intRandomSample() {
    intRandom(2,15) // возвращает целое случайное число от 2 до 15 (включительно)
}

function greetAllSample(){
    greetAll("Superman", "SpiderMan") // выводит alert "Hello Superman, SpiderMan"
}

function sumSample() {
    sum(10,20,40,100) // => 170
}

let sample = prompt("Введите название задания")

let arr = {
    a: aSample(),
    cube: cubeSample(),
    sum3: sum3Sample(),
    intRandom: intRandomSample(),
    greetAll: greetAllSample(),
    sum: sumSample()
}

if (sample in arr) {
    console.log(`Задание ${sample} есть!`);
    arr[sample]
} else {
    alert(`Задание с именем ${sample} отстствует!`);
    console.log(`Задание ${sample} нет!!`);
}