$(function () {
  var CurrentPath = location.pathname;
  if (CurrentPath == "/recruit") {
    const $triggers = $('.JS_hover_click_trigger');
    const $frontImgs = $('.JS_hover_click_target_frontImg');
    const $backImgs = $('.JS_hover_click_target_backImg');
    const $frontSdws = $('.JS_hover_target_frontSdw');
    const $frontTxts = $('.JS_hover_target_frontTxt');
    $triggers.mouseover(function () {
      // フロントイメージを隠す
      $frontImgs.addClass('A_isInvisible');
      $frontImgs.removeClass('A_isVisible');
      // バックイメージの表示
      $backImgs.eq($triggers.index(this)).addClass("A_isVisible");
      $backImgs.eq($triggers.index(this)).removeClass("A_isInvisible");
      // ホワイトシャドウの表示
      $frontSdws.eq($triggers.index(this)).addClass("A_isVisible");
      $frontSdws.eq($triggers.index(this)).removeClass("A_isInvisible");
      // テキストのクリア
      $frontTxts.not($frontTxts.eq($triggers.index(this))).toggleClass("A_isClear--tough");
    }).mouseout(function () {
      // フロントイメージの表示
      $frontImgs.removeClass("A_isInvisible");
      $frontImgs.addClass("A_isVisible");
      // バックイメージを隠す
      if (!$backImgs.eq($triggers.index(this)).hasClass('A_isClicked')) {
        $backImgs.eq($triggers.index(this)).removeClass("A_isVisible");
        $backImgs.eq($triggers.index(this)).addClass("A_isInvisible");
      }
      // ホワイトシャドウを隠す
      $frontSdws.eq($triggers.index(this)).removeClass("A_isVisible");
      $frontSdws.eq($triggers.index(this)).addClass("A_isInvisible");
      // テキストのクリア
      $frontTxts.not($frontTxts.eq($triggers.index(this))).toggleClass("A_isClear--tough");
    });
  };
});
