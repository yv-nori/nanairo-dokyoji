// --------------------------------
// 関数の読み込み
// --------------------------------
import {
  scrollChange, resetPositions, toTopItems, scrollToTop, smoothItems, smoothScroll, scrollToTopHide
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
  media, changeMedia, _doc
} from "../function/utility"
import {
  wrightShabon
} from "../function/shabon"
import {
  modal, modalItems
} from "../function/modal"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const StaffItems = staffItems();
  const SmoothItems = smoothItems();
  const ToTopItems = toTopItems();
  const Shabon = shabonItems();
  const ModalItems = modalItems();
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  switch (media()) {
    case "SP":
      wrightShabon(Shabon.$targets, Shabon.params_SP);
      break;
    case "Tab":
      wrightShabon(Shabon.$targets, Shabon.params_Tab);
      break;
    case "PC":
      wrightShabon(Shabon.$targets, Shabon.params_PC);
      break;
  }
  raindropsBlue(330);
  raindropsBlueDarken();
  staffSwitch(StaffItems.toggleItems);
  menuOpen(HeaderItems);
  smoothScroll(SmoothItems);
  accordion(accordionItems());
  modal(ModalItems);
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    if (HeaderItems.Activity === 'isPassive') {
      scrollChange(windowScrollTop, startPosition, HeaderItems.$targets);
    }
    switch (media()) {
      case "SP":
        scrollAction(windowScrollTop, StaffItems);
        scrollToTopHide(ToTopItems.$target);
        break;
      case "Tab":
        scrollToTop(windowScrollTop, startPosition, ToTopItems)
        break;
      case "PC":
        scrollToTop(windowScrollTop, startPosition, ToTopItems)
        break;
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(StaffItems.scrollPositions, StaffItems.toggleItems.$triggers)
    switch (changeMedia(startSize)) {
      case "SP":
        wrightShabon(Shabon.$targets, Shabon.params_SP);
        break;
      case "Tab":
        wrightShabon(Shabon.$targets, Shabon.params_Tab);
        break;
      case "PC":
        wrightShabon(Shabon.$targets, Shabon.params_PC);
        break;
    }
    startSize = $(window).width();
  }, false);
});
// --------------------------------
// シャボンアイテム
// --------------------------------
const shabonItems = () => {
  const Shabon = {
    params_PC: [
      [
        { top: '18', left: '8', class: 'P_Recruit__kv', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '32', left: '20', class: 'P_Recruit__kv', size: '3L', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '45', left: '12', class: 'P_Recruit__kv', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '10', left: '83', class: 'P_Recruit__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '11', left: '90', class: 'P_Recruit__kv', size: '2S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '18', left: '92', class: 'P_Recruit__kv', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '13', left: '96', class: 'P_Recruit__kv', size: '3S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '5', left: '90', class: 'P_Recruit__kv', size: '3S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '95', left: '18', class: 'P_Recruit__kv', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '94', left: '10', class: 'P_Recruit__kv', size: 'M', time: '3', pattern: 'B', direction: 'right', id: '' },
        { top: '97', left: '3', class: 'P_Recruit__kv', size: '3S', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '86', class: 'P_Recruit__kv', size: '3L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '90', left: '92', class: 'P_Recruit__kv', size: 'M', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '94', left: '86', class: 'P_Recruit__kv', size: '3S', time: '1', pattern: 'A', direction: 'right', id: '' }
      ],
      [
        { top: '-2', left: '6', class: 'P_Recruit__concept', size: 'M', time: '3', pattern: 'B', direction: 'right', id: '' },
        { top: '98', left: '94', class: 'P_Recruit__concept', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '100', left: '100', class: 'P_Recruit__concept', size: '3S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '10', left: '0', class: 'P_Recruit__concept', size: 'S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '15', left: '10', class: 'P_Recruit__concept', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '84', left: '95', class: 'P_Recruit__concept', size: 'L', time: '1', pattern: 'B', direction: 'right', id: '' }
      ],
      [
        { top: '74', left: '7', class: '', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '15', class: '', size: '3L', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '93', left: '10', class: '', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '81', left: '83', class: '', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '82', left: '92', class: '', size: '2S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '90', left: '92', class: '', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '92', left: '96', class: '', size: '3S', time: '3', pattern: 'B', direction: 'left', id: '' }
      ]
    ],
    params_Tab: [
      [
        { top: '45', left: '19', class: 'P_Recruit__kv', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '24', left: '83', class: 'P_Recruit__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '28', left: '92', class: 'P_Recruit__kv', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '25', left: '96', class: 'P_Recruit__kv', size: '3S', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '76', left: '4', class: 'P_Recruit__kv', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '92', left: '7', class: 'P_Recruit__kv', size: '3S', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '86', class: 'P_Recruit__kv', size: '3L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '90', left: '92', class: 'P_Recruit__kv', size: 'M', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '94', left: '86', class: 'P_Recruit__kv', size: '3S', time: '1', pattern: 'A', direction: 'right', id: '' }
      ],
      [
        { top: '-2', left: '6', class: 'P_Recruit__concept', size: 'M', time: '3', pattern: 'B', direction: 'right', id: '' },
        { top: '98', left: '94', class: 'P_Recruit__concept', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '100', left: '100', class: 'P_Recruit__concept', size: '3S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '10', left: '0', class: 'P_Recruit__concept', size: 'S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '15', left: '10', class: 'P_Recruit__concept', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '84', left: '95', class: 'P_Recruit__concept', size: 'L', time: '1', pattern: 'B', direction: 'right', id: '' }
      ],
      [
        { top: '74', left: '7', class: '', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '93', left: '10', class: '', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '92', class: '', size: '2S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '90', left: '92', class: '', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '92', left: '96', class: '', size: '3S', time: '3', pattern: 'B', direction: 'left', id: '' }
      ]
    ],
    params_SP: [
      [
        { top: '4', left: '75', class: 'P_Recruit__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '10', left: '83', class: 'P_Recruit__kv', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '10', left: '90', class: 'P_Recruit__kv', size: '3S', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '49', left: '40', class: 'P_Recruit__kv', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '65', left: '49', class: 'P_Recruit__kv', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '72', left: '40', class: 'P_Recruit__kv', size: 'S', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '86', class: 'P_Recruit__kv', size: '3L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '90', left: '92', class: 'P_Recruit__kv', size: 'M', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '94', left: '86', class: 'P_Recruit__kv', size: '3S', time: '1', pattern: 'A', direction: 'right', id: '' }
      ],
      [
        { top: '-2', left: '6', class: 'P_Recruit__concept', size: 'M', time: '3', pattern: 'B', direction: 'right', id: '' },
        { top: '98', left: '94', class: 'P_Recruit__concept', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '100', left: '100', class: 'P_Recruit__concept', size: '3S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '13', left: '0', class: 'P_Recruit__concept', size: '3S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '17', left: '10', class: 'P_Recruit__concept', size: '3S', time: '1', pattern: 'B', direction: 'right', id: '' },
        { top: '80', left: '95', class: 'P_Recruit__concept', size: 'L', time: '1', pattern: 'B', direction: 'right', id: '' }
      ],
      [
        { top: '74', left: '7', class: '', size: '3L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '93', left: '10', class: '', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '82', left: '92', class: '', size: '2S', time: '3', pattern: 'A', direction: 'left', id: '' },
        { top: '90', left: '92', class: '', size: '2S', time: '2', pattern: 'A', direction: 'left', id: '' },
        { top: '92', left: '96', class: '', size: '3S', time: '3', pattern: 'B', direction: 'left', id: '' }
      ]
    ],
    $targets: []
  }
  let length = Shabon.params_PC.length;
  for (let i = 0; i < length; i++) {
    Shabon.$targets.push(_doc.getElementById('JS_shabon_target-' + i));
  }
  return Shabon;
}
