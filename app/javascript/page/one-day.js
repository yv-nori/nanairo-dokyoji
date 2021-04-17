// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, scrollAction, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  media, _doc
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
  const ScrollActionItems = scrollActionItems_set(SmoothItems);
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  smoothScroll(SmoothItems);
  menuOpen(HeaderItems);
  headerStatusWhite(HeaderItems.$targets);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets, false);
    scrollAction(windowScrollTop, ScrollActionItems);
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
const scrollActionItems_set = (smoothItems) => {
  const Items = {
    $triggers: [],
    scrollPositions: { start: [], end: [] },
    $targets: [[], []]
  }
  for (let i = 0; i < 2; i++) {
    Items.$triggers.push(smoothItems.$targets[i + 1]);
    Items.$targets[i].push(smoothItems.$triggers[i + 1]);
  }
  console.log(Items)
  resetPositions(Items.scrollPositions, Items.$triggers, 15, -15);
  return Items;
}
