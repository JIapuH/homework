// 3 persons

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}


// different fields + fields check

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

a.age = "ageA"
b.fatherName = "fathernameB"
c.sex = "sexC"

console.log(a, b, c)

console.log(typeof a);
console.log("fathername" in b);
console.log("age" in c);
if ('fathername' in b === true) {
    alert(b.fathername);
}
if ('age' in a === true) {
    alert(a.age);
}
if ('sex' in c === true) {
    alert(c.sex)
}


//array of persons

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

a.age = "ageA"
b.fathername = "fathernameB"

persons = [...[a], ...[b]]

persons[2] = {
    name: "nameC",
    surname: "surnameC",
    sex: "sexC"
}


//loop of persons

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

persons = [...[a], ...[b], ...[c]]

for (i = 0; i < 3; i++) {
    console.log(persons[i])
}


//loop of name and surname

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

persons = [...[a], ...[b], ...[c]]

for (i = 0; i < 3; i++) {
    console.log(persons[i].name, persons[i].surname)
}


//loop of loop of values + fullName

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

persons = [...[a], ...[b], ...[c]]

for (i = 0; i < persons.length; i++) {
    for (j = 0; j < 3; j++) {
        console.log(Object.values(persons[i])[j]);
    }
}
for (i = 0; i < persons.length; i++) {
    if (persons[i].name !== undefined && persons[i].surname !== undefined) {
        persons[i].fullName = persons[i].name + " " + (persons[i].fathername || "fathernameNew") + " " + persons[i].surname;
        console.log(persons[i].fullName);
    }
}


//serialize

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

persons = [...[a], ...[b], ...[c]]

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

JSON.stringify(persons)

//deserialize

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

persons = [...[a], ...[b], ...[c]]

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

let d = {
    "name": "nameD",
    "surname": "surnameD",
    "married": "true"
}

persons.push(d)


//HTML

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

persons = [...[a], ...[b], ...[c]]

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

let d = {
    "name": "nameD",
    "surname": "surnameD",
    "married": "true"
}

persons.push(d)

let pers = "<table border='1'>"
for (let i = 0; i < 3; i++) {
    pers += `<tr><td>${i+1}</td><td>${person[i]}</td></tr>`
}
pers += "</table>"

console.log(pers)
document.write(pers)


//HTML optional fields

let a = {
    name: "nameA",
    surname: "surnameA",
}

let b = {
    name: "nameB",
    surname: "surnameB",
}

let c = {
    name: "nameC",
    surname: "surnameC",
}

persons = [...[a], ...[b], ...[c]]

a.age = "ageA"
b.fathername = "fathernameB"
c.sex = "sexC"

let d = {
    "name": "nameD",
    "surname": "surnameD",
    "married": "true"
}

persons.push(d)

let pers = "<table border='1'>"
for (let i = 0; i < 4; i++) {
    pers += `<tr><td>Person ${i+1}</td><td>${persons[i].name}</td><td>${persons[i].surname}</td><td>${persons[i].age}</td><td>${persons[i].fathername}</td><td>${persons[i].sex}</td><td>${persons[i].married}</td></tr>`
}
pers += "</table>"

console.log(pers)
document.write(pers)

//HTML tr color НЕ ПОЛУЧИЛОСЬ
let str = "<table style = 'border: 1;'>"
for (let i = 0; i < persons.length; i++) {
    str += `<tr style="background-color: #${Math.random().toString().slice(2,8)}">`
    for (let key in persons[i]) {
        str += `<td>${persons[i][key]}</td>`
    }
    str += "</tr>"
}
str += "</table>"

console.log(str)
document.write(str)

//HTML th
let keys = []
for (let i = 0; i < persons.length; i++) {
    for (let key in persons[i]) {
        let isKey = false
        for (let q in keys) {
            if (key == keys[q]) {
                isKey = true
                break
            }
        }
        if (isKey == false)
            keys.push(key)
    }
}

let str = "<table style = 'border: 1;'><tr>"
for (let i in keys) {
    str += `<th>${keys[i]}</th>`
}
str += "</tr>"
for (let i = 0; i < persons.length; i++) {
    str += `<tr style="background-color: #${Math.random().toString().slice(2,8)}">`
    for (let g of keys) {
        let fullCell = false
        for (let key in persons[i]) {
            if (g == key) {
                str += `<td>${persons[i][key]}</td>`
                fullCell = true
                break
            }
        }
        if (fullCell == false)
            str += "<td></td>"
    }
    str += "</tr>"
}
str += "</table>"

console.log(str)
document.write(str)

//Задание на синий пояс НЕ ПОЛУЧИЛОСЬ


//destruct array

let [odd1, even1, odd2, even2, odd3, ...rest] = [1, 2, 3, 4, 5, "a", "b", "c"]

//destruct string

let [number, [s1, s2, s3]] = [1, "abc"]

//destruct 2

let {
    children: [name1, name2]
} = {
    "name": 'Ivan',
    "surname": 'Petrov',
    "children": [{
        "name": 'Maria'
    }, {
        "name": 'Nikolay'
    }]
}

//destruct 3

let {
    0: a,
    1: b,
    length
} = [1, 2, 3, 4, 5, 6, 7, 10]