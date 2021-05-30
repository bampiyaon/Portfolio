$(document).ready(function() {
    $(window).scroll(function() {
        /// sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); //to make hamburger menu click function
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.owl-carousel').owlCarousel({
        loop: true,
	    autoplay: true,
	    margin: 20,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav: true,
        responsiveClass:true,
	    items: 1,
        center: true,
        autoplayHoverPause:true,
	    navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            },
        }
    });
});