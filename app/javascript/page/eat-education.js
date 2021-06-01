// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  media, _doc
} from "../function/utility"
import {
  sideNav, sideNavItems, scrollSideNavHide
} from "../function/side_nav"
import {
  headerItems, menuOpen
} from "../function/header"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const $arctext = _doc.getElementById('JS_arctext__target');
  $($arctext).arctext({ radius: 68 })
  const HeaderItems = headerItems();
  const SmoothItems = smoothItems();
  const ToTopItems = toTopItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const SideNavItems = sideNavItems();
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  sideNav(SideNavItems, SmoothItems)
  smoothScroll(SmoothItems);
  menuOpen(HeaderItems);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollSideNavHide(windowScrollTop, SideNavItems);
    if (HeaderItems.Activity === 'isPassive') {
      scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    }
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
    resetPositions(SideNavItems.scrollPositions, SideNavItems.$hideTriggers);
    resetSmoothPositions(SmoothItems);
    startSize = $(window).width();
  }, false);
});
