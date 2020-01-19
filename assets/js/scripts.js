
$(function() {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });


// Scroll to Top Button
    if ($('.gk-arrow-up').length) {
        var $scroller = $('#scrollToTop'),
            $main = $('body,html'),
            $window = $(window);
        $scroller.css('display', 'none');
        $window.scroll(function() {
            if ($(this).scrollTop() > 0) {
                $scroller.fadeIn();
            } else {
                $scroller.fadeOut();
            }
        });
        $scroller.click(function() {
            $main.animate({
                scrollTop: 0
            }, 400);
            return false;
        });
    }

// IMAGE GALLERY ENLARGE PHOTO
    $('.overlay').on('click', function() {
        $('.enlargeImageModalSource').attr('src', $(this).attr('data-image'));
        $('.model-span').html($(this).attr('data-text'));
        $('#enlargeImageModal').modal('show');
    });

// VIDEO AUTO PLAY JUMBOTRON
    $("video source").each(function() {
        var sourceFile = $(this).attr("data-src");
        $(this).attr("src", sourceFile);
        var video = this.parentElement;
        video.load();
        // uncomment if video is not autoplay
        //video.play();
    });

    /* filter gallery images */
    $(".filter-button").click(function(){

        var value = $(this).attr('data-filter');

        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('2000');

        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");

});

//https://tgomilar.github.io/paroller.js/#demo
$('.gk-jumbotron').paroller({
    factorSm: 0.1,
    factor: 0.4,
    type: 'background',
    direction: 'vertical'
});