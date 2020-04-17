;(function($, window, document, undefined) {
    var $win = $(window);
    var $doc = $(document);

    $doc.ready(function() {
        //Show/hide mobile nav
        $('.nav-trigger').on('click' , function(){

            $(this).toggleClass('active');
            $('.nav').toggleClass('active');

        })
    });
})(jQuery, window, document);

