import { teachers } from '../data/teachers.js'

let content = ''
teachers.forEach((teacher,id) => {
    content += `<li class="item">
    <a href="teacher.html?id=${id}" class="card">
        <img src="${teacher.avatar}"
            alt="">
    </a>
    <div class="instructor_block">
        <a href="teacher.html?id=${id}" class="teacher">
            <h3 class="title">${teacher.name}</h3>
            <div class="designation">${teacher.designation}</div>
        </a>
        <div style="background-image:url('${teacher.avatar}')"
            class="blur"></div>
    </div>
</li>`
})
document.querySelector('.teacher_list').innerHTML = content