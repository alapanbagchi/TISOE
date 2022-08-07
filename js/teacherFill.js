
import {teachers} from '../data/teachers.js';


console.log(teachers.values())
let teacherContent = ''

teachers.forEach(teacher => {
    teacherContent += `<a href="/teachers/teacher.html?id=${teacher.name.toLowerCase().replace(' ','_')}">
    <div class="teacher_slides slides">
    <div class="teacher_slide_image">
        <img src="${teacher.avatar}"
            alt="">
    </div>

    <div class="teacher_data">
        <div class="teacher_data_content">
            <p class="teacher_name">${teacher.name}</p>
            <p class="teacher_designation">${teacher.designation}</p>
            
        </div>
        <div class="blur"></div>
    </div>
</div></a>`
    document.getElementById('teacher_wrapper').innerHTML = teacherContent
})

//<p class="course_count">${teacher.course_count}</p>

