/**
 * cbpAnimatedHeader.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 *
 * Forked by: Amrta Kautsar Faruqi
 */

(function() {
  $(function() {
    var docElem = $(document),
      header = $('.cbp-af-header'),
      didScroll = false,
      changeHeaderOn = 300;

    function init() {
      $(window).on('scroll', function() {
        if(!didScroll) {
          didScroll = true;
          setTimeout( scrollPage, 250);
        }
      });
    }

    function scrollPage() {
      var sy = scrollY();

      if ( sy >= changeHeaderOn ) {
        header.addClass('cbp-af-header-shrink');
      } else {
        header.removeClass('cbp-af-header-shrink');
      }

      didScroll = false;
    }

    function scrollY() {
      return window.pageYOffset || docElem.scrollTop();
    }

    init();
  });
})();
