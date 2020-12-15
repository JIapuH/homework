// html tree

let body = {
    tagName: 'body',
    paired: true,
    attrs: {},
    subTags: [
        {
            tagName: 'div',
            paired: true,
            attrs: {},
            subTags: [
                {
                    tagName: 'span',
                    paired: true,
                    attrs: {},
                    text: 'Enter a data please:',
                },
                {
                    tagName: 'br',
                    paired: false,
                    attrs: {},
                },
                {
                    tagName: 'input',
                    paired: false,
                    type: 'text',
                    id: 'name',
                },
                {
                    tagName: 'input',
                    paired: false,
                    type: 'text',
                    id: 'surname',
                },
            ]
        },
        {
            tagName: 'div',
            attrs: {},
            subTags: [
                {
                    tagName: 'button',
                    paired: true,
                    id: 'ok',
                    text: 'OK',
                },
                {
                    tagName: 'button',
                    paired: true,
                    id: 'cancel',
                    text: 'Cancel',
                },
            ]
        }
    ]
}

body.subTags["1"].subTags["1"].text
body.subTags[0].subTags[3].id


// declarative fields

let notebook = {
    brand: "HP",
    type:  "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
};

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",

};

let person = {
    name: prompt("Введите ваше имя"),
    surname: prompt("Введите вашу фамилию"),
    married: confirm("Вы замужем/женаты?"),
}


//object links

let person = {
    name: prompt("Введите ваше имя"),
    surname: prompt("Введите вашу фамилию"),
    married: confirm("Вы замужем/женаты?"),
    smartphone: `${phone.brand} ${phone.model}`,
    laptop: `${notebook.brand} ${notebook.type}`,
}

let notebook = {
    brand: "HP",
    type:  "440 G4",
    model: "Y7Z75EA",
    ram: 4,
    size: "14",
    weight: 1.8,
    resolution: {
        width: 1920,
        height: 1080,
    },
    owner: `${person.name} ${person.surname}`,
};

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black",
    owner: `${person.name} ${person.surname}`,
};


//imperative array fill 3

let arr = []
arr[0] = prompt("Введите первый элемент массива")
arr[1] = prompt("Введите второй элемент массива")
arr[2] = prompt("Введите третий элемент массива")


//while confirm

while (confirm("Да или нет?") == false) {
}


//array fill

let arr = []

do {
    arr.push(prompt("Массив"))
}
while (arr[arr.length -1] != null)


//array fill nopush

let arr = []
let i = 0

do {
    arr[i++] = prompt ("Массив")
}
while (arr[arr.length-1] != null)


//infinite probability

let i = 0;
    while (true)
    {
    i++;
        if(Math.random() > 0.9)
        {
        alert(i);
        break;
        }
    }


//empty loop

while (prompt("Ок или отмена?") != false) {
}

//progression sum

let sum = 0;
for (let i = 1; i <= n; i+=3)
    {
    sum += i;
    }
console.log(sum)


//chess one line

let numbers = "";
let a = 0
for(i = 0; i < 8; i++)
    {
    numbers += (a % 2) == (i % 2) ? " " : "#";
    }

console.log(numbers);


//numbers

let str = "";

for (let i = 0; i <= 9; i++)
    {
    for(let a = 0; a < 10; a++)
        {
        str = str + a;
        }
    str += "\n";
    }

console.log(str);


//chess ЧАСТИЧНО НАГУГЛИЛ РЕШЕНИЕ

let chessboard = "";
    for(let i = 0; i < 12; i++)
    {
        for(let a = 0; a < 10; a++)
        {
        chessboard += (a % 2) == (i % 2) ? "." : "#";
        }
        chessboard += "\n";
    }

console.log(chessboard);


//cubes

let arr = []
let step

for (let i=0 ; i< 10; step = i*i*i)
    {
	arr[i++] = step
    }

//multiply table

let arr = []

for (i = 1; i <= 9; i++)
    {
    arr[i] = []
    for (j = 1; j <= 9; j++)
        {
        arr[i][j] = i*j
        }
}

//matrix to html table  НЕ РАЗОБРАЛСЯ