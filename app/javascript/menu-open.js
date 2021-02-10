import {
  scrollMoveChange, top, up, noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "./func"
$(function () {
  if (location.pathname.match("/")) {
    $('.JS_menu-open_trigger').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.JS_menu-open_target');
      const $move_change_targets = $('.JS_scroll_move-change_target');
      $clickMenu.toggleClass('C_button--hamberger--isActive');
      $openMenu.toggleClass('A_isOpen');
      // 開く時
      if ($openMenu.hasClass('A_isOpen')) {
        noScrollPC();
        noScrollSP();
        // ヘッダーの色を変える
        if ($move_change_targets.hasClass('isMoveTop')) {
          // メニューを開く前の状態をクラスに追加
          $move_change_targets.addClass('wasCleared');
          scrollMoveChange(up.bind(null, $move_change_targets));
        };
      // 閉じる時
      } else {
        onScrollPC();
        onScrollSP();
        if ($move_change_targets.hasClass('wasCleared')) {
          // メニューを開く前の状態をクラスに追加
          $move_change_targets.removeClass('wasCleared');
          scrollMoveChange(top.bind(null, $move_change_targets));
        };
      };
    });
  };
});
