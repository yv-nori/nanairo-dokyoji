$(function () {
  if (location.pathname.match("/")) {
    const maxSize = 600;
    const currentSize = screen.width;
    if (maxSize >= currentSize) {
      $('.top_image_pc').addClass('isHide');
      $('.top_image').removeClass('isHide');
    }else{
      $('.top_image_pc').removeClass('isHide');
      $('.top_image').addClass('isHide');
    }
    $(window).resize(function () {
      const currentSize = screen.width;
      if (maxSize >= currentSize) {
      console.log("a")
        $('.top_image_pc').addClass('isHide');
        $('.top_image').removeClass('isHide');
      } else {
            console.log("b"+currentSize)
        $('.top_image_pc').removeClass('isHide');
        $('.top_image').addClass('isHide');
      }
    });
  };
});
