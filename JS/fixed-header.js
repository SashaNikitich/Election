var header = $(".nav"),
    introH = $("header").innerHeight(),
    scrollOffset = $(window).scrollTop();


/*Header fixed*/
checkScroll(scrollOffset);

$(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);

});

function checkScroll(scrollOffset) {

    if(scrollOffset >= introH) {
        header.addClass("fixed-nav");
    } else {
        header.removeClass("fixed-nav")
    }

}