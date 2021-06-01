// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions
} from "../function/scroll"
import {
  getElements, _doc
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
  const TabChangeItems = tabChangeItems()
  let startPosition = 0;
  let windowScrollTop = 0;
  let timer = false;
  let startSize = 0;
  smoothScroll(SmoothItems);
  menuOpen(HeaderItems);
  headerStatusWhite(HeaderItems.$targets);
  tabChange(TabChangeItems);
  tabChangeAction(TabChangeItems, hashToResult())
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    if (HeaderItems.Activity === 'isPassive') {
      scrollChange(windowScrollTop, startPosition, $ChangeTargets, false);
    }
    scrollToTop(windowScrollTop, startPosition, ToTopItems);
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      changeHeight(TabChangeItems, TabChangeItems.current);
      resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
      resetSmoothPositions(SmoothItems);
      startSize = $(window).width();
    }, 500);
  }, false);
});

const tabChange = Items => {
  for (let result = 0; result < 5; result++) {
    $(Items.$sp_triggers[result]).on('click', () => {
      tabChangeAction(Items, result);
    })
    $(Items.$pc_triggers[result]).on('click', () => {
      tabChangeAction(Items, result);
    })
  }
}
const tabChangeAction = (Items, result) => {
  Items.current = result
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      $(Items.$sp_triggers[i]).removeClass(Items.actions[j]);
      $(Items.$pc_triggers[i]).removeClass(Items.actions[j]);
      $(Items.$targets[i]).removeClass(Items.actions[j]);
      $(Items.$imgs[i]).removeClass('isActive');
    }
    changeHeight(Items, result);
    $(Items.$sp_triggers[i]).addClass(Items.actions[result]);
    $(Items.$pc_triggers[i]).addClass(Items.actions[result]);
    $(Items.$targets[i]).addClass(Items.actions[result]);
  }
  $(Items.$imgs[result]).addClass('isActive');
  history.replaceState('', '', resultToHash(result));
}
const tabChangeItems = () => {
  const Items = {
    $sp_triggers: [],
    $pc_triggers: [],
    $targets: [],
    $imgs: [],
    $trimer: [_doc.getElementById('JS_tabChange_trimer')],
    current: 0,
    actions: ['isPlay', 'isCourtesy', 'isEnvironment', 'isExpression', 'isTogether']
  }
  getElements('JS_tabChange_sp_triggers-', Items.$sp_triggers);
  getElements('JS_tabChange_pc_triggers-', Items.$pc_triggers);
  getElements('JS_tabChange_targets-', Items.$targets);
  getElements('JS_tabChange_img-', Items.$imgs);
  changeHeight(Items, 0);
  return Items
}
const changeHeight = (Items, result) => {
  $(Items.$trimer)[0].style.cssText = "height: " + $(Items.$targets[result]).outerHeight() + "px;"
}
const hashToResult = () => {
  const hash = location.hash;
  let result = 0;
  switch (hash) {
    case '#play':
      result = 0;
      break;
    case '#courtesy':
      result = 1;
      break;
    case '#environment':
      result = 2;
      break;
    case '#expression':
      result = 3;
      break;
    case '#together':
      result = 4;
      break;
  }
  return result
}
const resultToHash = (result) => {
  let hash = '#play'
  switch (result) {
    case 0:
      hash = '#play';
      break;
    case 1:
      hash = '#courtesy';
      break;
    case 2:
      hash = '#environment';
      break;
    case 3:
      hash = '#expression';
      break;
    case 4:
      hash = '#together';
      break;
  }
  return hash
}
