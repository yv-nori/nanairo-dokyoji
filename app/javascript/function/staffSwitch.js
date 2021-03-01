import {
  scrollTrigger, resetPositions
} from "../function/scroll"
// --------------------------------
// メイン処理
// --------------------------------
export let wasClicked = null;
export const staffSwitch = Items => {
  const length = Items.$triggers.length;
  for (let activeItem = 0; activeItem < length; activeItem++) {
    Items.$triggers[activeItem].addEventListener('mouseover', () => {
      hoverActive(Items, activeItem);
    }, false);
    Items.$triggers[activeItem].addEventListener('mouseleave', () => {
      hoverPassive(Items);
    }, false);
    $(Items.$triggers[activeItem]).on('click', () => {
      wasClicked = activeItem;
      open(Items, activeItem);
    });
    $(Items.$closeBtn).on('click', function () {
      close(Items);
      wasClicked = null
    });
  }
}
// スクロールアクション
export const scrollAction = (windowScrollTop, Items) => {
  if (wasClicked === null) {
    let result = scrollTrigger(windowScrollTop, Items.scrollPositions);
    if (result !== false) {
      hoverActive(Items.toggleItems, result)
    } else {
      hoverPassive(Items.toggleItems)
    }
  }
}
// --------------------------------
// 共通関数
// --------------------------------
// ホバー時
const hoverActive = (Items, result) => {
  const length = Items.$triggers.length;
  for (let i = 0; i < length; i++) {
    $(Items.$frontImgs[i]).addClass('A_isInvisible').removeClass('A_isVisible');
    $(Items.$catchCopies[result]).removeClass("A_isClear--tough");
    if (i !== result) {
      $(Items.$catchCopies[i]).addClass("A_isClear--tough");
      $(Items.$backImgs[i]).add($(Items.$whiteShadows[i])).removeClass("A_isVisible").addClass("A_isInvisible");
    }
  }
  $(Items.$backImgs[result]).add(Items.$whiteShadows[result]).addClass("A_isVisible").removeClass("A_isInvisible");
}
// ホバー外れた時
const hoverPassive = (Items) => {
  const length = Items.$triggers.length;
  for (let i = 0; i < length; i++) {
    if (i !== wasClicked) {
      $(Items.$backImgs[i]).removeClass("A_isVisible").addClass("A_isInvisible");
    }
    $(Items.$frontImgs[i]).add((Items.$whiteShadows[i])).removeClass('A_isInvisible').addClass('A_isVisible');
    $(Items.$catchCopies[i]).removeClass("A_isClear--tough");
  }
}
// トリガークリック時
const open = (Items, result) => {
  const length = Items.$triggers.length;
  for (let i = 0; i < length; i++) {
    $(Items.$catchCopies[i]).add($(Items.$whiteShadows[i])).add($(Items.$triggers[i])).add($(Items.$frontImgs[i])).add($(Items.$backImgs[result])).addClass('A_isNone');
  }
  $(Items.$intros[result]).add($(Items.$backImgs[result])).removeClass('A_isNone');
  $(Items.$cover).addClass('A_isNone');
  if (Items.btnPositions[result] === 'JS_L') {
    $(Items.$closeBtn).addClass('left').removeClass('A_isNone');
  } else {
    $(Items.$closeBtn).addClass('right').removeClass('A_isNone');
  }
}
// 閉じるボタンクリック時
const close = (Items) => {
  const length = Items.$triggers.length;
  for (let i = 0; i < length; i++) {
    $(Items.$catchCopies[i]).add($(Items.$whiteShadows[i])).add($(Items.$triggers[i])).add($(Items.$frontImgs[i])).removeClass('A_isNone');
    $(Items.$intros[i]).addClass('A_isNone');
  }
  $(Items.$cover).removeClass('A_isNone');
  $(Items.$closeBtn).addClass('A_isNone').removeClass('left').removeClass('right');
  $(Items.$backImgs[wasClicked]).removeClass('A_isVisible').addClass('A_isInvisible');
}
// --------------------------------
// DOMの格納
// --------------------------------
const _doc = document;
export const staffItems = () => {
  const Items = { 
    toggleItems: {
      $triggers: [],
      $frontImgs: [],
      $whiteShadows: [],
      $catchCopies: [],
      $backImgs: [],
      $intros: [],
      $cover: [_doc.getElementById("JS_staff-switch_target-cover")],
      $closeBtn: [_doc.getElementById("JS_staff-switch_target-btn")],
      btnPositions: [],
    },
    scrollPositions: {
      start: [],
      end: []
    }
  }
  for (let i = 0; i < 4; i++ ) {
    Items.toggleItems.$triggers.push(_doc.getElementById("JS_staff-switch_trigger" + i));
    Items.toggleItems.$frontImgs.push(_doc.getElementById("JS_staff-switch_target" + i + "-frontImg"));
    Items.toggleItems.$whiteShadows.push(_doc.getElementById("JS_staff-switch_target" + i + "-white"));
    Items.toggleItems.$catchCopies.push(_doc.getElementById("JS_staff-switch_target" + i + "-catch"));
    Items.toggleItems.$backImgs.push(_doc.getElementById("JS_staff-switch_target" + i + "-backImg"));
    Items.toggleItems.$intros.push(_doc.getElementById("JS_staff-switch_target" + i + "-intro"));
  }
  resetPositions(Items.scrollPositions, Items.toggleItems.$triggers);
  Items.toggleItems.btnPositions.push(...Items.toggleItems.$closeBtn[0].className.split(' ').slice(-4))
  return Items;
}
