import {
  _doc, getTargets
} from "../function/utility"
// --------------------------------
// 共通関数
// --------------------------------
// scrollDirection
export const scrollDirection = (windowScrollTop, startPosition) => {
  if (windowScrollTop == 0) {
    return 'toTop'
  } else if (windowScrollTop >= startPosition) {
    return 'toDown';
  } else {
    return 'toUp';
  }
};
// scrollStatus
export const scrollStatus = callback => {
  callback();
}
export const isDown = $targets => {
  $targets.addClass('isMoveDown');
};
export const isUp = $targets => {
  $targets.removeClass('isMoveDown').addClass('isMoveUp').removeClass('isMoveTop');
};
export const isTop = $targets => {
  $targets.removeClass('isMoveDown').removeClass('isMoveUp').addClass('isMoveTop');
}
// headerStatusWhite
export const headerStatusWhite = $targets => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) { 
    scrollStatus(isUp.bind(null, $($targets[i])));
  }
}
// scrollChange
export const scrollChange = (windowScrollTop, startPosition, $targets, toTop = true) => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toTop':
        if (toTop) {
          scrollStatus(isTop.bind(null, $($targets[i])));
        } else {
          scrollStatus(isUp.bind(null, $($targets[i])));
        }
        break;
      case 'toUp':
        scrollStatus(isUp.bind(null, $($targets[i])));
        break;
      case 'toDown':
        scrollStatus(isDown.bind(null, $($targets[i])));
        break;
    }
  }
};
// scrollMove
export const scrollMove = (windowScrollTop, Items) => {
  const length = Items.$targets.length;
  for (let i = 0; i < length; i++) { 
    if (windowScrollTop <= Items.maxDistance[i]) {
      $(Items.$targets[i])[0].style.cssText = "transform: translate3D(" + (Items.targetWidth[i] * -1) / 2 + "px, " + (windowScrollTop - (Items.targetHeight[i]) / 2) + "px, 0px);";
    }
  }
};
// scrollTrigger
export const scrollTrigger = (windowScrollTop, Positions, startScreenPosition = screenCenter, addStart= 0, addEnd = 0) => {
  const startScreen = startScreenPosition() + windowScrollTop;
  let length = Positions.start.length
  for (let i = 0; i < length; i++) {
    if (startScreen >= Positions.start[i] + addStart && startScreen <= Positions.end[i] + addEnd) {
      return i
    }
  }
  return false
}
// screen scroll方向やポジション
export const screenTop = () => {
  return 0
}
export const screenCenter = () => {
  let html = window.document.documentElement;
  return html.clientHeight / 2
}
export const screenBottom = () => {
  let html = window.document.documentElement;
  return html.clientHeight
}
export const scrollAction = (windowScrollTop, Items) => {
  let trigers_length = Items.$triggers.length;
  let result = scrollTrigger(windowScrollTop, Items.scrollPositions)
  for (let trigger = 0; trigger < trigers_length; trigger++) {
    if (result === trigger) {
      let targets_length = Items.$targets[result].length;
      for (let i = 0; i < targets_length; i++) {
        $(Items.$targets[result][i]).addClass('isActive');
      }
    } else {
      let targets_length = Items.$targets[trigger].length;
      for (let i = 0; i < targets_length; i++) {
        $(Items.$targets[trigger][i]).removeClass('isActive');
      }
    }
  }
}
// scrollActionStop
export const scrollActionStop = $targets => {
  $targets.flat()
  let length = $targets.length
  for (let i = 0; i < length; i++) {
    $($targets[i]).removeClass('isActive');
  }
}
//scrollToTop（ページトップへ戻る）
export const scrollToTop = (windowScrollTop, startPosition, Items, addStart = 67.5, addEnd = 240, startScreenPosition = screenBottom) => {
  $(Items.$target).removeClass('A_isHide');
  let result = scrollTrigger(windowScrollTop, Items.scrollPositions, startScreenPosition, addStart, addEnd)
  if (result !== false) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toUp':
        $(Items.$target).addClass('isPassive-top');
        break;
      case 'toDown':
        $(Items.$target).addClass('isPassive-bottom');
        break;
    }
  } else {
    $(Items.$target).removeClass('isPassive-top').removeClass('isPassive-bottom');
  }
}
export const scrollToTopHide = ($target) => {
  $($target).addClass('A_isHide');
}
// resetPositions
export const resetPositions = (scrollPositions, $triggers, addStart = 0, addEnd = 0) => {
  scrollPositions.start = [];
  scrollPositions.end = [];
  const length = $triggers.length;
  for (let i = 0; i < length; i++) {
    scrollPositions.start.push($($triggers[i]).offset().top + addStart );
    scrollPositions.end.push($($triggers[i]).offset().top + $($triggers[i]).height() + addEnd);
  }
}
// resetMovePositions
export const resetMovePositions = Items => {
  let length = Items.$targets.length
  for (let i = 0; i < length; i++) {
    $(Items.$targets[i])[0].style.cssText = "transform: translate3D(" + ($(Items.$targets[i]).width() * -1) / 2 + "px, " + (($(Items.$targets[i]).height()) / 2 * -1) + "px, 0px);";
  }
  Items.end = [];
  Items.targetWidth = [];
  Items.targetHeight = [];
  Items.maxDistance = [];
  Items.end.push($(Items.$endTarget).offset().top);
  for (let i = 0; i < length; i++) {
    Items.targetWidth.push($(Items.$targets[i]).width());
    Items.targetHeight.push($(Items.$targets[i]).height());
    Items.maxDistance.push(Items.end - $(Items.$targets[i]).offset().top);
  }
}
// resetSmoothPositions
export const resetSmoothPositions = (Items) => {
  let length = Items.$targets.length
  Items.targetOffset = [];
  for (let i = 0; i < length; i++) {
    Items.targetOffset.push($(Items.$targets[i]).offset().top);
  }
}
// smoothScroll
export const smoothScroll = (Items, speed = 500) => {
  let length = Items.$triggers.length
  for (let i = 0; i < length; i++) {
    $(Items.$triggers[i]).on('click', () => {
      $("html, body").animate({ scrollTop: Items.targetOffset[i] }, speed, "swing");
    });
  }
};
// --------------------------------
// DOMの格納
// --------------------------------
// $changeTargets
export const $changeTargets = addItems => {
  const $changeTargets = [
    _doc.getElementById('JS_scroll-change_target'),
    ...addItems
  ];
  return $changeTargets;
};
// moveItems
export const moveItems = () => {
  const Items = {
    $targets: [
      _doc.getElementById('JS_scroll-move_target-0'),
      _doc.getElementById('JS_scroll-move_target-1')
    ],
    $endTarget: _doc.getElementById('JS_scroll-move-end_target'),
    end: '',
    targetWidth: [],
    targetHeight: [],
    maxDistance: []
  }
  resetMovePositions(Items)
  return Items;
};
// scrollActionItems
export const scrollActionItems = () => {
  const Items = {
    $triggers: [],
    scrollPositions: { start: [], end: [] },
    $targets: []
  }
  let $trigger, $target;
  for (let triNum = 0; ($trigger = _doc.getElementById('JS_scroll-action-' + triNum + '_trigger')) !== null; triNum++) {
    Items.$triggers.push($trigger);
    Items.$targets.push([]);
    for (let tarNum = 0; ($target = _doc.getElementById('JS_scroll-action-' + triNum + '_target-' + tarNum)) !== null; tarNum++) {
      Items.$targets[triNum].push($target);
    }
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
// toTopItems
export const toTopItems = () => {
  const Items = {
    $triggers: [],
    $target: _doc.getElementById('JS_scroll-to-top_target'),
    scrollPositions: {
      start: [],
      end: []
    },
    addTrigerNum: 0
  }
  let $trigger;
  for (let i = 0; ($trigger = _doc.getElementById('JS_scroll-to-top_trigger-' + i)) !== null; i++) {
    Items.$triggers.push($trigger);
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
// addToTopTrigger
export const addToTopTrigger = (Items) => {
  if (Items.addTrigerNum === 0) {
    let $trigger;
    for (let i = 0; ($trigger = _doc.getElementById('JS_scroll-to-top_trigger-add-' + i)) !== null; i++) {
      Items.$triggers.push($trigger);
      Items.addTrigerNum = i + 1;
    }
      resetPositions(Items.scrollPositions, Items.$triggers);
  }
}
// removeToTopTrigger
export const removeToTopTrigger = (Items) => {
  for (let i = 0; i < Items.addTrigerNum; i++) {
    Items.$triggers.pop();
  }
  Items.addTrigerNum = 0;
  resetPositions(Items.scrollPositions, Items.$triggers);
}
// smoothItems
export const smoothItems = () => {
  const Items = {
    $triggers: [],
    $targets: [],
    targetOffset: [],
    currentPosition: 0
  }
  let $trigger;
  for (let i = 0; ($trigger = _doc.getElementById('JS_smoothScroll_trigger-' + i)) !== null; i++) {
    Items.$triggers.push($trigger);
  }
  let $target;
  for (let i = 0; ($target = _doc.getElementById('JS_smoothScroll_target-' + i)) !== null; i++) {
    Items.$targets.push($target);
  }
  resetSmoothPositions(Items);
  return Items;
}
