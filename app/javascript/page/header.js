import {
  scrollStatus, isUp, isTop
} from "../function/scroll"
import {
  noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "../function/utility"

export const menuOpen = Items => {
  let headerStatus = null;
  $(Items.forOpen.$trigger).on('click', function () {
    $(this).toggleClass('isActive');
    let length = Items.forOpen.$targets.length;
    for (let i = 0; i < length; i++) {
      $(Items.forOpen.$targets[i]).toggleClass('isOpen');
    }
    if ($(Items.forOpen.$targets[0]).hasClass('isOpen')) {
      noScrollPC();
      noScrollSP();
      if ($(Items.$changeTargets[0]).hasClass('isMoveTop')) {
        let length = Items.$changeTargets.length;
        for (let i = 0; i < length; i++) {
          headerStatus = 'wasCleared'
          scrollStatus(isUp.bind(null, $(Items.$changeTargets[i])));
        }
      };
    } else {
      onScrollPC();
      onScrollSP();
      if (headerStatus = 'wasCleared') {
        let length = Items.$changeTargets.length;
        for (let i = 0; i < length; i++) {
          headerStatus = null;
          scrollStatus(isTop.bind(null, $(Items.$changeTargets[i])));
        }
      };
    };
  });
};


const _doc = document;
export const headerItems = () => {
  const HeaderItems = {
    forOpen: {
      $trigger: [],
      $targets: []
    },
    $changeTargets: []
  };
  HeaderItems.forOpen.$trigger.push(_doc.getElementById('JS_menu-open_trigger'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_menu-open_target'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_scroll-change_target-H0'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_scroll-change_target-H1'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_menu-open_target-btn-0'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_menu-open_target-btn-1'));
  HeaderItems.forOpen.$targets.push(_doc.getElementById('JS_menu-open_target-btn-2'));
  for (let i = 0; i < 6; i++) {
    HeaderItems.$changeTargets.push(HeaderItems.forOpen.$targets[i]);
  }
  return HeaderItems;
}
