/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-27 18:15:14
 * @version $Id$
 */
var study = study || {};
var briefTab = $('.list-title-tabs li');
var briefBox = $('.scrolls-item');
	// 大概切换效果
	study.briefToggle = function(index) {
		var index = index || 1;
		briefTab.eq(index - 1).addClass('current').siblings().removeClass('current');
		$('#outline' + index).show().siblings().hide();
		// 切换大纲的时候需要重新计算下隐藏部分的高度
		$('#outline1').jScrollPane();
		$('#outline2').jScrollPane();
	}
	//发布看点
	study.box = {
		btn  :  '#btn-submit-focus ',
		duf  :  '.look-focus-show ',
		push : '.look-Focus-Push '
	};
	//点击发布看点，显示发布看点文本输入框和时间
	study.focusPushItem = function(){
	    if ($(study.box.btn).hasClass('btn-disabled')) {
	        return false;
	    }else{
	        $(study.box.duf).hide();
	        $(study.box.push).show();  
	        $(study.box.btn).hide(); 
	    }
	}
	//提交看点时验证文本框内容是否合格，合格则提交数据，不合格显示错误提示并返回false
   study.lookFocusPush = function(event){
   	    var that = $(event),
		    text = $.trim(that.prev('input.input-text').val()),
		    len =text.length,
		    err = $('.errorTips');
		    function tipsErr(){
		        setTimeout(function() {
		           err.hide();
		        }, 3000);
		    }
		     if (len == 0) {
		            err.show().text('少年,什么也不写无法发布哦！');
		            tipsErr();
		   			return false;
		      }
		      if (len <= 4 || len > 40) {
		            err.show().text('少年,请输入5-40个字哦！');
		            tipsErr();
		            return false;
		      }
		        //通过验证以后，使用ajax进行提交数据，成功后返回
		        if (text !== '请输入看点，(5-40个字)') {
		        	alert(1);
		                  //ajaxHighlight();
		        }else{
		            err.show().text('少年,什么也不写无法发布哦！');
		            tipsErr();
		            return false;
		        };
   }
$(function() {
	// 大纲头部绑定切换效果
	briefTab.off('click', 'a').on('click', 'a', function() {
		var _tab = $(this).parent('li'),
			_index = _tab.index();
		study.briefToggle(_index + 1);
	});
	//发布看点
	$(study.box.btn).on('click', function() {
	    study.focusPushItem()
	});
	//取消看点
	$('.btn-cancel').on('click',function() {
	     $(study.box.btn).show(); 
	     $(study.box.duf).show();
	     $(study.box.push).hide();  
	});
	//提交看点内容 
	$('body').on('click', '.look-Focus-Push .btn-submit', function(event) {
	    study.lookFocusPush(this);
	});


});
