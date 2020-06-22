$(document).ready(function() {

    // Trigger Progress Bar
    $('#loader > div').animate({'width':'100%'}, 20000);

    // Fade lines in
    $('.lines-container').addClass('show');

    // Loop Pulsating Lines
    function pulseLines() {
       $('.lines.stretch-three').animate({'opacity':'-=0.2'},3000).animate({'opacity':'+=0.2'},3000, pulseLines); 
    }
    pulseLines(); 
    function pulseLinesTwo() {
       $('.lines.stretch-horz').animate({'opacity':'-=0.4'},2500).animate({'opacity':'+=0.4'},2500, pulseLinesTwo); 
    }
    pulseLinesTwo(); 

    /*
    // Give #face 'hovering' effect
    hover_element = $('#face');

    // Loop Shift
    function hoverEffect() {
        setTimeout(function() {
            hover_element.addClass('shift');            
            hoverEffectTwo();
        }, 1200);
    }
    function hoverEffectTwo() {
        setTimeout(function() {
            hover_element.removeClass('shift');            
            hoverEffect();
        }, 1200);
    }
    hoverEffect(); 
    */

});

$(window).load(function() {

    // Set Variables
    body = $('body');
    loader = $('#loader');
    loader_p = $('#loader p');
    loader_span = $('#loader span');
    
    inner_wrapper_scroller = $('#inner-wrapper');

    /* 
     * On Page Load Sequence
     */ 

    resetToTop();

    triggerNiceScroll();

    // Append Img Preload Include After Load#
    setTimeout(function() {
        $.ajax({
           url: 'inc/preload.php',
           success: function(html) {
              body.append(html);
           }
        });
    }, 1000);

    // Trigger Intro Text Animation and Add 'page-loaded' class to body
    setTimeout(function() {
        loader_p.addClass('hide');
        // loader_span.addClass('hide');
    }, 1000);
    setTimeout(function() {
        loader_p.text("Initializing my extravaganza world !").removeClass('hide');
        // loader_span.text("new me!").removeClass('hide');
        
        

    }, 2000);
    setTimeout(function() {
        loader_p.addClass('hide');
        // loader_span.addClass('hide');

        $('#loader > div').clearQueue().stop();
        $('#loader > div').animate({'width':'100%'}, 600).css('opacity','0');
        setTimeout(function() {
            body.addClass('page-loaded');
        }, 600)
    }, 4000);

    // Trigger 'Dialogue' Text (after eyes open) // Thanks Matt [ www.mattboldt.com ]
    var typed = new Typed('#guide-text p', {
        strings: ["Hey. Happy Feet !", "Welcome to my world ! ", "Want to collaberate your Business vission with my stir Creativity? " , "Looking for Something ExtraOrdinary.! I can be useful.", "Think Tank ! "],
        typeSpeed: 36,
        backDelay: 1400,
        backSpeed: 15,
        startDelay: 5500,
        loop: false,
        loopCount: false
    });

    // Pause Logo Carousel unil needed
    $('#logos').cycle('pause');


    /* 
     * Init Instances
     */ 

    // Load Sequence Complete
    setTimeout(function() {
        body.addClass('load-sequence-complete');
    }, 6000);        


    // Menu Open
    $('input#nav-icon').click(function() {
        body.toggleClass('menu-open');
        setTimeout(function() {
            body.toggleClass('open-complete');
        }, 1000);
    });

    // Page Scrolled
    inner_wrapper_scroller.scroll(function() {
        var scrollDist = inner_wrapper_scroller.scrollTop();

        // Check if a section is triggered ( to disable scroll-overlay functionality across other sections.. )
        if ( body.hasClass('section-triggered') ) {
            //// Don't show scroll-overlay

        } else {
            //// Do show scroll-overlay

            // Trigger 'scrolled' Class on Body
            if (scrollDist > 80) {
                if (body.hasClass('scrolled')) {
                    /* already has .scrolled */
                } else {
                    body.addClass('scrolled');

                    // Trigger Scroll Overlay
                    scrollOverlayTrigger();

                    // Pause Typed.js Dialogue
                    typed.stop();

                }
            } else {
                if (body.hasClass('scrolled')) {


                    body.removeClass('scrolled');

                    // Reset Scroll Overlay
                    scrollOverlayReset();

                    // Play Typed.js Dialogue
                    typed.start();

                } else {
                    /* already removed .scrolled */
                }
            }

        }// Check if a section is triggered

    });

    // Enable #inner-wrapper div scroll over child elements
    var innerWrapper = document.getElementById("inner-wrapper");
    function fixedScrolled(e) {
        var evt = window.event || e;
        var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta; //delta returns +120 when wheel is scrolled up, -120 when scrolled down
        inner_wrapper_scroller.scrollTop(inner_wrapper_scroller.scrollTop() - delta);
    }
    var mousewheelevt = (/Gecko\//i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";
    if (innerWrapper.attachEvent)
        innerWrapper.attachEvent("on" + mousewheelevt, fixedScrolled);
    else if (innerWrapper.addEventListener)
        innerWrapper.addEventListener(mousewheelevt, fixedScrolled, false);

    // Force scroll via Arrow buttons
    $('a#down-arrow').click(function(e) {
        e.preventDefault();
        inner_wrapper_scroller.scrollTop(160);
    });
    $('a#up-arrow').click(function(e) {
        e.preventDefault();
        inner_wrapper_scroller.scrollTop(0);
    });

    // Reset Page w/ Back Arrow
    $('a#back-arrow').click(function(e) {
        e.preventDefault();

        resetToTop();

        // Check if carousel is playing and pause if so
        if ( body.hasClass('section-one-triggered') ) {
            setTimeout(function() {
                $('#logos').cycle('pause');
            }, 1000);
        }

        // Check if Section Two needs to be reset
        resetSectionTwo();

        setTimeout(function() {
            // Remove classes which set outgoing transition delays
            body.removeClass('section-one-outgoing').removeClass('section-two-outgoing').removeClass('section-three-outgoing');

        }, 1500);

        // Reset Page Classes
        body.removeClass('section-triggered').removeClass('section-one-triggered').removeClass('section-two-triggered').removeClass('section-three-triggered');

    });

    // Handle Top Level Nav Click & Load Section Instance Classes
    $('nav#top-level ul li a').click(function(e) {
        e.preventDefault();

        // On Mobile - Close Menu When Clicked
        if (body.hasClass('menu-open')) {
            $('#nav-icon').prop('checked', false); // Unchecks it 
            body.removeClass('menu-open').removeClass('open-complete');
        }

        // Reset inner-wrapper to top
        inner_wrapper_scroller.scrollTop(0);

        // Detect which section is clicked
        getID = $(this).attr('ID');

        // Remove scrolled instance class and hide scroll-overlay if top level nav is clicked whilst scroll-overlay is visible
        if ( body.hasClass('scrolled') ) {

            // Reset Scroll Overlay to Initial State & Remove Class
            scrollOverlayReset();
            body.removeClass('scrolled');

            // Reset scroll to top
            inner_wrapper_scroller.scrollTop(0);

        }

        // Add general class for a triggered section
        if ( body.hasClass('section-triggered') ) {
            // Already has class

        } else {
            body.addClass('section-triggered');
        }

        // Check if Section Two needs to be reset
        resetSectionTwo();

        if (getID == 'section1' ) { // Section One Clicked ( Consultancy )
            body.removeClass('section-two-triggered').removeClass('section-three-triggered').addClass('section-one-triggered');

            setTimeout(function() {
                // Add Class to set outgoing transition delays
                body.addClass('section-one-outgoing').removeClass('section-two-outgoing').removeClass('section-three-outgoing');

            }, 1500);

            // Play Logos Carousel
            setTimeout(function() {
                $('#logos').cycle('resume');
            }, 1000);

        } else if (getID == 'section2' ) { // Section Two Clicked ( Development )
            body.removeClass('section-one-triggered').removeClass('section-three-triggered').addClass('section-two-triggered');

            setTimeout(function() {
                revealSectionTwo();
            }, 1000);

            setTimeout(function() {
                // Add Class to set outgoing transition delays
                body.addClass('section-two-outgoing').removeClass('section-one-outgoing').removeClass('section-three-outgoing');

            }, 1500);

            // Check if carousel is playing and pause if so
            setTimeout(function() {
                $('#logos').cycle('pause');
            }, 1000);

        } else if (getID == 'section3' ) { // Section Three Clicked ( UI / UX )
            body.removeClass('section-one-triggered').removeClass('section-two-triggered').addClass('section-three-triggered');

            // Re init NiceScroll
            destroyNiceSCroll();

            setTimeout(function() {
                // Add Class to set outgoing transition delays
                body.addClass('section-three-outgoing').removeClass('section-one-outgoing').removeClass('section-two-outgoing');

                // Re init NiceScroll
                triggerNiceScroll();

            }, 1500);

            // Check if carousel is playing and pause if so
            setTimeout(function() {
                $('#logos').cycle('pause');
            }, 1000);

        } else if (getID == 'home' ) { // Mobile Home Button Clicked

            resetToTop();

            // Check if Section Two needs to be reset
            resetSectionTwo();

            setTimeout(function() {
                // Remove classes which set outgoing transition delays
                body.removeClass('section-one-outgoing').removeClass('section-two-outgoing').removeClass('section-three-outgoing');

            }, 1500);

            // Reset Page Classes
            body.removeClass('section-triggered').removeClass('section-one-triggered').removeClass('section-two-triggered').removeClass('section-three-triggered');
        }

    }); // Nav Click

    // Hover panel hovered
    $('#hover-panel-left').mouseenter(function() {
        body.addClass('hovering-on-panel');
       
    }).mouseleave(function() {
        body.removeClass('hovering-on-panel');
        });

// Hover panel prompt hovered
    // $('#prompt').mouseenter(function() {
       
    //     document.getElementById('hover-panel-left').setAttribute("style","height:100%;top: 0");
    //     document.getElementById('top-level-nav').setAttribute("style","margin-top: 11%;");
       
    //     // document.getElementById('side-strip').setAttribute("style","width: 10px");
      
        

    // }).mouseleave(function() {
       
    //     document.getElementById('hover-panel-left').setAttribute("style","height:100%;top: 7%");
    //     document.getElementById('top-level-nav').setAttribute("style","margin-top: -4%;");
    //     // document.getElementById('side-strip').setAttribute("style","width: 0px");
       
    // });

    // Blink Eyes Occaisionally
    function blink() {

        // Check page state 
        if (body.hasClass('menu-open') || body.hasClass('scrolled')) {
            // Don't blink
        } else {
            // Blink
            $('#face').addClass('blink');
            setTimeout(function() {
                $('#face').removeClass('blink');        
            }, 450);

        }

    }

    (function loop() {

        var rand = Math.round(Math.random() * (30000 - 100)) + 500;
        setTimeout(function() {
                blink();
                loop();  
        }, rand);
    }());

   

});

function resetToTop() {

    // Reset to top of page if scrolled (on refresh)
    window.onbeforeunload = function(){ window.scrollTo(0,0); }

    // Reset to top on event
    inner_wrapper_scroller.scrollTop(0);

}

function scrollOverlayTrigger() {

    setTimeout(function() {
        body.addClass('scroll-transition-complete');
    }, 1500);

    // Create DrawSVG Object for signature
    var mySVG = $('#svg-sig').drawsvg({
        duration: 800,
    });

    setTimeout(function() {

        $('#scroll-overlay').css('transition','transform .6s .75s, opacity .6s .75s, top 0s 1.5s');
        $('#scroll-overlay #scroll-overlay-content h1').css('transition','all .4s 0s');
        $('#scroll-overlay #scroll-overlay-content h2').css('transition-delay','0s');
        $('#scroll-overlay #scroll-overlay-content h3').css('transition-delay','0s');
        $('#scroll-overlay #scroll-overlay-content #scroll-overlay-copy').css('transition-delay','0s');
        $('#toggle-fullscreen').css('transition-delay','1s');

    }, 1000);

    setTimeout(function() {
        mySVG.drawsvg('animate');
    }, 1500);

}

function scrollOverlayReset() {

    setTimeout(function() {
        body.removeClass('scroll-transition-complete');
    }, 1500);

    // Re-Create DrawSVG Object for signature
    var mySVG = $('#svg-sig').drawsvg({
        duration: 800,
    });

    setTimeout(function() {
        $('#scroll-overlay').css('transition','transform .6s .3s, opacity .6s .3s, top 0s 0s');
        $('#scroll-overlay #scroll-overlay-content h1').css('transition','all .4s .8s');
        $('#scroll-overlay #scroll-overlay-content h2').css('transition-delay','.9s');
        $('#scroll-overlay #scroll-overlay-content h3').css('transition-delay','.75s');
        $('#scroll-overlay #scroll-overlay-content #scroll-overlay-copy').css('transition-delay','1.2s');

        mySVG.drawsvg('die');

        $('#toggle-fullscreen').css('transition-delay','0s');

    }, 2000);

}

function defineSVG() {

    // Create DrawSVG Object for signature
    var mySVG = $('#svg-sig').drawsvg({
        duration: 800,
    });

}

function revealSectionTwo() {

    $('section#section-two').css('opacity','1');

    var list_item = $('section#section-two h2');

    setTimeout(function() {

        list_item.each(function(index) {        
            (function(that, i) { 
                var t = setTimeout(function() { 
                    $(that).removeClass('hidden');
                }, 50 * i);
            })(this, index);
        });

    }, 800);

    $('#vert-scroll-container').niceScroll({
        scrollspeed: 40,
        mousescrollstep: 4,
        autohidemode: 'leave',
        cursorcolor: "#141414",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorwidth: "1px",
        spacebarenabled: false,
        enabletranslate3d: false,
        enablekeyboard: false,
        smoothscroll: true,
        sensitiverail: false,
        enablescrollonselection: false,
        disableoutline: true,
        railalign: 'left',
        cursorborderradius: "0px",
        cursorborder: 'none',
        cursorfixedheight: '100',
    });

    // Show First

    // Show Preview
    $('section#section-two h2 a').click(function(e) {

       e.preventDefault();

       winWidth = $(window).width();

       if( winWidth < 962 ) { // Do nothing 
       } else {

            $('#preview').removeClass('show');

            // Get Image
            var getImg = $(this).attr('data-img');

            setTimeout(function() {

                // Add to Preview
                $('#preview img').attr('src','img/work/' + getImg);
                $('#preview').addClass('show');

            }, 350);

        }

    });

}
function resetSectionTwo() {

    // Only Reset if we're on section-two
    if ( body.hasClass('section-two-triggered') ) {
    
        $('section#section-two').css('opacity','0');
        $('#preview').removeClass('show');
    
        setTimeout(function() {
            
            var list_item = $('section#section-two h2');
            list_item.addClass('hidden')

        }, 2000);
    }

}

function triggerNiceScroll() {
    inner_wrapper_scroller.niceScroll({
        scrollspeed: 15,
        mousescrollstep: 15,
        autohidemode: false,
        spacebarenabled: false,
        enabletranslate3d: false,
        enablekeyboard: false,
        smoothscroll: true,
        sensitiverail: false,
        enablescrollonselection: false,
        disableoutline: false,
    });
}
function destroyNiceSCroll() {
    inner_wrapper_scroller.getNiceScroll().remove();
}