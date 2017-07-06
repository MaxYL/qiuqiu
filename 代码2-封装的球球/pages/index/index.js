


Page({
  
  huaQiuQiu: function(context, x, y) {
    console.log("球球");
    var r = parseInt(Math.random() * 256);
    var g = parseInt(Math.random() * 256);
    var b = parseInt(Math.random() * 256);
    var x =(Math.random() * 350);
    var y =(Math.random() * 400);
    context.setFillStyle("rgb(" + r + ", " + g + "," + b + ")");
    context.beginPath();
    context.arc(x, y, 20, 0, 2 * Math.PI);
    context.fill();
  },

  onReady: function() {
    // 1. 得到画布
    var context = wx.createCanvasContext("canvas1")


    // 使用画球球功能
    this.huaQiuQiu(context, 100, 150);
    this.huaQiuQiu(context, 260, 250);
    this.huaQiuQiu(context, 150, 150);
    this.huaQiuQiu(context, 200, 250);
    this.huaQiuQiu(context, 160, 350);

    // 3. 画出来
    context.draw();
  }
})
