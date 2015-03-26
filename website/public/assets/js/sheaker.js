$(document).ready(function() {
    $('.feature').matchHeight();

    $('.carousel').carousel({
        interval: 3000
    })

    function onScroll (event) {
        var scrollPos = $(document).scrollTop();

        $('section').each(function () {
            var refElement = $(this),
                menuButton = $('.navbar .nav li a[href=#'+this.id+']'),
                scrollOffset = -5;

            if ((refElement.position().top + scrollOffset) <= scrollPos && ((refElement.position().top + scrollOffset) + refElement.height()) > scrollPos) {
                $('.navbar .nav .active').removeClass('active');
                menuButton.parent().addClass('active');
            }
            else {
                menuButton.parent().removeClass('active');
            }
        });
    }

    $(document).on('scroll', onScroll);
    $('.navbar .nav li a, .btn-go, .navbar-header .navbar-brand, .btn-version').click(function (event) {
        event.preventDefault();

        var anchor = $(this).attr('href'),
            anchorOffset = $(anchor).offset(),
            scrollOffset = -0;

        if (anchorOffset) {
            $('html, body').stop(true, false).animate({
                scrollTop: anchorOffset.top + scrollOffset
            }, 500, 'swing', function () {
                history.pushState(null, null, anchor);
                $(document).on('scroll', onScroll);
            });
        }
    });
});
