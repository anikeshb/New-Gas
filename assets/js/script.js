
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

var btn=document.getElementById("down");
var content=document.getElementById("scrolldown");
btn.addEventListener('click',function () { scrollDown(); });












