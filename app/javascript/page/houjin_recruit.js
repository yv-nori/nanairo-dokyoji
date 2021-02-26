// --------------------------------
// 関数の読み込み
// --------------------------------
import {
  scrollChange, resetPositions
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
  raindropsBlue();
  raindropsBlueDarken();
  staffSwitch(StaffItems.toggleItems);
  menuOpen(HeaderItems);
  accordion(accordionItems());
  let startPosition = 0;
  let windowScrollTop = 0;
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems.$targets);
    if (sp_only()) {
      scrollAction(windowScrollTop, StaffItems);
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(StaffItems.scrollPositions, StaffItems.toggleItems.$triggers)
  }, false);
});
