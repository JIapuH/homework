// makeProfileTimer

let time = performance.now()

function makeProfileTimer(){
  alert('Замеряем время работы этого alert')
  time = performance.now() - time;
  alert(`Время выполнения = ${time}ms`)
}

makeProfileTimer()

// makeSaver

function makeSaver(f) {
  let a, b = !1;

  return function() {
      return b ? a : (b = !0, a = f());
  };
};

let saver = makeSaver(Math.random);
value1 = saver();
value2 = saver();

alert(value1 === value2);

let saver2 = makeSaver(() => console.log('saved function called') || [null, undefined, false, '', 0, Math.random()][Math.ceil(Math.random()*6)])
    let value3 = saver2()
    let value4 = saver2()

alert(value3 === value4);


// Final Countdown

let text = [5, 4, 3, 2, 1, "поехали"]

for (let i = 0; i < text.length; i++) {
  setTimeout(function() {
    console.log(text[i])
  }, 1000 * i);
}

// myBind (НЕ ДОКРУТИЛ)

function myBind(f, context, bindArguments) {
  function inner() {
    let args = Object.assign(bindArguments, arguments)
    return f.apply(context, args)
  }
  return inner;
}
var pow5 = myBind(Math.pow, Math, [undefined, 5]) // первый параметр - функция для биндинга значений по умолчанию, 
                                                  // второй - this для этой функции, третий - массив, в котором undefined означает
                                                  // параметры, которые должны передаваться при вызове,
                                                  // а другие значения являются значениями по умолчанию:
var cube = myBind(Math.pow, Math, [undefined, 3]) // cube возводит число в куб

pow5(2) // => 32, вызывает Math.pow(2,5), соотнесите с [undefined, 5]
cube(3) // => 27


var chessMin = myBind(Math.min, Math, [undefined, 4, undefined, 5,undefined, 8,undefined, 9])
chessMin(-1,-5,3,15) // вызывает Math.min(-1, 4, -5, 5, 3, 8, 15, 9), результат -5



var zeroPrompt = myBind(prompt, window, [undefined, "0"]) // аналогично, только теперь задается "0" как текст по умолчанию в prompt,
                                                          // а текст приглашения пользователя задается при вызове zeroPrompt
var someNumber = zeroPrompt("Введите число")              // вызывает prompt("Введите число","0")

myBind((...params) => params.join(''), null, [undefined, 'b', undefined, undefined, 'e', 'f'])('a','c','d') === 'abcdef'