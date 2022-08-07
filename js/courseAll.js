import { courses } from '../data/courses.js';

let content = ''


//For initial Hydration of the page
courses.forEach(course => {
    content += `<li class="item">
    <a href="" class="card">
        <div class="course_image_wrap">
            <img src="${course.image}"
                alt="">
            <div class="badge_wrap">
                <div class="category_badge">
                    <div class="badge_text">
                        ${course.topic}
                    </div>
                </div>
                <div class="price_badge">
                    <div class="badge_text">
                        ${course.price}.00
                    </div>
                </div>
            </div>
        </div>
    
        <div class="content_block">
            <h5>${course.title}</h5>
            <p>${course.description.substring(0, 100)}...
            </p>
        </div>
        <div class="author_wrapper">
            <div class="course_avatar">
                <img src="${course.instructor.avatar}"
                    alt="">
                <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                    alt="">
            </div>
            <div class="course_author">
                <div class="heading">
                    ${course.instructor.name}
                </div>
                <div class="designation">${course.instructor.designation}</div>
            </div>
        </div>
    </a>
    </li>`
    document.querySelector('.course_list').innerHTML = content
})


let filter = [""]
let filteredCourses = courses
const buttons = [...document.querySelectorAll('.topic')]



buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        filter = []
        filter.push(e.target.dataset.id)

        //Removing the active class from all buttons and adding the active class to the clicked button
        buttons.forEach(button => {
            button.classList.remove('active')
        })
        button.classList.add('active')
        filteredCourses = []
        content = ''

        //Filtering the courses based on the topic selected
        filteredCourses = [...courses.values()].filter(course => {
            return filter.includes(course.topic)
        })

        //if no topic is selected, display all courses
        if (filteredCourses.length == 0 || filter[0] == '') {
            filteredCourses = courses
        }

        //Adding the courses to the page
        filteredCourses.forEach(course => {
            content += `<li class="item">
            <a href="" class="card">
                <div class="course_image_wrap">
                    <img src="${course.image}"
                        alt="">
                    <div class="badge_wrap">
                        <div class="category_badge">
                            <div class="badge_text">
                                ${course.topic}
                            </div>
                        </div>
                        <div class="price_badge">
                            <div class="badge_text">
                                ${course.price}.00
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="content_block">
                    <h5>${course.title}</h5>
                    <p>${course.description.substring(0, 100)}...
                    </p>
                </div>
                <div class="author_wrapper">
                    <div class="course_avatar">
                        <img src="${course.instructor.avatar}"
                            alt="">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                            alt="">
                    </div>
                    <div class="course_author">
                        <div class="heading">
                            ${course.instructor.name}
                        </div>
                        <div class="designation">${course.instructor.designation}</div>
                    </div>
                </div>
            </a>
            </li>`
            document.querySelector('.course_list').innerHTML = content
        })
    })
})

