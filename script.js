$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });

    $(window).scroll(function(e){ 
        var $el = $('.sticky-nav'); 
        var $pageHero = $('.page-hero');


        var isPositionFixed = ($el.css('position') == 'sticky');
        var pageHeroHeight = $pageHero.css('height').replace(/px/g, '');

        if ($(this).scrollTop() > +pageHeroHeight && !isPositionFixed){ 
          $el.css({'transition' : 'all 0.35s ease-in-out', 'position' : 'sticky', 'top': '0px', 'background-color' : 'white', 'z-index' : '99999', 'width' : '100%'}); 

        }
        if ($(this).scrollTop() < +pageHeroHeight && isPositionFixed){
          $el.css({'position': 'relative'}); 
        } 
    });

});