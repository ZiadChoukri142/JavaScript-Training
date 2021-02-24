// 1
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var idLength =  Math.floor(Math.random() * 51 + 50) 
    for (var i = 0; i < idLength; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  console.log(makeid());

// 2
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
const r = random(0, 255);
const g = random(0, 255);
const b = random(0, 255);
const rgb = `rgb(${r},${g},${b})`;console.log(rgb)


  