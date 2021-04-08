// シャボンの描画
export const wrightShabon = ($targets, Params) => {
  const length = $targets.length;
  for (let $targetNum = 0; $targetNum < length; $targetNum++) {
    let shabon_length = Params[$targetNum].length;
    let str = "";
    for (let paramNum = 0; paramNum < shabon_length; paramNum++) {
      let $shabon = Params[$targetNum][paramNum];
      str += `
      <div class='${$shabon.class}__shabon' style='position:absolute;transform:translate3d(-50%,-50%,0);top:${$shabon.top}%;left:${$shabon.left}%;'>
        <div class='C_shabon_${$shabon.size}'>
          <div class='C_shabon-roll-${$shabon.time}${$shabon.pattern} C_shabon_anime' id='${$shabon.id}'>
            <div class='C_shabon-hori-${$shabon.time}${$shabon.pattern} C_shabon_anime' id='${$shabon.id}'>
              <div class='C_shabon-ver-${$shabon.time}${$shabon.pattern} C_shabon_anime' id='${$shabon.id}'>
                <div class='C_shabon-${$shabon.direction}'></div>
              </div>
            </div>
          </div>
        </div >
      </div >`;
    }
    $targets[$targetNum].innerHTML = str
  }
};
