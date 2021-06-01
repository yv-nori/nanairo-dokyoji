// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  sp_only, pc_only, tab_only
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const ToTopItems = toTopItems();
  const SmoothItems = smoothItems();
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    if (HeaderItems.Activity === 'isPassive') {
      scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
    }
    if (pc_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
    }
    if (tab_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
    }
    if (sp_only()) {
      scrollToTopHide(ToTopItems.$target);
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetSmoothPositions(SmoothItems)
  }, false);
});
