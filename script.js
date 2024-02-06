var tl = gsap.timeline();

tl.from(".line h1", {
  stagger: 0.25,
  y: 150,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part,.line h2", {
  opacity: 0,
  onstart: () => {
    var h5timer = document.querySelector("#line1-part h5");
    var grow = 0;
    var h5interval = setInterval(() => {
      h5timer.textContent = grow++;
      if (grow > 100) {
        clearInterval(h5interval);
      }
    }, 30);
  },
});

tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay: 3.1,
});
tl.from("#page1",{
    y:1200,
    opacity:1,
    
})
tl.to("#loader",{
    display:none
})
