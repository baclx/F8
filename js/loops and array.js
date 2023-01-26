//for/in
/* var myInfo = {
    name: 'buck',
    age: 18,
    address: 'ha noi, vn'
};

for (var key in myInfo){
    //code
    console.log(key); // show out key name
    console.log(myInfo[key]); // get value of key

} */

/* var languages = [
    'java',
    'c++',
    'ruby'
];

 for (var key in languages){
    //console.log(key); // get ra index
    console.log(languages[key]); // get ra value
} */

/* var myString = 'javascript';

for (var key in myString){
    //console.log(key); // string <=> array get ra index of string
    console.log(myString[key]); // get ra value of string
} */


 // for/of //
/* var languages = [
    'java',
    'c++',
    'ruby'
]; */

/* var languages = 'JavaScript';

for (var key of languages){
    console.log(key);
} */

/* var myInfo = {
    name: 'buck',
    age: 18
};

console.log(Object.keys(myInfo)) // <=> array get ra cac key
console.log(Object.values(myInfo)) // get ra value of key

for (var key of Object.values(myInfo)){ // get ra value của key = for/of
    console.log(key);
} */

// array in js
// var languages = [
//     'java',
//     'c#',
//     null,
//     undefined,
//     function (){

//     },
//     {}
// ];

// var ob = {

// };

// console.log(typeof languages);
// console.log(typeof ob);
// // check array
// console.log(Array.isArray(languages));
// console.log(Array.isArray(ob));

// console.log(languages.length);
// console.log(languages[1]);

// var courses = [
//     {
//         id: 1,
//         name: "Java",
//         coin: 100
//     },
//     {
//         id: 2,
//         name: "Js",
//         coin: 0
//     },
//     {
//         id: 3,
//         name: "PHP",
//         coin: 500
//     },
//     {
//         id: 4,
//         name: "Dart",
//         coin: 321
//     },
// ]

// forEach(function(thamso1, thamso2) { call back: ham truyen vao duoi dang tham so
//     thamso1: từng phần tử trong mảng
//     thamso2: chỉ mục của mảng
// })
// forEach(): duyệt qua từng phần tử của mảng
// courses.forEach(function(course, index) {
//     console.log(index, course)
// })

// every(): trả về boolean - đúng hết ms -> true
// var isFree = courses.every(function(course, index) {
//     return course.coin === 0;
// })

// console.log(isFree)

// some(): trả về boolean - chỉ cần 1 ông đúng -> true
// var isFree = courses.some(function(course, index) {
//     return course.coin === 0;
// })

// console.log(isFree)

// find()
// var courseName = courses.find(function(course, index) {
//     return course.name === "Dart";
// })

// console.log(courseName)

// filter()
// var Listcourse = courses.filter(function(course, index) {
//     return course.name === "Dart";
// })

// console.log(Listcourse)

// map()
// var newCourses = courses.map(function(course, index, originArray) {
//     return {
//         id: course.id,
//         name: `khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`
//     }
// })

// console.log(newCourses)

// reduce()
// var totalCoin = courses.reduce(function(accumulator, currentValue, currentIndex, originArray) {
//     return accumulator + currentValue.coin;
// }, 0)

// console.log(totalCoin)

// ES6 arrow function

// var totalCoin = courses.reduce((a, v) => a + v.coin, 0);

// console.log(totalCoin)

// Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
// var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];

// var newArray = depthArray.reduce(function(a, v) {
//     return a.concat(v)
// }, [])

// console.log(depthArray)
// console.log(newArray)

// lấy ra các khóa học đưa vào 1 mảng ms
// var topics = [
//     {
//         topic: "Front-end",
//         courses: [
//             {
//                 id: 1,
//                 title: "HTML, CSS"
//             },
//             {
//                 id: 2,
//                 title: "JS"
//             }
//         ]
//     },
//     {
//         topic: "Back-end",
//         courses: [
//             {
//                 id: 3,
//                 title: "PHP"
//             },
//             {
//                 id: 4,
//                 title: "Node JS"
//             }
//         ]
//     }
// ]

// var newCourses = topics.reduce(function(a, v) {
//     return a.concat(v.courses)
// }, [])

// // console.log(topics)
// // console.log(newCourses)

// var htmls = newCourses.map(function(course) {
//     return `
//         <div>
//             <h2>${course.title}</h2>
//             <p>ID: ${course.id}</p>
//         </div>
//     `;
// });

// console.log(htmls.join(''));

// reduce 2 b62
// Array.prototype.reduce2 = function(callback, result) {
//     let i = 0
//     if (arguments.length < 2) {
//         i = 1
//         result = this[0]
//     }
//     for (; i < this.length; i++) {
//         result = callback(result, this[i], i, this)
//     }
//     return result
// }

// const numbers = [1, 2, 3, 4, 5]

// // reduce(callback, initialValue)
// const result = numbers.reduce2(function(a, v, index, array) {
//     console.log(a, v, index, array)
//     return a + v;
// }) // (, initialValue) - option

// console.log(result)

// for of / for in
var courses = [
    {
        id: 1,
        name: "Java",
        coin: 100
    },
    {
        id: 2,
        name: "Js",
        coin: 0
    },
    {
        id: 3,
        name: "PHP",
        coin: 500
    },
    {
        id: 4,
        name: "Dart",
        coin: 321
    },
]

// for (var element of courses) {
//     console.log(element)
// }

// for (var index in courses) {
//     console.log(index)
// }

// courses.forEach(function(item) {
//     console.log(item)
// })

//======================================

// Array.prototype.forEach2 = function(callback) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             callback(this[index], index, this)
//         }
//     }
// }

// var courses = [
//     'js',
//     'php',
//     'dart'
// ]

// courses.forEach2(function(course, index, array) {
//     console.log(course, index, array)
// })

var array1 = [7, 5, 6, 7, 5, 6]

console.log(array1.indexOf(7));
