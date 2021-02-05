$(function () {
  if (location.pathname.match("/")) {
    // メニュー表示のアニメーション
    // スクロールを禁止する関数
    function noScroll(event) {
      event.preventDefault();
    }
    $('.JS_menu-open_trigger').on('click', function () {
      const $clickMenu = $(this);
      const $openMenu = $('.JS_menu-open_target');
      $clickMenu.toggleClass('C_button--hamberger--isActive');
      $openMenu.toggleClass('A_isOpen');
      // 開く時
      if ($openMenu.hasClass('A_isOpen')) {
        //スクロール禁止
        // スクロール禁止(SP)
        document.addEventListener('touchmove', noScroll, { passive: false });
        // スクロール禁止(PC)
        document.addEventListener('mousewheel', noScroll, { passive: false });
        // ヘッダーの色を変える
        const $clear = $('.JS_scroll_hide-Y_target')
        if ($clear.hasClass('A_isClear--max')) {
          // メニューを開く前の状態をクラスに追加
          $clear.addClass('wasCleared');
          // ヘッダーの透明化解除
          $('.JS_scroll_hide-Y_target').removeClass('A_isClear--max');
          // ヘッダーのテキストホワイト解除
          $('.JS_scroll_hide-Y_target').removeClass('A_isWhite');
          // ヘッダーのボタンホワイト解除
          $('.JS_scroll_white_target').removeClass('A_isWhite__bgc');
          // ロゴの入れ替え(ホワイト表示)
          $('.JS_scroll_invisible_target').removeClass('A_isVisible');
          $('.JS_scroll_invisible_target').addClass('A_isInvisible');
          $('.JS_scroll_visible_target').removeClass('A_isInvisible');
          $('.JS_scroll_visible_target').addClass('A_isVisible');
        };
      // 閉じる時
      } else {
        // スクロール禁止を解除(SP)
        document.removeEventListener('touchmove', noScroll, { passive: false });
        // スクロール禁止を解除(PC)
        document.removeEventListener('mousewheel', noScroll, { passive: false });

        const $clear = $('.JS_scroll_hide-Y_target')
        if ($clear.hasClass('wasCleared')) {
          // メニューを開く前の状態をクラスに追加
          $clear.removeClass('wasCleared');
          // ヘッダーの透明化解除
          $('.JS_scroll_hide-Y_target').addClass('A_isClear--max');
          // ヘッダーのテキストホワイト解除
          $('.JS_scroll_hide-Y_target').addClass('A_isWhite');
          // ヘッダーのボタンホワイト解除
          $('.JS_scroll_white_target').addClass('A_isWhite__bgc');
          // ロゴの入れ替え(ホワイト表示)
          $('.JS_scroll_invisible_target').addClass('A_isVisible');
          $('.JS_scroll_invisible_target').removeClass('A_isInvisible');
          $('.JS_scroll_visible_target').addClass('A_isInvisible');
          $('.JS_scroll_visible_target').removeClass('A_isVisible');
        };
      };
    });
  };
});

// TODO:スクロールを禁止する関数の切り出し↓は参考
(function () {
  // スクロールを禁止する関数
  function noScroll(event) {
    event.preventDefault();
  }
  // スクロール禁止(SP)
  document.addEventListener('touchmove', noScroll, { passive: false });
  // スクロール禁止(PC)
  document.addEventListener('mousewheel', noScroll, { passive: false });

  // スクロール禁止を解除(SP)
  document.removeEventListener('touchmove', noScroll, { passive: false });
  // スクロール禁止を解除(PC)
  document.removeEventListener('mousewheel', noScroll, { passive: false });
})();
