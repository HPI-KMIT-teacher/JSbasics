// console.log("I'm here!");
// alert('hi'); 
// alert('world');

/*
alert(3 +
    1
    + 2);
*/

// ключові слова для оголошення змінних
/*
let - значення змінної можна перевизначати
const - константа - не перевизначається
var - застаріла практика
*/

let message;
message = 'Hi there';
message = 233;

// let age = 23;

const birthday = '24.09.2000';
// const myBirthday = '24.09.1984';
const MY_BIRTHDAY = '24.09.1984';
// birthday = 444; - викличе помилку


// let user = 'Іван';
// let age = 25;
// let message = 'Привіт';

// let user = 'Іван', age = 25, message = 'Привіт';

// let user, age, message;
// user = 'Іван';
// age = 25;
// message = 'Привіт';

// блоком коду у JS є будь який шматочок загорнутий у { }

// console.log('user:', user)
// console.log(age)
// console.log(message)

/*
let userName = 'Mark Tven';
let UserName = 'Jhom Dou' // імʼя змінної чутливе до регистру: userName та UserName - різні змінні
let test123;
let $ = 1; // оголошено змінну з ім’ям "$"
let _ = 2; // а тепер змінна з ім’ям "_"
*/

// let 123 - викликає помилку! Імʼя змінної не може починатися з цифри
// let my-name 
// let return - помилка - не можна використовувати зарезервовані ключові слова як імʼя змінної

// console.table({
//     userName: userName,
//     UserName: UserName
// })

// Правила іменування
let userName = "Іван"; // camelCase ✓
let user_name = "Петро"; // snake_case (можливо, але не рекомендується)
// let 1user = "Помилка"; // НЕ можна починати з цифри ✗
// let user-name = "Помилка"; // НЕ можна використовувати дефіс

let myValue = null;

// console.log(myValue)

// Number - числа
let temperature = 23;
let price = 99.99;
let negative = -15;
// console.log(temperature, price, negative);

// console.log('Тип змінної temperature: ', typeof temperature);

// String - текст
let firsName = "Олексій";
let lastName = 'Петренко';
let greeting = `Привіт, ${firsName}`;
// let fullName = firsName + " " + lastName
let fullName = `${firsName} ${lastName}`

/*
console.table({
    firsName: firsName,
    lastName: lastName,
    greeting: greeting,
    fullName: fullName,
    type: typeof lastName
    })
*/

// Boolean - логічне значення
// let isStudent = true;
let hasGraduated = false;
// console.log(isStudent, hasGraduated);
// console.log(typeof isStudent); // "boolean"

// undefined - неініціалізована змінна
let notDefined;
// console.log(notDefined); // undefined
// console.log(typeof notDefined); // "undefined"

// null - навмисна відсутність значення
let emptyValue = null;
// console.log(emptyValue); // null
// console.log(typeof emptyValue) // "object" (це баг JavaScript!)

// console.log(firsName[0])

// Object - об'єкт
const empyObj = {};
const student = {
    name: "Андрій",
    age: 21,
    major: "Матеріалознавство",
    isEnrolled: true,
    // test: {
    //     a: 1,
    //     b: null
    // }
  };
let keyWeNeed = 'major'
  student.age = 22
  /*
console.log(typeof student)
console.table(student)
console.log(student.name)
console.log(student[keyWeNeed])
*/

// Array - масив
const materials = ["сталь", "алюміній", "титан"];
const grades = [90, 85, 92, 88, 'test', true, student, materials];
const emptyOne = [];

/*
console.log(grades);
console.log(typeof grades);
console.log(grades[0]); // 90 (перший елемент, індекс 0)
console.log(materials.length)
console.log(materials[3])
*/

materials[15] = 'far far away';

// console.table(materials);
// console.log(materials.length)

let someValue = 14;

// console.log(someValue % 3)

/*
someValue++
someValue++
someValue = someValue + 1
someValue--
someValue = someValue - 1
console.log(someValue);

console.log(3 ** 2)

console.log(Math)

console.log(Math.pow(3, 2))
*/

// Арифметичні оператори
/*
let a = 10;
let b = 3;
*/

/*
console.log("Додавання:", a + b); // 13
console.log("Віднімання:", a - b); // 7
console.log("Множення:", a * b); // 30
console.log("Ділення:", a / b); // 3.333...
console.log("Остача:", a % b); // 1 (10 ділимо на 3, остача 1)
*/

// Порядок операцій
let result = 10 + 5 * 2; // спочатку *, потім +
//console.log("10 + 5 * 2 =", result); // 20

let resultWithBrackets = (10 + 5) * 2; // спочатку дужки
//console.log("(10 + 5) * 2 =", resultWithBrackets); // 30

/*
console.log('5' + 3);
console.log(5 - '3');
console.log('3' * '2');
console.log('test' * '2');
console.log(typeof ('test' * '2'));

console.log(5 + +'3');
console.log((+ '3'), (typeof + '3'))
console.log(+ 'test')
*/

