// Таблица умножения

let table = document.createElement("table");

document.body.append(table);

for (let i = 0; i < 10; i++) {
  let tr = document.createElement("tr");

  table.appendChild(tr);

  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");

    tr.appendChild(td);
    td.innerText = i * j;
  }
}

// Подсветить ячейку

let table = document.createElement("table");

document.body.append(table);

for (let i = 0; i < 10; i++) {
  let tr = document.createElement("tr");

  table.appendChild(tr);

  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");

    tr.appendChild(td);
    td.innerText = i * j;

    td.onmouseover = function() {
    td.style.backgroundColor = 'yellow'
    }

    td.onmouseout = function() {
    td.style.backgroundColor = ''
  }
  }
}

let table = document.createElement("table");

document.body.append(table);

for (let i = 0; i < 10; i++) {
  let tr = document.createElement("tr");

  table.appendChild(tr);

  for (let j = 0; j < 10; j++) {
    let td = document.createElement("td");

    tr.appendChild(td);
    td.innerText = i * j;

    let index = td.cellIndex

    td.onmouseover = function() {
    let row = document.querySelectorAll('tr');

    row.forEach((tr) => tr.children[index].style.background = 'green');

    tr.style.backgroundColor = 'green'
    td.style.backgroundColor = 'yellow'
}

    td.onmouseout = function() {
    let row = document.querySelectorAll('tr');

    row.forEach((tr) => tr.children[index].style.background = '');

    tr.style.backgroundColor = ''
    td.style.backgroundColor = ''
  }
  }
}