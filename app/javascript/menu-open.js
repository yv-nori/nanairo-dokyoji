$(function () {
  if (location.pathname.match("/")) {
    // メニュー表示のアニメーション
    $('.js_menu-open_NavBtn_trigger').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.js_menu-open_NavMenu_target');
      $clickMenu.toggleClass('isActive-button');
      $openMenu.toggleClass('isOpen-menu');
    });
  };
});
