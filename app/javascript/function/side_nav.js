import {
  getElements, _doc
} from "../function/utility"
import {
  resetPositions, scrollTrigger, screenBottom
} from "../function/scroll";

export const sideNavItems = () => {
  let Items = {
    $trigger:
      _doc.getElementById('JS_side-nav_open-tirgger'),
    $targetNav:
      _doc.getElementById('JS_side-nav_target-nav'),
    $targets: [],
    $closeTrigger:
      _doc.getElementById('JS_side-nav_close-trigger'),
    $title:
      _doc.getElementById('JS_side-nav_title'),
    $hideTriggers: [
      _doc.getElementById('JS_side-nav_target-bottom')
    ],
    scrollPositions: {
      start: [],
      end: []
    }
  };
  getElements('JS_side-nav_target-', Items.$targets);
  getElements('JS_side-nav_hide-trigger-', Items.$hideTriggers);
  resetPositions(Items.scrollPositions, Items.$hideTriggers);
  return Items;
}

export const sideNav = (Items, SmoothItems) => {
  const targets_length = Items.$targets.length;
  $(Items.$trigger).on('click', () => {
    $(Items.$trigger).add($(Items.$closeTrigger)).add($(Items.$targetNav)).add($(Items.$title)).addClass('isActive');
    for (let i = 0; i < targets_length; i++) {
      $(Items.$targets[i]).addClass('isActive');
    }
  });
  $(Items.$closeTrigger).on('click', () => {
    $(Items.$trigger).add($(Items.$closeTrigger)).add($(Items.$targetNav)).add($(Items.$title)).removeClass('isActive');
    for (let i = 0; i < targets_length; i++) {
      $(Items.$targets[i]).removeClass('isActive');
    }
  });
  for (let i = 0; i < targets_length; i++) {
    SmoothItems.$triggers.push(Items.$targets[i]);
    $(Items.$targets[i]).on('click', () => {
      $(Items.$trigger).add($(Items.$closeTrigger)).add($(Items.$targetNav)).add($(Items.$title)).removeClass('isActive');
      for (let i = 0; i < targets_length; i++) {
        $(Items.$targets[i]).removeClass('isActive');
      }
    });
  }
};
export const scrollSideNavHide = (windowScrollTop, Items, addStart = 0, addEnd = 60, startScreenPosition = screenBottom) => {
  $(Items.$targetNav).removeClass('isHide');
  let result = scrollTrigger(windowScrollTop, Items.scrollPositions, startScreenPosition, addStart, addEnd)
  if (result !== false) {
    $(Items.$targetNav).addClass('isHide');
  } else {
    $(Items.$targetNav).removeClass('isHide');
  }
}
export const sideNavShow = (Items) => {
  $(Items.$targetNav).removeClass('isHide');
}
export const sideNavHide = (Items) => {
  $(Items.$targetNav).addClass('isHide');
}