// Оператори порівняння
//let age = 20;

/*
console.log(age > 18); // true
console.log(age < 25); // true
console.log(age >= 20); // true
console.log(age <= 19); // false
console.log(age == 20); // true
console.log(age === 20); // true
*/

// Різниця між == та ===
/*
console.log(5 == "5"); // true (перетворює "5" на число)
console.log(5 === "5"); // false (різні типи: number vs string)
console.log(null == undefined); // true
console.log(null === undefined); // false
*/
// Рекомендація: ЗАВЖДИ використовуйте ===

// Логічні оператори
let isStudent = true;
let hasLaptop = true;
let isOnline = false;

// AND (&&) - обидві умови мають бути true
// console.log(isStudent && hasLaptop); // true
// console.log(isStudent && isOnline); // false

// OR (||) - хоча б одна умова має бути true
// console.log(isStudent || isOnline); // true
// console.log(!isStudent || isOnline); // false

// NOT (!) - інвертує значення
// console.log(!isStudent); // false
// console.log(!isOnline); // true

// Складні умови
// let canAttendClass = isStudent && (hasLaptop || isOnline);
// console.log("Може відвідати заняття:", canAttendClass); // true

// Інструкція “if”

/*
if ( expression / variable ) {
  // some logic
} else if ( expression2 / variable2 ) {
  // block of code
} else {
  // code block
}
*/

// let year = prompt('В якому році була опублікована специфікація ECMAScript-2015?', '');
// if (year == 2015) alert('Ви маєте рацію!');
// console.log({
//   year: year,
//   typeOfYear: typeof year
// })
/*
if (year == 2015) {
  alert('Ви маєте рацію!');
  alert('Ви молодець!');
} else {
  alert( 'Як ви можете так помилятися?' );
}
*/
// наступні значення повертають false:
// Число 0, порожній рядок "", null, undefined та NaN

/*
if (year < 2015) {
  alert( 'Зарано...' );
} else if (year > 2015) {
  alert( 'Запізно' );
} else {
  alert( 'Саме так!' );
}
*/

// Умовний (тернарний) оператор ‘?’

/*
let accessAllowed;
let age = prompt('Скільки вам років?', '');

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
*/

// Синтаксис оператора "?"
// let result = умова ? значення1 : значення2;
// let age = prompt('Скільки вам років?', 18);
// let accessAllowed = age >= 18 ? true : false;
// let accessAllowed = age >= 18 ? 'Access granded' : 'Access denied'
// alert(accessAllowed);

/*
let message2 = age < 3 ? 'Привіт, малеча!' :
  age < 18 ? 'Вітаю!' :
  age < 100 ? 'Моє шанування!' :
  'Який незвичайний вік!';

  alert( message2 );


  let message;
  if (age < 3) {
    message = 'Привіт, крихітко!';
  } else if (age < 18) {
    message = 'Вітаю!';
  } else if (age < 100) {
    message = 'Моє шанування!';
  } else {
    message = 'Який незвичайний вік!';
  }
  */

//   let company = prompt('Яка компанія створила JavaScript?', '');

// (company == 'Netscape') ?
//    alert('Правильно!') : alert('Неправильно.');

/*
let value1 = "0";
let value2 = "null";
let value3 = 'Hello'
let value4 = 'World'
let variableResult1 = value1 || value2 || value3 || value4;
let variableResult2 = value1 && value2 && value3 && value4;
console.table({
  variableResult1: variableResult1,
  variableResult2: variableResult2
})
*/

/*
let firstName = "";
let lastName = "";
let nickName = "СуперКодер";

alert( firstName || lastName || nickName || "Анонім"); // СуперКодер
*/

/*
Пріоритет І && вище за АБО ||
Оператор І && має вищий пріоритет за АБО ||.

Отже, код 
a && b || c && d 
по суті є таким самим, як код з виразами && у дужках: 
(a && b) || (c && d).
*/

// alert( null || 0 || undefined );

// Цикли: while і for

/*
  while (умова) {
    // код
    // так зване "тіло циклу"
  }
*/

// let i = 0;
// while (i < 3) { // показується 0, далі 1, потім 2
//   alert( i );
//   i++;
// }

// let i = 3;
// while (i) { // коли i буде 0, умова стане невірною, і цикл зупиниться
//   alert( i );
//   i--;
// }

// let i = 3;
// while (i) alert(i--);

// Цикл “do…while”

// do {
//   // тіло циклу
// } while (умова);

// do {
//   alert('тіло циклу')
// } while (0);

// let i = 0;
// do {
//   console.log( i );
//   i++;
// } while (i < 3);

// Цикл “for”

// for (початок; умова; крок) {
//   // ... тіло циклу ...
// }

