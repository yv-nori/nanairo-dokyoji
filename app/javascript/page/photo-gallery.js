// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollAction, scrollToTopHide, addToTopTrigger, removeToTopTrigger, scrollTrigger
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
  const NavOpenItems = navOpenItems();
  const ToTopItems = toTopItems();
  let ScrollActionItems
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  let NavOpenInitPosition
  NavOpenInitPosition = navOpenInitPosition();
  navOpen(NavOpenItems, SmoothItems);
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  headerStatusWhite(HeaderItems.$targets);
  switch (media()) {
    case "SP":
      addToTopTrigger(ToTopItems)
      ScrollActionItems = scrollActionItems_set_sp(SmoothItems, NavOpenItems);
      break;
    case "Tab":
      addToTopTrigger(ToTopItems)
      ScrollActionItems = scrollActionItems_set_pc(SmoothItems);
      break;
    case "PC":
      removeToTopTrigger(ToTopItems)
      ScrollActionItems = scrollActionItems_set_pc(SmoothItems);
      break;
  }
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, HeaderItems.$targets, false);
    scrollAction(windowScrollTop, ScrollActionItems);
    switch (media()) {
      case "SP":
        scrollToTopHide(ToTopItems.$target);
        navOpenInit(windowScrollTop, NavOpenInitPosition, NavOpenItems, SmoothItems)
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
        ScrollActionItems = scrollActionItems_set_sp(SmoothItems, NavOpenItems);
        NavOpenInitPosition = navOpenInitPosition();
        navCloseForSize(NavOpenItems, SmoothItems);
        break;
      case "Tab":
        addToTopTrigger(ToTopItems);
        ScrollActionItems = scrollActionItems_set_pc(SmoothItems);
        navOpenForSize(NavOpenItems, SmoothItems);
        break;
      case "PC":
        removeToTopTrigger(ToTopItems);
        ScrollActionItems = scrollActionItems_set_pc(SmoothItems);
        navOpenForSize(NavOpenItems, SmoothItems);
        break;
    }
    startSize = $(window).width();
  }, false);
});

const scrollActionItems_set_sp = (smoothItems, navOpenItems) => {
  const Items = {
    $triggers: [],
    scrollPositions: { start: [], end: [] },
    $targets: [[],[],[],[]]
  }
  for (let i = 0; i < 4; i++) {
    Items.$triggers.push(smoothItems.$targets[i + 1]);
    Items.$targets[i].push(navOpenItems.$triggers[i]);
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
const scrollActionItems_set_pc = (smoothItems) => {
  const Items = {
    $triggers: [],
    scrollPositions: { start: [], end: [] },
    $targets: [[], [], [], []]
  }
  for (let i = 0; i < 4; i++) {
    Items.$triggers.push(smoothItems.$targets[i + 1]);
    Items.$targets[i].push(smoothItems.$triggers[i + 1]);
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
const _doc = document;
const navOpenItems = () => {
  const Items = {
    $triggers: [
      _doc.getElementById('JS_nav-open-0'),
      _doc.getElementById('JS_nav-open-1'),
      _doc.getElementById('JS_nav-open-2'),
      _doc.getElementById('JS_nav-open-3')
    ]
  }
  return Items;
}
const navOpen = (navOpenItems, smoothItems) => {
  for (let i = 0; i < 4; i++) {
    navOpenItems.$triggers[i].addEventListener('click', () => {
      switch (media()) {
        case "SP":
          $(smoothItems.$triggers[1]).addClass('isOpen');
          $(smoothItems.$triggers[2]).addClass('isOpen');
          $(smoothItems.$triggers[3]).addClass('isOpen');
          $(smoothItems.$triggers[4]).addClass('isOpen');
          $(navOpenItems.$triggers[0]).removeClass('isActive');
          $(navOpenItems.$triggers[1]).removeClass('isActive');
          $(navOpenItems.$triggers[2]).removeClass('isActive');
          $(navOpenItems.$triggers[3]).removeClass('isActive');
      }
    });
    smoothItems.$triggers[i + 1].addEventListener('click', () => {
      switch (media()) {
        case "SP":
          $(smoothItems.$triggers[1]).removeClass('isOpen');
          $(smoothItems.$triggers[2]).removeClass('isOpen');
          $(smoothItems.$triggers[3]).removeClass('isOpen');
          $(smoothItems.$triggers[4]).removeClass('isOpen');
          $(navOpenItems.$triggers[i]).addClass('isActive');
      };
    });
  }
}
const navOpenInit = (windowScrollTop, navOpenInitPosition, navOpenItems, smoothItems) => {
  let result = scrollTrigger(windowScrollTop, navOpenInitPosition)
  if (result === 0) {
    $(smoothItems.$triggers[1]).addClass('isOpen');
    $(smoothItems.$triggers[2]).addClass('isOpen');
    $(smoothItems.$triggers[3]).addClass('isOpen');
    $(smoothItems.$triggers[4]).addClass('isOpen');
    $(navOpenItems.$triggers[0]).removeClass('isActive');
    $(navOpenItems.$triggers[1]).removeClass('isActive');
    $(navOpenItems.$triggers[2]).removeClass('isActive');
    $(navOpenItems.$triggers[3]).removeClass('isActive');
  } else {
    $(smoothItems.$triggers[1]).removeClass('isOpen');
    $(smoothItems.$triggers[2]).removeClass('isOpen');
    $(smoothItems.$triggers[3]).removeClass('isOpen');
    $(smoothItems.$triggers[4]).removeClass('isOpen');
    $(navOpenItems.$triggers[0]).addClass('isActive');
  }
}
const navOpenForSize = (navOpenItems, smoothItems) => {
  $(smoothItems.$triggers[1]).addClass('isOpen');
  $(smoothItems.$triggers[2]).addClass('isOpen');
  $(smoothItems.$triggers[3]).addClass('isOpen');
  $(smoothItems.$triggers[4]).addClass('isOpen');
  $(navOpenItems.$triggers[0]).removeClass('isActive');
  $(navOpenItems.$triggers[1]).removeClass('isActive');
  $(navOpenItems.$triggers[2]).removeClass('isActive');
  $(navOpenItems.$triggers[3]).removeClass('isActive');
}
const navCloseForSize = (navOpenItems, smoothItems) => {
  $(smoothItems.$triggers[1]).removeClass('isOpen');
  $(smoothItems.$triggers[2]).removeClass('isOpen');
  $(smoothItems.$triggers[3]).removeClass('isOpen');
  $(smoothItems.$triggers[4]).removeClass('isOpen');
  $(navOpenItems.$triggers[0]).addClass('isActive');
}
const navOpenInitPosition = () => {
  const Items = {
    start: [0],
    end: [$(window).height()]
  }
  return Items;
}
