
import {teachers} from '../data/teachers.js';

let teacherContent = ''

teachers.forEach(course => {
    teacherContent += `<div class="teacher_slides slides">
    <div class="teacher_slide_image">
        <img src="${course.image}"
            alt="">
    </div>

    <div class="teacher_data">
        <div class="teacher_data_content">
            <p class="teacher_name">${course.teacher_name}</p>
            <p class="teacher_designation">${course.designation}</p>
            <p class="course_count">${course.course_count}</p>
        </div>
        <div class="blur"></div>
    </div>
</div>`
    document.getElementById('teacher_wrapper').innerHTML = teacherContent
})



