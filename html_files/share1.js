
$('.share_t,.zs_share,#s1').click(function(){
    $('#share1 i').html(window.location.href);
    //new QRCode(document.getElementById("qrcode"), window.location.href);
    if(!$('#qrcode').attr('title')||$('#qrcode').attr('title')==''){
        var qrcode = new QRCode("qrcode", {
            text: window.location.href,
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }

    //qrcode.clear();
    $('#share1').show();
});

$(document).on('click','.fx_close',function(){
    $('#share1').hide();
});

$(document).ready(function(){
	$(".copy").click(function(){
		var clipboard = new Clipboard('#copy_btn');    
		clipboard.on('success', function(e) {    
			tool.tusi("复制成功");
			e.clearSelection();
		});  
	}); 
});