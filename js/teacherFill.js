
import {teachers} from '../data/teachers.js';


console.log(teachers.values())
let teacherContent = ''
teachers.forEach(teacher => {
    teacherContent += `
    <div style="margin-right:32px" class="teacher_slides slides">
    <a  href="/teachers/teacher.html?id=${teacher.name.toLowerCase().replace(' ','_')}">
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
    </a>
</div>`
    document.getElementById('teacher_wrapper').innerHTML = teacherContent
})


