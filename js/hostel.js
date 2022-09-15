let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click', ()=>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
});

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
