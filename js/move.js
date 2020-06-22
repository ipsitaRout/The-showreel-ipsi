$(window).load(function() {

    /* 
    setTimeout(function() {
        $('#eye-balls').animate({
            top: -1,
            left:  -10
        }, 350);
    }, 6500);
    setTimeout(function() {
        $('#eye-balls').animate({
            top: 0,
            left:  16
        }, 250);
    }, 7500);
    setTimeout(function(e) {

            var x_temp = e.clientX;
            var y_temp = e.clientY;

            // Calculate X Percentage
            var windowWidth = window.innerWidth;

            var x_percentage_sum = x_temp/windowWidth;
            var x_percentage = x_percentage_sum*100;
            var x_percentage_centered = x_percentage-50;

            // Calculate Y Percentage
            var windowHeight = window.innerHeight;

            var y_percentage_sum = y_temp/windowHeight;
            var y_percentage = y_percentage_sum*100;
            var y_percentage_centered = y_percentage-50;

            // Define Slow Movement [ Background ] *Requires +25px Margin
            var response_x = x_percentage_centered/2.5;
            var response_y = y_percentage_centered/3;

            $('#eye-balls').animate({
                top: response_y,
                left: response_x
            }, 300);

    }, 9000);
    */

//    setTimeout(function() {
        $('body').mousemove(function(e) {

            var x = e.clientX;
            var y = e.clientY;

            // Calculate X Percentage
            var windowWidth = window.innerWidth;

            var x_percentage_sum = x/windowWidth;
            var x_percentage = x_percentage_sum*100;
            var x_percentage_centered = x_percentage-50;

            // Calculate Y Percentage
            var windowHeight = window.innerHeight;

            var y_percentage_sum = y/windowHeight;
            var y_percentage = y_percentage_sum*100;
            var y_percentage_centered = y_percentage-50;

            // Define Slow Movement [ Background ] *Requires +25px Margin
            var response_x = x_percentage_centered/2.5;
            var response_y = y_percentage_centered/3;

            $('#eye-balls').css({
                top: response_y,
                left: response_x
            }, 0);

        });
//    }, 7200);

});
