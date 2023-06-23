$('.sub-menu__item--routs a').mouseover(function(){let $this=$(this);let image_src=$this.data('img');let image=$('.sub-menu__item--routs img');image.attr('src',image_src);})
$('.open-popup').click(function(e){e.preventDefault();$('.popup-custom').addClass('open');})
$('.popup-custom__close, .popup-custom__blur').click(function(e){e.preventDefault();$('.popup-custom').removeClass('open');})