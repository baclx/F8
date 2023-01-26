// 1. let , const -> ok
// 2. Template Literals -> ok
// 3. Multi-line String -> ok
// 4. Arrow funtion -> ok
// 5. classes -> ok
// 10. Enhanced object literals -> ok
// 6. Default parameters
// 7. Destructuring -> ok
// 8. Rest parameters -> ok
// 9. Spread -> ok
// 11. Tagged template literal
// 12. Modules

// 1. var / let, const: Scope, Hosting
// code block: if else, loop, {}
{ // <=> vs if (true) { var, let, const course = 'js' }
    // var course = "Js" //-> console.log(ok)
    //let course = "php" // console.log(vs let) -> defined <=> vs const cx is not defined
    // => pham vi truy cap (scope) const let k truy cap dc ngoai block - con trong block thi ok
}
// console.log(course)

// Hosting (dua len dau) - es6 f8
// var a; } => tuong duong nhu khai bao var a = 1
// a = 1; } => var dc len ho tro hosting len trinh thong dich se dc hieu ntn
// var a = 1
// vd:
// a = 1;
// var a;
// console.log(a)

// let & const k dc ho tro hosting

// 2. const / var, let: Assignment (gan lai gia tri)
// var && let co the gan lai gia tri - const thi ko
// const a = {
//     name: 'js'
// }

// // gan lai gia tri cua thuoc tinh chu kp la a 
// a.name = 'php'

// console.log(a.name)

// 3. Tong ket
// code thuan: var
// babel: let & const
// khi can khai bao bien ma k gan lai thi dung: const
// khi can khai bao bien ma co gan lai thi dung: let; VD: let isResult = false -> if(...) {isResult = true}

// ----------------

// 2 Template Literals & 3 Multi-line String.
// const courseName = 'js';
// // const decription = 'Course name: ' + courseName // noi string bth
// const decription = `Course name: ${courseName}` // es6 template string

// console.log(decription)

// ----------------

// 4. Arrow function
// const sum = (a, b) => ({a: a, b: b });
// // return obj = ({obj})
// // this - context -> trong arrow function k co context - undefined
// // arrow function khong dung dc constructor
// console.log(sum(2, 3))

// ----------------

// 5. Classes
// class Course {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const phpCourse = new Course('PHP', 1000)
// const jsCourse = new Course('JS', 2000)

// console.log(phpCourse)
// console.log(jsCourse)

// ----------------

// 6. Enhanced object literals

//1. Dinh ngia key: value cho object
// var name = 'js';  // // name <=> key
// var price = 1000;

// // 3. bien
// var fieldName = 'name';
// var fieldPrice = 'price';

// var course = {
//     // thay vi phai khai bao
//     // name: name,
//     // price: price - thi ta co the khai bao nhu sau vs Enhanced object literals
//     // name,
//     // price,

//     //2. dinh nghia method cho object
//     // thay vi phai khai bao
//     // getName: function() { return name } thi ta co the khai bao nhu sau
//     // getName() {
//     //     return name;
//     // },

//     //3. dinh nghia key cho object duoi dang bien
//     // lay value tu bien va dat cho key trong object
//     [fieldName]: 'Js',
//     [fieldPrice]: 1000
// }

// console.log(course)

// ----------------

// 7 Destructuring & 8 rest
// ----------------------
// rest & Destructuring vs array
// var array = ['js', 'php', 'ruby']

// //Destructuring vs array - phan ra & rest -  phan con lai
// const [a, ...rest] = array

// console.log(a)    // js
// console.log(rest) // [ 'phan con lai' ]

// ------------------
// rest & Destructuring vs object
// var course = {
//     name: 'Javascript',
//     price: 1000,
//     image: 'url',
// }

// var { name, ...rest } = course; // muon lay ra key nao thi them vao day

// console.log(name)
// console.log(rest) // phan con lai {''}

// ------------------
// rest vs function
// function logger(a, b, ...rest) { // rest - la 1 array
//     console.log(rest);
// }
// logger(1,2,3,4)

// rest & destructuring vs obj - function - [tuong tu nhu vs array - function]
// function logger({name, price, ...rest}) {
//     console.log(name);
//     console.log(price);
//     console.log(rest);
// }

// logger({
//     name: 'js',
//     price: 1000,
//     description: 'description'
// })

// ------------------
// 9. Spread - giai?
// var array1 = ['js', 'ruby', 'php']
// var array2 = ['dart', 'reactjs']
// // spread - noi mang
// var array3 = [...array1, ...array2]
// console.log(array3)

// var object1 = {
//     name: 'js'
// }
// var object2 = {
//     price: 1000
// }
// // spread - noi obj
// var object3 = {
//     ...object1,
//     ...object2
// }
// console.log(object3)

// var array = ['js', 'php', 'ruby']
// function logger(...rest) { // rest
//     rest.forEach(item => {
//         console.log(item)
//     })
// }
// logger(...array) // spread - doi so

//------------------------------
// 11. Tagged template literal
// function highlight([fisrt, ...string], ...values) {
//     return values.reduce(
//         (acc, curr) => [...acc, `<span>${curr}</span>`, string.shift()], [fisrt]
//     ).join('');
        
// }

// var brand = 'F8';
// var course = 'js'

// const html = highlight`Hoc lap trinh ${course} tai ${brand} !`;

// console.log(html)

// --------------------
// 12. Modules: import / exports
// import logger from './logger.js'; // export default
// import {TYPE_LOG, TYPE_WARN, TYPE_ERROR} from './constants.js'; // export

// logger('Message...', TYPE_WARN)

// 13. Obtional chaining(?.)