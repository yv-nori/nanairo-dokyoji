
$(function () {
  if (location.pathname.match("/recruit")) {
    $('.JS_raindrops_target').raindrops({
      color:'#77bfc4', 
      waveLength:800, 
      frequency:3,
      waveHeight:250, 
      density:0, 
      rippleSpeed:0.001,
      canvasWidth:2000,
      canvasHeight:400,
      rightPadding:20, 
      position:'absolute',
      positionBottom:0, 
      positionLeft:0
    });
  };
});
