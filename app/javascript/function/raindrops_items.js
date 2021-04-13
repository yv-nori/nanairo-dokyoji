import {
  _doc
} from "../function/utility"
export const raindropsBlue = (height = 170) => {
  const $target = _doc.getElementById('JS_raindrops_target');
  $($target).raindrops({
    color:'#77bfc4', 
    waveLength:800, 
    frequency:3,
    waveHeight:250, 
    density:0, 
    rippleSpeed:0.001,
    canvasWidth:2000,
    canvasHeight: height,
    rightPadding:20, 
    position:'absolute',
    positionBottom:0, 
    positionLeft:0,
    id: 'P_Recruit__kv__rain',
  });
  return $($target).find('canvas:last')[0]
}
export const raindropsBlueDarken = () => {
  const $target = _doc.getElementById('JS_raindrops_target-darken');
  $($target).raindrops({
    color: '#65A2C2',
    waveLength: 800,
    frequency: 3,
    waveHeight: 250,
    density: 0,
    rippleSpeed: 0.001,
    canvasWidth: 2000,
    canvasHeight: 560,
    rightPadding: 20,
    position: 'absolute',
    positionBottom: 0,
    positionLeft: 0
  });
  return $($target).find('canvas:last')[0]
}
export const deleteCanvas = (id) => {
  const $target = _doc.getElementById(id);
  if ($target !== null) {
    $target.remove()
  }
}
