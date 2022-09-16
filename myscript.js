var sideNav = document.getElementById("sideNav")
var collapse = document.getElementById("collapse")
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 100,
	speedAsDuration: true
});


let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

sideNav.style.right = "-250px"

collapse.onclick = function () {
  if(sideNav.style.right == "-250px"){
    sideNav.style.right = "0";
    close.src;
  } 
  else{
    sideNav.style.right = "-250px";
    menu.src = "media/menu.png";
  }
}