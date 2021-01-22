$(function () {
  if (location.pathname.match("/")) {
    // メニュー表示のアニメーション
    $('.js-click-openMenu').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.js-open');
      $clickMenu.toggleClass('active');
      $openMenu.toggleClass('isOpen');
    });
  //   // スクロールの時のメニューアニメーション
  //   $(window).scroll(function () {
  //     if ($(window).scrollTop() > 100) {
  //       const $scrollMenu = $('.js-sticky');
  //       const $hides = $('.js-hide')
  //       $scrollMenu.addClass('sticky')
  //       $hides.addClass('hidden')
  //     } else {
  //       const $scrollMenu = $('.js-sticky');
  //       const $hides = $('.js-hide')
  //       $scrollMenu.removeClass('sticky')
  //       $hides.removeClass('hidden')
  //     };
  //   });
    // スライドのスタート表示切替
    $('.js-click-slide-right').on('click', function () {
      const $images = $('.top_image')
      max = $images.length;
      current_order = Number($images.attr('class').slice(-1));
      $images.removeClass('order' + current_order);
      if (current_order < max) {
        $images.addClass('order' + (current_order + 1));
      } else {
        $images.addClass('order' + (current_order - max + 1));
      }
    });
    $('.js-click-slide-left').on('click', function () {
      const $images = $('.top_image')
      max = $images.length;
      current_order = Number($images.attr('class').slice(-1));
      $images.removeClass('order' + current_order);
      if (current_order > 1) {
        $images.addClass('order' + (current_order - 1));
      } else {
        $images.addClass('order' + (max));
      }
    });
  };
});
