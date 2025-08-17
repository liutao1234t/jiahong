
    $(document).ready(function(){
        $.post("/im/msgState.shtml",{},function(data){
            if(data.state > 0){
                $(".im_state").show();
            }else{
                $(".im_state").hide();
            }
        },"json");
    });
