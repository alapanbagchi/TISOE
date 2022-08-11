const menu_btn = document.getElementsByClassName('menu_btn');


const navbar = (e) => {
    if (document.getElementById('links').classList.contains('active')) {
        document.getElementById('links').classList.remove('active')
    } else {
        document.getElementById('links').classList.add('active')
    }
}

let GITHUBPROD = window.location.origin === 'https://alapanbagchi.github.io' ? '/TISOE' : ''
const baseurl = window.location.href.split('/').filter(item => item != '').splice(0, 2).join('//') + GITHUBPROD
const content = `<ul>
<li class="logo">
    <a href="${baseurl}/index.html">
        <img width="100px"
            src="https://res.cloudinary.com/alapanbagchi/image/upload/v1659898862/Tisoe/assets/TISOE.svg"
            alt="">
    </a>
</li>
<div onclick="navbar()" class="menu_btn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="24px"
        height="25px">
        <path
            d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z" />
    </svg>
</div>
<div id="links" class="links">
    <li class="link"><a href="${baseurl}/about.html">About Us</a></li>
    <li class="link"><a href="${baseurl}/courses">Courses</a></li>
    <li class="link"><a href="${baseurl}/teachers">Teachers</a></li>
        <button class="g-recaptcha" id="recaptchanav">Contact Us
        </button>
</div>
</ul>

`


document.querySelector('nav').innerHTML = content


