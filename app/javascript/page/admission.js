// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  media, _doc, changeMedia
} from "../function/utility"
import {
  sideNav, sideNavItems, scrollSideNavHide, sideNavHide, sideNavShow
} from "../function/side_nav"
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
  const SideNavItems = sideNavItems();
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  sideNav(SideNavItems, SmoothItems)
  smoothScroll(SmoothItems);
  menuOpen(HeaderItems);
  headerStatusWhite(HeaderItems.$targets);
  switch (media()) {
    case "SP":
      sideNavHide(SideNavItems);
      break;
    case "Tab":
      sideNavShow(SideNavItems);
      break;
    case "PC":
      sideNavShow(SideNavItems);
      break;
  }
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollSideNavHide(windowScrollTop, SideNavItems);
    scrollChange(windowScrollTop, startPosition, $ChangeTargets, false);
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
    switch (changeMedia(startSize)) {
      case "SP":
        sideNavHide(SideNavItems);
      case "Tab":
        sideNavShow(SideNavItems);
        break;
      case "PC":
        sideNavShow(SideNavItems);
        break;
    }
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetPositions(SideNavItems.scrollPositions, SideNavItems.$hideTriggers);
    resetSmoothPositions(SmoothItems);
    startSize = $(window).width();
  }, false);
});
