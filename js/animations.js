const AnimateUp = function (entry) {
  anime({
    targets: entry,
    translateY: [30, 0],
    opacity: [0, 1],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    delay: function (el, i) {
      let d = [...el.classList]
      let delay = 0
      for (let i = 0; i < d.length; i++) {
        if (d[i].includes("animate__delay")) {
          delay = d[i].split("animate__delay__")[1]
        }
      }
      return delay
    }
  })
}
const AnimateFadeIn = function (entry) {
  anime({
    targets: entry,
    opacity: [0, 1],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    delay: function (el, i) {
      let d = [...el.classList]
      let delay = 0
      for (let i = 0; i < d.length; i++) {
        if (d[i].includes("animate__delay")) {
          delay = d[i].split("animate__delay__")[1]
        }
      }
      return delay
    }
  })
}
const AnimateRight = function (entry) {
  anime({
    targets: entry,
    translateX: [-20, 0],
    opacity: [0, 1],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    delay: function (el, i) {
      let d = [...el.classList]
      let delay = 0
      for (let i = 0; i < d.length; i++) {
        if (d[i].includes("animate__delay")) {
          delay = d[i].split("animate__delay__")[1]
        }
      }
      return delay
    }
  })
}

const AnimateLeft = function (entry) {
  anime({
    targets: entry,
    translateX: [20, 0],
    opacity: [0, 1],
    easing: 'cubicBezier(.5, .05, .1, .3)',
    delay: function (el, i) {
      let d = [...el.classList]
      let delay = 0
      for (let i = 0; i < d.length; i++) {
        if (d[i].includes("animate__delay")) {
          delay = d[i].split("animate__delay__")[1]
        }
      }
      return delay
    }
  })
}

let callback = function callback(entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > 0) {
      let selection = [...entry.target.classList].find(x => x.includes("animate__")).split("animate__")[1]
      if (selection == 'up') AnimateUp(entry.target);
      else if (selection == 'fadein') AnimateFadeIn(entry.target);
      else if (selection == 'right') AnimateRight(entry.target);
      else if (selection == 'left') AnimateLeft(entry.target);
      observer.unobserve(entry.target);
    }
  });
}
let items_list = document.querySelectorAll('[class^="animate"]');
items_list.forEach(items=>{
  items.style.opacity = 0
})
let items = Array.prototype.slice.call(items_list, 0);
let observer = new IntersectionObserver(callback, {
  rootMargin: "-5%",
  threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
});
items.forEach(function (item) {
  return observer.observe(item);
});
