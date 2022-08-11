let GIT = window.location.origin === 'https://alapanbagchi.github.io' ? '/TISOE' : ''
const url = window.location.href.split('/').filter(item => item != '').splice(0, 2).join('//') + GIT
const footercontent = `<section class=" get_started">
<div class="animate__up title_wrap">
    <h2>Start Learning from <br />our professionals today!</h2>
</div>
    <button style="margin-top:42px" class="g-recaptcha animate__up cta__footer  " id="recaptchafooter" >Get Started Today</button>
<div style="margin-top:42px" class="animate__up animate__delay__600">
    <a href="${url}/termsandconditions.html" class="footerinfo">Tisoe LLC. - Terms and Conditions</a>
</div>
</section>`

document.querySelector('footer').innerHTML = footercontent