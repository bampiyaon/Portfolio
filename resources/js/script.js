$(document).ready(function() {
    $(window).scroll(function() {
        //
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active"); //to make hamburger menu click function
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.owl-carousel').owlCarousel({
        loop: true,
	    autoplay: false,
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
        }
    });
});