// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
// require("turbolinks").start()
require("@rails/activestorage").start();
require("channels");
require("jquery");
require("../function/lazysizes.min");
// ページ関数
let CurrentPath = location.pathname;
if (CurrentPath == "/nanairo/recruit" ||
    CurrentPath == "/nanairo/recruit_create" ||
    CurrentPath == "/parti/recruit" ||
    CurrentPath == "/parti/recruit_create" ||
    CurrentPath == "/piani/recruit" ||
    CurrentPath == "/piani/recruit_create") {
  require("jquery-ui-dist/jquery-ui");
  require("../function/raindrops");
  require("../page/nanairo_recruit");
}
if (CurrentPath == "/" ||
    CurrentPath == "/nanairo") {
  require("../page/nanairo_index");
}
if (CurrentPath == "/nanairo/about") {
  require("../page/nanairo_about");
}
if (CurrentPath == "/nanairo/vision") {
  require("../page/nanairo_vision");
}
if (CurrentPath == "/nanairo/admission") {
  require("../page/nanairo_admission");
}
if (CurrentPath == "/nanairo/contact" ||
    CurrentPath == "/nanairo/contact_create" ||
    CurrentPath == "/parti/contact" ||
    CurrentPath == "/parti/contact_create" ||
    CurrentPath == "/piani/contact" ||
    CurrentPath == "/piani/contact_create" ||
    CurrentPath == "/nanairo/policy" ||
    CurrentPath == "/parti/policy" ||
    CurrentPath == "/piani/policy" ||
    CurrentPath == "/nanairo/privacy" ||
    CurrentPath == "/parti/privacy" ||
    CurrentPath == "/piani/privacy" ||
    CurrentPath == "/nanairo/recipe" ||
    CurrentPath == "/parti/recipe" ||
    CurrentPath == "/piani/recipe" ||
    CurrentPath == "/parti/belong_notice" ||
    CurrentPath == "/parti/belong_letter" ||
    CurrentPath == "/parti/belong_movie" ||
    CurrentPath == "/parti/belong_format" ||
    CurrentPath == "/piani/belong_notice" ||
    CurrentPath == "/piani/belong_letter" ||
    CurrentPath == "/piani/belong_movie" ||
    CurrentPath == "/piani/belong_format" ||
    CurrentPath == "/posts" ||
    CurrentPath.indexOf('/posts/') > -1 ) {
  require("../page/nanairo_contact");
}
if (CurrentPath == "/piani/index" ||
    CurrentPath == "/piani") {
  require("../page/piani_index");
}
if (CurrentPath == "/parti/index" ||
    CurrentPath == "/parti") {
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
if (CurrentPath == "/parti/photo-gallery" ||
    CurrentPath == "/piani/photo-gallery" ) {
  require("../page/photo-gallery");
}
if (CurrentPath == "/parti/photo-gallery" ||
    CurrentPath == "/piani/photo-gallery" ) {
  require("../page/photo-gallery");
}
if (CurrentPath == "/parti/belong" ||
    CurrentPath == "/piani/belong" ) {
  require("../page/belong");
}
if (CurrentPath == "/parti/eat-education" ||
  CurrentPath == "/piani/eat-education") {
  require("../function/jquery.arctext");
  require("../page/eat-education");
}
if (CurrentPath == "/parti/admission" ||
  CurrentPath == "/piani/admission") {
  require("../page/admission");
}
if (CurrentPath == "/parti/one-day" ||
  CurrentPath == "/piani/one-day") {
  require("../page/one-day");
}
if (CurrentPath == "/parti/for-admission" ||
  CurrentPath == "/piani/for-admission") {
  require("../page/for-admission");
}
if (CurrentPath == "/parti/support" ||
    CurrentPath == "/nanairo/support" ||
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
