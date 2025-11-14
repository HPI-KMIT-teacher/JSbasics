// Методи примітивів
// існує 7 типів примітивів: string, number, bigint, boolean, symbol, null та undefined.

/*
let john = {
    name: "John",
    sayHi: function() {
        alert(`Hi, ${this.name}`)
    }
}

john.sayHi()
*/

/*
let name = '   Hennadii    ';
console.log(name.length)
let nameValue = name.trim();
console.log(nameValue.length);
*/

// let n = 1.23456;

// console.log(n.toFixed(2))


//Методи масивів

// let arr1 = [1, 2, 3, '4', ['a', 'b']];
// let arr2 = ['one', 'two']

// console.log(arr1.concat(arr2))
// console.log(arr1)
// let bigArray = arr1.concat(arr2)
// console.log('original array', bigArray)
// console.log('it`s length', bigArray.length)

// for (let i =0; i < bigArray.length; i++) {
//     console.log(bigArray[i])
// }

/*
arr.forEach(function(item, index, array) {
  // ... робимо щось з item
});
*/

// bigArray.forEach(function(item){
//     console.log(item)
// })

// bigArray.forEach((itm, indx) => {console.log(`Елемент ${itm} знаходиться на позиції ${indx + 1}`)})

// let newArray = bigArray.map(itm => itm + 'k')
// console.log(newArray)

// let newArray2 = []
// let newArray = bigArray.forEach(itm => {newArray2.push(itm + 'k')})
// console.log(newArray2)

//indexOf/lastIndexOf та includes

// console.log(newArray2.indexOf('2k', 2))

// console.log(newArray2.includes('2k', 0))

// newArray2.push('2k', 333)
// console.log(newArray2)

// console.log(arr1)
// console.log(arr1.lastIndexOf(['a', 'b']))
// console.log(['a', 'b'].toString() === ['a', 'b'].toString())

//find і findIndex/findLastIndex

/*
let result = arr.find(function(item, index, array) {
  // якщо true - повертається поточний елемент і перебір закінчується
  // якщо всі ітерації виявилися помилковими, повертається undefined
});
*/
/*
let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

let user = users.find(itm => itm.id == 1);

console.log(user)
console.log(user.name)
*/

// splice
// arr.splice(start[, deleteCount, elem1, ..., elemN])

// let arr = ["I", "study", "JavaScript", "right", "now"];

// arr.splice(1, 1);

// console.log(arr);

// let removerItms = arr.splice(0, 3, "Let's", "dance");

// console.log(arr);
// console.log(removerItms);

// slice
// arr.slice([start], [end])
// let arr = ["t", "e", "s", "t"];

// console.log(arr.slice(1,3)) // e,s (копіює з 1 до 3)
// console.log(arr.slice(1))
// console.log(arr.slice(-2))// s,t (копіює з -2 до кінця)


//filter
/*
let results = arr.filter(function(item, index, array) {
  // якщо true - елемент додається до результату, і перебір триває
  // повертається порожній масив в разі, якщо нічого не знайдено
});
*/

/*
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let someUser = users.filter(i => i.id < 3);
console.table(someUser)
*/

// sort(fn)
// let arr = [ 1, 2, 15 ];
// метод сортує вміст arr
// arr.sort();

// console.log(arr)

/*
function compare(a, b) {
  if (a > b) return 1; // якщо перше значення більше за друге
  if (a == b) return 0; // якщо значення рівні
  if (a < b) return -1; // якщо перше значення меньше за друге
}

arr.sort(compare);
console.log(arr)
*/

//reverse
// let arr = [1, 2, 3, 4, 5];
// let reversedArr = arr.reverse();
// console.log(arr)
// console.log(reversedArr)

// split та join

// let names = 'Вася, Петя, Маша';

// let arr = names.split(', ');

// console.log(arr)

// arr.forEach(i => console.log(`Say Hello to ${i}`))

// let arr = ["I", "study", "JavaScript", "right", "now"];

// let str = arr.join(' ^ ');
// console.log(str)

//for ... of
/*
for (variable of iterable) {
  statement
}
*/
// for (i of arr) {
//   console.log(i)
// }

// reduce
/*
  let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
  }, [initial]);

  Аргументи:
accumulator – результат попереднього виклику цієї функції, дорівнює initial при першому виклику (якщо переданий initial),
item – черговий елемент масиву,
index – його індекс,
array – сам масив.
*/

// let arr = [1, 2, 3, 4, 5];

// let resultSum = arr.reduce((sum, currentItm) => sum + currentItm, 0);
// console.log(resultSum) // 15

/*
let arr = [];
let resultSum = arr.reduce((sum, currentItm) => sum + currentItm);
console.log(resultSum) // TypeError: Reduce of empty array with no initial value
*/

// console.log(typeof [], '\n', typeof {})

// Array.isArray
// console.log(Array.isArray({})) // false
// console.log(Array.isArray([])) // true

const result1 = [ {a:1}, {b:2}, {c:3} ]
const result2 = {d:4}

function checkMyItem(a) {
  if (Array.isArray(a)) {
    a.forEach(i => console.table(i))
  } else {
    console.error('Your input item is not ARRAY!')
  }
}

// checkMyItem(result1)




