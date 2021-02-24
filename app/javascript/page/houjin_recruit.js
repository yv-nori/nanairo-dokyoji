// --------------------------------
// 関数の読み込み
// --------------------------------
import {
  scrollChange
} from "../function/scroll"
import {
  headerItems, menuOpen
} from "../page/header"
import {
  staffSwitch, scrollAction, scrollActionStop, staffItems
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
  let CurrentPath = location.pathname;
  if (CurrentPath == "/contact_recruits") {
    raindropsBlue();
    raindropsBlueDarken();
    const HeaderItems = headerItems();
    menuOpen(HeaderItems);
    accordion(accordionItems());
    scrollMethod(HeaderItems.$changeTargets);
    window.addEventListener('resize', () => {
      scrollMethod(HeaderItems.$changeTargets)
    }, false);
  };
});
const scrollMethod = HeaderItems => {
  let startPosition = 0;
  let windowScrollTop = 0;
  const StaffItems = staffItems();
  staffSwitch(StaffItems.toggleItems);
  $(window).on('scroll',function (){
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems);
    if (sp_only()) {
      scrollAction(windowScrollTop, StaffItems);
    } else {
      scrollActionStop(StaffItems.toggleItems);
    }
    startPosition = windowScrollTop;
  });
}
