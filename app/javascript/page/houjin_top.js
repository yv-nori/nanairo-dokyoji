// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, scrollMove, moveItems, scrollAction, actionItems, scrollActionStop, scrollToTop, toTopItems, scrollToTopHide, resetPositions, resetMovePositions
} from "../function/scroll"
import {
  sp_only
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
import {
  smoothScroll
}from "../function/smoothScroll"
// --------------------------------
// メイン処理
// --------------------------------
$(function(){
  const HeaderItems = headerItems();
  const ActionItems = actionItems();
  const ToTopItems = toTopItems();
  const MoveItems = moveItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  menuOpen(HeaderItems);
  smoothScroll(ToTopItems.$target);
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    scrollMove(windowScrollTop, MoveItems);
    if (sp_only()) {
      scrollAction(windowScrollTop, ActionItems);
      scrollToTopHide(ToTopItems.$target);
    } else {
      scrollToTop(windowScrollTop, startPosition, ToTopItems)
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ActionItems.scrollPositions, ActionItems.$triggers);
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetMovePositions(MoveItems);
    scrollActionStop(ActionItems);
  }, false);
});
