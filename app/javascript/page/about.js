// --------------------------------
// 関数と定数の読み込み
// --------------------------------
import {
  scrollChange, headerStatusWhite, $changeTargets, toTopItems, scrollToTop, smoothItems, smoothScroll, resetPositions, resetSmoothPositions, scrollToTopHide
} from "../function/scroll"
import {
  media, changeMedia, _doc, getElements, getElementsInner, noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "../function/utility"
import {
  headerItems, menuOpen
} from "../function/header"
import {
  wrightShabon
} from "../function/shabon"
// --------------------------------
// メイン処理
// --------------------------------
$(function () {
  const HeaderItems = headerItems();
  const SmoothItems = smoothItems();
  const ToTopItems = toTopItems();
  const $ChangeTargets = $changeTargets(HeaderItems.$targets);
  const ImgSlideItems = imgSlideItems();
  const ImgSlideModalItems = imgSlideModalItems(ImgSlideItems.titles);
  const Shabon = shabonItems()
  let startPosition = 0;
  let windowScrollTop = 0;
  let startSize = 0;
  smoothScroll(SmoothItems);
  menuOpen(HeaderItems);
  headerStatusWhite(HeaderItems.$targets);
  imgSlide(ImgSlideItems);
  imgSlide(ImgSlideModalItems);
  modalSet(ImgSlideModalItems.$triggers);
  switch (media()) {
    case "SP":
      wrightShabon(Shabon.$targets, Shabon.params_SP);
      break;
    case "Tab":
      wrightShabon(Shabon.$targets, Shabon.params_Tab);
      break;
    case "PC":
      wrightShabon(Shabon.$targets, Shabon.params_PC);
      break;
  }
  $(window).on('scroll', function () {
    windowScrollTop = $(this).scrollTop();
    scrollChange(windowScrollTop, startPosition, $ChangeTargets, false);
    switch (media()) {
      case "SP":
        scrollToTopHide(ToTopItems.$target);
        break;
      case "Tab":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
      case "PC":
        scrollToTop(windowScrollTop, startPosition, ToTopItems);
        break;
    }
    startPosition = windowScrollTop;
  });
  window.addEventListener('resize', () => {
    resetPositions(ToTopItems.scrollPositions, ToTopItems.$triggers);
    resetSmoothPositions(SmoothItems);
    switch (changeMedia(startSize)) {
      case "SP":
        wrightShabon(Shabon.$targets, Shabon.params_SP);
        break;
      case "Tab":
        wrightShabon(Shabon.$targets, Shabon.params_Tab);
        break;
      case "PC":
        wrightShabon(Shabon.$targets, Shabon.params_PC);
        break;
    }
    startSize = $(window).width();
  }, false);
});

const imgSlide = (Items) => {
  const max = Items.$triggers.length
  for (let i = 0; i < max; i++) {
    Items.numbers.push(i + 1)
  }
  for (let result = 0; result < max; result++) {
    $(Items.$triggers[result]).on('click', () => {
      Items.current = result;
      imgSlideChange(Items, max);
    });
  }
  $(Items.$nextTrigger).on('click', () => {
    Items.current += 1;
    imgSlideChange(Items, max);
  });
  $(Items.$prevTrigger).on('click', () => {
    Items.current -= 1;
    imgSlideChange(Items, max);
  });
}

const imgSlideChange = (Items, max) => {
  for (let i = 0; i < max; i++) {
    $(Items.$targets[i]).removeClass('isActive');
  }
  $(Items.$targets[Items.current]).addClass('isActive');
  if (Items.current === 0) {
    $(Items.$prevTrigger).removeClass('isActive');
    $(Items.$nextTrigger).addClass('isActive');
  } else if (Items.current + 1 === max) {
    $(Items.$nextTrigger).removeClass('isActive');
    $(Items.$prevTrigger).addClass('isActive');
  } else {
    $(Items.$prevTrigger).addClass('isActive');
    $(Items.$nextTrigger).addClass('isActive');
  }
  Items.$title.innerText = Items.titles[Items.current];
  Items.$number.innerText = Items.numbers[Items.current];
  Items.$count.innerText = `Image ${Items.numbers[Items.current]} of ${max}`;
}

const imgSlideItems = () => {
  const Items = {
    $triggers: [],
    $prevTrigger: _doc.getElementById("JS_imgSlide_prev"),
    $nextTrigger: _doc.getElementById("JS_imgSlide_next"),
    $targets: [],
    $title: _doc.getElementById('JS_imgSlide_title'),
    $number: _doc.getElementById('JS_imgSlide_number'),
    $count: _doc.getElementById('JS_imgSlide_count'),
    numbers: [],
    titles: [],
    current: 0
  }
  getElements('JS_imgSlide_trigger-', Items.$triggers);
  getElements('JS_imgSlide_target-', Items.$targets);
  getElementsInner('JS_imgSlide_title-', Items.titles);
  return Items;
}

const imgSlideModalItems = Titles => {
  const Items = {
    $modal: _doc.getElementById("JS_imgSlideModal"),
    $triggers: [],
    $prevTrigger: _doc.getElementById("JS_imgSlideModal_prev"),
    $nextTrigger: _doc.getElementById("JS_imgSlideModal_next"),
    $closeTrigger: _doc.getElementById("JS_imgSlideModal_close"),
    $targets: [],
    $title: _doc.getElementById('JS_imgSlideModal_title'),
    $number: _doc.getElementById('JS_imgSlideModal_number'),
    $count: _doc.getElementById('JS_imgSlideModal_count'),
    numbers: [],
    titles: [...Titles],
    current: 0
  }
  getElements('JS_imgSlideModal_trigger-', Items.$triggers);
  getElements('JS_imgSlideModal_target-', Items.$targets);
  return Items;
}

const modalSet = $triggers => {
  const Items = {
    $modal: _doc.getElementById("JS_imgSlideModal"),
    $triggers: [...$triggers],
    $closeTrigger: _doc.getElementById("JS_imgSlideModal_close")
  }
  const length = Items.$triggers.length
  for (let i = 0; i < length; i++) {
    $(Items.$triggers[i]).on('click', () => {
      $(Items.$modal).addClass('isActive');
      noScrollPC()
      noScrollSP()
    })
  }
  $(Items.$closeTrigger).on('click', () => {
    $(Items.$modal).removeClass('isActive');
    onScrollPC()
    onScrollSP()
  })
}

const shabonItems = () => {
  const Shabon = {
    params_PC: [
      [
        { top: '68', left: '19', class: 'P_about__nav', size: '2L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '80', left: '25', class: 'P_about__nav', size: '3L', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '81', left: '12', class: 'P_about__nav', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '89', left: '17', class: 'P_about__nav', size: 'S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '94', left: '7', class: 'P_about__nav', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '47', left: '74', class: 'P_about__nav', size: '6L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '61', left: '82', class: 'P_about__nav', size: '4L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '68', left: '75', class: 'P_about__nav', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' }
      ]
    ],
    params_Tab: [
      [
        { top: '81', left: '12', class: 'P_about__nav', size: 'L', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '88', left: '17', class: 'P_about__nav', size: 'S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '94', left: '7', class: 'P_about__nav', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '47', left: '74', class: 'P_about__nav', size: '6L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '61', left: '82', class: 'P_about__nav', size: '4L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '68', left: '75', class: 'P_about__nav', size: 'S', time: '3', pattern: 'A', direction: 'right', id: '' }
      ]
    ],
    params_SP: [
      [
        { top: '46', left: '19', class: 'P_about__nav', size: 'M', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '51', left: '26', class: 'P_about__nav', size: '2S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '53', left: '12', class: 'P_about__nav', size: '2S', time: '1', pattern: 'A', direction: 'right', id: '' },
        { top: '56', left: '21', class: 'P_about__nav', size: '3S', time: '2', pattern: 'B', direction: 'right', id: '' },
        { top: '58', left: '9', class: 'P_about__nav', size: '3S', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '21', left: '79', class: 'P_about__nav', size: '4L', time: '2', pattern: 'A', direction: 'right', id: '' },
        { top: '30', left: '92', class: 'P_about__nav', size: 'L', time: '3', pattern: 'A', direction: 'right', id: '' },
        { top: '36', left: '78', class: 'P_about__nav', size: '2S', time: '3', pattern: 'A', direction: 'right', id: '' }
      ]
    ],
    $targets: []
  }
  let length = Shabon.params_PC.length;
  for (let i = 0; i < length; i++) {
    Shabon.$targets.push(_doc.getElementById('JS_shabon_target-' + i));
  }
  return Shabon;
}
