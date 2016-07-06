//------------------------------------------------------
// MENU SCRIPTS
//------------------------------------------------------


$(document).ready(function() {
    // Menu opening script for devices over 400px
    if ( $(window).width() > 400 ) {        
            $("header #nav-icon").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                    $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                    $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                } else {
                    $("body > nav").stop().animate({"margin-left":"0px"}, 250);
                    $("body > header").stop().css("min-width", "100vw").animate({"margin-left":"300px"}, 250);
                    $(".wrapper").stop().css("min-width", "100vw").animate({"left":"300px"}, 250);
                }
                $("nav, #nav-icon").toggleClass("open");
                return false;
            });

            $(".wrapper").click(function() {  
                $("body > nav").stop().animate({"margin-left":"-300px"}, 250);
                $("body > header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                $(".wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                $("body > nav, #nav-icon").removeClass("open");
            });
    }
    //Menu open script for small devices
    else {        
            $("header #nav-icon").click(function() {
                if ( $("body > nav").hasClass("open") ) {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "-100%"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                } else {
                    $("body > nav").css("margin-left", "0").stop().animate({"left": "0"}, 250);
                    $("body > header, .wrapper").stop().animate({"left": "0"}, 250);
                }
                $("body > nav, #nav-icon").toggleClass("open");
                return false;
            });
    }
});






//------------------------------------------------------
// Mobile Orientation Reload
//------------------------------------------------------
window.onorientationchange = function() { 
    var orientation = window.orientation; 
        switch(orientation) { 
            case 0: window.location.reload(); 
            break; 
            case 90: window.location.reload(); 
            break; 
            case -90: window.location.reload(); 
            break; } 
};






//------------------------------------------------------
// Resize wrapper
//------------------------------------------------------
$('.code-content').resizable({
    handles: 'w,e',
    minWidth: 360,
    maxWidth: "90%"
});

$(".brand .icon-mobile").click(function() {
   $(".code-content").width("600px"); 
   $(".code-content").addClass("mobile");
   $(".code-content").removeClass("tablet desktop large-desktop");
});

$(".brand .icon-tablet").click(function() {
   $(".code-content").width("768px"); 
   $(".code-content").addClass("tablet");
   $(".code-content").removeClass("mobile desktop large-desktop");
});

$(".brand .icon-desktop").click(function() {
   $(".code-content").width("992px"); 
   $(".code-content").removeClass("tablet mobile large-desktop");
   $(".code-content").addClass("desktop");
});

$(window).resize(function(e) {
  if (e.target == window)
    $('.code-content').width("50%")
});






//------------------------------------------------------
// Toggle <pre>
//------------------------------------------------------
$("*").click(function(){
    $(this).next("pre").slideToggle("medium");
});






//------------------------------------------------------
// Mouse hover state
//------------------------------------------------------

$("pre").prev().css("cursor", "pointer");






//------------------------------------------------------
// Slider Breakpoints
//------------------------------------------------------

 var resizer =    function () { if ( $(".code-content").width() >= 768 && $(".code-content").width() < 992 ) {
            $(".code-content").addClass("tablet");
            $(".code-content").removeClass("mobile desktop large-desktop");
       }
   else if ( $(".code-content").width() >= 992 && $(".code-content").width() < 1200 ) {
            $(".code-content").removeClass("tablet mobile large-desktop");
            $(".code-content").addClass("desktop");
       }
   else if ( $(".code-content").width() >= 1200 ) {
            $(".code-content").removeClass("tablet mobile desktop");
            $(".code-content").addClass("large-desktop");
       }
   else if ( $(".code-content").width() < 768 ) {
            $(".code-content").removeClass("tablet desktop large-desktop");
            $(".code-content").addClass("mobile");
       }
}


$(document).ready(function(){
   resizer();
});

$(window).resize(function(){
   resizer(); 
});

$(".code-content").resize(function(){
    resizer();
});







//------------------------------------------------------
// INNER WRAPPER MENU SCRIPTS
//------------------------------------------------------


