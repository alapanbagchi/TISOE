import { courses } from "../data/courses.js";
//Get the id from the url
const id = window.location.search.split('?id=')[1]
const course = courses.get(id.toString())
const courseTemplate = `<div class="wrapper">
<div class="header_block">
    
</div>
<div class="container">
    <div class="course_grid">
        <div>
            <div class="course_information">
                <div class="wrapper">
                    <a href="" class="link">Courses</a>
                    <a href="" class="link">${course.title}</a>
                </div>
                <h2 class="course_title">${course.full_name}</h2>
                <div class="course_feature_grid">
                    <div class="check_wrapper">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79ce274acd86ad052e9_Check%20Circle.svg"
                            alt="">
                        <div class="paragraph_large">
                            Detailed Course
                        </div>
                    </div>
                    <div class="check_wrapper">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79ce274acd86ad052e9_Check%20Circle.svg"
                            alt="">
                        <div class="paragraph_large">
                            Experienced Teacher
                        </div>
                    </div>
                    <div class="check_wrapper">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79ce274acd86ad052e9_Check%20Circle.svg"
                            alt="">
                        <div class="paragraph_large">
                            Attention to Detail
                        </div>
                    </div>
                    <div class="check_wrapper">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79ce274acd86ad052e9_Check%20Circle.svg"
                            alt="">
                        <div class="paragraph_large">
                            Flexible Schedule
                        </div>
                    </div>
                </div>
                <a href="" class="author_wrapper">
                    <div class="teacher_avatar">
                        <img src="${course.instructor.avatar}"
                            alt="">
                        <img src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f3f97e59b6d4a1321644_Verified%20Badge.svg"
                            alt="">
                    </div>
                    <div>
                        <div class="heading_large">${course.instructor.name}</div>
                        <p class="designation">${course.instructor.designation}</p>
                    </div>
                </a>
            </div>
            <div class="course_description">
                <div class="title">✍️ Description
                </div>
                <div class="description">${course.description}</div>

                
            </div>
        </div>
        <div class="course_detail">
            <div class="course_header_image">
                <img src="${course.image}"
                    alt="">
            </div>
            <div class="course_price_info">
                <h5>${course.price}.00/hr</h5>
            </div>
            <button id="courserecaptcha" class="cta g-recaptcha">Buy Course Now</button>
            <div class="course_feature_wrap">
                <div class="heading_large">This course includes:</div>
                <div class="course_feature_list">
                    <div class="check_wrapper"><img
                            src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79a090a65d46e4ebc02_Movie.svg"
                            loading="lazy" alt="" class="course-icon">
                        <div>Learn at your own pace</div>
                    </div>
                   
                    <div class="check_wrapper"><img
                            src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79172eb0fa8ccf33282_Star.svg"
                            loading="lazy" alt="" class="course-icon">
                        <div>Expert guidance</div>
                    </div>
                    <div class="check_wrapper"><img
                            src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79a090a65d46e4ebc02_Movie.svg"
                            loading="lazy" width="24" alt="" class="course-icon">
                        <div>Watch from anywhere</div>
                    </div>
                    <div class="check_wrapper"><img
                            src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79a4c7dfd39a363e9ab_Files.svg"
                            loading="lazy" alt="" class="course-icon">
                        <div>Assignments</div>
                    </div>
                    <div class="check_wrapper"><img
                            src="https://assets.website-files.com/604d8c253d18c714a435bd9c/6099f79a9ec8491fff7393c2_Award.svg"
                            loading="lazy" alt="" class="course-icon">
                        <div>Certificate of completion</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`

document.querySelector('.course').innerHTML = courseTemplate;