$('.sub-menu__item--routs a').mouseover(function (){
    let $this = $(this);
    let image_src = $this.data('img');
    let image = $('.sub-menu__item--routs img');
    image.attr('src',image_src);
}),

$("#desktop-nav > .nav > li > a").click(function (t) {
                var e = $(this).parent().find(".sub-menu");
                if (e.length) {
                    t.preventDefault();
                    var i = e.hasClass("open");
                    $("#desktop-nav .sub-menu.open").removeClass("open"),
                        i ? e.removeClass("open") : e.addClass("open"),
                        $(".search-popup-opener").find(".icon").removeClass("fa-times").addClass("fa-search"),
                        $(".search-popup-opener").removeClass("opened_opened"),
                        $(".search-popup-holder .popups").fadeOut();
                }
            }),
    $(document).on("click", ".mobile-menu-frame > ul  > li > a ", function (t) {
        var e = $(this).parent();
        if (e.has(">ul").length) return e.find("> ul").slideToggle(), e.siblings().find(">ul").slideUp(), !1;
    }),
    $(document).on("click", ".mobile-menu-frame > ul  > li > ul li a ", function (t) {
        var e = $(this).parent();
        if (e.has("ul").length) return e.find(" ul").addClass("sub_active"), !1;
    }),
    $(document).on("click", ".sub_active li:first span", function () {
        $(this).closest(".sub_active ").removeClass("sub_active");
    });

$(document).on("click", ".nav-opener", function (t) {
        $(".search-popup-opener").hasClass("opened_opened") && ($(".search-popup-opener").removeClass("opened_opened").find(".icon").removeClass("fa-times").addClass("fa-search"), $(".search-popup-holder .popups").fadeOut());
    }),
    $(document).on("click", ".mobile-menu-frame > ul  > li > a ", function (t) {
        var e = $(this).parent();
        if (e.has(">ul").length) return e.find("> ul").slideToggle(), e.siblings().find(">ul").slideUp(), !1;
    }),
    $(document).on("click", ".mobile-menu-frame > ul  > li > ul li a ", function (t) {
        var e = $(this).parent();
        if (e.has("ul").length) return e.find(" ul").addClass("sub_active"), !1;
    }),
    $(document).on("click", ".sub_active li:first span", function () {
        $(this).closest(".sub_active ").removeClass("sub_active");
    });