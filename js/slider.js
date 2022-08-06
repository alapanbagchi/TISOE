const allSliders = [...document.getElementsByClassName('slider')]

allSliders.forEach((wrap, i) => {
    wrap.classList.add('slider_' + i)
    let slider = new Slider('.slider_' + i)
    slider.addEventListeners()
})

function Slider(new_class) {
    this.buttons = document.querySelectorAll(new_class + ' .controls .arrow')
    this.items = [...document.querySelectorAll(new_class + ' .slider_wrapper .slides')]
    this.current = 0
    this.shift = getComputedStyle(this.items[0]).transform === 'none' || getComputedStyle(this.items[0]).transform.split(',')[4] == this.slideWidth ? 0 : getComputedStyle(this.items[0]).transform.split(',')[4]
    this.slideWidth = this.items[0].getBoundingClientRect().width + 32
    this.isSliding = false
    this.addEventListeners = function () {
        this.buttons.forEach(button => {
            button.addEventListener('click', this.slide)
        }
        )
    }
    this.slide = event => {
        if (!this.isSliding) {
            this.isSliding = true
            console.log("none",getComputedStyle(this.items[0]).transform==='none')
            console.log("0",getComputedStyle(this.items[0]).transform === 0)

            if (event.target === this.buttons[1]) {
                if (this.current < this.items.length - 1) {
                    this.current++;
                    this.shift -= this.slideWidth
                    this.items.forEach(slide => {
                        slide.style.transform = `translateX(${this.shift}px)`
                        slide.style.transition = 'all 0.5s ease-in-out'
                    })
                } else {
                    this.current = 0
                    this.shift = 0
                    this.items.forEach(slide => {
                        slide.style.transform = `translateX(0px)`
                        slide.style.transition = 'all 0.5s ease-in-out'
                    })
                }

            } else {
                if (this.current > 0) {
                    this.current--;
                    this.shift += this.slideWidth
                    this.items.forEach(slide => {
                        slide.style.transform = `translateX(${this.shift}px)`
                        slide.style.transition = 'all 0.5s ease-in-out'
                    })
                }
            }
            setTimeout(() => {
                this.isSliding = false
            }, 500)
        }
    }
}

