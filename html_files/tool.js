/**
 * @author vidar
 * @description 工具类
 */
var log = function () {
}//console.log.bind(console);
var tool = {
	/**
	 * 判断是否为空 
	 * @param value
	 * @returns {boolean}
	 */
	isEmpty: function (value) {
		if (value === null || value === '' || typeof(value) === 'undefined') {
			return true;
		} else if (tool.isArray(value) && value.length === 0) {
			return true;
		} else {
			return false;
		}
	},
	isNotEmpty: function (value) {
		return !this.isEmpty(value);
	},
	isArray: function (value) {
		return Object.prototype.toString.call(value) == "[object Array]";
	},
	/**
	 * 消息确认框
	 * @param text1 提示信息
	 * @param text2 确定按钮文本
	 * @param text3 取消按钮文本
	 * @param callback1 确定调用方法
	 * @param callback2 取消调用方法
	 */
	confirmTip: function (text1, text2, callback1, text3, callback2) {
		layer.confirm(text1, {
			btn: [text2, text3] //按钮
		}, callback1, callback2);
		/*$('#tip_text').text(text1);
		$('#tip_sure').text(text2);
		$('#tip_cancel').text(text3);
		$('#tip_sure').off('click').on('click', function () {
			$('#tip_sure').off('click');
			if (callback1 !== null) {
				callback1();
			}
			$('.mb_xz_bg').hide();
			$('.mb_xz_cg').hide();
		});
		$('#tip_cancel').off('click').on('click', function () {
			$('#tip_cancel').off('click');
			if (callback2 !== null) {
				callback2();
			}
			$('.mb_xz_bg').hide();
			$('.mb_xz_cg').hide();
		});
		$('.mb_xz_bg').show();
		$('.mb_xz_cg').show();*/
	},
	/**
	 * 截取字符串
	 * @param str
	 * @param length
	 * @returns {*}
	 */
	subString: function (str, length) {
		if (this.isEmpty(str)) {
			return '';
		}
		if (str.length > length) {
			return str.substring(0, length) + '...';
		}
		return str;
	},
	/**
	 * 正则替换
	 * @param str1 字符串
	 * @param regex 正字
	 * @param str2 替换字符串
	 * @returns {*}
	 */
	regReplace: function (str1, regex, str2) {
		var reg = new RegExp(regex, "g"); //创建正则RegExp对象
		return str1.replace(reg, str2);
	},
	/**
	 * 多选绑定
	 * @param all  全选按钮name
	 * @param one  单个按钮name
	 */
	bindCheckAll: function (all, one) {
		$('input[name="' + all + '"]').off('click').on('click', function () {
			$('input[name="' + one + '"]').each(function (i, o) {
				if ($('input[name="' + all + '"]').is(':checked')) {
					this.checked = true;
				} else {
					this.checked = false;
				}
			})
		})
	},
	/**
	 * 获取复选框value
	 * @param name 复选框name
	 * @returns {Array}
	 */
	getCheckedVals: function (name) {
		var arr = new Array();
		$('input[name="' + name + '"]').each(function (i, o) {
			if (this.checked) {
				arr.push($(o).val());
			}
		});
		return arr;
	},
	/**
	 * 根据name获取value
	 * @param name
	 * @returns {Array}
	 */
	getValsByName: function (name) {
		var arr = new Array();
		$('input[name="' + name + '"]').each(function (i, o) {
			arr.push($(o).val());
		});
		return arr;
	},
	/**
	 * 判断是否为number素组
	 * @param array 数组对象
	 * @returns {boolean} true:不是
	 *                      false:是
	 */
	arrayIsNaN: function (array) {
		if (Array.isArray(array)) {
			array.forEach(function (e) {
				if (isNaN(e)) {
					return true;
				}
			})
		}
		return false;
	},
	/**
	 * 判断是否是正确的数字（10.00）
	 * @param _v
	 * @returns {boolean}
	 */
	checkDouble: function (_v) {
		var p = /^[0-9]+(\.[0-9]+)?$/;
		return p.test(_v) ? true : false;
	},
	/**
	 * 单选选中
	 * @param objname
	 * @param v
	 */
	radioinit: function (objname, v) {
		var o = document.getElementsByName(objname);
		if (o == null) return;
		for (var i = 0; i < o.length; i++) {
			if (o[i].value === v) {
				o[i].checked = true;
			}
		}
	},
	/**
	 * 多选选中
	 * @param objname
	 * @param v
	 */
	checkboxinit: function (objname, v) {
		var o = document.getElementsByName(objname);
		if (o == null) return;
		var val = v.split(",");
		for (var i = 0; i < o.length; i++) {
			for (var j = 0; j < val.length; j++) {
				if (o[i].value === val[j]) {
					o[i].checked = true;
				}
			}
		}
	},
	/**
	 * 下拉框选中
	 * @param objname
	 * @param v
	 */
	selected: function (objname, v) {
		var o = document.getElementById(objname);
		if (o == null) return;
		for (var i = 0; i < o.length; i++) {
			if (o[i].value === v) {
				o[i].selected = true;
			}
		}
	},
	bindShowAlbum: function () {
		$(".le_im_pl").on("mouseover", function () {
			var img = $(this).find("img").eq(0).attr("src");
			if (img !== "/images/swe_plk_lv.jpg") {
				$(this).find("img").eq(1).show();
			}
		}).on("mouseout", function () {
			var img = $(this).find("img").eq(0).attr("src");
			if (img !== "/images/swe_plk_lv.jpg") {
				$(this).find("img").eq(1).hide();
			}
		});
		/**
		 * 选择图片
		 */
		$(".le_im_pl").on("click", function () {
			var n = $(this).attr("data-id");
			tool.selectImg("img_" + n, "productPic_" + n);
		});
		/**
		 * 重置图片
		 */
		$(".cz_tp_p").on("click", function () {
			var n = $(this).attr("data-id");
			tool.delimg("img_" + n, "productPic_" + n);
		});
	},
	selectImg: function (objId, showId) {
		$.zxxbox($("<div><iframe scrolling='auto' frameborder='no' style='padding: 0pt; margin: 0pt; display: block; width: 670px; height: 415px;' src='/album/selectpic.action?objid=" + objId + "&amp;showid=" + showId + "&amp;actiontype=0'></iframe></div>"), {
			title: "<b>选择图片</b>",
			drag: true
		});
	},
	delimg: function (objId, showId) {
		$("#" + showId).attr("src", "/images/swe_plk_lv.jpg");
		$("#" + objId).val("");
	},

	/**
	 * 吐丝信息框
	 * @param txt
	 * @returns
	 */
	tusi: function (txt, fun) {
		$('.tusi').remove();
		var div = $('<div style="background: #000/*url(/images/tusi.png)*/; filter:alpha(Opacity=70);-moz-opacity:0.7;opacity: 0.7;border-radius:8px;max-width: 85%;min-height: 77px;min-width: 270px;position: absolute;left: -1000px;top: -1000px;text-align: center;border-radius:10px;"><span style="color: #ffffff;line-height: 77px;font-size: 23px;">' + txt + '</span></div>');
		$('body').append(div);
		div.css('zIndex', 9999999);
		div.css('left', parseInt(($(window).width() - div.width()) / 2));
		var top = parseInt($(window).scrollTop() + ($(window).height() - div.height()) / 2);
		div.css('top', top);
		setTimeout(function () {
			div.remove();
			if (fun) {
				fun();
			}
		}, 2000);
	},

	/**
	 * 吐丝信息框
	 * @param txt
	 * @returns
	 */
	toast: function (txt, fun) {
		$('.tusi').remove();
		var div = $('<div style="background: url(/images/tusi.png);max-width: 85%;min-height: 77px;min-width: 270px;position: absolute;left: -1000px;top: -1000px;text-align: center;border-radius:10px;"><span style="color: #ffffff;line-height: 77px;font-size: 23px;">' + txt + '</span></div>');
		$('body').append(div);
		div.css('zIndex', 9999999);
		div.css('left', parseInt(($(window).width() - div.width()) / 2));
		var top = parseInt($(window).scrollTop() + ($(window).height() - div.height()) / 2);
		div.css('top', top);
		setTimeout(function () {
			div.animate({
				top: top - 200,
				opacity: 0
			}, {
				duration: 888,
				complete: function () {
					div.remove();
					if (fun) {
						fun();
					}
				}
			});
		}, 1888);
	},
	/**
	 * 获取短信验证码倒计时
	 * @param send_btn_Id 发送短信按钮id
	 * @param callback 按钮重新绑定回调方法
	 */
	cutdown: function (send_btn_Id, callback) {
		var validCode = true;
		var time = 60;
		var code = $("#" + send_btn_Id);
		code.off("click");
		if (validCode) {
			validCode = false;
			code.html("已发送(" + time + "s)");
			var t = setInterval(function () {
				time--;
				code.html("已发送(" + time + "s)");
				if (time === 0) {
					clearInterval(t);
					code.html("重新获取");
					code.off('click').on('click', function () {
						callback()
					});
					validCode = true;
				}
			}, 1000)
		}
	},
	//判断当前浏览类型
	/**
	 * @return {string}
	 */
	BrowserType: function () {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
		var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
		var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
		var isSafari = userAgent.indexOf("Safari") > -1 && userAgent.indexOf("Chrome") == -1; //判断是否Safari浏览器
		var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1; //判断Chrome浏览器

		if (isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion < 8) {
				return "0";
			} else if(fIEVersion === 8){
				return "IE8";
			} else if (fIEVersion === 9) {
				return "IE9";
			} else if (fIEVersion === 10) {
				return "IE10";
			} else if (fIEVersion === 11) {
				return "IE11";
			} else {
				return "0"
			}//IE版本过低
		}//isIE end

		if (isFF) {
			return "FF";
		}
		if (isOpera) {
			return "Opera";
		}
		if (isSafari) {
			return "Safari";
		}
		if (isChrome) {
			return "Chrome";
		}
		if (isEdge) {
			return "Edge";
		}
	},//myBrowser() end
	//判断是否是IE浏览器
	isIE: function () {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
		if (isIE) {
			return "1";
		}
		else {
			return "-1";
		}
	},
	//判断是否是IE浏览器，包括Edge浏览器
	/**
	 * @return {string}
	 */
	IEVersion: function () {
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1&& !isOpera;; //判断是否IE浏览器
		var isEdge = userAgent.indexOf("Windows NT 6.1; Trident/7.0;") > -1 && !isIE; //判断是否IE的Edge浏览器
		if (isIE) {
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion === 8) {
				return "IE8";
			}
			else if (fIEVersion === 9) {
				return "IE9";
			}
			else if (fIEVersion === 10) {
				return "IE10";
			}
			else if (fIEVersion === 11) {
				return "IE11";
			}
			else {
				return "0"
			}//IE版本过低
		}
		else if (isEdge) {
			return "Edge";
		}
		else {
			return "-1";//非IE
		}
	}
};