$(function () {
  var CurrentPath = location.pathname;
  if (CurrentPath == "/recruit") {
    const $triggers = $('.JS_hover_click_trigger');
    const $backImgs = $('.JS_hover_click_target_backImg');
    const $hideTargets = $('.JS_click_target');
    const $closeTrigger = $('.JS_click_close_trigger');
    const $closeTargets = $('.JS_click_close_target')
    // スタッフ紹介の開く処理
    $triggers.on('click', function () {
      // フロントテキスト、フロントシャドウ、ホバートリガーの削除
      $hideTargets.toggleClass("A_isNone");
      // 紹介文・ボタン表示、トップシャドウの非表示
      $closeTargets.toggleClass("A_isNone");
      // クリックされたかをクラスに記述
      $backImgs.eq($triggers.index(this)).toggleClass("A_isClicked");
    });
    // スタッフ紹介の閉じるボタン処理
    $closeTrigger.on('click', function () {
      // フロントテキスト、フロントシャドウ、ホバートリガーの削除
      $hideTargets.toggleClass("A_isNone")
      // 紹介文・ボタンの非表示、トップシャドウの表示
      $closeTargets.toggleClass("A_isNone");
      // 選択イメージに戻る
      const $clickedTarget = $('.A_isClicked');
      $clickedTarget.removeClass("A_isVisible");
      $clickedTarget.addClass("A_isInvisible");
      // 選択済のクラスを外す
      $clickedTarget.removeClass("A_isClicked");
    });
    // 紹介文のフリップ処理
    const $flipTrigger = $('.JS_click_flip_trigger');
    const $flipFront = $('.JS_click_flip_target_front')
    const $flipBack = $('.JS_click_flip_target_back')
    $flipTrigger.on('click', function () {
      $flipFront.toggleClass("A_toFlipped--front");
      $flipBack.toggleClass("A_toFlipped--back");
    });
  };
});
