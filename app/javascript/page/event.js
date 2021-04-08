// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollAction, scrollToTopHide, addToTopTrigger, removeToTopTrigger
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
  const ScrollActionItems = scrollActionItems_set(SmoothItems);
  const ToTopItems = toTopItems();
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  switch (media()) {
    case "SP":
      addToTopTrigger(ToTopItems)
      break;
    case "Tab":
      addToTopTrigger(ToTopItems)
      break;
    case "PC":
      removeToTopTrigger(ToTopItems)
      break;
  }
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
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
    switch (changeMedia(startSize)) {
      case "SP":
        addToTopTrigger(ToTopItems);
        break;
      case "Tab":
        addToTopTrigger(ToTopItems);
        break;
      case "PC":
        removeToTopTrigger(ToTopItems);
        break;
    }
    startSize = $(window).width();
  }, false);
});

const scrollActionItems_set = (smoothItems) => {
  const Items = {
    $triggers: [],
    scrollPositions: { start: [], end: [] },
    $targets: [[],[],[],[]]
  }
  for (let i = 0; i < 4; i++) {
    Items.$triggers.push(smoothItems.$targets[i + 1]);
    Items.$targets[i].push(smoothItems.$triggers[i + 1]);
  }
  resetPositions(Items.scrollPositions, Items.$triggers, 15, -15);
  return Items;
}
