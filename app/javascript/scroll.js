// --------------------------------
// 関数の読み込み
// --------------------------------
import {
  scrollMoveChange, down, up, top, triggerPosition, scrollToDown, screenBottom, screenCenter, sp_only
  } from "./func"
$(function () {
  let CurrentPath = location.pathname;
  if (CurrentPath == "/") {
    // --------------------------------
    // 変数定義
    // --------------------------------
    // ヘッダー処理の変数を定義
    let startPosition = 0, windowScrollTop = 0;
    // キャッチコピースクロール処理の定数の定義
    //スクロールスタートの取得
    const $scrollTarget = $('.JS_scroll_move_target');
    const targetWidth = $scrollTarget.width();
    const targetHeight = $scrollTarget.height();
    // // キャッチコピーのスクロールスタートの地点を定義
    const startOffset = $scrollTarget.offset().top;
    // スクロールエンドの取得
    const $scrollEnd = $('.JS_scroll_move_end_target');
    const endOffset = $scrollEnd.offset().top;
    // 最大移動距離を算出
    const maxDistance = endOffset - startOffset;
    // トップへ戻るアイコンの表示処理の定数を定義
    const $to_top = $('.JS_scroll_to-top_active_target');
    const $passiveTriggers = $('.JS_scroll_to-top_trigger');
    // シャボンアニメーションのポジションの取得
    const $animeAdmissionTrigger = $('.JS_scroll_admission_trigger');
    const $animeAdmissionTargets = $('.JS_anime_admission');
    const $animeRecruitTrigger = $('.JS_scroll_recruit_trigger');
    const $animeRecruitTargets = $('.JS_anime_recruit');
    const $scaleParti = $('.JS_scroll_scale_parti');
    const $scalePiani = $('.JS_scroll_scale_piani');
    // --------------------------------
    // スクロールイベント
    // --------------------------------
    $(window).on('scroll', function () {
      // スクロール位置の取得
      windowScrollTop = $(this).scrollTop();
      // ヘッダーの処理
      const $move_change_targets = $('.JS_scroll_move-change_target');
      if (scrollToDown(windowScrollTop, startPosition)) {
        scrollMoveChange(down.bind(null, $move_change_targets));
      } else {
        scrollMoveChange(up.bind(null, $move_change_targets));
      }
      if (windowScrollTop == 0) {
        scrollMoveChange(top.bind(null, $move_change_targets));
      }
      // キャッチコピーのスクロール処理
      const $scrollTarget = $('.JS_scroll_move_target');
      if (windowScrollTop <= maxDistance) {
        $scrollTarget[0].style.cssText = "transform: translate3D(" + (targetWidth * -1) / 2 + "px, " + (windowScrollTop - (targetHeight) / 2) + "px, 0px);";
        $scrollTarget[1].style.cssText = "transform: translate3D(" + (targetWidth * -1) / 2 + "px, " + (windowScrollTop - (targetHeight) / 2) + "px, 0px);";
      }
      // トップへ戻るボタンの処理
      $to_top.removeClass('A_isHide');
      if (triggerPosition(windowScrollTop, $passiveTriggers, 85, 260, screenBottom)) {
        if (scrollToDown(windowScrollTop, startPosition)) {
          $to_top.addClass('isPassive-top');
        } else {
          $to_top.addClass('isPassive-bottom'); 
        }
      } else {
        $to_top.removeClass('isPassive-top');
        $to_top.removeClass('isPassive-bottom');
      }
      // アニメーションスタート
      if (sp_only()) {
        if (triggerPosition(windowScrollTop, $animeAdmissionTrigger, 85, 260, screenCenter)) {
          $animeAdmissionTargets.addClass('A_isAnimeStart');
          $animeAdmissionTrigger.addClass('A_isScale');
        } else {
          $animeAdmissionTargets.removeClass('A_isAnimeStart');
          $animeAdmissionTrigger.removeClass('A_isScale');
        }
        if (triggerPosition(windowScrollTop, $animeRecruitTrigger, 85, 260, screenCenter)) {
          $animeRecruitTargets.addClass('A_isAnimeStart');
          $animeRecruitTrigger.addClass('A_isScale');
        } else {
          $animeRecruitTargets.removeClass('A_isAnimeStart');
          $animeRecruitTrigger.removeClass('A_isScale');
        }
        if (triggerPosition(windowScrollTop, $scaleParti, 85, 260, screenCenter)) {
          $scaleParti.addClass('A_isScale');
        } else {
          $scaleParti.removeClass('A_isScale');
        }
        if (triggerPosition(windowScrollTop, $scalePiani, 85, 260, screenCenter)) {
          $scalePiani.addClass('A_isScale');
        } else {
          $scalePiani.removeClass('A_isScale');
        }
      }
      // startPositionの初期化
      startPosition = windowScrollTop;
    });
  };
});