$(document).ready(function() {
    
    // Menu opening script for devices over 400px
    if ( $(".code-content").width() > 400 ) {        
            $("header #hamburger").click(function() {
                if ( $(".navigation nav").hasClass("open") ) {
                    $(".navigation nav").stop().animate({"margin-left":"-300px"}, 250);
                    $(".navigation header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                    $(".navigation .wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                } else {
                    $(".navigation nav").stop().animate({"margin-left":"0px"}, 250);
                    $(".navigation header").stop().css("min-width", "100vw").animate({"margin-left":"300px"}, 250);
                    $(".navigation .wrapper").stop().css("min-width", "100vw").animate({"left":"300px"}, 250);
                }
                $(".navigation nav, #hamburger").toggleClass("open");
                return false;
            });

            $(".wrapper").click(function() {  
                $(".navigation nav").stop().animate({"margin-left":"-300px"}, 250);
                $(".navigation header").stop().css("min-width", "100%").animate({"margin-left":"0px"}, 250);
                $(".navigation .wrapper").stop().css("min-width", "100%").animate({"left":"0"}, 250);
                $(".navigation nav, #hamburger").removeClass("open");
            });
    }
    //Menu open script for small devices
    else {        
            $(".code-content header #hamburger").click(function() {
                if ( $(".navigation nav").hasClass("open") ) {
                    $(".navigation nav").css("margin-left", "0").stop().animate({"left": "-100%"}, 250);
                    $(".navigation header, .navigation .wrapper").stop().animate({"left": "0"}, 250);
                } else {
                    $(".navigation nav").css("margin-left", "0").stop().animate({"left": "0"}, 250);
                    $(".navigation header, .navigation .wrapper").stop().animate({"left": "0"}, 250);
                }
                $(".navigation nav, #hamburger").toggleClass("open");
                return false;
            });
    }
});







//------------------------------------------------------
// Footer Menu scripts
//------------------------------------------------------

$(document).ready(function() {
   $("footer nav > ul > li > a").click(function(e){
       
        if( $(this).siblings().size() > 0 ) {
            e.preventDefault();    
        };
        
        $("footer nav").css("margin-left", "0");
       
      if ( $(this).parent("li").hasClass("footOpen") ) {
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "none");
          $(this).parent("li").removeClass("footOpen");
      } 
       else {
          $(this).parent("li").addClass("footOpen");
          $("li.footOpen").animate("height");
          $(this).siblings("ul").css("display", "flex");
       }
   });
   $("footer .more").click(function(e){
      e.preventDefault();
       
      if ( $("footer nav").hasClass("footOpen") ) {
          $("footer nav > ul").css("display", "none");
          $("footer nav").removeClass("footOpen");
          $(this).removeClass("footOpen");
      } 
       else {
          $("footer nav > ul").css("display", "flex");
          $("footer nav").addClass("footOpen");
          $(this).addClass("footOpen");
       }
   });
});







//------------------------------------------------------
// Section Header Menu scripts
//------------------------------------------------------
   $("section header .more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".header-menu").siblings(".more-info").hasClass("open") ) {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "none");
          $(this).parents(".header-menu").siblings(".more-info").removeClass("open");
          $(this).removeClass("open");
      } 
       else {
          $(this).parents(".header-menu").siblings(".more-info").css("display", "block");
          $(this).parents(".header-menu").siblings(".more-info").addClass("open");
          $(this).addClass("open");
       }
   });







//------------------------------------------------------
// Card footer Menu scripts
//------------------------------------------------------
   $(".card footer .card-more").click(function(e){
      e.preventDefault();
       
      if ( $(this).parents(".card-footer-menu").siblings(".card-more-info").hasClass("card-open") ) {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "none");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").removeClass("card-open");
          $(this).removeClass("card-open");
      } 
       else {
          $(this).parents(".card-footer-menu").siblings(".card-more-info").css("display", "block");
          $(this).parents(".card-footer-menu").siblings(".card-more-info").addClass("card-open");
          $(this).addClass("card-open");
       }
   });







//------------------------------------------------------
// Unslider scripts
//------------------------------------------------------
jQuery(document).ready(function($) {
			$('.slider').unslider({
				autoplay:false,
				nav: false,
				arrows: true
			});
		});








//------------------------------------------------------
// On page scroll
//------------------------------------------------------

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});








//------------------------------------------------------
// Task Tab Indexing
//------------------------------------------------------

$(document).ready(function(){
   var start = 999;

    $('.task-nav li').each(function(i){
      $(this).css('z-index', start--);
        var boxes = $(".task-nav li");
        boxes.click(function(event) {
            var el = $(this), 
                max = 0;

            boxes.each(function() {

                //--- If a previous state is found, restore it
                if($(this).data("original-index")){
                    $(this).css("z-index", $(this).data("original-index"));
                }
                var z = parseInt( $( this ).css( "z-index" ), 10 );
                max = Math.max( max, z );
            });

            //--- save the clicked element previous z-index
            el.data("original-index", el.css("z-index"));
            el.css("z-index", max + 1 );
        });
    });
    
    $('.tab-group li a').click(function() {
        $(this).addClass("active");
        $(this).parent().siblings().children().removeClass("active");
    });
    
});








//------------------------------------------------------
// Tabbed navigation section change
//------------------------------------------------------

$(document).ready(function() { 
    
    $(".section-wrapper div").css("display", "none");
    $(".section-wrapper div:first-child").css("display", "block");
    
    $(".section-nav li a, .task-nav li a").click(function(event) {
        var  sectionIndex = $(this).parent().index();
        event.preventDefault();
        
        $(this).closest("div").children(".section-wrapper").children("div:nth-child(" + (sectionIndex+1) + ")").css("display", "block").siblings().css("display", "none");
    });
});







//------------------------------------------------------
// On page scroll
//------------------------------------------------------

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
