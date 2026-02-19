////////////////////////////////////////////////////////////////////////////
//// Super awesome horizontal scrolling section
////////////////////////////////////////////////////////////////////////////

$(window).load(function() {

    // Define Animation Values
    ///////////////////////////////////////////////////////////////////////

    // Object 'slide' distance [ px ]
    slide_distance      = 50; 

    // Set One Animation Delays / Duration [ seconds ]
    set_one_delay       = 1.2;
    set_one_duration    = 1.1;

    // Set Two Animation Delays / Duration [ seconds ]
    set_two_delay       = 1.4;
    set_two_duration    = 1.3;

    // Set Three Animation Delays / Duration [ seconds ]
    set_three_delay     = 1.5;
    set_three_duration  = 1.4;

    // Set Four Animation Delays / Duration [ seconds ]
    set_four_delay      = 1.6;
    set_four_duration   = 1.5;


    // Create Variables
    ///////////////////////////////////////////////////////////////////////

    // Create Set One Variables
    var set_one_delay = set_one_delay + 's';
    var set_one_duration = set_one_duration + 's';

    // Create Set Two Variables
    var set_two_delay = set_two_delay + 's';
    var set_two_duration = set_two_duration + 's';

    // Create Set Three Variables
    var set_three_delay = set_three_delay + 's';
    var set_three_duration = set_three_duration + 's';

    // Create Set Four Variables
    var set_four_delay = set_four_delay + 's';
    var set_four_duration = set_four_duration + 's';


    // Create Slide Distance Variable
    var fadeDistance =  slide_distance + 'px';
    var fadeDistanceBack = '-' + fadeDistance;

    // Create Zero Variables
    var delay_zero = '0s';
    var duration_reset = '1s';


    // Force Initial states On Hidden Slides Then Reset on Scroll
    ///////////////////////////////////////////////////////////////////////

    $('#slide-2 .animation-set-1, #slide-2 .animation-set-2, #slide-2 .animation-set-3, #slide-2 .animation-set-4').css('transition-duration', duration_reset).css('left', fadeDistance).css('opacity','0').css('transition-delay', delay_zero);
    $('#slide-3 .animation-set-1, #slide-3 .animation-set-2, #slide-3 .animation-set-3, #slide-3 .animation-set-4').css('transition-duration', duration_reset).css('left', fadeDistance).css('opacity','0').css('transition-delay', delay_zero);
    $('#slide-4 .animation-set-1, #slide-4 .animation-set-2, #slide-4 .animation-set-3, #slide-4 .animation-set-4').css('transition-duration', duration_reset).css('left', fadeDistance).css('opacity','0').css('transition-delay', delay_zero);
    $('#slide-5 .animation-set-1, #slide-5 .animation-set-2, #slide-5 .animation-set-3, #slide-5 .animation-set-4').css('transition-duration', duration_reset).css('left', fadeDistance).css('opacity','0').css('transition-delay', delay_zero);


    // Detect 'Page' Scroll
    inner_wrapper_scroller = $('#inner-wrapper');

    inner_wrapper_scroller.scroll(function() {

        // Get Scroll Distance
        var getScrollTop = inner_wrapper_scroller.scrollTop();

        // Check if a section is triggered ( to disable scroll-overlay functionality across other sections.. )
        if ( $('body').hasClass('section-three-triggered') ) {

            if ( $('body').hasClass('reset-section-three') ) {
                /* Reset */
            } else {

                // Animate Everything on Scroll Distance Triggers
                ///////////////////////////////////////////////////////////////////////

                // Reset Set One
                $('#slide-1 .animation-set-1').css('transition-duration', set_one_duration).css('transition-delay', set_one_delay);

                // Reset Set Two
                $('#slide-1 .animation-set-2').css('transition-duration', set_two_duration).css('transition-delay', set_two_delay);

                // Reset Set Three
                $('#slide-1 .animation-set-3').css('transition-duration', set_three_duration).css('transition-delay', set_three_delay);

                // Reset Set Four
                $('#slide-1 .animation-set-4').css('transition-duration', set_four_duration).css('transition-delay', set_four_delay);

                if ( getScrollTop < 250 ) {

                    $('#slide-1 .animation-set-1').css('transition-delay', set_one_delay).css('left','0').css('opacity','1');
                    $('#slide-2 .animation-set-1').css('transition-delay', delay_zero).css('transition-duration', set_one_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-2').css('transition-delay', set_two_delay).css('left','0').css('opacity','1');
                    $('#slide-2 .animation-set-2').css('transition-delay', delay_zero).css('transition-duration', set_two_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-3').css('transition-delay', set_three_delay).css('left','0').css('opacity','1');
                    $('#slide-2 .animation-set-3').css('transition-delay', delay_zero).css('transition-duration', set_three_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-4').css('transition-delay', set_four_delay).css('left','0').css('opacity','1');
                    $('#slide-2 .animation-set-4').css('transition-delay', delay_zero).css('transition-duration', set_four_duration).css('left', fadeDistance).css('opacity','0');

                    // Update Arrows On Scroll
                    $('a#scroll-forward').css('opacity','1');
                    $('a#scroll-back').css('opacity','0');
                    $('#scroll-tip span.counter').text('1');

                }
                if ( getScrollTop > 250 && getScrollTop < 500 ) {

                    $('#slide-1 .animation-set-1').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-2 .animation-set-1').css('transition-delay', set_one_delay).css('left','0').css('opacity','1');
                    $('#slide-3 .animation-set-1').css('transition-delay', delay_zero).css('transition-duration', set_one_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-2').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-2 .animation-set-2').css('transition-delay', set_two_delay).css('left','0').css('opacity','1');
                    $('#slide-3 .animation-set-2').css('transition-delay', delay_zero).css('transition-duration', set_two_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-3').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-2 .animation-set-3').css('transition-delay', set_three_delay).css('left','0').css('opacity','1');
                    $('#slide-3 .animation-set-3').css('transition-delay', delay_zero).css('transition-duration', set_three_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-1 .animation-set-4').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-2 .animation-set-4').css('transition-delay', set_four_delay).css('left','0').css('opacity','1');
                    $('#slide-3 .animation-set-4').css('transition-delay', delay_zero).css('transition-duration', set_four_duration).css('left', fadeDistance).css('opacity','0');

                    // Update Arrows On Scroll
                    $('a#scroll-forward').css('opacity','1');
                    $('a#scroll-back').css('opacity','1');
                    $('#scroll-tip span.counter').text('2');

                }
                if ( getScrollTop > 500 && getScrollTop < 750 ) {

                    $('#slide-2 .animation-set-1').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-3 .animation-set-1').css('transition-delay', set_one_delay).css('transition-duration', set_one_duration).css('left','0').css('opacity','1');
                    $('#slide-4 .animation-set-1').css('transition-delay', delay_zero).css('transition-duration', set_one_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-2 .animation-set-2').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-3 .animation-set-2').css('transition-delay', set_two_delay).css('transition-duration', set_two_duration).css('left','0').css('opacity','1');
                    $('#slide-4 .animation-set-2').css('transition-delay', delay_zero).css('transition-duration', set_two_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-2 .animation-set-3').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-3 .animation-set-3').css('transition-delay', set_three_delay).css('transition-duration', set_three_duration).css('left','0').css('opacity','1');
                    $('#slide-4 .animation-set-3').css('transition-delay', delay_zero).css('transition-duration', set_three_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-2 .animation-set-4').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-3 .animation-set-4').css('transition-delay', set_four_delay).css('transition-duration', set_four_duration).css('left','0').css('opacity','1');
                    $('#slide-4 .animation-set-4').css('transition-delay', delay_zero).css('transition-duration', set_four_duration).css('left', fadeDistance).css('opacity','0');

                    // Update Arrows On Scroll
                    $('a#scroll-forward').css('opacity','1');
                    $('a#scroll-back').css('opacity','1');
                    $('#scroll-tip span.counter').text('3');

                }
                if ( getScrollTop > 750 && getScrollTop < 1000 ) {

                    $('#slide-3 .animation-set-1').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-4 .animation-set-1').css('transition-delay', set_one_delay).css('transition-duration', set_one_duration).css('left','0').css('opacity','1');
                    $('#slide-5 .animation-set-1').css('transition-delay', delay_zero).css('transition-duration', set_one_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-3 .animation-set-2').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-4 .animation-set-2').css('transition-delay', set_two_delay).css('transition-duration', set_two_duration).css('left','0').css('opacity','1');
                    $('#slide-5 .animation-set-2').css('transition-delay', delay_zero).css('transition-duration', set_two_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-3 .animation-set-3').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-4 .animation-set-3').css('transition-delay', set_three_delay).css('transition-duration', set_three_duration).css('left','0').css('opacity','1');
                    $('#slide-5 .animation-set-3').css('transition-delay', delay_zero).css('transition-duration', set_three_duration).css('left', fadeDistance).css('opacity','0');

                    $('#slide-3 .animation-set-4').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-4 .animation-set-4').css('transition-delay', set_four_delay).css('transition-duration', set_four_duration).css('left','0').css('opacity','1');
                    $('#slide-5 .animation-set-4').css('transition-delay', delay_zero).css('transition-duration', set_four_duration).css('left', fadeDistance).css('opacity','0');

                    // Update Arrows On Scroll
                    $('a#scroll-forward').css('opacity','1');
                    $('a#scroll-back').css('opacity','1');
                    $('#scroll-tip span.counter').text('4');

                }
                if ( getScrollTop > 1000 ) {

                    $('#slide-4 .animation-set-1').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-5 .animation-set-1').css('transition-delay', set_one_delay).css('transition-duration', set_one_duration).css('left','0').css('opacity','1');

                    $('#slide-4 .animation-set-2').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-5 .animation-set-2').css('transition-delay', set_two_delay).css('transition-duration', set_two_duration).css('left','0').css('opacity','1');

                    $('#slide-4 .animation-set-3').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-5 .animation-set-3').css('transition-delay', set_three_delay).css('transition-duration', set_three_duration).css('left','0').css('opacity','1');

                    $('#slide-4 .animation-set-4').css('transition-delay', delay_zero).css('left', fadeDistanceBack).css('opacity','0');
                    $('#slide-5 .animation-set-4').css('transition-delay', set_four_delay).css('transition-duration', set_four_duration).css('left','0').css('opacity','1');

                    // Update Arrows On Scroll
                    $('a#scroll-forward').css('opacity','0');
                    $('a#scroll-back').css('opacity','1');
                    $('#scroll-tip span.counter').text('5');

                }

            }

        }

    });

    // Force Reset When Leaving Section Three
    ///////////////////////////////////////////////////////////////////////

    $('a#back-arrow, nav#top-level ul li a').click(function() {
        $('body').addClass('reset-section-three');
    });


    $('nav#top-level ul li a#section3').click(function() {
        if ( $('body').hasClass('reset-section-three') ) {

            setTimeout(function() {
                $('body').removeClass('reset-section-three');
            }, 100);
            
        }
    });


    // Force Slide Navigation Via Arrows
    ///////////////////////////////////////////////////////////////////////

    // Get Scroll Position
    $('a#scroll-forward').click(function(e) {

        e.preventDefault();

        // Get Scroll Distance
        var getScrollPos = $('#inner-wrapper').scrollTop();

        if ( getScrollPos < 250 ) {
            inner_wrapper_scroller.scrollTop(260);
        } else if ( getScrollPos > 250 && getScrollPos < 500 ) {
            inner_wrapper_scroller.scrollTop(560);
        } else if ( getScrollPos > 500 && getScrollPos < 750 ) {
            inner_wrapper_scroller.scrollTop(810);
        } else if ( getScrollPos > 750 && getScrollPos < 1000 ) {
            inner_wrapper_scroller.scrollTop(1060);
        }

    });

    $('a#scroll-back').click(function(e) {

        e.preventDefault();

        // Get Scroll Distance
        var getScrollPos = $('#inner-wrapper').scrollTop();

        if ( getScrollPos > 250 && getScrollPos < 500 ) {
            inner_wrapper_scroller.scrollTop(0);
        } else if ( getScrollPos > 500 && getScrollPos < 750 ) {
            inner_wrapper_scroller.scrollTop(251);
        } else if ( getScrollPos > 750 && getScrollPos < 1000 ) {
            inner_wrapper_scroller.scrollTop(501);
        } else if ( getScrollPos > 1000 ) {
            inner_wrapper_scroller.scrollTop(751);
        }

    });

});
