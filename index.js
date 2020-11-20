const jpgMine = "image/jpeg"

// const b64 = c => {
//   const b = c.toDataURL()
//   return b
// }

/**
 * 将图片转为 `base64`
 * @param {any} img 图片元素(element)
 */
// const NewImage = (img)=> {
//   const c = NewCanvas(img)
//   return b64(c)
// }

/**
 * 在画布上渲染正确的
 * @param {any} canvas 元素
 */
const Render = (canvas, img) =>{
  const ctx = canvas.getContext('2d');
  let s_w = img.width;
  let w = img.naturalWidth;
  let h = img.naturalHeight;

  canvas.width = w;
  canvas.height = h;

  canvas.style.width = s_w + "px";

  let num = 10;
  let remainder = parseInt(h % num);
  const copyW = w;

  for (var i = 0; i < num; i++) {
    let copyH = Math.floor(h / num);
    let py = copyH * (i);
    let y = h - (copyH * (i + 1)) - remainder; 
    if (i == 0) {
      copyH = copyH + remainder;
    } else {
      py = py + remainder;
    }
    ctx.drawImage(img, 0, y, copyW, copyH, 0, py, copyW, copyH);
  }
}

/**
 * 创建一个画布,渲染正确的`img`图片
 * @param {any} img 图片元素(element)
 */
const NewCanvas = (img)=> {
  let canvas = document.createElement('canvas');
  Render(canvas, img)
  return canvas
}

module.exports = {
  NewCanvas,
  Render,
}