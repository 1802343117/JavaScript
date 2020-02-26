function printTime() {
  var d = new Date();
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  document.body.innerHTML = hours + ":" + mins + ":" + secs;
}
setInterval(printTime, 1000); // setInterval 第二个参数单位是 毫秒
