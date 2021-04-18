$(function () {
    $("#category-btn").blur(function(event) {
        var screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            $("#nav-links").collapse('hide');
        }
    });
});