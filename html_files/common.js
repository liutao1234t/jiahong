// JavaScript Document
$(document).ready(function(){

	$(".ent_m_plk label").each(function(i){  //产品详情页
		$(this).click(function(){
			$(".other_pu dl").eq(i).show().siblings().hide();
			$(".other_p").css("display", "none");
			$(".other_pu").css("display", "block");
		});
	});

    $(function(){
        $(window).scroll(function(){
            if($(window).scrollTop() > 0){
                $(".header_main").addClass("header_main_fixed");
            }
            else{
                $(".header_main").removeClass("header_main_fixed");
            }
        });
	});
    $(".gh_pl_n_mm ul li table,.gh_pl_n_m_mn").height($(".gh_pl_n_mm ul li").width());
	$(".screening_main ul").height($(window).height()-44);
	$(".pro_list_window dl dd table,.pro_list_window_tt").height($(".pro_list_window dl dd").width());
	$(".s_xq_t_mmn dl dd table,.s_xq_t_m_m").height($(".s_xq_t_mmn dl dd").width());
	$(".mer_cha_t1").height($(".mer_cha_top_sjs dl dd").width());
	
  // 为您推荐
  $(".pgh_pl_navt a").each(function(i){  
	$(this).click(function(){
		$(this).addClass("omm").siblings().removeClass("omm");
		$(".gh_pl_n_mm").eq(i).show().siblings().hide();
	});
   });
  $(".classi_fication").click(function(){
        $(this).parent().toggleClass("on");
        $(".bottom_nav_center").toggle();
    });
  $(".xzs_tk").click(function(){
	$(".cg_zs_main_cetu").show();  
  }); 
  $(".cg_zs_main_bg").click(function(){
	$(".cg_zs_main_cetu").hide();  
  }); 
  // 筛选
  $(".sx_fl").click(function(){
	$(".screening_main").animate({ width: '75%', opacity: '1' }, "fast");
	$(".screening_bg").show(); 
	$("body").css({"overflow-y":"hidden"}); 
  });  
  $(".screening_bg").click(function(){
	$(".screening_main").animate({ width: '0', opacity: '1' }, "fast");
	$(".screening_bg").hide();
	$("body").css({"overflow-y":"auto"}); 
	$(".nav_two_two").hide();
  });
  $(".screening_main ul li em a").click(function(){
        $(this).toggleClass("omm").siblings().removeClass("omm");
    }); 
  $(".screening_main ul li.dde_qieu em a").click(function(){ 
        $(this).addClass("omm").siblings().removeClass("omm");
    }); 	
  $(".reset").click(function(){
    $(".screening_main ul li em a").removeClass("omm");   
  });  
  
  $(".last_t_r").click(function(){
	$(".nav_two_two").toggle();
	$(".screening_bg").toggle();  
  }); 
  // 招商区域
  $(".s_rm_to_nav a").each(function(i){  
	$(this).click(function(){
		$(this).addClass("omm").siblings().removeClass("omm");
		$(".zs_rm_to_tvhg").eq(i).show().siblings().hide();
	});
   });
   //申请代理
  $(".mfg").click(function() {
    if($(".mfg").is(':checked')) { 
     $(this).parent().toggleClass("omm"); 
    }
  });
  
/*  $(".loin_tel").keyup(function(){
	var regex = /^1[0-9]{10}$/;
	  var tel=$(this).val();
	if(regex.test(tel)==''){
	  $(".hq_yzm").removeClass("hq_yzm_m");
		$(".hq_yzm").unbind();
	 }else{
	  $(".hq_yzm").addClass("hq_yzm_m"); 
	   $(function  () {
		//获取短信验证码
		var validCode=true;
		$(".hq_yzm").click (function  () {
			var time=60;
			var code=$(this);
			if (validCode) {
				validCode=false;
				code.addClass("msgs1");
				code.html(time+"秒");
			var t=setInterval(function  () {
				time--;
				code.html(time+"秒");
				if (time==0) {
					clearInterval(t);
				code.html("重新获取");
					validCode=true;
				code.removeClass("msgs1");
	
				}
			},1000)
			}
		})
	  });    
     }
   }); */

   $(".xq_top_b a").click(function(){
	$(this).toggleClass("omm");
	$(this).html("下拉查看更多 &or;");
	$(this).parents(".p_top_nvfgh").toggleClass("p_top_nvfgh_mm"); 
	$(this).parents(".zs_xq_top_c").find(".sp_jie").toggleClass("sp_jieh_mm");
	$(this).parents(".zs_xq_top_c").find(".xq_top_l").toggle();
	$(".xq_top_b a.omm").html("收起&and;");
  }); 
  
   //选择类别
  $(".sjs_main_right_plk em").click(function() {
    $(this).addClass("omm").siblings().removeClass("omm"); 
  });
  
  //选择类别
  $(".lib_mn_top dl dd em a").click(function() {
    $(this).parent().addClass("omm").siblings().removeClass("omm"); 
  });
  // 选择市场价格分类
  $(".sjs_main_left a").each(function(i){  
	$(this).click(function(){
		$(this).addClass("omm").siblings().removeClass("omm");
		$(".sjs_main_right dl,.sjs_main_right_plk dl").eq(i).show().siblings().hide();
	});
   });
   // 产品介绍公司介绍
  $(".e_mn_to_nav a").each(function(i){  
	$(this).click(function(){
		$(this).addClass("omm").siblings().removeClass("omm");
		$(".e_mn_to_na_list").eq(i).show().siblings().hide();
	});
   });
   
  // 新闻资讯
    var $catry = $(".secuf_top_nav ul a:gt(3)").hide();
    $(".hide_up").click(function(){
        $(".secuf_top_nav ul a:gt(3)").slideToggle();
        $(".secuf_top_nav").toggleClass("secuf_top_nav_p");
        $(this).toggleClass('hide_up');
    });
   $(".ews_txt").click(function(){

	$(".screening_bg,.news_bott_top").show();
	   $('#content').focus();
	$("body").css({"overflow-y":"hidden"}); 
  });  
  $(".screening_bg,#qx").click(function(){
	$(".screening_bg,.news_bott_top").hide();
	  $(".news_plu").hide();
	  $(".exit_bg").hide();
	$("body").css({"overflow-y":"auto"}); 
  });
  
  // 全部评论
    var $catry = $(".plun_rig_main dl dd:gt(1)").hide();
    $(".all_pl").click(function(){
		$(this).html("全部评论 >");
        $(".plun_rig_main dl dd:gt(1)").slideToggle();
        $(this).toggleClass('hide_up');
		$(".hide_up").html("收起评论");	
    });
	
	
 $(".loin_tel1").keyup(function(){
	var regex = /^1[0-9]{10}$/;
	var tel=$(this).val();
	if(regex.test(tel)==''){
	  $(".dtm").removeClass("gt_tx_yzm_omm");
		$(".dtm").unbind();
	 }else{
	  $(".dtm").addClass("gt_tx_yzm_omm"); 
	   $(function  () {
		//获取短信验证码
		var validCode=true;
		$(".dtm").click (function  () {
		$_this=$(this);
			$.get('/register/getCode.shtml?tel='+tel+"&pic_yzm="+$('input[name="pic_yzm"]').val(),function(data){
				tusi(data.message);
				if(data.status=="ERROR"){
					$('#yzm_img').click();
				}else{
					var time=60;
					var code=$_this;
					if (validCode) {
						validCode=false;
						code.addClass("dtm_omm");
						code.html(time+"秒");
						var t=setInterval(function  () {
							time--;
							code.html(time+"秒");
							if (time==0) {
								clearInterval(t);
								code.html("重新获取");
								validCode=true;
								code.removeClass("dtm_omm");

							}
						},1000)
					}
				}
			});

		}

		)
	  });    
     }
   });
  $(".regt_txt").keyup(function(){
    if($(".regt_txt_tyzm").val() && $(".loin_tel").val() && $(".regt_txt_dxyzm").val() !=""){
	 $(".regt_txt2").addClass("regt_txt_omm");   
	 }
	if($(".regt_txt_name").val() && $(".regt_txt_passeord").val() && $(".regt_txt_user").val() && $(".regt_txt_qy").val() !=""){
	 $(".regt_txt2").addClass("regt_txt_omm");   
	 }
   }); 
  $(".utr_mne").click(function() {
    if($(".utr_mne").is(':checked')) { 
     $(this).parent().addClass("nmu_l_omm").siblings().removeClass("nmu_l_omm"); 
    }
  });
  $(".urt_fghw").click(function() {
	  var e1=$('input[name="companyname"]');
    if($(this).prop("checked")) { 
     $(this).parent().addClass("nmu_le_omm");
	 $(".regt_txt_qy").attr("disabled",true);
		demo.ignore(e1);
    }else{
	$(this).parent().removeClass("nmu_le_omm");
	$(".regt_txt_qy").attr("disabled",false);
		demo.unignore(e1);
	}
  });
  
  // 产品菜单
    var $productMenu = $('#productMenu');
    if($productMenu.length > 0){
        productMenuHander($productMenu);
    }

    function productMenuHander($obj){
        var $tab_contents = $obj.find('.tab_contents'),
            tabContTop = $tab_contents.offset().top;
        $obj.find('.tab').css('height', $obj.height()).find('li').click(function(){
            var index = $(this).index()+1;
            tabCurrent($(this));
            scrollTabCont(index);
        });
        function tabCurrent($o){
            $o.addClass('current').siblings().removeClass('current');
        }
        function scrollTabCont(index){
            $tab_contents.scrollTop(0);
            $currentDom = $obj.find('.tab_cont_'+index);
            $tab_contents.scrollTop($currentDom.offset().top-tabContTop);
        }
    }

	  // 列表导航
  $(".cp_nav_left ul li").each(function(i){  
	$(this).click(function(){
		$(this).addClass("omm").siblings().removeClass("omm");
		$(".cp_nav_right dl").eq(i).show().siblings().hide();
	});
   });

	// 采购通首页切换
	$(".cg_center_ttf a").each(function(i){
		$(this).click(function(){
			$(this).addClass("omm").siblings().removeClass("omm");
			$(".t_center_tlist").eq(i).show().siblings().hide();
		});
	});
/*   $(".cp_list_pu,.cp_list_pufg").click(function(){
	$(".cp_list_p").show();
	$(".cp_list_pt1,.footer,.bottom_nav").hide();
	$("html,body").animate({scrollTop:0}, 10);  
  });*/
 //选择类别
  $(".mbv").click(function() {
    if($(".mbv").is(':checked')) { 
     $(this).parent().parent().addClass("omm").siblings().removeClass("omm");
    }
  });


 $(".sp_jie a").click(function(){
  $(this).html("详细&or;");
  $(this).parent().toggleClass("sp_jie_omm");	 
  $(this).toggleClass("s_omm").siblings().removeClass("s_omm");
  $(".s_omm").html("收起&and;");
 });
 // 全部评论
    var $catry = $(".dl_yx_maingg dl dd:gt(4)").hide();
    $(".all_more").click(function(){
		$(this).html("查看更多&or;>");
        $(".dl_yx_maingg dl dd:gt(4)").slideToggle();
        $(this).toggleClass('hide_up');
		$(".hide_up").html("收起&and;");	
    });
	
	$(".cp_nav_left,.sjs_main_left,.tab_left_l").height($(window).height()-95);
	
	

/*	$(".cp_class").click(function(){
	$(".cp_fl_p").show();
	$(".cp_fl_pt,.footer").hide();
	$("html,body").animate({scrollTop:0}, 10);  
  });*/
	
	// 双十一活动 
	$('input:radio[name="dd"]').click(function(){
		var uu=$('input:radio[name="dd"]:checked').val();
		if(uu=='1'){
		 $(".ym_plk").show(); 
		 $("#domainName").attr("datatype", "url");
	     }
		 if(uu=='0'){
		  $(".ym_plk").hide();
		  $("#domainName").removeAttr("datatype");
	     }
	  });
	  $(".seo_tk").click(function(){
	   $(".yu_yue_sq2,.yu_yue_sq_bg").show();  
	  });
	  $(".yu_yue_sq_b,.close_x").click(function(){
		  $("#msgdemo em").html("");
		  $("#msgdemo1 em").html("");
		  $(".yu_yue_sq2,.yu_yue_sq_bg").hide();  
	  });
	  $(".vip_tk").click(function(){
	   $(".yu_yue_sq1,.yu_yue_sq_bg").show();  
	  });
	  $(".yu_yue_sq_b,.close_x").click(function(){
		  $("#msgdemo em").html("");
		  $("#msgdemo1 em").html("");
		  $(".yu_yue_sq1,.yu_yue_sq_bg").hide();  
	  });
	  $(".ad_tk").click(function(){
	   $(".yu_yue_sq3,.yu_yue_sq_bg").show();  
	  });
	  $(".yu_yue_sq_b,.close_x").click(function(){
		  $("#msgdemo em").html("");
		  $("#msgdemo1 em").html("");
		  $(".yu_yue_sq3,.yu_yue_sq_bg").hide();  
	  });
	$(".xs_cp_t").click(function() {
	   $(this).parent().parent().next(".xs_cp_main").toggle();
	   $(this).toggleClass("xs_cp_t_omm");
	  }); 
	  
  $(".mfg_gc").click(function() {
	if($(this).prop("checked")) { 
	 $(this).parent().addClass("gdc_put_omm");
	  }else{
	   $(this).parent().removeClass("gdc_put_omm")
	  }
  });

	// 招商
	$(".zs_cp_cla_left ul li").each(function(i){
		$(this).mouseover(function(){
			$(this).addClass("select").siblings().removeClass("select");
			$(".zs_cp_cla_rtr dl").eq(i).show().siblings().hide();
		});
	});
	$(".mp_fg").click(function() {
		if($(this).is(':checked')) {
			$(this).parent().addClass("omm");
		}else{
			$(this).parent().removeClass("omm");
		}
	});
	$(".kj_lyo").click(function(){
		$(".sq_dl_luy_p,.screening_b_pg").show();
	});
	$(".reset_qx,.screening_b_pg").click(function(){
		$(".sq_dl_luy_p,.screening_b_pg").hide();
	});
	$(".zs_new_nav a").each(function(i){
		$(this).click(function(){
			$(this).addClass("omm").siblings().removeClass("omm");
			$(".s_new_n_list").eq(i).show().siblings().hide();
		});
	});
	/*$(".zs_share").click(function(){
		$(".cg_zs_main_bg,.share_main_t").show();
	});*/
	$(".cg_zs_main_bg,.fx_close").click(function(){
		$(".cg_zs_main_bg,.share_main_t").hide();
	});

    // add js 
    $(".sall_prt").click(function(){
        $(this).toggleClass("om_mm");
        $(this).html("全部属性 &or;");
        $(".prb_qw_list").toggleClass("prb_qw_list_fgh_mm");
        $(".om_mm").html("收起&and;");
    });

    $(".cm_pi").click(function(){
        $(".zs_bm_bg_lk,.zd_nm_tmr").show();
        if($("#yzm_img"))$("#yzm_img").src='/Kaptcha.jpg?t=' + Math.floor(Math.random()*100);
    });
    $(".ert_clo_clgt").click(function(){
        $(".zs_bm_bg_lk,.zd_nm_tmr").hide();
    });

    // add
    $(".aer_mert").click(function(){
        $(this).toggleClass("omm_p");
        $(this).html("&or;");
        $(".df_plk_tr").toggleClass("df_plk_tr_mm");
        $(".omm_p").html("&and;");
    });

 $(".w_det_t_main p iframe").height($(".w_det_t_main p iframe").width()-150);
 
 /* add js*/  
	$(".zk_qb").click(function(){ 
	$(this).toggleClass("om_mm");
	$(this).html("展开详细");
	$(this).prev().toggleClass("om_mm_t"); 
	$(".zk_qb.om_mm").html("收起");
  }); 

});