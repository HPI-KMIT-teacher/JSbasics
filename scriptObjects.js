// JS Objects

let user = {     // об’єкт
    name: "Іван",  // за ключем "name" зберігаємо значення "Іван"
    age: 30,        // за ключем "age" зберігати значення "30"
    "like bird": true, // Ім’я властивості з декількох слів повинно бути в лапках
    role: undefined
  };

//   console.log(user.name)

user.isAdmin = true;

// delete user.age

user["любить птахів"] = true;

delete user["любить птахів"]

// console.table(user)

// console.log('Does he like birds?', user['like bird'])

let identifierWeNeed = 'like bird';

// console.log(user[identifierWeNeed])

/*
let key = prompt("Що ви хочете знати про користувача?", "name");

// доступ до властивості через змінну
alert( user[key] ); // Іван (якщо ввести "name")
*/

// Обчислювані властивості
// let fruit = prompt("Які фрукти купити?", "apple");

// let bag = {
//     [fruit]: 6, // назву властивості взято зі змінної fruit
// }

// let bag = {};
// bag[fruit] = 6;

// console.table(bag)

/*
let fruit = 'apple';
let bag = {
  [fruit + ' and Computers']: 5 // bag.appleComputers = 5
};

console.table(bag);
*/

// function makeUser(name, age) {
//     return {
//         name: name,
//         age: age
//     }
// }

/*
function makeUser(name, age) {
    return {
        name,
        age: 30
    }
}

let user2 = makeUser('John', 22)

console.table(user2);

// Обмеження для імен властивостей

let obj = {
    for: 1,
    let: 2,
    return: 3,
    0: 'test'
  };

  console.table(obj)
  console.log('sum', obj.for + obj.let + obj.return)

//   console.log(obj['0'])
*/

//Перевірка існування властивості, оператор “in”

// console.log('role' in user);

let obj2 = {
    itm: 123,
    subObj: {
        level1: true,
        level1prim: {
            level2: null
        }
    }
}

// console.log(obj2.subObj2.level1prim.level2) // typeError Cannot read properties of undefined (reading 'level1prim')

// console.log(obj2.subObj2?.level1prim.level2) // поверне undefined

// let keyToFind = 'role'
// console.log(keyToFind in user);


// Цикл "for..in"

// for (key in user) {
//     console.log('identifier: ', key)
//     // console.log('value: ', user[key])
// }

// Впорядкування властивостей об’єкта

let codes ={
    "+49": "Німеччина",
    "+41": "Швейцарія",
    "+44": "Великобританія",
    // ..,
    "+1": "США"
 };

//  for (i in codes) {
//     console.log(+i)
//  }

// Копіювання об’єктів та посилання

let msg = 'Hi there!';
let phrase = msg;

msg = 'Привіт!'

console.log('msg:    ', msg)
console.log('phrase: ', phrase)

console.log('\n\n\n')

let user3 = {
    name: "Іван"
  };

const admin = user3;

admin.name = 'Петро'

console.log('user3:', user3)
console.log('admin:', admin)


console.log(user3 === admin)


let user4 = {
    name: "Іван"
  };


console.log(user3 == user4)

admin.subobject = user4;

console.log('user3:', user3)
console.log('admin:', admin)