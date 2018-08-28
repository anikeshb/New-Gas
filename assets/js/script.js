 	// ------------------Js------------------------

 	(function($) {

		$(window).on('load', function() {
      
      $( "#accordion" ).accordion({
          collapsible: true,
          active: false,
          icons: false,  
          heightStyle: "content"
        });      


        $('.hamburger').click(function(e) {
          e.stopPropagation();
        });

        $('.cross').click(function(e) {
          e.stopPropagation();
        });

        $('.dropdown').click(function(e) {
          e.stopPropagation();
        })

        $('body').on('click', function() {
          if($('.hamburger').hasClass('cross')){
            $('.hamburger').removeClass('cross');
            $('nav').removeClass('mobile');
            $('html').removeClass('hide');
          }

          if($('.dropdown').hasClass('open')){
            $('.dropdown').removeClass('open');
          }
        }); 
      
      $('#name').on('focusout', function() {
          var reg_name = /^[a-zA-Z-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
            reg1 = /^[^<>*?]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if($(this).val().length < 4 ||!$(this).val().match(reg_name) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else {
            $(this).next('span.error').html("");
          }
        });

        $('#address').on('focusout', function() {
          var reg_add = /^[a-zA-Z0-9-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
            reg1 = /^[^<>*?$#%]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if($(this).val().length < 4 || !$(this).val().match(reg_add) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else {
            $(this).next('span.error').html("");
          }
        });

        $('#city').on('focusout', function() {
          var reg_add = /^[a-zA-Z0-9-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
            reg1 = /^[^<>*?$#%]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if($(this).val().length < 4 || !$(this).val().match(reg_add) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else {
            $(this).next('span.error').html("");
          }
        });

        $('#state').on('focusout', function() {
          var reg_add = /^[a-zA-Z0-9-\s\!#@$%&'"+-/=^_`{|}[\]~:;,.()-\s\\/]+$/,
            reg1 = /^[^<>*?$#%]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if($(this).val().length < 4 || !$(this).val().match(reg_add) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else {
            $(this).next('span.error').html("");
          }
        });



        $('#phone').on('focusout', function() {
          var reg_tel = /^[0-9-\s\-()+\s/]+$/,
            reg1 = /^[^!@#$%^&,_=;:"'./{}[\]|\\`~<>*?]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if(!$(this).val().match(reg_tel) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else if ($(this).val().length < 10 || $(this).val().length > 10) {
            $(this).next('span.error').html("Please enter valid input");
          }
          else {
            $(this).next('span.error').html("");
          }
        });

        $('#pin').on('focusout', function() {
          var reg_tel = /^[0-9-\s\-()+\s/]+$/,
            reg1 = /^[^!@#$%^&,_=;:"'./{}[\]|\\`~<>*?]+$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if(!$(this).val().match(reg_tel) || !$(this).val().match(reg1)) {
            $(this).next('span.error').html("Please enter valid input");
          } else if ($(this).val().length < 5 || $(this).val().length > 5) {
            $(this).next('span.error').html("Please enter valid input");
          }
          else {
            $(this).next('span.error').html("");
          }
        });
        
        $('#email').on('focusout', function() {
          var reg_mail = /^[\s]{0,}[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+@[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+(?:\.[a-zA-Z0-9.!#$%&’();:"',[\]\\+/=^_`{|}~-]+)+[\s]{0,}$/;
          if($(this).val() == ""){
            $(this).next('span.error').html("Field can\'t be empty");
          } else if(!$(this).val().match(reg_mail)) {
            $(this).next('span.error').html("Please enter valid input");
          }
          else {
            $(this).next('span.error').html("");
          }
        });

        var $scroll_div = $('.main-content');
        $('#down').on('click' , function(e) {
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
              navbar[0].classList.remove('sticky');
            } else {
              navbar[0].classList.add('sticky');
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

          bar[0].addEventListener('click',function(){mobileMenu();});

          // ---------------------------------------------

          // ------------------Dropdown------------------------

          function show() {
            if(checkClass2[0]=='hide') {
              body.classList.toggle('hide');
              menu[0].classList.toggle('mobile');
              bar[0].classList.toggle('cross');
              dropdown[0].classList.toggle('open');
            }else	dropdown[0].classList.toggle('open');
          }

          dropdown[0].addEventListener('click',function() { show(); });

        // ---------------------------------------------------
      });
      
      // function onYouTubeIframeAPIReady() {
      //     $('.video-container').each(function(index,ele){
      //       var url=$(this).data("url");
      //       console.log("url", url) 
      //       player=new YT.Player(ele,{
      //       videoId: url,
      //       events: {
      //         'onStateChange': onPlayerStateChange
      //       }
      //       });
      //     })
      //   }
      //   var player, playing=false;
      //   function onPlayerStateChange(event) {
      //     console.log("click",event.data())
      //   }	

    })(jQuery);















