import {courses} from '../data/courses.js';

let content = ''

//Courses is a map with each value containing a topic property. Store one course of each topic in an array.
let teachers = [];
let display = []
courses.forEach(course => {
    if(!teachers.includes(course.instructor.name)){
        teachers.push(course.instructor.name)
        display.push(course)
    } 
} )

console.log(display)

display.forEach(course => {
    content += `<div style="margin-right:32px" class="slides">
    <div class="course_image">

        <img src="${course.image}"
            alt="">
        <div class="tags">
            <p class="tag">${course.topic}</p>
            <p class="tag">${course.price}.00 / hr</p>
        </div>
    </div>
    <div class="content">
        <h5>${course.title}</h5>
        <p>${course.description.substring(0,100)}...</p>
        <div class="author">
            <div class="avatar">
                <div class="teacher_image"> 
                <img src="${course.instructor.avatar}"
                    alt="">
                    </div>
                <img class="verified"
                    src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                    alt="">
            </div>
            <div class="data">
                <p class="teacher_name">${course.instructor.name}</p>
                <p>${course.instructor.designation}</p>
            </div>
        </div>
    </div>
</div>`
    document.getElementById('course_wrapper').innerHTML = content
})



