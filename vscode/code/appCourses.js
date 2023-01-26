var coursesApi = 'http://localhost:3000/courses';

function start(){
    getCourses(function(courses){
        rederCourses(courses);
    });
    
}

start();

//function
function getCourses(callBack){
    fetch(coursesApi)
    .then(function(reponse){
        return reponse.json();
    })
    .then(callBack)
}

function rederCourses(courses){
    var listCourseBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course){
        return `
            <li>
                <h4>${course.name}</h4>
                <p>${course.description}<p>
            </li>
        `;
    });
    listCourseBlock.innerHTML = htmls.join('');
}