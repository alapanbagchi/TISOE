import {courses} from '../data/courses.js';

let content = ''

courses.forEach(course => {
    content += `<div class="slides">
    <div class="course_image">

        <img src="${course.image}"
            alt="">
        <div class="tags">
            <p class="tag">${course.topic}</p>
            <p class="tag">${course.price} / hr</p>
        </div>
    </div>
    <div class="content">
        <h5>${course.title}</h5>
        <p>${course.description}</p>
        <div class="author">
            <div class="avatar">
                <div class="teacher_image"> 
                <img src="${course.avatar}"
                    alt="">
                    </div>
                <img class="verified"
                    src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                    alt="">
            </div>
            <div class="data">
                <p class="teacher_name">Tatiyana Iliev</p>
                <p>Mandarin Teacher</p>
            </div>
        </div>
    </div>
</div>`
    document.getElementById('course_wrapper').innerHTML = content
})



