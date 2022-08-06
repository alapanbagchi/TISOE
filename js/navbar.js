const menu_btn = document.getElementsByClassName('menu_btn');


const navbar = (e) => {
    if (document.getElementById('links').classList.contains('active')) {
        document.getElementById('links').classList.remove('active')
    } else {
        document.getElementById('links').classList.add('active')
    }
}