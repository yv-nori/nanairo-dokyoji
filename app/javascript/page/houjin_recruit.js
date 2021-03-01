// --------------------------------
// 関数の読み込み
// --------------------------------
import {
  scrollChange, resetPositions, toTopItems, scrollToTop, smoothItems, smoothScroll, headerStatusWhite, scrollToTopHide
} from "../function/scroll"
import {
  headerItems, menuOpen
} from "../function/header"
import {
  staffSwitch, scrollAction, staffItems
} from "../function/staffSwitch"
import {
  accordion, accordionItems
} from "../function/accordion";
import {
  raindropsBlue, raindropsBlueDarken
} from "../function/raindrops_items";
import {
  sp_only
} from "../function/utility"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const StaffItems = staffItems();
  const SmoothItems = smoothItems();
  const ToTopItems = toTopItems();
  raindropsBlue();
  raindropsBlueDarken();
  staffSwitch(StaffItems.toggleItems);
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  accordion(accordionItems());
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
    if (sp_only()) {
      scrollAction(windowScrollTop, StaffItems);
      scrollToTopHide(ToTopItems.$target);
    } else {
      scrollToTop(windowScrollTop, startPosition, ToTopItems)
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(StaffItems.scrollPositions, StaffItems.toggleItems.$triggers)
  }, false);
});
