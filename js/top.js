let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', ()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

var slides = document.querySelector('.slider-items').children;
var prevSlide = document.querySelector('.left-slide');
var nextSlide= document.querySelector('.right-slide');
var totalSlides = slides.length;
var index = 0

prevSlide.onclick = function() {
  next("prev");
}
nextSlide.onclick = function() {
  next("next");
}
function next(direction){
  if(direction == "next"){
    index++;
    if(index == totalSlides){
      index = 0;
    }
  }else{
      if(index == 0){
        index = totalSlides-1;
      }else{
        index--;
      }
  }
  for(i =0; i < slides.length;i++){
    slides[i].classList.remove("active");
  }
  slides[index].classList.add("active");
}

const targetElement = document.querySelectorAll(".animationTarget");
document.addEventListener("scroll",function(){
  for(let i = 0; i < targetElement.length; i++){
    const getElementDistance = targetElement[i].
    getBoundingClientRect().top + targetElement[i].clientHeight * .2
    if(window.innerHeight > getElementDistance){
      targetElement[i].classList.add("show");
    }
  };
});

console.log("hello");
