// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, scrollAction, scrollActionItems, scrollActionStop, scrollToTop, toTopItems, scrollToTopHide, resetPositions, smoothScroll, smoothItems
} from "../function/scroll"
import {
  tab_only, pc_only
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const ScrollActionItems = scrollActionItems();
  const ToTopItems = toTopItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const $SmoothItems = smoothItems()
  menuOpen(HeaderItems);
  smoothScroll($SmoothItems);
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    if (pc_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
    } else {
      scrollAction(windowScrollTop, ScrollActionItems);
      scrollToTopHide(ToTopItems.$target);
    }
    if (tab_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ScrollActionItems.scrollPositions, ScrollActionItems.$triggers);
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    scrollActionStop(ScrollActionItems.$targets);
  }, false);
});
