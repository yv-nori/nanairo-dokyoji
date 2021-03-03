// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, scrollMove, moveItems, scrollAction, scrollActionItems, scrollActionStop, scrollToTop, toTopItems, scrollToTopHide, resetPositions, resetMovePositions, smoothScroll, smoothItems, addToTopTrigger, removeToTopTrigger
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
$(function(){
  const HeaderItems = headerItems();
  const ScrollActionItems = scrollActionItems();
  const ToTopItems = toTopItems();
  const MoveItems = moveItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const $SmoothItems = smoothItems()
  menuOpen(HeaderItems);
  smoothScroll($SmoothItems);
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    scrollMove(windowScrollTop, MoveItems);
    if (pc_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
      addToTopTrigger(ToTopItems);
    } else {
      scrollAction(windowScrollTop, ScrollActionItems);
      scrollToTopHide(ToTopItems.$target);
      removeToTopTrigger(ToTopItems);
    }
    if (tab_only()) {
      scrollToTop(windowScrollTop, startPosition, ToTopItems);
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ScrollActionItems.scrollPositions, ScrollActionItems.$triggers);
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetMovePositions(MoveItems);
    scrollActionStop(ScrollActionItems.$targets);
  }, false);
});
