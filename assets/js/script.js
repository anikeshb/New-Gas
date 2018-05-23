 $(document).ready(function() {

	// ------------------scroll-------------------------

	function scroll() {
	  if (window.pageYOffset == 0) {
	    navbar[0].classList.remove("sticky");
	  } else {
	    navbar[0].classList.add("sticky");
	  }
	}

	var navbar = document.getElementsByTagName("header");
	var sticky = navbar[0].offsetTop;
	window.onscroll = function() {scroll()};

	// -----------------------------------------------------

	// ----------------------hamburger-------------------

	function mobileMenu ( ) {
		if(checkClass[1]=='open'){
			dropdown[0].classList.toggle('open');
			body.classList.toggle('hide');
			menu[0].classList.toggle("mobile");
			bar[0].classList.toggle("cross");
		} else {
			body.classList.toggle('hide');
			menu[0].classList.toggle("mobile");
			bar[0].classList.toggle("cross");
		}
	}
	
	var dropdown= document.getElementsByClassName('dropdown');
	var checkClass=dropdown[0].classList;

	var body=document.querySelector('html');
	var checkClass2=body.classList;
	
	var bar=document.getElementsByClassName('hamburger');
  var menu=document.getElementsByTagName('nav');

  bar[0].addEventListener("click",function(){mobileMenu();});
	
	// ---------------------------------------------

	// ------------------Dropdown------------------------

	function show() {
		if(checkClass2[0]=='hide') {
			body.classList.toggle('hide');
			menu[0].classList.toggle("mobile");
			bar[0].classList.toggle("cross");
			dropdown[0].classList.toggle('open');
		}else	dropdown[0].classList.toggle('open');
	}

	dropdown[0].addEventListener('click',function() { show(); });
	
	// ---------------------------------------------------




});















