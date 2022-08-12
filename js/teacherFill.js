
import {teachers} from '../data/teachers.js';


let teacherContent = ''
teachers.forEach(teacher => {
    teacherContent += `
    <div style="margin-right:32px" class="teacher_slides slides">
    <a  href="teachers/teacher.html?id=${teacher.name.toLowerCase().replace(' ','_')}">
    <div class="teacher_slide_image">
        <img src="${teacher.avatar.split('/upload')[0] + '/upload/c_scale,w_400,h_550' + teacher.avatar.split('/upload')[1]}"
            alt="">
    </div>

    <div class="teacher_data">
        <div class="teacher_data_content">
            <p class="teacher_name">${teacher.name}</p>
            <p class="teacher_designation">${teacher.designation}</p>
            
        </div>
        <div style="background-image:url('${teacher.avatar}')" class="blur"></div>
    </div>
    </a>
</div>`
    document.getElementById('teacher_wrapper').innerHTML = teacherContent
})


