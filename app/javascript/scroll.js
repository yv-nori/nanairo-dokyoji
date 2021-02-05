$(function () {
  let CurrentPath = location.pathname;
  // TODO:共通ファンクションに切り出し（changeMedia）
  if (CurrentPath == "/") {
    // ヘッダー処理の変数を定義
    let startPosition = 0, windowScrollTop = 0;

    // キャッチコピースクロール処理の定数の定義
    //スクロールスタートの取得
    const $scrollTarget = $('.JS_scroll_move_target')
    const targetWidth = $scrollTarget.width();
    const targetHeight = $scrollTarget.height();
    // キャッチコピーのスクロールスタートの地点を定義
    const startOffset = $scrollTarget.offset().top;
    // スクロールエンドの取得
    const $scrollEnd = $('.JS_scroll_move_end_target')
    const endOffset = $scrollEnd.offset().top;
    const endHeight = $scrollEnd.height()
    const maxDistance = (endOffset + endHeight / 2) - (startOffset + targetHeight / 2);

    $(window).on('scroll', function () {
      // ヘッダーの処理
      windowScrollTop = $(this).scrollTop();
      const $header = $('.JS_scroll_hide-Y_target');
      const $header_button = $('.JS_scroll_white_target');
      const $logo_color = $('.JS_scroll_invisible_target');
      const $logo_white = $('.JS_scroll_visible_target');
      const $mouse = $('.JS_scroll_invisible_target_mouse');
      if (windowScrollTop >= startPosition) {
        // ヘッダーを隠す
        $header.addClass('A_isHide-Y');
        // ヘッダーの透明化
        $header.addClass('A_isClear--max');
        // ヘッダーのテキストホワイト
        $header.addClass('A_isWhite');
        // ヘッダーのボタンホワイト
        $header_button.addClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト隠す)
        $logo_color.addClass('A_isVisible');
        $logo_color.removeClass('A_isInvisible');
        $logo_white.addClass('A_isInvisible');
        $logo_white.removeClass('A_isVisible');
        // マウスのロゴの非表示
        $mouse.removeClass('A_isVisible');
        $mouse.addClass('A_isInvisible');
      } else {
        // ヘッダーを表示
        $header.removeClass('A_isHide-Y');
        // ヘッダーの透明化解除
        $header.removeClass('A_isClear--max');
        // ヘッダーのテキストホワイト解除
        $header.removeClass('A_isWhite');
        // ヘッダーのボタンホワイト解除
        $header_button.removeClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト表示)
        $logo_color.removeClass('A_isVisible');
        $logo_color.addClass('A_isInvisible');
        $logo_white.removeClass('A_isInvisible');
        $logo_white.addClass('A_isVisible');
      }
      startPosition = windowScrollTop;
      if (windowScrollTop == 0) {
        // ヘッダーを表示
        $header.removeClass('A_isHide-Y');
        // ヘッダーの透明化
        $header.addClass('A_isClear--max');
        // ヘッダーのテキストホワイト
        $header.addClass('A_isWhite');
        // ヘッダーのボタンホワイト
        $header_button.addClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト隠す)
        $logo_color.addClass('A_isVisible');
        $logo_color.removeClass('A_isInvisible');
        $logo_white.addClass('A_isInvisible');
        $logo_white.removeClass('A_isVisible');
        // マウスのロゴの表示
        $mouse.addClass('A_isVisible');
        $mouse.removeClass('A_isInvisible');
      }
      // キャッチコピースクロールの処理
      const $scrollTarget = $('.JS_scroll_move_target');
      if (windowScrollTop <= maxDistance) {
        $scrollTarget[0].style.cssText = "transform: translate3D(" + (targetWidth * -1) / 2 + "px, " + (windowScrollTop - (targetHeight) / 2) + "px, 0px);";
        $scrollTarget[1].style.cssText = "transform: translate3D(" + (targetWidth * -1) / 2 + "px, " + (windowScrollTop - (targetHeight) / 2) + "px, 0px);";
      }
    });
  };
});
