$(function () {
  const top_height = $('.js_scroll_TopImage_height_get').outerHeight(true);
  const CatchWrapTop_height = $('.js_scroll_CatchCopy__wrapper-top_height_get').
    outerHeight(true);
  const $TopImageMessage = $('.js_scroll_message_height_get')
  const TopImageMessage_height = $TopImageMessage.
    outerHeight(true);
  const TopImageMessage_y = $TopImageMessage.offset().top;
  const moving_distance = top_height + (CatchWrapTop_height / 2) - TopImageMessage_y - (TopImageMessage_height * 0.5);

  // キャッチコピーの上下移動
  gsap.to(".js_scroll_message_move_target",{
    scrollTrigger: {
      trigger: ".js_scroll_TopImage_trigger",
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
    trigger: '.js_scroll_TopImage_trigger',
    start: 'center+=10 center',
    end: 'center+=10 bottom',
    markers: true,
    onLeaveBack: () => {
      $('.js_scroll_NavHeader_visible_target').removeClass('isVisible');
      $('.js_scroll_mouse_invisible_target').removeClass('isInvisible');
      $('.js_scroll_menuBtn_close_target').removeClass('isActive-button');
      $('.js_scroll_menu_close_target').removeClass('isOpen-menu');
    },
    onLeave: () => {
      $('.js_scroll_NavHeader_visible_target').addClass('isVisible');
      $('.js_scroll_mouse_invisible_target').addClass('isInvisible');
    }
  });
});
