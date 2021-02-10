// スクロールチェンジアクション
export function scrollMoveChange(callback) {
  callback();
}
export const down = function ($move_change_targets) {
  $move_change_targets.addClass('isMoveDown');
};
export const up = function ($move_change_targets) {
  $move_change_targets.removeClass('isMoveDown');
  $move_change_targets.addClass('isMoveUp');
  $move_change_targets.removeClass('isMoveTop');
};
export const top = function ($move_change_targets) {
  $move_change_targets.removeClass('isMoveDown');
  $move_change_targets.removeClass('isMoveUp');
  $move_change_targets.addClass('isMoveTop');
}

// スクロールトップが隠れる場所か判定
export function triggerPosition(windowScrollTop, $triggers, addStart, addEnd, screen) {
  // スクロール画面の最下部を取得
  let windowScrollBottom = screen() + windowScrollTop;
  let ifs = false;
  // to-topが隠れるポジションを指定
  $triggers.each(function () {
    let start = $(this).offset().top;
    let end = $(this).offset().top + $(this).height();
    if (windowScrollBottom >= start + addStart & windowScrollBottom <= end + addEnd) {
      ifs = true;
    }
  });
  return ifs;
}
export const screenTop = function () {
  let html = window.document.documentElement;
  return screen = 0
}
export const screenCenter = function () {
  let html = window.document.documentElement;
  return screen = html.clientHeight/2
}
export const screenBottom = function () {
  let html = window.document.documentElement;
  return screen = html.clientHeight
}
// アニメーションが動く場所か判定
export function animeStartPosition(windowScrollTop, $triggers) {
  // スクロール画面のセンターを取得
  let html = window.document.documentElement;
  let windowScrollBottom = html.clientHeight/2 + windowScrollTop;
  let ifs = false;
  // to-topが隠れるポジションを指定
  $passiveTriggers.each(function () {
    let passiveStart = $(this).offset().top;
    let passiveEnd = $(this).offset().top + $(this).height();
    if (windowScrollBottom >= passiveStart + 85 & windowScrollBottom <= passiveEnd + 260) {
      ifs = true;
    }
  });
  return ifs;
}
// スクロール方向
export function scrollToDown(windowScrollTop, startPosition) {
  if (windowScrollTop >= startPosition) {
    return true;
  } else {
    return false;
  }
};
// スクロール禁止の関数
const noScroll = function(event) {
  event.preventDefault();
}
// スクロール禁止(PC)
export function noScrollPC() {
  document.addEventListener('touchmove', noScroll, { passive: false });
}
// スクロール禁止(SP)
export function noScrollSP() {
  document.addEventListener('mousewheel', noScroll, { passive: false });
}
// スクロール再開(PC)
export function onScrollPC() {
  document.removeEventListener('touchmove', noScroll, { passive: false });
}
// スクロール再開(SP)
export function onScrollSP() {
  document.removeEventListener('mousewheel', noScroll, { passive: false });
}
// スマホ画面の処理
export function sp_only() {
  const maxSize = 600;
  const currentSize = $(window).width();
  if (maxSize >= currentSize) {
    return true;
  } else {
    return false;
  }
}
