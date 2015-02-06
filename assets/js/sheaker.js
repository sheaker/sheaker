$(document).ready(function() {
    $('.feature').matchHeight();

    $('.carousel').carousel({
        interval: 3000
    })

    function onScroll (event) {
        var scrollPos = $(document).scrollTop();

        $('section').each(function () {
            var refElement = $(this);
            var menuButton = $('.navbar .nav li a[href=#'+this.id+']');

            if ((refElement.position().top - 50) <= scrollPos && ((refElement.position().top -50) + refElement.height()) > scrollPos) {
                // Because testimonials are kind of part of our work
                if (this.id === 'testimonials')
                    menuButton = $('.navbar .nav li a[href=#ourwork]');

                $('.navbar .nav .active').removeClass('active');
                menuButton.parent().addClass('active');
            }
            else {
                menuButton.parent().removeClass('active');
            }
        });
    }

    $(document).on('scroll', onScroll);
    $('.navbar .nav li a, .btn-go, .navbar-header .navbar-brand').click(function (event) {
        event.preventDefault();
        var anchor = $(this).attr('href'),
            anchorOffset = $(anchor).offset();

        if (anchorOffset) {
            $('html, body').stop().animate({
                scrollTop: anchorOffset.top
            }, 500, 'swing', function () {
                window.location.hash = anchor;
                $(document).on('scroll', onScroll);
            });
        }
    });
});
