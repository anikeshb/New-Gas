
// ------------------scroll-------------------------

window.onscroll = function() {scroll()};

var navbar = document.getElementsByTagName("header");
var sticky = navbar[0].offsetTop;

function scroll() {
  if (window.pageYOffset == 0) {
    navbar[0].classList.remove("sticky");
  } else {
    navbar[0].classList.add("sticky");
  }
}
// -----------------------------------------------------

// ------------------Dropdown------------------------

<<<<<<< Updated upstream
var btn=document.getElementById("down");
var content=document.getElementById("scrolldown");
btn.addEventListener('click',function () { scrollDown(); });
=======
function show() {
	dropdown[0].classList.toggle('open');
}

var dropdown= document.getElementsByClassName('dropdown');
dropdown[0].addEventListener('click',function() { show(); });

// ---------------------------------------------------


// ----------------------hamburger-------------------

	var flag=0;
	var bar=document.getElementsByClassName('hamburger');
  var menu=document.getElementsByTagName('nav');
  bar[0].addEventListener("click",function(){mobileMenu();});
	
	function mobileMenu ( ) {
		if(flag==0)
		{
			menu[0].classList.add("mobile");
			bar[0].classList.add("cross");
			flag++;
		}	else {
			flag=0;
			menu[0].classList.remove("mobile");
			bar[0].classList.remove("cross");
		} 
	}


// ---------------------------------------------

>>>>>>> Stashed changes












