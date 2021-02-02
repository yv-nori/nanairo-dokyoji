// $(function () {
//   if (location.pathname.match("/")) {
//     // スライドのスタート表示切替
//     $('.js_img-change_slide-right_trigger').on('click', function () {
//       const $images = $('.js_img-change_top-image_target')
//       max = $images.length;
//       current_order = Number($images.attr('class').slice(-1));
//       $images.removeClass('order' + current_order);
//       if (current_order < max) {
//         $images.addClass('order' + (current_order + 1));
//       } else {
//         $images.addClass('order' + (current_order - max + 1));
//       }
//     });
//     $('.js_img-change_slide-left_trigger').on('click', function () {
//       const $images = $('.js_img-change_top-image_target')
//       max = $images.length;
//       current_order = Number($images.attr('class').slice(-1));
//       $images.removeClass('order' + current_order);
//       if (current_order > 1) {
//         $images.addClass('order' + (current_order - 1));
//       } else {
//         $images.addClass('order' + (max));
//       }
//     });
//   };
// });

// // ウィンドウズサイズの切替
// $(function () {
//     if (location.pathname.match("/")) {
//       const maxSize=600;
//       const currentSize=screen.width;
//       if (maxSize >=currentSize) {
//         $('.top_image_pc').addClass('isHide');
//         $('.top_image').removeClass('isHide');
//       }
//       else {
//         $('.top_image_pc').removeClass('isHide');
//         $('.top_image').addClass('isHide');
//       }
//       $(window).resize(function () {
//           const currentSize=screen.width;
//           if (maxSize >=currentSize) {
//             console.log("a");
//             $('.top_image_pc').addClass('isHide');
//             $('.top_image').removeClass('isHide');
//           }

//           else {
//             console.log("b" + currentSize);
//             $('.top_image_pc').removeClass('isHide');
//             $('.top_image').addClass('isHide');
//           }
//         }
//       );
//     };
//   }
// );
