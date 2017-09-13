$(window).scroll(function() {
    if ( $(window).scrollTop() >= 25 ) {
        $('#nav-1').attr('class', 'navbar navbar-nav fixed-top col-md-12 hidden-xs-up');

        $('#nav-2').attr('class', 'navbar navbar-nav fixed-top col-md-12');

    } else {
        $('#nav-1').attr('class', 'navbar navbar-nav fixed-top col-md-12');

        $('#nav-2').attr('class', 'navbar navbar-nav fixed-top col-md-12 hidden-xs-up');

    }
});

$(window).scroll(function() {
    if ( $(window).scrollTop() >= 30 ) {
        $('#nav-1').css('opacity', '0');

        $('#nav-2').css('opacity', '1.0');

    } else {
        $('#nav-1').css('opacity', '1.0');

        $('#nav-2').css('opacity', '0');

    }
});
