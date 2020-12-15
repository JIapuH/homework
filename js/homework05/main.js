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


// different fields

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


//fields check НЕ ПОЛУЧИЛОСЬ



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

for (i = 0; i < 3; i++)
    {
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

for (i = 0; i < 3; i++)
    {
        console.log(persons[i].name, persons[i].surname)
    }


//loop of loop of values НЕ ПОЛУЧИЛОСЬ



//fullName НЕ ПОЛУЧИЛОСЬ



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

let d = {"name":"nameD","surname":"surnameD","married":"true"}

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

let d = {"name":"nameD","surname":"surnameD","married":"true"}

persons.push(d)

let pers = "<table border='1'>"
for (let i=0 ; i < 3; i++)
    {
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

let d = {"name":"nameD","surname":"surnameD","married":"true"}

persons.push(d)

let pers = "<table border='1'>"
for (let i=0 ; i < 4; i++)
    {
    pers += `<tr><td>Person ${i+1}</td><td>${persons[i].name}</td><td>${persons[i].surname}</td><td>${persons[i].age}</td><td>${persons[i].fathername}</td><td>${persons[i].sex}</td><td>${persons[i].married}</td></tr>`
    }
    pers += "</table>"

console.log(pers)
document.write(pers)

//HTML tr color НЕ ПОЛУЧИЛОСЬ


//HTML th optional НЕ ПОЛУЧИЛОСЬ


//Задание на синий пояс НЕ ПОЛУЧИЛОСЬ


//destruct array

let [odd1, even1, odd2, even2, odd3, ...rest] = [1,2,3,4,5, "a", "b", "c"]

//destruct string

let [number, [s1, s2, s3]] = [1, "abc"]

//destruct 2

let {children: [name1, name2]} = {"name": 'Ivan', "surname": 'Petrov', "children": [{"name": 'Maria'}, {"name": 'Nikolay'}]}

//destruct 3 НЕ ПОЛУЧИЛОСЬ

let {0: a, 1: b, length} = [1,2,3,4,5,6,7,10]