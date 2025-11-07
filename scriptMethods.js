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

let arr1 = [1, 2, 3, '4', ['a', 'b']];
let arr2 = ['one', 'two']

// console.log(arr1.concat(arr2))
// console.log(arr1)
let bigArray = arr1.concat(arr2)
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

let newArray2 = []
let newArray = bigArray.forEach(itm => {newArray2.push(itm + 'k')})
// console.log(newArray2)

//indexOf/lastIndexOf та includes

// console.log(newArray2.indexOf('2k', 2))

// console.log(newArray2.includes('2k', 0))

newArray2.push('2k', 333)
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

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];

let user = users.find(itm => itm.id == 1);

console.log(user)
console.log(user.name)