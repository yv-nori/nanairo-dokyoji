import { sp_only } from './func';
// ウィンドウズサイズの切替
$(function () {
  var CurrentPath = location.pathname;
  if (CurrentPath == "/recruit") {
      if (sp_only) {
        console.log("A");
        const $target2 = $('.JS_window-size_target2');
        const $target3 = $('.JS_window-size_target3')
        $target2.removeClass('A_toFadeIn2');
        $target3.removeClass('A_toFadeIn3');
        $target2.addClass('A_toFadeIn1');
        $target3.addClass('A_toFadeIn1');
      } else {
        const $target2 = $('.JS_window-size_target2');
        const $target3 = $('.JS_window-size_target3')
        $target2.addClass('A_toFadeIn2');
        $target3.addClass('A_toFadeIn3');
        $target2.removeClass('A_toFadeIn1');
        $target3.removeClass('A_toFadeIn1');
      }
      $(window).resize(function () {
        if (sp_only) {
          console.log( $('.JS_window-size_target2'));
          const $target2 = $('.JS_window-size_target2');
          const $target3 = $('.JS_window-size_target3')
          $target2.removeClass('A_toFadeIn2');
          $target3.removeClass('A_toFadeIn3');
          $target2.addClass('A_toFadeIn1');
          $target3.addClass('A_toFadeIn1');
        } else {
          const $target2 = $('.JS_window-size_target2');
          const $target3 = $('.JS_window-size_target3')
          $target2.addClass('A_toFadeIn2');
          $target3.addClass('A_toFadeIn3');
          $target2.removeClass('A_toFadeIn1');
          $target3.removeClass('A_toFadeIn1');
        }
      });
    };
  }
);
