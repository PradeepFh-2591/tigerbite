
jQuery(document).ready(function($) {
    "use strict";
    jQuery( ".page-scroll" ).on( "click", function(event) {
        var anchor = jQuery(this);
        var id = anchor.attr('href');
        var navHeight = 0;
        // if(jQuery(id).attr("class") == "row")
        // var navHeight = 160;
        jQuery('html, body').stop().animate({
                scrollTop: jQuery(id)
                    .offset()
                    .top - navHeight + "px"
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    var offset = 0;

    var pageSection = $('[data-background]');
    pageSection.each(function(indx){
    	if ($(this).attr("data-background")){
    		$(this).css("background-image", "url(" + $(this).data("background") + ")");
    	}
    });

    $("#postcode").focus();

    $(function(){
    	var $grid = $('.isotope-grid');
        $grid.imagesLoaded( function() {
            $grid.isotope({
                itemSelector: '.grid-item',
                percentPosition: true,
                masonry: {
                  // use outer width of grid-sizer for columnWidth
                  columnWidth: '.grid-sizer'
                }
            });
        });
      		
    });

    $('.parallax-bg').parallax();
});    


/* ------------------------
active class for nav links
--------------------------- */ 
$('.nav-link').filter(function(){
    return this.href === location.href;
}).addClass('active');


/* ------------------------
menu slider for about us page
--------------------------- */ 
$.getScript("https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js", function() { 
    $('.menu-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        items:2,
        autoplay:true, 
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1025:{
                items:2
            }
        }
    });

    $('.img-carousel').owlCarousel({
        loop: true,
        margin: 50,
        nav: false,
        dots: true,
        dotsEach: 2,
        autoplay: true,
        autoplayTimeout: 3000,
        stagePadding: 150,
        smartSpeed: 1000,
        responsive:{
            0:{
                items:1,
                margin: 20,
                stagePadding: 10
            },
            576:{
                items:1,
                stagePadding: 100
            },
            768:{
                items:1,
                stagePadding: 250
            },
            992:{
                items:1,
                stagePadding: 300
            },
            1200:{
                items:3
            }
        }
    })

    $('.full-img-slider').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 2000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            }
        }
    })
});


/* ------------------------
Franchise form Validation
--------------------------- */ 
const form = document.getElementById("franchise-form");
const fullName = document.getElementById("name-input");
const age = document.getElementById("age-input");
const email = document.getElementById("email-input");
const locate = document.getElementById("location-input");
const invest = document.getElementById("investment-input");
const exp = document.getElementById("experience-input");
const submitBtn = document.getElementById("submitBtn");

form.addEventListener('submit',(e)=> {
    if(!validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {
    const fullNameVal = fullName.value.trim();
    const ageVal = age.value.trim();
    const emailVal = email.value.trim();
    const locateVal = locate.value.trim();
    const investVal = invest.value.trim();
    const expVal = exp.value.trim();
    let success = true;

    // full-name
    if(fullNameVal === '') {
        success = false;
        setError(fullName,'Fullname is required')
    } 
    else if(fullNameVal.length <= 2) {
        success = false;
        setError(fullName,'Fullname must be at least 3 characters.')
    }
    else {
        setSuccess(fullName);
    }

    // age
    if(ageVal === '') {
        success = false;
        setError(age,'Age is required')
    } 
    else {
        setSuccess(age);
    }

    // email
    if(emailVal === '') {
        success = false;
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)) {
        success = false;
        setError(email,'Please enter a valid Email')
    }
    else {
        setSuccess(email)
    }

    // location
    if(locateVal === '') {
        success = false;
        setError(locate,'Please enter the location')
    }
    else {
        setSuccess(locate)
    }

    // investment
    if(investVal === '') {
        success = false;
        setError(invest,'Please fill this field')
    }
    else {
        setSuccess(invest)
    }

    // experience
    if(expVal === '') {
        success = false;
        setError(exp,'Please enter your experience')
    }
    else {
        setSuccess(exp)
    }
    return success;
}

function setError(element,message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error-msg");

    errorElement.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');
}

function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector(".error-msg");

    errorElement.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};







