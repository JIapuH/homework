// sort НЕ ГОТОВО


// array map

let Array = ["1", {}, null, undefined, "500", 700];

let result  = Array.map(function(item, index, arr) {
    let number = parseInt(item);
    return isNaN(number)? item : number;
});

console.log(result);


// array map

let Array = ["0", 5, 3, "string", null];

result = Array.reduce(function(previousValue, currentValue){
return typeof currentValue == 'number' ? previousValue * currentValue : previousValue;
}, 1);
console.log(result);


// object filter

let phone = {
    brand: "meizu",
    model: "m2",
    ram: 2,
    color: "black"
};

function filter(object, search, val){
  for(let key in object){
    if(search != key && object[key] != val) delete object[key];
  }
}
filter(phone, "color", 2);
console.log(phone);


// object map

let result = Object.entries({ name: 'Ivan', age: 24 }).reduce((object, [key, value]) => {
		object[key + "_"] = value + "$";
		return object;
	}, {});

console.log(result);

// Sum

function sum(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
  }

console.log(sum(1000));