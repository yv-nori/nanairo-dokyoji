// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
// require("turbolinks").start()
require("@rails/activestorage").start();
require("channels");
require("jquery");
// ページ関数
let CurrentPath = location.pathname;
if (CurrentPath == "/contact_recruits") { 
  require("jquery-ui-dist/jquery-ui");
  require("../function/raindrops");
  require("../page/houjin_recruit");
}
if (CurrentPath == "/") { 
  require("../page/houjin_top");
}
if (CurrentPath == "/home/about") {
  require("../page/houjin_about");
}
if (CurrentPath == "/home/vision") {
  require("../page/houjin_vision");
}
if (CurrentPath == "/home/admission") {
  require("../page/houjin_admission");
}
if (CurrentPath == "/home/contact" ||
    CurrentPath == "/home/policy" ||
    CurrentPath == "/home/privacy") {
  require("../page/houjin_contact");
}
if (CurrentPath == "/piani/index") {
  require("../page/piani_index");
}
if (CurrentPath == "/parti/index") {
  require("../page/parti_index");
}
if (CurrentPath == "/parti/vision" ||
    CurrentPath == "/piani/vision" ) {
  require("../page/vision");
}
if (CurrentPath == "/parti/event" ||
    CurrentPath == "/piani/event" ) {
  require("../page/event");
}
if (CurrentPath == "/parti/photo_gallery" ||
    CurrentPath == "/piani/photo_gallery" ) {
  require("../page/photo_gallery");
}
if (CurrentPath == "/parti/photo_gallery" ||
    CurrentPath == "/piani/photo_gallery" ) {
  require("../page/photo_gallery");
}
if (CurrentPath == "/parti/belong" ||
    CurrentPath == "/piani/belong" ) {
  require("../page/belong");
}
if (CurrentPath == "/parti/eat_education" ||
  CurrentPath == "/piani/eat_education") {
  require("../function/jquery.arctext");
  require("../page/eat_education");
}
if (CurrentPath == "/parti/admission" ||
  CurrentPath == "/piani/admission") {
  require("../page/admission");
}
if (CurrentPath == "/parti/one_day" ||
  CurrentPath == "/piani/one_day") {
  require("../page/one_day");
}
if (CurrentPath == "/parti/for_admission" ||
  CurrentPath == "/piani/for_admission") {
  require("../page/for_admission");
}
if (CurrentPath == "/parti/support" ||
  CurrentPath == "/piani/support") {
  require("../page/support");
}
if (CurrentPath == "/parti/about" ||
  CurrentPath == "/piani/about") {
  require("../page/about");
}
if (CurrentPath == "/parti/features" ||
  CurrentPath == "/piani/features") {
  require("../page/features");
}
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
