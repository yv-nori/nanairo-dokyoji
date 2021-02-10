$(function () {
  var CurrentPath = location.pathname;
  if (CurrentPath == "/recruit") {
    const $triggers = $('.JS_hover_trigger');
    $triggers.mouseover(function () {
      // フロントイメージを隠す
      const $hide_targets = $('.JS_hover_hide_target');
      $hide_targets.addClass('A_isInvisible');
      $hide_targets.removeClass('A_isVisible');
      // バックイメージの表示
      const $show_targets = $('.JS_hover_show_target');
      $show_targets.eq($(this).index()-1).addClass("A_isVisible");
      $show_targets.eq($(this).index() - 1).removeClass("A_isInvisible");
      // ホワイトシャドウの表示
      const $show_shadow_targets = $('.JS_hover_show_shadow_target')
      $show_shadow_targets.eq($(this).index()-1).addClass("A_isVisible");
      $show_shadow_targets.eq($(this).index()-1).removeClass("A_isInvisible");
      // テキストのクリア
      const $clear_targets = $('.JS_hover_clear_target')
      $clear_targets.not($clear_targets.eq($(this).index()-1)).toggleClass("A_isClear--tough");
      console.log($(this).index()-1);
    }).mouseout(function () {
      // フロントイメージの表示
      const $hide_targets = $('.JS_hover_hide_target');
      $hide_targets.removeClass("A_isInvisible");
      $hide_targets.addClass("A_isVisible");
      // バックイメージを隠す
      const $show_targets = $('.JS_hover_show_target')
      if ($show_targets.eq($(this).index() - 1).hasClass('A_isClicked')) {
      } else {
        $show_targets.eq($(this).index()-1).removeClass("A_isVisible");
        $show_targets.eq($(this).index() - 1).addClass("A_isInvisible");
      }
      // ホワイトシャドウを隠す
      const $show_shadow_targets = $('.JS_hover_show_shadow_target')
      $show_shadow_targets.eq($(this).index()-1).removeClass("A_isVisible");
      $show_shadow_targets.eq($(this).index() - 1).addClass("A_isInvisible");
      // テキストのクリア
      const $clear_targets = $('.JS_hover_clear_target')
      $clear_targets.not($clear_targets.eq($(this).index() - 1)).toggleClass("A_isClear--tough");
    });
  };
});
