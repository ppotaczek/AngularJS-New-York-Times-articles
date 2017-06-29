/*

    Template Name : DevBlog - Personal Blog Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/


*/


/*

   Table Of Content

   1. Preloader
   2. Smooth Scroll
   3. Scroll To Top
   4. Tooltip
   5. Popover
   6. Ajaxchimp for Subscribe Form
   7. Video and Google Map Popup
   8. Magnific Popup
   9. Image Carousel/Slider
  10. Load More Post
  11. Load More Portfolio
  12. End Box (Popup When Scroll Down)

*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });

       /* Scroll To Top */

        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
         });

        $('.scroll-to-top').click(function(){
          $('html, body').animate({scrollTop : 0},800);
          return false;
          });

       /* Tooltip */

        $('[data-toggle="tooltip"]').tooltip();

       /* Popover */

        $('[data-toggle="popover"]').popover();

       /* Ajaxchimp for Subscribe Form */

        $('#mc-form').ajaxChimp();

       /* Load More Post */

        $("div.blog-post").slice(0, 4).show();

            });

   })(jQuery);
