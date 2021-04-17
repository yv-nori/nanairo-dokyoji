// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, scrollMove, moveItems, scrollAction, scrollActionItems, scrollActionStop, scrollToTop, toTopItems, scrollToTopHide, resetPositions, resetMovePositions, smoothScroll, smoothItems, addToTopTrigger, removeToTopTrigger
} from "../function/scroll"
import {
  media
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
import {
  wrightShabon
} from "../function/shabon"
// --------------------------------
// メイン処理
// --------------------------------
$(function(){
  const Shabon = shabonItems()
  wrightShabon(Shabon.$targets, Shabon.params);
  const HeaderItems = headerItems();
  const $SmoothItems = smoothItems()
  const ScrollActionItems = scrollActionItems();
  const ToTopItems = toTopItems();
  const MoveItems = moveItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  let startPosition = 0;
  let windowScrollTop = 0;
  menuOpen(HeaderItems);
  smoothScroll($SmoothItems);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    scrollMove(windowScrollTop, MoveItems);
    switch (media()) {
      case "SP":
        scrollAction(windowScrollTop, ScrollActionItems);
        scrollToTopHide(ToTopItems.$target);
        removeToTopTrigger(ToTopItems);
        break;
      case "Tab":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        addToTopTrigger(ToTopItems);
          break;
      case "PC":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        addToTopTrigger(ToTopItems);
        break;
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
// --------------------------------
// シャボンアイテム
// --------------------------------
const _doc = document;
const shabonItems = () => {
  const Shabon = {
    params: [
      [
        { top: '10', left: '8', class: 'P_Info', size: 'S', time: '2', pattern: 'B', direction: 'left', id: 'JS_scroll-action-0_target-2' },
        { top: '78', left: '12', class: 'P_Info', size: 'M', time: '1', pattern: 'A', direction: 'left', id: 'JS_scroll-action-0_target-3' },
        { top: '15', left: '26', class: 'P_Info', size: '2S', time: '1', pattern: 'A', direction: 'left', id: 'JS_scroll-action-0_target-4' },
        { top: '65', left: '84', class: 'P_Info', size: 'M', time: '2', pattern: 'B', direction: 'left', id: 'JS_scroll-action-0_target-5' },
        { top: '90', left: '90', class: 'P_Info', size: 'L', time: '3', pattern: 'B', direction: 'left', id: 'JS_scroll-action-0_target-6' }
      ],
      [
        { top: '5', left: '94', class: 'P_Info', size: '2S', time: '1', pattern: 'A', direction: 'left', id: 'JS_scroll-action-1_target-2' },
        { top: '25', left: '94', class: 'P_Info', size: 'S', time: '2', pattern: 'B', direction: 'left', id: 'JS_scroll-action-1_target-3' },
        { top: '75', left: '15', class: 'P_Info', size: '2L', time: '1', pattern: 'A', direction: 'left', id: 'JS_scroll-action-1_target-4' },
        { top: '10', left: '77', class: 'P_Info', size: '2S', time: '1', pattern: 'A', direction: 'left', id: 'JS_scroll-action-1_target-5' },
        { top: '90', left: '90', class: 'P_Info', size: '3L', time: '3', pattern: 'B', direction: 'left', id: 'JS_scroll-action-1_target-6' }
      ]
    ],
    $targets: []
  }
  let length = Shabon.params.length;
  for (let i = 0; i < length; i++) {
    Shabon.$targets.push(_doc.getElementById('JS_shabon_target-' + i));
  }
  return Shabon;
}
