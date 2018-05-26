$(window).scroll(function() {
    if ( $(window).scrollTop() >= 28 ) {
        $('#nav-1').attr('class', 'd-none');

        $('#nav-2').attr('class', 'navbar navbar-expand-md fixed-top col-md-12');

    } else {
        $('#nav-1').attr('class', 'navbar navbar-expand-md fixed-top col-md-12');

        $('#nav-2').attr('class', 'd-none');

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
$(function (toggleSideBar(evt) {
  var target = $(evt);
});
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