/*
let i = 0;

for (i = 0; i < 3; i++) { // показується 0, далі 1, потім 2
  console.log(i);
}

console.log(i);
*/

// for (let i = 0; i < 3; i++) alert(i)

/*
// Початок виконання
let i = 0
// Якщо умова == true → виконати тіло і виконати крок
if (i < 3) { console.log(i); i++ }
// Якщо умова == true → виконати тіло і виконати крок
if (i < 3) { console.log(i); i++ }
// Якщо умова == true → виконати тіло і виконати крок
if (i < 3) { console.log(i); i++ }
// ...кінець, тому що зараз i == 3
*/

// Переривання циклу: “break”

// let sum = 0;

// while (true) {

//   let value = +prompt("Введіть число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'Сума: ' + sum );

// Продовження з наступної ітерації
/*
for (let i = 0; i < 10; i++) {

  // якщо умова справджується, тоді пропускаємо решту тіла циклу і починаємо з наступної ітерації
  if (i % 2 !== 0) continue;

  console.log(i); // 1, потім 3, 5, 7, 9
}
*/

// Конструкція "switch"

/* Синтаксис:
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
*/

/*
let abc = 3;

switch (abc) {
  case 3:
  case 2:
  case 1:
    console.log('Замало');
    break;
  case 4:
    console.log('То шо треба');
    break;
  case 5:
    console.log('Забагато');
    break;
  default:
    console.log('Невідоме значення');
}
*/

// DRY - Do not Repeat Yourself

/*
let a = "1";
let b = 0;

switch (+a) {
  case b + 1:
    alert("виконано це, бо +a це 1, що строго дорівнює b + 1");
    break;

  default:
    alert("це не буде виконано");
}
*/

/*
// Функції
// f1 - Оголошення (декларація) функцій
let msg;
function showMessage(a) {
  let msg = 'TEST message'
  alert(msg);
  msg = a;
}

// showMessage('Hello World!!!');
showMessage('Hi again');
console.log(msg)
*/

// function showMessage(from, text = 'missing text') { // параметри: from, text
//   alert(from + ': ' + text);
// }

// showMessage('Анна', 'Привіт!'); // Анна: Привіт! (*)
// showMessage('Анна', "Як справи?"); // Анна: Як справи? (**)
// showMessage('Анна', 'Hi')

/*
function showMessage(from, text) { // параметри: from, text
  if (!text) {
    alert('Te value for "text" is miising');
    return;
  }
  alert(from + ': ' + text);
}

showMessage('Hennadii', "Hi there!")
*/

/*
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm('У вас є дозвіл ваших батьків?');
  }
}

let age = prompt('Скільки вам років?', 18);

if ( checkAge(age) ) {
  alert( 'Доступ надано' );
} else {
  alert( 'У доступі відмовлено' );
}
*/

// Повернення значення - return;

// function sum(a, b) {
//   return a + b;
// }

// let resultSum = sum(1, 2);
// console.log(resultSum)
// console.log(sum(2, 3))

/*
function sum(a, b) {
  return ( 
  '111' + 
  '222' + 
  '333' + 
  a + b);
}

console.log(sum(2, 3))
*/

/*
Наприклад, функції, які починаються з префіксу "show" зазвичай щось показують.
Функції, які починаються з:
"get…" – повертають значення,
"calc…" – щось обчислюють,
"create…" – щось створюють,
"check…" – щось перевіряють і повертають булеве значення.
*/

// Функціональні вирази

// function sayHi() {
//   alert( "Привіт" );
// }

// let sayHiAsVar = function() {
//   alert( "Привіт" );
// }

// function sum(a, b) {
//   return a + b;
// }

// let calcSum = function(a, b) {
//   return a + b;
// }

// let calcSum = sum;

// console.log(calcSum);
// console.log(calcSum(3, 5));


// Колбеки (функції зворотного виклику)
/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "Ви погодились." );
}

function showCancel() {
  alert( "Ви скасували виконання." );
}

ask('Ви згодні?', showOk, showCancel);
*/

/*
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Ви згодні?",
  function() { alert("Ви погодились."); },
  function() { alert("Ви скасували виконання."); }
);
*/

// Функція — це значення, що відображає “дію”



// let sum = function(a, b) {
//   return a + b;
// }

// console.log(sum(1,2))

// Стрілкові функції, основи

// let func = function(arg1, arg2, ..., argN) { return expression; };

// let func = (arg1, arg2, ..., argN) => expression;

// let sum = (a, b) => a + b;

// console.log(sum)

// let double = b => b * 2;

// console.log(double(6))

// let alertMsg = () => alert('attention!')

// alertMsg();
/*
let sum = (a, b) => {
  let a1 = a;
  let b1 = b;
  // console.log(a1, b1)
  let result = a1 + b1;
  if (!result) return;
  return result;
}

console.log(sum(5, -5))
*/