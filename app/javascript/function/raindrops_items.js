const _doc = document;
export const raindropsBlue = () => {
  $(_doc.getElementById('JS_raindrops_target')).raindrops({
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
}
export const raindropsBlueDarken = () => {
  $(_doc.getElementById('JS_raindrops_target-darken')).raindrops({
    color: '#65A2C2',
    waveLength: 800,
    frequency: 3,
    waveHeight: 250,
    density: 0,
    rippleSpeed: 0.001,
    canvasWidth: 2000,
    canvasHeight: 700,
    rightPadding: 20,
    position: 'absolute',
    positionBottom: 0,
    positionLeft: 0
  });
}
