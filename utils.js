//  格式化音频时间长度
function formatDuration(duration) {
  var s = parseInt(duration % 60);
  var second = s < 10 ? "0" + s : s;
  var m = parseInt(duration / 60);
  var minutes = m < 10 ? "0" + m : m;
  return minutes + ":" + second;
}

// // 拖拽
// function drag(obj) {
//   var disX = 0;
//   var disY = 0;

//   obj.onmousedown = function(ev) {
//     var event = ev || event;

//     disX = event.clientX - obj.offsetLeft;
//     disY = event.clientY - obj.offsetTop;

//     if (obj.setCapture) {
//       // 事件捕获
//       obj.onmousemove = mousemove;
//       obj.onmouseup = mouseup;

//       obj.setCapture(); // 调用事件捕获，解决 IE7 以下的拖拽 bug
//     } else {
//       document.onmousemove = mousemove;
//       document.onmouseup = mouseup;
//     }

//     function mousemove(ev) {
//       var event = ev || event;
//       var left = event.clientX - disX;
//       var top = event.clientY - disY;

//       obj.style.left = left + "px";
//       obj.style.top = top + "px";
//     }

//     function mouseup() {
//       this.onmousedown = null;
//       this.onmouseup = null;

//       if (obj.releaseCapture) {
//         obj.releaseCapture(); // 关闭事件捕获
//       }
//     }
//     return false;
//   };
// }

// 事件绑定
// obj：绑定对象     ev：事件名称     fn：处理函数
function eventBinding(obj, ev, fn) {
  if (obj.attachEvent) {
    // IE
    obj.attachEvent("on" + ev, fn);
  } else {
    // chrome,ff
    obj.addEventListener(ev, fn, false);
  }
}
