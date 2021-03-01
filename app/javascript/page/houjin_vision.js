// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollAction, scrollActionItems, scrollToTopHide, addToTopTrigger, removeToTopTrigger
} from "../function/scroll"
import {
  sp_only,pc_only
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
  const ScrollActionItems = scrollActionItems();
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  if (pc_only()) {
    console.log("pc")
    removeToTopTrigger(ToTopItems)
  } else {
    console.log("nopc")
    addToTopTrigger(ToTopItems)
  }
  console.log(ToTopItems)
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
    if (sp_only()) {
      scrollAction(windowScrollTop, ScrollActionItems);
      scrollToTopHide(ToTopItems.$target);
    } else {
      scrollToTop(windowScrollTop, startPosition, ToTopItems)
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    if (pc_only()) {
      removeToTopTrigger(ToTopItems)
    } else {
      addToTopTrigger(ToTopItems)
    }
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetPositions(ScrollActionItems.scrollPositions, ScrollActionItems.$triggers);
    resetSmoothPositions(SmoothItems)
    console.log(ToTopItems)
  }, false);
});
