// makeProfileTimer

let time = performance.now()

function makeProfileTimer() {
  alert('Замеряем время работы этого alert')
  time = performance.now() - time;
  alert(`Время выполнения = ${time}ms`)
}

makeProfileTimer()

// makeSaver

function makeSaver(f) {
  let a, b = !1;

  return function () {
    return b ? a : (b = !0, a = f());
  };
};

let saver = makeSaver(Math.random);
value1 = saver();
value2 = saver();

alert(value1 === value2);

let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random() * 6)])
let value3 = saver2()
let value4 = saver2()

alert(value3 === value4);


// Final Countdown

let text = [5, 4, 3, 2, 1, "поехали"]

for (let i = 0; i < text.length; i++) {
  setTimeout(function () {
    console.log(text[i])
  }, 1000 * i);
}

// myBind (НЕ ДОКРУТИЛ)

function myBind(func, obj, prms) {
  let fn = func.bind(obj)
  return function (...params) {
    let c = ((counter = 0) => () => counter++)()
    return fn(...prms.map(item => item || params[c()]))
  }
}

let pow5 = myBind(Math.pow, Math, [undefined, 5])
var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5, undefined, 8, undefined, 9])

console.log(pow5(2))
console.log(myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a', 'c', 'd') === 'abcdef')
console.log(chessMin(-1, -5, 3, 15))

var zeroPrompt = myBind(prompt, window, [undefined, "0"])
var someNumber = zeroPrompt("Введите число")