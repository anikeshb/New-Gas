 	// ------------------Validation------------------------

 	(function($) {

		$(window).on('load', function() {

		$(window).on('resize', function() {
			if($(window).width() > 1024) {
				$('.quote').draggable(); 
			}
		});	

	    $( "#accordion" ).accordion({
	      collapsible: true,
	      active: false,
	    	icons: false,  
	      heightStyle: "content"
		  });      

		
		$('#name').on('focusout', function() {
				var reg_name = /^[a-zA-Z-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
	    		reg1 = /^[^<>*?]+$/;
				if($(this).val() == ""){
					$(this).next('span.error').remove();
					$('<span class="error">Field can\'t be empty</span>').insertAfter("#name");
				} else if($(this).val().length < 4 ||!$(this).val().match(reg_name) || !$(this).val().match(reg1)) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#name");
				} else {
					$(this).next('span.error').remove();
				}
			});

			$('#address').on('focusout', function() {
				var reg_add = /^[a-zA-Z0-9-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
    			reg1 = /^[^<>*?$#%]+$/;
				if($(this).val() == ""){
					$(this).next('span.error').remove();
					$('<span class="error">Field can\'t be empty</span>').insertAfter("#address");
				} else if($(this).val().length < 4 || !$(this).val().match(reg_add) || !$(this).val().match(reg1)) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#address");
				} else {
					$(this).next('span.error').remove();
				}
			});

			$('#city').on('focusout', function() {
				var reg_add = /^[a-zA-Z0-9-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
    			reg1 = /^[^<>*?$#%]+$/;
				if($(this).val() == ""){
					$(this).next('span.error').remove();
					$('<span class="error">Field can\'t be empty</span>').insertAfter("#city");
				} else if($(this).val().length < 4 || !$(this).val().match(reg_add) || !$(this).val().match(reg1)) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#city");
				} else {
					$(this).next('span.error').remove();
				}
			});


			$('#phone').on('focusout', function() {
				var reg_tel = /^[0-9-\s\-()+\s/]+$/,
    			reg1 = /^[^!@#$%^&,_=;:"'./{}[\]|\\`~<>*?]+$/;
				if($(this).val() == ""){
					$(this).next('span.error').remove();
					$('<span class="error">Field can\'t be empty</span>').insertAfter("#phone");
				} else if(!$(this).val().match(reg_tel) || !$(this).val().match(reg1)) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#phone");
				} else if ($(this).val().length < 10 || $(this).val().length > 10) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#phone");
				}
				else {
					$(this).next('span.error').remove();
				}
			});
			
			$('#email').on('focusout', function() {
				var reg_mail = /^[\s]{0,}[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+@[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+(?:\.[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+)+[\s]{0,}$/;
				if($(this).val() == ""){
					$(this).next('span.error').remove();
					$('<span class="error">Field can\'t be empty</span>').insertAfter("#email");
				} else if(!$(this).val().match(reg_mail)) {
					$(this).next('span.error').remove();
					$('<span class="error">Please enter valid input</span>').insertAfter("#email");
				}
				else {
					$(this).next('span.error').remove();
				}
			});

			var $scroll_div = $(".main-content");
			$('.bounce').on('click' , function(e) {
				e.preventDefault();
				if($(window).width() > 980) {
					$('html, body').animate({
		        		scrollTop : $scroll_div.offset().top - 129
		    		}, 500);
				} else {
					$('html, body').animate({
		        		scrollTop : $scroll_div.offset().top - 65
		    		}, 500);
				} 
			})

			$('form').on('submit' , function() {
				if($(this).siblings().hasClass('error')){
					alert('This form can\'t be submitted');
				}
			});

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


 	})(jQuery);















