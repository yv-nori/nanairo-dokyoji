export const accordion = (Items) => {
  for (let i = 0; i < 4; i++){
    const length = Items[i].$triggers.length;
    let clickedTarget = null;
    for (let j = 0; j < length; j++) {
      $(Items[i].$triggers[j]).on('click', () => {
        if (clickedTarget === j) {
          $(Items[i].$targetGps[clickedTarget]).removeClass('isActive');
          clickedTarget = null
        } else {
          for (let k = 0; k < length; k++) {
            let target_length = $(Items[i].$targetGps[k]).length
            for (let l = 0; l < target_length; l++){
              if (j === k) {
                $(Items[i].$targetGps[k][l]).addClass('isActive');
              } else {
                $(Items[i].$targetGps[k][l]).removeClass('isActive');
              }
            }
          }
          clickedTarget = j;
        }
      });
    }
  }
};
const _doc = document;
export const accordionItems = () => {
  const Items = [
    { $triggers: [], $targetGps: [[], [], [], []] },
    { $triggers: [], $targetGps: [[], [], [], []] },
    { $triggers: [], $targetGps: [[], [], [], []] },
    { $triggers: [], $targetGps: [[], [], [], []] }
  ];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      Items[i].$triggers.push(_doc.getElementById("JS_accordion" + i + "_trigger" + j));
      Items[i].$targetGps[j].push(_doc.getElementById("JS_accordion" + i + "_target-icon" + j));
      Items[i].$targetGps[j].push(_doc.getElementById("JS_accordion" + i + "_target-title" + j));
      Items[i].$targetGps[j].push(_doc.getElementById("JS_accordion" + i + "_target-text" + j));
      Items[i].$targetGps[j].push(_doc.getElementById("JS_accordion" + i + "_target-content" + j));
    }
  }
  return Items;
}
