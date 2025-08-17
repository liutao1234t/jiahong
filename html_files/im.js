$(function(){
    $(".im_login").click(function(){ 
        window.location.href = '/toLogin.shtml?pre_url='+escape(window.location.href);
    });
    $(".fixe_main_bg,.im_close").click(function () {
        $(".fixe_main").hide();
        $(".fixe_main_bg").hide();
        $(".popOut").hide(); 
    });
    $(".dict_fixe_main dl dd").click(function () {
        $(".fixe_main").hide();
        $(".fixe_main_bg").hide();
    });
    $(".chat_online").click(function(){
        var that = this;
        $.get("/common/isLogin.shtml",{},function(data){
            if(data.status == 'OK'){
                toIm($(that));
            }else{
                var comId = $(that).attr("data-comid");
                var type = $(that).attr("data-type");
                var pid = $(that).attr("data-pid");
                var title = $(that).attr("data-title");
                var img = $(that).attr("data-img");
                var preurl = $(that).attr("data-preurl");
                if(isWap()){ 
                    $("#qiatan1").attr("data-comid", comId);
                    $("#qiatan1").attr("data-type", type);
                    $("#qiatan1").attr("data-pid", pid);
                    $("#qiatan1").attr("data-title", title);
                    $("#qiatan1").attr("data-img", img);
                    $("#qiatan1").attr("data-preurl", preurl);
                    $("#chk_im_img").click();
                    $(".fixe_main").show();
                    $(".fixe_main_bg").show();
                }else{
                    $("#erweima").attr("data-comid", comId);
                    $("#erweima").attr("data-type", type);
                    $("#erweima").attr("data-pid", pid);
                    $("#erweima").attr("data-title", title);
                    $("#erweima").attr("data-img", img);
                    $("#erweima").attr("data-preurl", preurl);
                    $(".fixe_main_bg").show();
                    wxShow();
                    $(".popOut").show();
                }
            }
        });
    });
    // 获取短信验证码
    var validCode = true;
    $(".im_dx_yzm").click(function () {
        var regex = /^1[0-9]{10}$/;
        var tel=$('#imRegister input[name="mobile"]').eq(0).val();
        if( regex.test(tel)){
            var code = $(this);
            if (validCode) {
                $.get('/register/getCode.shtml?tel='+tel+"&pic_yzm="+$('#imRegister input[name="yzm"]').eq(0).val()+"&type="+$('#imRegister input[name="dtm_type"]').eq(0).val(),function(data) {
                    ltusi(data.message, 3000);
                    if (data.status == "ERROR") {
                        $('#chk_im_img').click();
                    } else {
                        validCode = false;
                        var time = 60;
                        code.addClass("msgs2");
                        code.html(time + "秒");
                        var t = setInterval(function () {
                            time--;
                            code.html(time + "秒");
                            if (time == 0) {
                                clearInterval(t);
                                code.html("重新获取");
                                validCode = true;
                                code.removeClass("msgs2");
                            }
                        }, 1000);
                    }
                });
            }
        }else{
            ltusi("请填写正确的手机号码", 3000);
        }
    });
    var registerSubmit = true;
    $('#im_register_fast').click(function(){
        var name = $('#imRegister input[name="name"]').eq(0).val();
        var mobile = $('#imRegister input[name="mobile"]').eq(0).val();
        var dx_yzm = $('#imRegister input[name="dx_yzm"]').eq(0).val();
        if(name == '' || !name){
            ltusi('请填写您的姓名', 3000);
            return false;
        }
        if(mobile == '' || !mobile){
            ltusi('请填写您的手机号码', 3000);
            return false;
        }
        if(dx_yzm==''||!dx_yzm){
            ltusi('请填写短信验证码', 3000);
            return false;
        }
        if(registerSubmit){
            registerSubmit = false;
            $.post("/register/fast.shtml",$("#imRegister").serialize(),function(data){
                if(data.status == 'OK'){
                    //tusi("报名成功");
                    toIm($("#qiatan1"));
                    registerSubmit = true;
                }else{
                    if(data.errorCode == 'exists'){
                        $.post("/loginFast.shtml",{"loginWay":"mobile","yzm":dx_yzm,"tel":mobile},function(data1){
                            if(data1.status == 'OK'){
                                //tusi("报名成功");
                                toIm($("#qiatan1"));
                            }else{
                                ltusi(data1.message, 3000);
                            }
                            registerSubmit = true;
                        },'json');
                    }else{
                        ltusi(data.message, 3000);
                        registerSubmit = true;
                    }
                }
            },'json');
        }
        return false;
    });
});
function toIm(that){
    $(".fixe_main").hide();
    $(".fixe_main_bg").hide();
    $.get(
        "/common/isLogin.shtml",
        {},
        function(data){
            if(data.status == 'OK'){
                var comId = that.attr("data-comid");
                var type = that.attr("data-type");
                var url = "/im/im.html?type=" + type + "&comId=" + comId;
                var pid = that.attr("data-pid");
                var toMid = 0;
                if(that.attr("data-toMid")){
                    toMid = that.attr("data-toMid");
                }
                if(pid > 0){
                    url += "&pid=" + pid;
                }
                if(toMid > 0){
                    url += "&toMid=" + toMid;
                }
                if(type == "product" || type == 'trade' || type == 'baojia' || type == 'zs'){
                    var title = that.attr("data-title");
                    var img = that.attr("data-img");
                    url += "&title=" + escape(title);
                    url += "&img=" + escape(img);
                    var preUrl = "";
                    if(that.attr("data-preurl")){
                        preUrl = that.attr("data-preurl");
                    }else{
                        preUrl = window.location.href;
                    }
                    url += "&preUrl=" + escape(preUrl);
                } 
                window.location.href = url;
            }else{
                window.location.href = '/toLogin.shtml?pre_url='+escape(window.location.href);
            }
        }
        ,"json");
}
function isWap() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ['comFront','Android','iPhone','SymbianOS','Windows CE','Windows Phone','ios','MIDP-2.0','Opera Mini','UCWEB','iPad','iPod'];
    var flag = false;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = true;
            break;
        }
    }
    return flag;
}