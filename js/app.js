$(function() {

    let introH = $('#intro').innerHeight();
    let header = $('#header');
    let scrollOffset = $(window).scrollTop();
    
    // Fixed Header
    checkScroll(scrollOffset);

    $(window).on("scroll",function() {
       scrollOffset = $(this).scrollTop();
       checkScroll(scrollOffset);
    });

    function checkScroll() {
        if (scrollOffset > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth scroll
    $("[data-scroll]").on('click',function(event) {
        event.preventDefault();

        let blockId = $(this).data('scroll'); // Получение значения id
        let blockOffset = $(blockId).offset().top;
        $("#nav a").removeClass("active");
        $(this).addClass("active");
        $("html, body").animate({
            scrollTop: blockOffset
        },1000);
    })

    // Burger
    $("#nav-toggle").on('click',function(event) {
        event.preventDefault();

        $('#nav').toggleClass("active");
        $(this).toggleClass("active");
    })

    // Collapse
    $("[data-collapse]").on('click',function(event){
        event.preventDefault();
        $(this).toggleClass('active');

    })
});