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

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
