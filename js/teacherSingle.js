import { courses } from '../data/courses.js';
import { teachers } from '../data/teachers.js';


const id = window.location.search.split('?id=')[1]
const teacher = teachers.get(id.toString())

//Get courses taught by the same instructor
const coursesTaught = [...courses].filter(course => [...course][1].instructor.name === teacher.name)
console.log(coursesTaught)

let about = `<div class="container">
<div class="teacher_wrapper">
    <div class="teacher_top_wrapper">
        <div class="large_avatar_wrapper">
            <img src="${teacher.avatar}"
                alt="">
        </div>
        <div class="stats_wrapper">
            <div class="teacher_statistic">
                <div class="teacher_icon_wrap">
                    <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099fc2bd5bae43cd3f595c0_Students%20Icon.svg"
                        alt="">
                </div>
                <div class="teacher_detail">
                    ${coursesTaught.length}
                </div>
                <div>Courses</div>
            </div>
            <div class="teacher_statistic">
                <div class="teacher_icon_wrap">
                    <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099fc2bd5bae43cd3f595c0_Students%20Icon.svg"
                        alt="">
                </div>
                <div class="teacher_detail">
                    Positive
                </div>
                <div>Reviews</div>
            </div>
        </div>
    </div>

    <h1 class="author_name">${teacher.name}</h1>
    <div class="badge_wrapper">
        <div class="badge">
            <div>${teacher.designation}</div>
        </div>
    </div>

    <div class="about">
        <h5 class="title">
            About Me
        </h5>
        <p class="paragraph">${teacher.description}</p>
    </div>

</div>
</div>`

document.querySelector('.teacher_aboutme').innerHTML = about

let coursesTaughtTemplate = ``

Array.from(coursesTaught.values()).forEach((course) => {
    console.log(course)
    coursesTaughtTemplate += `<li class="item">
                    <a href="../courses/course.html?id=${course[0]}" class="card">
                        <div class="course_image_wrap">
                            <img src="${course[1].image}"
                                alt="">
                            <div class="badge_wrap">
                                <div class="category_badge">
                                    <div class="badge_text">
                                        ${course[1].topic}
                                    </div>
                                </div>
                                <div class="price_badge">
                                    <div class="badge_text">
                                        ${course[1].price}.00/hr
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="content_block">
                            <h5>${course[1].title}</h5>
                            <p>${course[1].description.substring(0, 100)}...
                            </p>
                        </div>
                        <div class="author_wrapper">
                            <div class="course_avatar">
                                <img src="${course[1].instructor.avatar}"
                                    alt="">
                                <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                                    alt="">
                            </div>
                            <div class="course_author">
                                <div class="heading">
                                    ${course[1].instructor.name}
                                </div>
                                <div class="designation">${course[1].instructor.designation}</div>
                            </div>
                        </div>
                    </a>
                </li>`
})

document.querySelector('.teacher_course_list').innerHTML = coursesTaughtTemplate