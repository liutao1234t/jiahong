/**
 * 二维码倒计时 
 */
var wx_cutDown;
var timestamp = "";
var ischeck_login = false;
function weixin_cutDown(){
    var time=100;
    wx_cutDown=setInterval(function  () {
        time--;
        if(time === 0){
            //倒计时停止
            clearInterval(wx_cutDown);
            //轮询停止
            init = window.clearInterval(init);
            stopWx();
            wxShow();
            //tusi('二维码已失效');
            //window.location.href='/login!toLogin.action';
            //$(".ewm_sx").css("display","block");
        }
    },1000)
}
/**
 * 展示二维码
 * @param link
 * @param el
 */
function showErweima(link){
    $('#erweima').empty();
    var qrcode = new QRCode($('#erweima')[0], {
        width : 180,//设置宽高
        height : 180
    });
    qrcode.makeCode(link);
}
/////////////////////////////微信扫码轮询
function toWxShow(url_randparamsr_){
    //$(".ewm_sx").css("display","none");
    wxShow(url_randparamsr_);
}
function wxShow(){
    timestamp = new Date().getTime() + "";
    timestamp = '1'+timestamp.substring(4, timestamp.length);
    $.ajax({
        url:'/wx/findLoginWxEwm.shtml',
        data:{timestamp:timestamp},
        dataType:'json',
        type:'post',
        success:function(data){
            if(data.status == 'OK'){
                showErweima(data.data);
                startWx();
            }
        }
    })
}

function startWx(){
    //开启轮询
    init=self.setInterval("wx_Login()",2000);
    //开始倒计时
    weixin_cutDown();
}

function stopWx() {
    //停止轮询
    clearInterval(init);
    //倒计时停止
    clearInterval(wx_cutDown);
}

function wx_Login(){
    if(!ischeck_login){
        ischeck_login = true;
        var type = $("#erweima").attr("data-ewmtype");
        // 自动注册、绑定
        $.ajax({
            url:'/wx/wxScanIm.shtml',
            data:{'timestamp':timestamp,'type':type},
            dataType:'json',
            type:'post',
            success:function(data){
                if(data.status == 'OK'){
                    stopWx();
                    if(type == "register"){
                        toIm($("#erweima"));
                    }
                }else{
                    ischeck_login=false;
                    if(data.message != '未扫码'){
                        stopWx();
                        if(data.message == '绑定失败'){
                            alert("绑定失败,请重试");
                        }else{
                            alert(data.message);
                        }
                        wxShow();
                    }
                }
            }
        });
    }
}