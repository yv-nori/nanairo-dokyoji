$(function () {
  if (location.pathname.match("/")) {
    // メニュー表示のアニメーション
    $('.JS_menu-open_trigger').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.JS_menu-open_target');
      $clickMenu.toggleClass('C_button--hamberger--isActive');
      $openMenu.toggleClass('isOpen');
    });
  };
});
