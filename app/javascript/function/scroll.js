const _doc = document;
// --------------------------------
// 共通関数
// --------------------------------
// スクロール方向の判定
export const scrollDirection = (windowScrollTop, startPosition) => {
  if (windowScrollTop == 0) {
    return 'toTop'
  } else if (windowScrollTop >= startPosition) {
    return 'toDown';
  } else {
    return 'toUp';
  }
};
// スクロールステータスの定義
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
// スクロールステータスホワイトスタート
export const headerStatusWhite = $targets => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) { 
    scrollStatus(isUp.bind(null, $($targets[i])));
  }
}
// スクロールチェンジ関数
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
// スクロールムーブ関数
export const scrollMove = (windowScrollTop, Items) => {
  const length = Items.$targets.length;
  for (let i = 0; i < length; i++) { 
    if (windowScrollTop <= Items.maxDistance[i]) {
      $(Items.$targets[i])[0].style.cssText = "transform: translate3D(" + (Items.targetWidth[i] * -1) / 2 + "px, " + (windowScrollTop - (Items.targetHeight[i]) / 2) + "px, 0px);";
    }
  }
};
// スクロールトリガー
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
// スクロールアクション
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
  let result = scrollTrigger(windowScrollTop, Items.scrollPositions)
  for (let i = 0; i < 4; i++) {
    if (result !==false) {
      for (let action in Items.scrollActions[result]) {
        Items.scrollActions[result][action].forEach(target => {
          $(target).addClass(action);
        })
      }
    } else {
      for (let action in Items.scrollActions[i]) {
        Items.scrollActions[i][action].forEach(target => {
          $(target).removeClass(action);
        })
      }
    }
  }
}
// スクロールアクションストップ
export const scrollActionStop = Items => {
  for (let stopAction in Items.stopActions) {
    Items.stopActions[stopAction].forEach($target => {
      $($target).removeClass(stopAction);
    })
  }
}
// スクロールアクション（トップへ戻る）
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
// リセットポジション
export const resetPositions = (scrollPositions, $triggers) => {
  scrollPositions.start = [];
  scrollPositions.end = [];
  const length = $triggers.length;
  for (let i = 0; i < length; i++) {
    scrollPositions.start.push($($triggers[i]).offset().top);
    scrollPositions.end.push($($triggers[i]).offset().top + $($triggers[i]).height());
  }
}
// リセットムーブポジション
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
// リセットスムースポジション
export const resetSmoothPositions = (Items) => {
  let length = Items.$targets.length
  Items.targetOffset = [];
  for (let i = 0; i < length; i++) {
    Items.targetOffset.push($(Items.$targets[i]).offset().top);
  }
}
// スムーズスクロール
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
// チェンジアイテム
export const $changeTargets = addItems => {
  const $changeTargets = [
    _doc.getElementById('JS_scroll-change_target'),
    ...addItems
  ];
  return $changeTargets;
};
// ムーブアイテム
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
// スクロールアクションアイテム
export const actionItems = () => {
  const Items = {
    $triggers: [],
    scrollPositions: {
      start: [],
      end: []
    },
    scrollActions: [
      { A_isScale: [], A_isClear: [], A_isAnimeStart: [] },
      { A_isScale: [], A_isClear: [], A_isAnimeStart: [] },
      { A_isScale: [], A_isClear: [] },
      { A_isScale: [], A_isClear: [] }
    ],
    stopActions: {
      A_isScale: [], A_isClear: [], A_isAnimeStart: []
    }
  }
  for (let i = 0; i < 4; i++) {
    Items.$triggers.push(_doc.getElementById('JS_scroll-action_trigger-' + i))
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  for (let i = 0; i < 4; i++) {
    Items.scrollActions[i].A_isScale.push(Items.$triggers[i]);
    Items.scrollActions[i].A_isClear.push(_doc.getElementById('JS_scroll-action' + i + '-clear_target'))
  }
  for (let i = 0; i < 6; i++) {
    if (i < 5) {
      Items.scrollActions[0].A_isAnimeStart.push(_doc.getElementById('JS_scroll-action0-anime_target-' + i))
    }
    Items.scrollActions[1].A_isAnimeStart.push(_doc.getElementById('JS_scroll-action1-anime_target-' + i))
  }
  Items.stopActions.A_isScale.push(...Items.scrollActions.flatMap(data => data.A_isScale));
  Items.stopActions.A_isClear.push(...Items.scrollActions.flatMap(data => data.A_isClear));
  Items.stopActions.A_isAnimeStart.push(...Items.scrollActions.flatMap(data => data.A_isAnimeStart));
  return Items;
}
// トゥトップアイテム
export const toTopItems = () => {
  const Items = {
    $triggers: [],
    $target: _doc.getElementById('JS_scroll-to-top_target'),
    scrollPositions: {
      start: [],
      end: []
    }
  }
  let $trigger;
  for (let i = 0; ($trigger = _doc.getElementById('JS_scroll-to-top_trigger-' + i)) !== null; i++) {
    Items.$triggers.push($trigger);
  }
  resetPositions(Items.scrollPositions, Items.$triggers);
  return Items;
}
export const smoothItems = () => {
  const Items = {
    $triggers: [],
    $targets: [],
    targetOffset: []
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
