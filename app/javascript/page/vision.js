// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollAction, scrollActionItems, scrollToTopHide, addToTopTrigger, removeToTopTrigger
} from "../function/scroll"
import {
  media, changeMedia
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
  const ScrollActionItems = scrollActionItems();
  const ToTopItems = toTopItems();
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    if (HeaderItems.Activity === 'isPassive') {
      scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
    }
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
    resetPositions(ScrollActionItems.scrollPositions, ScrollActionItems.$triggers);
    resetSmoothPositions(SmoothItems);
    startSize = $(window).width();
  }, false);
});
