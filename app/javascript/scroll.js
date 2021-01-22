$(function () {
  // キャッチコピーの上下移動
  gsap.to(".scroll-move",{
    scrollTrigger: {
      trigger: ".scroll-move",
      start: "top 200px",
      end: "950px 650px",
      scrub: true,
      markers: false
    },
    duration: 3,
    y: 800,
  });
  // ヘッダー・マウス・スライドボタンの表示
  ScrollTrigger.create({
    trigger: '.js-scroll-trigger',
    start: 'center+=50% center',
    end: 'center+=50% bottom',
    markers: false,
    onLeaveBack: () => {
      $('.js-scroll-menu-show-target').removeClass('isShow');
      $('.js-scroll-mouse-hide-target').removeClass('isHide');
      $('.js-scroll-slideButton-hide-target').removeClass('isHide');
    },
    onLeave: () => {
      $('.js-scroll-menu-show-target').addClass('isShow');
      $('.js-scroll-mouse-hide-target').addClass('isHide');
      $('.js-scroll-slideButton-hide-target').addClass('isHide');
    }
  });
});
