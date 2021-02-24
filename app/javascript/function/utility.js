// スクロール禁止の関数
const noScroll = event => {
  event.preventDefault();
}
// スクロール禁止(PC)
export const noScrollPC = () => {
  document.addEventListener('touchmove', noScroll, { passive: false });
}
// スクロール禁止(SP)
export const noScrollSP = () => {
  document.addEventListener('mousewheel', noScroll, { passive: false });
}
// スクロール再開(PC)
export const onScrollPC = () => {
  document.removeEventListener('touchmove', noScroll, { passive: false });
}
// スクロール再開(SP)
export const onScrollSP = () => {
  document.removeEventListener('mousewheel', noScroll, { passive: false });
}
// スマホ画面の処理
export const sp_only = () => {
  const maxSize = 600;
  const currentSize = $(window).width();
  if (maxSize >= currentSize) {
    return true;
  } else {
    return false;
  }
}
