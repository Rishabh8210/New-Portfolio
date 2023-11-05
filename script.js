const locoScroll = new LocomotiveScroll({
    el: document.querySelector("body"),
    smooth: true
  }); 
const mousemover = document.getElementById("mouse-follower");
const main = document.querySelector(".main");
main.addEventListener("mousemove", (dets)=>{
    console.log(dets);
    mousemover.style.top = dets.y-40+"px";
    mousemover.style.scale = "1";
    mousemover.style.left = dets.x-40 +"px";
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