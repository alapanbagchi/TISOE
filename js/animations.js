gsap.registerPlugin(ScrollTrigger);
const rows = gsap.utils.toArray('.row');

const tl = [];

rows.forEach((row, index) => {
  tl.push(gsap.timeline({
    scrollTrigger:{
      trigger: row,
      start: "top 100%",
      end: "bottom bottom",
      markers: true,
      toggleActions: 'play none none reverse'
    }
  }))
  
  
  const elements = row.querySelectorAll('.row');
  console.log(elements)
  elements.forEach((element, i) => {
    console.log("YO")
    tl[index].from(element, {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "powe3.out",
        stagger: 0.2
      });
  })
  
})