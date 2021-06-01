import {
  _doc, noScrollPC, noScrollSP, onScrollPC, onScrollSP
} from "../function/utility"
export const modal = (Items) => {
  $(Items.$trigger).on('click', () => {
    $(Items.$target).addClass('isActive');
    noScrollPC();
    noScrollSP();
  });
  $(Items.$closeBtn).on('click', () => {
    $(Items.$target).removeClass('isActive');
    onScrollPC();
    onScrollSP();
  });
}
export const modalItems = () => {
  const Items = {
    $trigger: _doc.getElementById('JS_modal_trigger'),
    $target: _doc.getElementById('JS_modal_target'),
    $closeBtn: _doc.getElementById('JS_modal_close-btn')
  }
  return Items;
}
