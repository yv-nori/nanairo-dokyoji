// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, changeItems, scrollMove, moveItems, scrollAction, actionItems, scrollActionStop, scrollToTop, toTopItems, scrollToTopHide
} from "../function/scroll"
import {
  sp_only
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../page/header"
// --------------------------------
// メイン処理
// --------------------------------
$(function(){
  let CurrentPath = location.pathname;
  if (CurrentPath == "/") {
    const HeaderItems = headerItems();
    const ChangeItems = changeItems(HeaderItems.$changeTargets);
    menuOpen(HeaderItems)
    scrollMethod(ChangeItems.$changeTargets,)
    window.addEventListener('resize', () => {
      scrollMethod(ChangeItems.$changeTargets);
    }, false);
  };
});
const scrollMethod = ChangeTargets => {
  let startPosition = 0;
  let windowScrollTop = 0;
  const MoveItems = moveItems()
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    const ActionItems = actionItems();
    const ToTopItems = toTopItems()
    scrollChange(windowScrollTop, startPosition, ChangeTargets);
    scrollMove(windowScrollTop, MoveItems);
    if (sp_only()) {
      scrollAction(windowScrollTop, ActionItems.active);
      scrollToTopHide(ToTopItems.$target);
    } else {
      scrollToTop(windowScrollTop, startPosition, ToTopItems)
      scrollActionStop(ActionItems.passive);
    }
    startPosition = windowScrollTop;
  });
}
