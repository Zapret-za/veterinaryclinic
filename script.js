//menu
function toggleClassMenu() {
	myMenu.classList.add("menu--animatable");	
	if(!myMenu.classList.contains("menu--visible")) {		
		myMenu.classList.add("menu--visible");
	} else {
		myMenu.classList.remove('menu--visible');		
	}	
}
function OnTransitionEnd() {
	myMenu.classList.remove("menu--animatable");
}
var myMenu = document.querySelector(".menu");
var oppMenu = document.querySelector(".menu-icon");
myMenu.addEventListener("transitionend", OnTransitionEnd, false);
oppMenu.addEventListener("click", toggleClassMenu, false);
myMenu.addEventListener("click", toggleClassMenu, false);

//Swiper
let swiper_reports = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
breakpoints: {
          768: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 10
        },
          1200: {
              slidesPerView: 3,
              spaceBetween: 10
          }
      }
});
var mySwiper = new Swiper('.slider-container', {
  centeredSlides: false,
  slidesPerView: 4,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-nextt',
    prevEl: '.swiper-button-prevv',
  },
});

//Modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal.style.display = "block";
}
btn3.onclick = function() {
  modal.style.display = "block";
}
btn4.onclick = function() {
  modal.style.display = "block";
}
btn5.onclick = function() {
  modal.style.display = "block";
}
btn6.onclick = function() {
  modal.style.display = "block";
}
btn7.onclick = function() {
  modal.style.display = "block";
}
btn8.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

