$(document).ready(function() {

    function toggleFullscreen(elem) {
      elem = elem || document.documentElement;
      if (!document.fullscreenElement && !document.mozFullScreenElement &&
        !document.webkitFullscreenElement && !document.msFullscreenElement) {
        if (elem.requestFullscreen) {
          elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
          elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
          elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
          elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        }
      }
    }

    $('#toggle-fullscreen').click(function(e) {
      toggleFullscreen();
      e.preventDefault();
    });

    $(document).keyup(function(e) {
      if ( event.which == 122 ) {
        $('#toggle-fullscreen').toggleClass('toggled');
      }
    });

    $(window).resize(function() {
        if (document.fullscreenElement || 
            document.mozFullScreenElement || 
            document.webkitFullscreenElement || 
            document.msFullscreenElement ) {

            $('#toggle-fullscreen').addClass('toggled');

        } else {
            $('#toggle-fullscreen').removeClass('toggled');
        }
    });

});