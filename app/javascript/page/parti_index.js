// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, $changeTargets, scrollAction, scrollActionItems, scrollActionStop, scrollToTop, toTopItems, addToTopTrigger, removeToTopTrigger, scrollToTopHide, resetPositions, smoothScroll, smoothItems
} from "../function/scroll"
import {
  media, changeMedia
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
import {
  wrightShabon
} from "../function/shabon"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const $SmoothItems = smoothItems()
  const ScrollActionItems = scrollActionItems();
  const ToTopItems = toTopItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const Shabon = shabonItems()
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  menuOpen(HeaderItems);
  smoothScroll($SmoothItems);
  switch (media()) {
    case "SP":
      wrightShabon(Shabon.$targets, Shabon.params_SP);
      removeToTopTrigger(ToTopItems)
      break;
    case "Tab":
      wrightShabon(Shabon.$targets, Shabon.params_Tab);
      addToTopTrigger(ToTopItems)
      break;
    case "PC":
      wrightShabon(Shabon.$targets, Shabon.params_PC);
      removeToTopTrigger(ToTopItems)
      break;
  }
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets);
    switch (media()) {
      case "SP":
        scrollAction(windowScrollTop, ScrollActionItems);
        scrollToTopHide(ToTopItems.$target);
        break;
      case "Tab":
        scrollAction(windowScrollTop, ScrollActionItems);
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
      case "PC":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ScrollActionItems.scrollPositions, ScrollActionItems.$triggers);
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    scrollActionStop(ScrollActionItems.$targets);
    switch (changeMedia(startSize)) {
      case "SP":
        wrightShabon(Shabon.$targets, Shabon.params_SP);
        removeToTopTrigger(ToTopItems);
        break;
      case "Tab":
        wrightShabon(Shabon.$targets, Shabon.params_Tab);
        addToTopTrigger(ToTopItems);
        break;
      case "PC":
        wrightShabon(Shabon.$targets, Shabon.params_PC);
        removeToTopTrigger(ToTopItems);
        break;
    }
    startSize = $(window).width();
  }, false);
});
// --------------------------------
// シャボンアイテム
// --------------------------------
const _doc = document;
const shabonItems = () => {
  const Shabon = {
    params_PC: [
      [
        { top: '18', left: '5', class: 'P_Pa__kv', size: 'M', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '25', left: '12', class: 'P_Pa__kv', size: 'M', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '32', left: '6', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '38', left: '15', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '45', left: '8', class: 'P_Pa__kv', size: '2L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '58', left: '80', class: 'P_Pa__kv', size: '5L', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '69', left: '86', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'B', direction: 'left', id: '' },
        { top: '75', left: '80', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' }
      ],
      [
        { top: '0', left: '100', class: 'P_Pa__kv', size: '5L', time: '1', pattern: 'B', direction: 'left', id: '' },
        { top: '10', left: '120', class: 'P_Pa__kv', size: '3L', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '21', left: '100', class: 'P_Pa__kv', size: 'S', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '84', left: '-1', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '97', left: '-12', class: 'P_Pa__kv', size: 'M', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '91', left: '12', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '102', left: '0', class: 'P_Pa__kv', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' }
      ]
    ],
    params_Tab: [
      [
        { top: '18', left: '5', class: 'P_Pa__kv', size: 'M', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '25', left: '12', class: 'P_Pa__kv', size: 'M', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '32', left: '6', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '38', left: '15', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '45', left: '8', class: 'P_Pa__kv', size: '2L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '58', left: '80', class: 'P_Pa__kv', size: '5L', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '69', left: '86', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'B', direction: 'left', id: '' },
        { top: '75', left: '80', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' }
      ],
      [
        { top: '0', left: '80', class: 'P_Pa__kv', size: '5L', time: '1', pattern: 'B', direction: 'left', id: '' },
        { top: '10', left: '95', class: 'P_Pa__kv', size: '3L', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '84', left: '-1', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '97', left: '-12', class: 'P_Pa__kv', size: 'M', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '91', left: '12', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '102', left: '0', class: 'P_Pa__kv', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' }
      ]
    ],
    params_SP: [
      [
        { top: '10', left: '5', class: 'P_Pa__kv', size: 'M', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '6', left: '13', class: 'P_Pa__kv', size: 'M', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '12', left: '27', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '38', left: '15', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '22', left: '26', class: 'P_Pa__kv', size: '2L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '64', left: '95', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'B', direction: 'left', id: '' },
        { top: '72', left: '90', class: 'P_Pa__kv', size: 'S', time: '2', pattern: 'B', direction: 'left', id: '' }
      ],
      [
        { top: '0', left: '107', class: 'P_Pa__kv', size: '3L', time: '2', pattern: 'B', direction: 'left', id: '' },
        { top: '21', left: '100', class: 'P_Pa__kv', size: 'S', time: '3', pattern: 'B', direction: 'left', id: '' },
        { top: '80', left: '-3', class: 'P_Pa__kv', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '91', left: '12', class: 'P_Pa__kv', size: '3L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '102', left: '0', class: 'P_Pa__kv', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' }
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
