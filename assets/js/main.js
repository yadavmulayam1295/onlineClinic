$(document).ready(function () {
    $(".logo").on("click",function(e){e.preventDefault();$(".nav-toggle").removeClass("open");$(".menu-left").removeClass("collapse");$("html, body").animate({scrollTop:0},750,"easeInOutQuad");});$(".nav-toggle").on("click",function(){$(this).toggleClass("open");$(".menu-left").toggleClass("collapse");});$(".menu-left a").on("click",function(){$(".nav-toggle").removeClass("open");$(".menu-left").removeClass("collapse");});var didScroll;var lastScrollTop=0;var delta=5;var navbarHeight=$("header").outerHeight();$(window).scroll(function(event){didScroll=true;});setInterval(function(){if(didScroll){hasScrolled();didScroll=false;}},250);function hasScrolled(){var st=$(this).scrollTop();if(Math.abs(lastScrollTop-st)<=delta)return;if(st>lastScrollTop&&st>navbarHeight){$("header").removeClass("show-nav").addClass("hide-nav");$(".nav-toggle").removeClass("open");$(".menu-left").removeClass("collapse");}else{if(st+$(window).height()<$(document).height()){$("header").removeClass("hide-nav").addClass("show-nav");}} lastScrollTop=st;}

    $(window).scroll(function(){if($(this).scrollTop()>1){$("header").addClass("sticky");}else{$("header").removeClass("sticky");}}
    );

    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.move-up').fadeIn(); 
        } else { 
            $('.move-up').fadeOut(); 
        } 
    }); 
    $('.move-up').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    }); 

      // AOS Instance
      AOS.init();

});