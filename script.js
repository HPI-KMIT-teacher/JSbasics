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
let a = 10;
let b = 3;

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
let age = 20;

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
console.log(isStudent && hasLaptop); // true
console.log(isStudent && isOnline); // false

// OR (||) - хоча б одна умова має бути true
console.log(isStudent || isOnline); // true
console.log(!isStudent || isOnline); // false

// NOT (!) - інвертує значення
console.log(!isStudent); // false
console.log(!isOnline); // true

// Складні умови
let canAttendClass = isStudent && (hasLaptop || isOnline);
console.log("Може відвідати заняття:", canAttendClass); // true
