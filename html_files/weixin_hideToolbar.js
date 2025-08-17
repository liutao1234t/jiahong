$(document).ready(function(){
  document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
    WeixinJSBridge.call('hideToolbar');
  });

});

/*
* url 目标url
* arg 需要替换的参数名称
* arg_val 替换后的参数的值
* return url 参数替换后的url
*/
function changeURLArg(url,arg,arg_val){
	var pattern=arg+'=([^&]*)';
	var replaceText=arg+'='+arg_val;
	if(url.match(pattern)){
		var tmp='/('+ arg+'=)([^&]*)/gi';
		tmp=url.replace(eval(tmp),replaceText);
		return tmp;
	}else{
		if(url.match('[\?]')){
			return url+'&'+replaceText;
		}else{
			return url+'?'+replaceText;
		}
	}
}





var dataForWeixin = {
    //appId: "wx301ad689cd35e455",
    //appId: "wxb64de1ff72e55aef",
    appId:"wx19cbf86cd0eeafb4",
    MsgImg: "",
    TLImg: "",
    url: "",
    title: "",
    amdesc: "",
	tldesc: "",
    fakeid: "",
    weibodesc: "",
    callback: function() { }
};
function SetupWeiXinShareInfo(url, title, amdesc, tldesc, weibodesc, msgimg) {
    dataForWeixin.url = url;
    dataForWeixin.title = title;
    dataForWeixin.amdesc = amdesc;
	dataForWeixin.tldesc = tldesc;
    dataForWeixin.weibodesc = weibodesc;
    if (msgimg != '') {
        dataForWeixin.MsgImg = msgimg;
    }
}




(function () {
    var onBridgeReady = function () {
        WeixinJSBridge.on('menu:share:appmessage', function (argv) {
            WeixinJSBridge.invoke('sendAppMessage', {
                "appid": dataForWeixin.appId,
                "img_url": dataForWeixin.MsgImg,
                "img_width": "120",
                "img_height": "120",
                "link": shareLink,
                "desc": dataForWeixin.amdesc,
                "title": dataForWeixin.title
            }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:timeline', function (argv) {
            (dataForWeixin.callback)();
            WeixinJSBridge.invoke('shareTimeline', {
                "img_url": dataForWeixin.MsgImg,
                "img_width": "120",
                "img_height": "120",
                "link": shareLink,
                "desc": dataForWeixin.tldesc,
                "title": dataForWeixin.title
            }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:weibo', function (argv) {
            WeixinJSBridge.invoke('shareWeibo', {
                "content": dataForWeixin.weibodesc,
                "url": shareLink
            }, function (res) { (dataForWeixin.callback)(); });
        });
        WeixinJSBridge.on('menu:share:facebook', function (argv) {
            WeixinJSBridge.invoke('shareFB', {
                "img_url": dataForWeixin.MsgImg,
                "img_width": "120",
                "img_height": "120",
                "link": shareLink,
                "desc": dataForWeixin.tldesc,
                "title": dataForWeixin.title
            }, function (res) { });
        });
    };
	
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
    }
	
    
})();



var shareLink = window.location.href;
shareLink = changeURLArg(shareLink,'wechatid','');


dataForWeixin.callback = function () {};
SetupWeiXinShareInfo(shareLink, document.title, $("#share_description").val(), $("#share_description").val(), $("#share_description").val(), $("#share_img_url").val());


