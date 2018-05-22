
window.onscroll = function() {scroll()};

var navbar = document.getElementsByTagName("header");
var sticky = navbar[0].offsetTop;

function scroll() {
console.log(window.pageYOffset);
  if (window.pageYOffset == 0) {
    navbar[0].classList.remove("sticky");
  } else {
    navbar[0].classList.add("sticky");
  }
}

function show() {
	dropdown[0].classList.toggle('open');
}

var dropdown= document.getElementsByClassName('dropdown');
dropdown[0].addEventListener('click',function() { show(); });















