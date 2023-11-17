function locoMotive()
{
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector(".container"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".container", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector(".container").style.transform ? "transform" : "fixed"
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
    opacity:1,
    duration: 1,
}, 'rish')

const imgHover = document.querySelector(".right-side");
const imgHover1 = document.querySelector(".img1");

imgHover.addEventListener("mouseover", ()=>{
  imgHover1.style.clipPath ="polygon(0 0,157% 0,100% 0,0 0)";
  })

  imgHover.addEventListener("mouseleave", ()=>{
    imgHover1.style.clipPath = "polygon(0 0,100% 0,100% 100%,0 100%)";
  })

gsap.to(".main-sub-heading",{
    y:60,
    scrollTrigger:{
      trigger:".main-sub-heading",
      // markers:true,
      scroller:".container",
      start:"top 70%",
      end:"top 40%",
      scrub:3,
    }
})

// gsap.to(".main-heading",{
//   y:40,
//   scrollTrigger:{
//     trigger:".main-sub-heading",
//     markers:true,
//     scroller:".container",
//     start:"top 30%",
//     end:"top 10%",
//     scrub:3,
//   }
// })


gsap.to(".main",{
  opacity:0,
  scrollTrigger:{
    trigger:".page1",
    // markers:true,
    scroller:".container",
    start:"top 70%",
    end:"top 50%",
    scrub:3,
  }
})


// gsap.to(".caption h3",{
//   // duration:2,
//   fontWeight:100,
//   transform:"translateX(-500%)",
//   scrollTrigger:{
//     trigger:".caption",
//     scroller:".container",
//     pin:true,
//     // markers:true,
//     start:"top 0%",
//     end:"top -350%",
//     scrub:2
//   }
// })

gsap.to(".caption",{
  opacity:1,
  scrollTrigger:{
    trigger:".page1",
    // markers:true,
    scroller:".container",
    start:"bottom 50%",
    end:"bottom 30%",
    scrub:2,
  }
})

const a = gsap.timeline({
    scrollTrigger:{
      trigger:".multiple-pages",
      scroller:".container",
      pin:true,
      // markers:true,
      start:"top 0%",
      end:"top -350%",
      scrub:2
    }
});
// a.to(".check",{
//   transform:"translateX(-200%)",
// })

a.to(".check",{
  duration:3,
  transform:"translateX(-200%)",
})
a.to(".circle",{
    height:"100vh",
    width:"100%",
   duration:3,
    borderRadius:"0%",
    backgroundColor:"black",
  })
  a.to(".check-3 .circle .main-heading h1",{
    opacity:1,
    color:"#fff"
  })

gsap.to(".page1", {
    y : -70,
    duration:1.5,
    opacity:1,
    scrollTrigger:{
       trigger:".main-sub-heading",
       scroller:".container",
      //  markers:true,
       start:"bottom 30%",
       end:"bottom 5%",
       scrub:2
    }
})

const projectList = document.querySelectorAll(".project-list");
const rectangle = document.querySelector(".rectangle");
projectList.forEach(function(elem, i){
  elem.addEventListener("mousemove", function(dets){
    rectangle.style.left = dets.x-200 +"px";
    rectangle.style.top = dets.y-120 +"px";
    rectangle.style.opacity = 1;
  })
  elem.addEventListener("mouseout", function(){
    rectangle.style.opacity = 0;
  })
})