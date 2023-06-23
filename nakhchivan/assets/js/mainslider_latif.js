    if ($(".banners").length) $(".banners").slick({ autoplay: !0, nextArrow: !1, prevArrow: !1, autoplaySpeed: 4e3, dots: !0 });
    $(".intro_sliders").length &&
        $(".intro_sliders").each(function (t, e) {
            if ($(e).children().length <= 1) return;
            let i = $(e);
            var s = i.slick({ autoplay: !0, nextArrow: !1, prevArrow: !1, autoplaySpeed: 4e3, dots: !0 });
            $(window).width() > 700 &&
                (i.find(".pre-title").addClass("animated fadeInUp"),
                i.find("h1").addClass("animated fadeInUp"),
                i.find(".subtitle").addClass("animated fadeInUp"),
                i.find(".button").addClass("animated fadeInUp"),
                i.find("video").length && (i.find(".section-intro").length > 1 ? i.find("video")[1].play() : i.find("video")[0].play()),
                s.on("beforeChange", function (t, e, s) {
                    i.find(".pre-title").removeClass("animated fadeInUp"),
                        i.find("h1").removeClass("animated fadeInUp"),
                        i.find(".subtitle").removeClass("animated fadeInUp"),
                        i.find(".button").removeClass("animated fadeInUp"),
                        $(e.$slides.get(s)).find("video").length > 0 && ($(e.$slides.get(s)).find("video").get(0).pause(), ($(e.$slides.get(s)).find("video").get(0).currentTime = 0));
                }),
                s.on("afterChange", function (t, e, s) {
                    i.find(".slick-current.slick-active  .pre-title").addClass("animated fadeInUp"),
                        i.find(".slick-current.slick-active  h1").addClass("animated fadeInUp"),
                        i.find(".slick-current.slick-active  .subtitle").addClass("animated fadeInUp"),
                        i.find(".slick-current.slick-active  .button").addClass("animated fadeInUp"),
                        $(e.$slides.get(s)).find("video").length > 0 && $(e.$slides.get(s)).find("video").get(0).play();
                }));
        }),
        $(".sl").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoWidth: !0,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { centerMode: !1, speed: 100, dots: !0, slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".sl").on("afterChange", function (t, e, i, s) {
            $(".slick-slide").find(".thumbnail-info").removeClass("hovered"), $(".slick-current").find(".thumbnail-info").addClass("hovered");
        }),
        $(".sl-tours").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                { breakpoint: 420, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".slick-slider-col-3").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { centerMode: !1, slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".slick-slider-col-4").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
            infinite: !0,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 768, settings: { centerMode: !1, slidesToShow: 1, slidesToScroll: 1 } },
            ],
        }),
        $(".slick-slider-col-2").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right">Next</button>',
            infinite: !0,
            slidesToShow: 2,
            slidesToScroll: 1,
            responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
        });
    var t = $(".slider-status-info");
    $(".slick-slider-3d").on("init reInit afterChange", function (e, i, s, n) {
        var o = (s || 0) + 1;
        t.text(o + "/" + i.slideCount);
    }),
        $(".slick-slider-3d .slider-for").slick({ arrows: !1, fade: !0, adaptiveHeight: !0, slidesToShow: 1, slidesToScroll: 1, asNavFor: ".slick-slider-3d .slider-nav" }),
        $(".slick-slider-3d .slider-nav").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-arrow-circle-left">Previous</button>',
            nextArrow: '<button type="button" class="slick-next far fa-arrow-circle-right">Next</button>',
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".slick-slider-3d .slider-for",
            customPaging: function (t, e) {
                return t.slickCurrentSlide + "/" + (e + 1);
            },
        }),
        ResponsiveHelper.addRange({
            "..768": {
                on: function () {
                    $(".to-slider-on-mobile").slick({ infinite: !1, slidesToShow: 1, slidesToScroll: 1 });
                },
                off: function () {
                    $(".to-slider-on-mobile").slick("unslick");
                },
            },
        }),
        $(".media-slider .slider-for").slick({
            prevArrow: '<button type="button" class="slick-prev far fa-chevron-left"></button>',
            nextArrow: '<button type="button" class="slick-next far fa-chevron-right"></button>',
            fade: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: ".media-slider .slider-nav",
        }),
        $(".media-slider .slider-nav").slick({ arrows: !1, slidesToShow: 4, slidesToScroll: 4, asNavFor: ".media-slider .slider-for", focusOnSelect: !0, responsive: [{ breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } }] });