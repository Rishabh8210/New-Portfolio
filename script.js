function locoMotive()
{
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("body"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("body").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}    
locoMotive()

const mousemover = document.getElementById("mouse-follower");
const main = document.querySelector(".main");
main.addEventListener("mousemove", (dets)=>{
    // console.log(dets);
    mousemover.style.top = dets.y-40+"px";
    mousemover.style.scale = "1";
    mousemover.style.left = dets.x-40 +"px";
})
main.addEventListener("mouseout", (dets)=>{
  // console.log(dets);
  mousemover.style.scale = 0
})

document.querySelector("header").addEventListener("mousemove", (dets)=>{
    console.log(dets);
    // mousemover.style.scale = "0";
    mousemover.style.top = dets.y-40+"px";
    mousemover.style.left = dets.x-40 +"px";
    mousemover.style.border = "1px solid #fff";
    mousemover.style.backgroundColor = "transparent";
})
document.querySelector("header").addEventListener("mouseout", (dets)=>{
    console.log(dets);
    // mousemover.style.scale = "0";
    mousemover.style.top = dets.y-40+"px";
    mousemover.style.left = dets.x-40 +"px";
    mousemover.style.border = "";
    mousemover.style.backgroundColor = "rgb(20, 18, 18)";
})

const t = gsap.timeline();

t.fromTo(".centre-element",{
  y:-50,
  opacity :0,
  delay:.5,
  duration:.9
}, {
  y:0,
  opacity:1,
  duration:1.2
})

t.fromTo(".left-element, .right-element",{
  y:-50,
  opacity :0,
  delay:.5,
  duration:.9
}, {
  y:0,
  opacity:1,
  duration:1.2
}, 'pandey')
t.to(".main-sub-heading", {
  y:-30,
  delay:.4,
  duration:.9,
  opacity:1
}, 'pandey')
t.to(".main-heading h1",{
  fontStyle:"normal",
  delay: .144,
  duration:1
},'rish')
t.to(".main-heading",{
    y : -60, 
    filter:"blur(0rem)",
    // fontStyle:"normal",
    opacity:1,
    duration: 1,
}, 'rish')