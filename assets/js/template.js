//[Master Javascript]

//Project:	Aura Group - Onepage Html Responsive Template
//Version:	1.1
//Last change:	01/07/2017
//Primary use:  Aura Group - Onepage Html Responsive Template 

require('../css/app.scss');

window.$ = window.jQuery = require('jquery');
require('bootstrap');

jQuery(function ($) {
    "use strict";
 	$(window).load(function () {
        // Animate loader off screen
        $(".loader").fadeOut("slow");
    });
	
	
// Masterslider 
	var slider = new MasterSlider();
	 
		slider.control('arrows' ,{insertTo:'#masterslider'});  
		slider.control('bullets'); 
	 
		slider.setup('masterslider' , {
			width:1024,
			height:610,
			space:5,
			view:'fade',
			layout:'fullwidth',
			speed:20,
			autoplay:true
		});	
	
// client slider
    $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 15,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 6,
                    nav: true,
                    dots: false
                }
            }

        });

// prettyPhoto
	$("a[rel^='prettyPhoto[gallery1]']").prettyPhoto();

    });

//Filter	
	$(".filter-button").on('click', function(event){
		
		$(this).parent().find('.active').removeClass('active');
    	$(this).addClass('active');
		
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });

  //  if ($(".filter-button").removeClass("active")) {
//	$(this).removeClass("active");
//	}
//	$(this).addClass("active");

});