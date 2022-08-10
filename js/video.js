const container = document.getElementsByClassName('vidContainer')[0]
let showModal = false
const video = () => {
    if (!showModal) {
        document.body.style.overflow = 'hidden'
        container.innerHTML = `<div class="video">
<div onclick="video()" class="exit">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
        <path d="M6 6L18 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" />
    </svg>
</div>
<iframe scrolling="no" frameborder="0" id="player"
    src="https://player.vimeo.com/video/331766282?app_id=122963&amp;referrer=https%3A%2F%2Fquillow.webflow.io%2F"
    allowfullscreen="true"></iframe>
</div>`
        showModal = true
    } else {
        document.body.style.overflow = 'auto'

        container.innerHTML = ''
        showModal = false
    }
}
