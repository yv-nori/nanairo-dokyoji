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
export const isDown = $move_change_target => {
  $move_change_target.addClass('isMoveDown');
};
export const isUp = $move_change_target => {
  $move_change_target.removeClass('isMoveDown').addClass('isMoveUp').removeClass('isMoveTop');
};
export const isTop = $move_change_target => {
  $move_change_target.removeClass('isMoveDown').removeClass('isMoveUp').addClass('isMoveTop');
}
// スクロールチェンジ関数
export const scrollChange = (windowScrollTop, startPosition, $targets) => {
  let length = $targets.length;
  for (let i = 0; i < length; i++) {
    switch (scrollDirection(windowScrollTop, startPosition)) {
      case 'toTop':
        scrollStatus(isTop.bind(null, $($targets[i])));
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
export const scrollMove = (windowScrollTop, MoveItems) => {
  const length = MoveItems.$moveTargets.length;
  let targetWidth = 0;
  let targetHeight = 0;
  let endOffset = 0;
  let maxDistance = 0;
  for (let i = 0; i < length; i++) { 
    targetWidth = $(MoveItems.$moveTargets[i]).width();
    targetHeight = $(MoveItems.$moveTargets[i]).height();
    endOffset = $(MoveItems.$endTarget).offset().top;
    maxDistance = endOffset - MoveItems.startPositions[i];
    if (windowScrollTop <= maxDistance) {
      $(MoveItems.$moveTargets[i])[0].style.cssText = "transform: translate3D(" + (targetWidth * -1) / 2 + "px, " + (windowScrollTop - (targetHeight) / 2) + "px, 0px);";
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
  let result = scrollTrigger(windowScrollTop, Items)
  for (let i = 0; i < 4; i++) {
    if (result !==false) {
      for (let action in Items.actions[result]) {
        Items.actions[result][action].forEach(target => {
          $(target).addClass(action);
        })
      }
    } else {
      for (let action in Items.actions[i]) {
        Items.actions[i][action].forEach(target => {
          $(target).removeClass(action);
        })
      }
    }
  }
}
// スクロールアクションストップ
export const scrollActionStop = Items => {
  for (let action in Items.actions) {
    Items.actions[action].forEach(target => {
      $(target).removeClass(action);
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
// --------------------------------
// DOMの格納
// --------------------------------
// チェンジアイテム
export const changeItems = add$Items => {
  const Items = { $changeTargets: [] };
  Items.$changeTargets.push(_doc.getElementById('JS_scroll-change_target'))
  Items.$changeTargets.push(...add$Items);
  return Items;
};
// ムーブアイテム
export const moveItems = () => {
  const moveItems = {
    $moveTargets: [],
    startPositions: [],
    $endTarget: []
  }
  moveItems.$moveTargets.push(_doc.getElementById('JS_scroll-move_target-0'));
  moveItems.$moveTargets.push(_doc.getElementById('JS_scroll-move_target-1'));
  moveItems.startPositions.push($(moveItems.$moveTargets[0]).offset().top);
  moveItems.startPositions.push($(moveItems.$moveTargets[1]).offset().top);
  moveItems.$endTarget.push(_doc.getElementById('JS_scroll-move-end_target'));
  return moveItems;
};
// スクロールアクションアイテム
export const actionItems = () => {
  const Triggers = [];
  for (let i = 0; i < 4; i++) {
    Triggers.push(_doc.getElementById('JS_scroll-action_trigger-' + i))
  }
  const Items = {
    active: {
      start: [],
      end: [],
      actions: [
        { A_isScale: [], A_isClear: [], A_isAnimeStart: [] },
        { A_isScale: [], A_isClear: [], A_isAnimeStart: [] },
        { A_isScale: [], A_isClear: [] },
        { A_isScale: [], A_isClear: [] }
      ]
    },
    passive: {
      actions: {
        A_isScale: [], A_isClear: [], A_isAnimeStart: []
      }
      
    }
  }

  for (let i = 0; i < 4; i++) {
    Items.active.start.push($(Triggers[i]).offset().top)
    Items.active.end.push($(Triggers[i]).offset().top + $(Triggers[i]).height())
  }
  for (let i = 0; i < 4; i++) {
    Items.active.actions[i].A_isScale.push(Triggers[i]);
    Items.active.actions[i].A_isClear.push(_doc.getElementById('JS_scroll-action' + i + '-clear_target'))
  }
  for (let i = 0; i < 6; i++) {
    if (i < 5) {
      Items.active.actions[0].A_isAnimeStart.push(_doc.getElementById('JS_scroll-action0-anime_target-' + i))
    }
    Items.active.actions[1].A_isAnimeStart.push(_doc.getElementById('JS_scroll-action1-anime_target-' + i))
  }
  Items.passive.actions.A_isScale.
    push(Items.active.actions.flatMap(data => data.A_isScale));
  Items.passive.actions.A_isClear.
    push(Items.active.actions.flatMap(data => data.A_isClear));
  Items.passive.actions.A_isAnimeStart.
    push(Items.active.actions.flatMap(data => data.A_isAnimeStart));
  return Items;
}
// トゥトップアイテム
export const toTopItems = () => {
  const Items = {
    scrollPositions: {
      start: [],
      end: []
    },
    $target: []
  }
  const Triggers = [];
  Triggers.push(_doc.getElementById('JS_scroll-to-top_trigger-0'));
  Triggers.push(_doc.getElementById('JS_scroll-to-top_trigger-1'));
  for (let i = 0; i < 2; i++) {
    Items.scrollPositions.start.push($(Triggers[i]).offset().top)
    Items.scrollPositions.end.push($(Triggers[i]).offset().top + $(Triggers[i]).height())
  }
  Items.$target.push(_doc.getElementById('JS_scroll-to-top_target'));
  return Items;
}
