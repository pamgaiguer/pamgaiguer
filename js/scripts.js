(function($) {
    "use strict";

    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 60
    });

    $('#topNav').affix({
        offset: {
            top: 200
        }
    });

    new WOW().init();

    $('a.page-scroll').bind('click', function(event) {
        var $ele = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($ele.attr('href')).offset().top - 60)
        }, 1450, 'easeInOutExpo');
        event.preventDefault();
    });

    $('.navbar-collapse ul li a').click(function() {
        /* always close responsive nav after click */
        $('.navbar-toggle:visible').click();
    });

    $('#galleryModal').on('show.bs.modal', function (e) {
       $('#galleryImage').attr("src",$(e.relatedTarget).data("src"));

        if ($('#galleryModal').data("href") != ""){
            $('#galleryLink').attr("href",$(e.relatedTarget).data("href"));
            console.log("tem dado, mostro aqui");
        }
        else{
            $('#galleryLink').hide();
            console.log("escondi o link");
        }
    });

    $.getJSON("../languages/english.json", function(r){
        $.each(r, function(key, value){
            $("[data-label='"+key+"']").html(value);
        });
    });

    $(".link-globalization").click(function(e){
        e.preventDefault();
        var arq = $(this).data("language");
        $.getJSON("../languages/"+arq+".json", function(r){
            $.each(r, function(key, value){
            console.log(value);
                $("[data-label='"+key+"']").html(value);
            });
        });

    });
})(jQuery);