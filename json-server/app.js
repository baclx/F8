// var courseApi = 'http://localhost:3000/courses';
// var userApi = 'http://localhost:3000/users';

// fetch(courseApi)
//         .then(function(reponse){
//             return reponse.json();
//         })
//         .then(function(courses){
//             console.log(courses);
//         });

// fetch(userApi)
//         .then(function(response){
//             return response.json();
//         })
//         .then(function(users){
//             console.log(users);
//         })

var courseApi = 'http://localhost:3000/courses';

function start() {
    getCourses(renderCourses);

    handleCreateForm();
}

start();

//function 
function getCourses(callback) { // mac dinh la get
    fetch(courseApi)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

//
function createCourse(data, callback) {
    var options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(data)
    }
    fetch(courseApi, options)
        .then(function(reponse) {
            response.json();
        })
        .then(function() {
            var courseItem = document.querySelector('.course-item' + id);
            if(courseItem){
                courseItem.remove();
            }
        });
}

// function deleteCourse(id) {
//     var options = {
//         method: 'DELETE',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     }
//     fetch(courseApi + '/' + id, options)
//         .then(function(reponse) {
//             response.json();
//         })
//         .then(callback)
// }

// function renderCourses(courses) {
//     var listCourseBlock = document.querySelector('#list-courses');
//     var htmls = courses.map(function(course) {
//         return `
//             <li class="course-item-${course.id}">
//                 <h4>${course.name}</h4>
//                 <p>${course.description}<p>
//                 <button onclick="deleteCourse(${course.id})">Xoa</button>
//             </li>
//         `;
//     });
//     listCourseBlock.innerHTML = htmls.join('');
// }

function handleCreateForm() {
    var createBtn = document.querySelector('#create-btn');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var description = document.querySelector('input[name="description"]').value;

        var formData = {
            name: name,
            description: description
        };

        createCourse(formData, function() {
            getCourses(renderCourses);
        });
    }
}