/*
*Descrip: A flexible front-end fit for mobile.
*Date: 2018/05/14
*设计稿为750*1334
*rem = 75px; 750 / 10 = 75
*/
;(function(win, doc, undefined){

  'use strict';
  var ua = win.navigator.userAgent.toLowerCase(),
      timer = null;

  var devicePras = {
    isAndroid: function() {//判断终端设备是否为安卓
      return /android|adr/gi.test(ua) || false;
    },
    isIos: function() {//判断终端设备是否为苹果
      return (/iphone|ipod|ipad/gi.test(ua) && !this.isAndroid()) || false;
    },
    scale: function() { //返回viewpot缩放比例, 为高清适配所用。
      if(this.isIos()){
        return 1 / this.dpr();
      }else {
        return 1;
      }
    },
    dpr: function() { //返回设备dpr

      if(this.isIos()){
        return Math.min(win.devicePixelRatio, 3);
      }else{
        return 1;
      }
    }
  };

  //设置设备dpr，你可以根据该属性进行页面控制。
  function setDpr(docEle) {
    docEle.dataset.dpr = devicePras.dpr();
  };

  ////设计稿以750*1334，及根节点字体75px为参考。
  function setFontSize(){
    var docEle = doc.documentElement,
      clientWidth = docEle.clientWidth;
    var dpr = devicePras.dpr();

    if (clientWidth < 375) {
      clientWidth = 375;
    }

    if (clientWidth > 750) {
      clientWidth = 750;
    }

    var fs = clientWidth / 10;
    if (fs) {
      var numObject = new Number(fs);
      docEle.style.fontSize = numObject.toFixed(2) + "px";
    } else {
      docEle.style.fontSize = "37.5px";
    }

  };

  function pageShowCallBack(e) {
    e = e || event;
    if(e.persisted) { //页面是否被缓存
      timer && clearTimeout(timer);

      timer = setTimeout(setFontSize, 300);
    }
  };

  // 监听设备窗口大小变化。
  function winSizeChange() {
      win.onresize = function () {
        setFontSize();
      }
  }

  var init = function() {
    var docEle = doc.documentElement;
    setDpr(docEle);
    setFontSize();

    if(win.addEventListener) { //监听pageshow事件，如果页面有过缓存则进行重新设置根节点大小。
      win.addEventListener('pageshow', pageShowCallBack, false);
    }else {
      win.attachEvent('onpageshow', pageShowCallBack);
    }

    winSizeChange();
  };

  init();
})(window, document);
