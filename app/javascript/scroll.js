$(function () {
  const top_height = $('.JS_scroll_TopImage_get').outerHeight(true);
  const CatchWrapTop_height = $('.JS_scroll_CatchCopy_get').
    outerHeight(true);
  const $TopImageMessage = $('.JS_scroll_message_get')
  const TopImageMessage_height = $TopImageMessage.
    outerHeight(true);
  const TopImageMessage_y = $TopImageMessage.offset().top;

  const moving_distance = top_height + (CatchWrapTop_height / 2) - TopImageMessage_y - (TopImageMessage_height * 0.5);

  // キャッチコピーの上下移動
  gsap.to(".JS_scroll_move_target",{
    scrollTrigger: {
      trigger: ".JS_scroll_trigger",
      start: 'center+=' + (TopImageMessage_height * 0.5) + ' center',
      end: 'bottom center',
      scrub: true,
      markers: false,
    },
    duration: 1,
    y: moving_distance,
  });
  // ヘッダー・マウス・スライドボタンの表示
  ScrollTrigger.create({
    trigger: '.JS_scroll_trigger',
    start: 'center+=10 center',
    end: 'center+=10 bottom',
    markers: false,
    onLeaveBack: () => {
      $('.JS_scroll_isShow_target').addClass('isHide');
      $('.JS_scroll_isHide_target').removeClass('isHide');
      $('.JS_scroll_isPassive_target').removeClass('C_button--hamberger--isActive');
      $('.JS_scroll_isClose_target').removeClass('isOpen');
    },
    onLeave: () => {
      $('.JS_scroll_isShow_target').removeClass('isHide');
      $('.JS_scroll_isHide_target').addClass('isHide');
    }
  });
});
