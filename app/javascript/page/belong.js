// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  media
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const SmoothItems = smoothItems();
  const ToTopItems = toTopItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    switch (media()) {
      case "SP":
        scrollToTopHide(ToTopItems.$target);
        break;
      case "Tab":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
      case "PC":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetSmoothPositions(SmoothItems);
    startSize = $(window).width();
  }, false);
});
