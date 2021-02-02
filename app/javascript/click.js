$(function () {
  var CurrentPath = location.pathname;
  if (CurrentPath == "/recruit") {
              console.log('c')
    const $open_triggers = $('.JS_click_open_trigger');
    $open_triggers.on('click', function () {
      // シャドウの削除
      const $hides = $('.JS_click_hide_target')
      $hides.toggleClass("A_isNone");
      // ボタンの表示
      const $button = $('.JS_click_show_target')
      $button.toggleClass("A_isNone");
      // 紹介文の表示
      const $introduction = $('.JS_click_show_introduction_target')
      $introduction.toggleClass("A_isNone");
      // 選択した以外のバックイメージの削除
      const $backImages = $('.JS_click_hide_backImage_target');
      $backImages.not($backImages.eq($(this).index() -1 )).toggleClass("A_isNone");
      // クリックされたかをクラスに記述
      const $show_targets = $('.JS_hover_show_target');
      $show_targets.eq($(this).index() - 1).toggleClass("A_isClicked");
    });
    const $close_trigger = $('.JS_click_close_trigger');
    $close_trigger.on('click', function () {
      // シャドウの表示
      const $hides = $('.JS_click_hide_target')
      $hides.toggleClass("A_isNone");
      // ボタンの削除
      const $button = $('.JS_click_show_target')
      $button.toggleClass("A_isNone");
      // 紹介文の削除
      const $introduction = $('.JS_click_show_introduction_target')
      $introduction.toggleClass("A_isNone");
      // クリックされたかをクラスを削除
      const $clicked_target = $('.A_isClicked');
        // 選択した以外のバックイメージの表示
        const $backImages = $('.JS_click_hide_backImage_target');
        $backImages.not($clicked_target).toggleClass("A_isNone");
      $clicked_target.removeClass("A_isVisible");
      $clicked_target.addClass("A_isInvisible");
      $clicked_target.removeClass("A_isClicked");
    });
    const $flip_trigger = $('.JS_click_flip_trigger');
    $flip_trigger.on('click', function () {
      const $flip_front = $('.JS_click_flip_front_target')
      const $flip_back = $('.JS_click_flip_back_target')
      $flip_front.toggleClass("A_toFlipped--front");
      $flip_back.toggleClass("A_toFlipped--back");
    });
  };
});
