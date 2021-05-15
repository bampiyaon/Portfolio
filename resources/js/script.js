$(document).ready(function() {
    $(window).scroll(function() {
        //
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
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
            }
        }
    });
});