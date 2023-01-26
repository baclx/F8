/* const a = 1 && NaN || 'Hi' && null && 100
const b = 1 || NaN && 'Hi' || null && 100

alert(a,b); */

// var postApi = 'https://jsonplaceholder.typicode.com/posts';

// fetch(postApi) //fetchAPI
//     .then(function(response) {
//         return response.json(); // tre ve promise and parse ben trong luon
//         //JSON.parse: JSON -> JavaScript types
//     })
//     .then(function (posts) { //nhan dc object luon
//         var htmls = posts.map(function (post) {
//             return `<li>
//                 <h2>${post.title}</h2>
//                 <p>${post.body}</p>
//             </li>`;
//         });

//         var html = htmls.join('');
//         document.getElementById('post').innerHTML = html
//     })

// var courseApi = ' http://localhost:3000/courses';

// fetch(courseApi)
//     .then(function(reponse){
//         return reponse.json();
//     })
//     .then(function(courses){
//         console.log(courses);
//     });

var count = 0;
var n = 5;

for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
        count++;
    }
}

if (count == 0) {
    console.log(n + " la so nguyen to");
} else {
    console.log(n + " kp la snt");
}

console.log(Math.sqrt(n));

