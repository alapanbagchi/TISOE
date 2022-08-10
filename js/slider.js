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
    console.log(this.shift, this.slideWidth)
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
            console.log(event.target)
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

document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

const wrappers = [...document.getElementsByClassName('slider_wrapper')]
console.log(wrappers)
function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if (xDiff > 0 && evt.path.some(el => wrappers.includes(el))) {
           const wrap = evt.path.find(el => wrappers.includes(el))
           const controls = document.querySelector('#' + wrap.id).nextElementSibling
           const button = controls.querySelector('.' + [...controls.classList] + ' .left')
           button.click()
                
        } else {
            const wrap = evt.path.find(el => wrappers.includes(el))
           const controls = document.querySelector('#' + wrap.id).nextElementSibling
           const button = controls.querySelector('.' + [...controls.classList] + ' .right')
           button.click()
        }
    }
    xDown = null;
};