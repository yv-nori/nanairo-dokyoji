$(function () {
  let CurrentPath = location.pathname;
  // TODO:共通ファンクションに切り出し（changeMedia）
  if (CurrentPath == "/") {
    let startPosition = 0, windowScrollTop = 0;
    $(window).on('scroll', function () {
      windowScrollTop = $(this).scrollTop();
      if (windowScrollTop >= startPosition) {
        // ヘッダーを隠す
        $('.JS_scroll_hide-Y_target').addClass('A_isHide-Y');
        // ヘッダーの透明化
        $('.JS_scroll_hide-Y_target').addClass('A_isClear--max');
        // ヘッダーのテキストホワイト
        $('.JS_scroll_hide-Y_target').addClass('A_isWhite');
        // ヘッダーのボタンホワイト
        $('.JS_scroll_white_target').addClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト隠す)
        $('.JS_scroll_invisible_target').addClass('A_isVisible');
        $('.JS_scroll_invisible_target').removeClass('A_isInvisible');
        $('.JS_scroll_visible_target').addClass('A_isInvisible');
        $('.JS_scroll_visible_target').removeClass('A_isVisible');
      } else {
        // ヘッダーを表示
        $('.JS_scroll_hide-Y_target').removeClass('A_isHide-Y');
        // ヘッダーの透明化解除
        $('.JS_scroll_hide-Y_target').removeClass('A_isClear--max');
        // ヘッダーのテキストホワイト解除
        $('.JS_scroll_hide-Y_target').removeClass('A_isWhite');
        // ヘッダーのボタンホワイト解除
        $('.JS_scroll_white_target').removeClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト表示)
        $('.JS_scroll_invisible_target').removeClass('A_isVisible');
        $('.JS_scroll_invisible_target').addClass('A_isInvisible');
        $('.JS_scroll_visible_target').removeClass('A_isInvisible');
        $('.JS_scroll_visible_target').addClass('A_isVisible');
      }
      startPosition = windowScrollTop;
      if (windowScrollTop == 0) {
        // ヘッダーを表示
        $('.JS_scroll_hide-Y_target').removeClass('A_isHide-Y');
        // ヘッダーの透明化
        $('.JS_scroll_hide-Y_target').addClass('A_isClear--max');
        // ヘッダーのテキストホワイト
        $('.JS_scroll_hide-Y_target').addClass('A_isWhite');
        // ヘッダーのボタンホワイト
        $('.JS_scroll_white_target').addClass('A_isWhite__bgc');
        // ロゴの入れ替え(ホワイト隠す)
        $('.JS_scroll_invisible_target').addClass('A_isVisible');
        $('.JS_scroll_invisible_target').removeClass('A_isInvisible');
        $('.JS_scroll_visible_target').addClass('A_isInvisible');
        $('.JS_scroll_visible_target').removeClass('A_isVisible');
      }
    });
  //   // 画面サイズに応じて処理を切り替え
  //   const maxSize=600;
  //   const currentSize=screen.width;
  //   // スマホの場合
  //   let ScrollStart = 120;
  //   if (maxSize >= currentSize) {
  //     scrollStart = 120;
  //   // スマホ以上の場合
  //   } else {
  //     scrollStart = 0;
  //   }
  //   $(window).resize(function () {
  //     const currentSize=screen.width;
  //     // スマホの場合
  //     if (maxSize >= currentSize) {
  //       scrollStart = 120;
  //     // スマホ以上の場合
  //     } else {
  //       scrollStart = 0;
  //     }
  //   });
  //   // スクロール位置の取得
  //   const top_height = $('.JS_scroll_TopImage_get').outerHeight(true);
  //   const CatchWrapTop_height = $('.JS_scroll_CatchCopy_get').
  //     outerHeight(true);
  //   const $TopImageMessage = $('.JS_scroll_message_get')
  //   const TopImageMessage_height = $TopImageMessage.
  //     outerHeight(true);
  //   const TopImageMessage_y = $TopImageMessage.offset().top;
  //   const moving_distance = top_height + (CatchWrapTop_height / 2) - TopImageMessage_y - (TopImageMessage_height * 0.5);
  
  //   // キャッチコピーの上下移動
  //   gsap.to(".JS_scroll_move_target",{
  //     scrollTrigger: {
  //       trigger: ".JS_scroll_trigger",
  //       start: 'center+=' + (TopImageMessage_height * 0.5) + ' center',
  //       end: 'bottom center',
  //       scrub: true,
  //       markers: false,
  //     },
  //     duration: 1,
  //     y: moving_distance,
  //   });
  //   // ヘッダー・マウス・スライドボタンの表示
  //   ScrollTrigger.create({
  //     trigger: '.JS_scroll_trigger',
  //     // start: 'center+=' + (10 + scrollStart) + ' center',
  //     // end: 'center+=' + (10 + scrollStart) + ' bottom',
  //     start: 'center+=' + (TopImageMessage_height * 0.5 + 25) + ' center',
  //     end: 'center+=' + (TopImageMessage_height * 0.5 + 25) + ' bottom',
  //     markers: true,
  //     onLeaveBack: () => {
  //       $('.JS_scroll_isShow_target').addClass('A_isHide');
  //       $('.JS_scroll_isHide_target').removeClass('A_isHide');
  //       $('.JS_scroll_isPassive_target').removeClass('C_button--hamberger--isActive');
  //       $('.JS_scroll_isClose_target').removeClass('A_isOpen');
  //     },
  //     onLeave: () => {
  //       $('.JS_scroll_isShow_target').removeClass('A_isHide');
  //       $('.JS_scroll_isHide_target').addClass('A_isHide');
  //     }
  //   });
  // };

  // if (CurrentPath == "/recruit") {
  //   // 就職情報のフェードイン表示
  //   ScrollTrigger.create({
  //     trigger: '.JS_scroll_isFadeIn_target1',
  //     start: 'top center',
  //     end: 'bottom center',
  //     markers: false,
  //     onEnter: () => {
  //       $('.JS_scroll_isFadeIn_target1').addClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target1').removeClass('A_isFadeOut');
  //     },
  //     // onLeave: () => {
  //     //   $('.JS_scroll_isFadeIn_target1').removeClass('A_isFadeIn');
  //     //   $('.JS_scroll_isFadeIn_target1').addClass('A_isFadeOut');
  //     // },
  //     // onEnterBack: () => {
  //     //   $('.JS_scroll_isFadeIn_target1').removeClass('A_isFadeOut');
  //     //   $('.JS_scroll_isFadeIn_target1').addClass('A_isFadeIn');
  //     // },
  //     onLeaveBack: () => {
  //       $('.JS_scroll_isFadeIn_target1').removeClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target1').addClass('A_isFadeOut');
  //     },
  //   });
  //   ScrollTrigger.create({
  //     trigger: '.JS_scroll_isFadeIn_target2',
  //     start: 'top center',
  //     end: 'bottom center',
  //     markers: false,
  //     onEnter: () => {
  //       $('.JS_scroll_isFadeIn_target2').addClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target2').removeClass('A_isFadeOut');
  //     },
  //     // onLeave: () => {
  //     //   $('.JS_scroll_isFadeIn_target2').removeClass('A_isFadeIn');
  //     //   $('.JS_scroll_isFadeIn_target2').addClass('A_isFadeOut');
  //     // },
  //     // onEnterBack: () => {
  //     //   $('.JS_scroll_isFadeIn_target2').removeClass('A_isFadeOut');
  //     //   $('.JS_scroll_isFadeIn_target2').addClass('A_isFadeIn');
  //     // },
  //     onLeaveBack: () => {
  //       $('.JS_scroll_isFadeIn_target2').removeClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target2').addClass('A_isFadeOut');
  //     }
  //   });
  //   ScrollTrigger.create({
  //     trigger: '.JS_scroll_isFadeIn_target3',
  //     start: 'top center',
  //     end: 'bottom center',
  //     markers: false,
  //     onEnter: () => {
  //       $('.JS_scroll_isFadeIn_target3').addClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target3').removeClass('A_isFadeOut');
  //     },
  //     // onLeave: () => {
  //     //   $('.JS_scroll_isFadeIn_target3').removeClass('A_isFadeIn');
  //     //   $('.JS_scroll_isFadeIn_target3').addClass('A_isFadeOut');
  //     // },
  //     // onEnterBack: () => {
  //     //   $('.JS_scroll_isFadeIn_target3').removeClass('A_isFadeOut');
  //     //   $('.JS_scroll_isFadeIn_target3').addClass('A_isFadeIn');
  //     // },
  //     onLeaveBack: () => {
  //       $('.JS_scroll_isFadeIn_target3').removeClass('A_isFadeIn');
  //       $('.JS_scroll_isFadeIn_target3').addClass('A_isFadeOut');
  //     },
  //   });
  };
});
