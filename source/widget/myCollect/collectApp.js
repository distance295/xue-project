/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

 var colect = colect || {};


/**
 * 
 * 动态切换大小图片、视频、作答效果
 * @param {Object} fm colect.media前缀
 * 
 */
 colect.media = colect.media || {};
 (function(fm){
 	fm.img = fm.img || {};
	/**
	 * 切换大小图片方法
	 * @param  {Object} dom 页面元素
	 */
	 fm.img.toggle = function(dom){
	 	var _img = $(dom);
        //判断是否存在图片，如果不存在则返回false
        if( _img.length == 0 ){ 
        	return false; 
        } else {
        	var _url = _img.find('img').attr('src');
        	if( _img.hasClass('colect-media-img-list') ){
        		if( _img.siblings('.colect-type-img').find('img').length == 0 ){
        			var _tpl ='<div class="colect-media-big-img">\
        			<img src="'+ _url.replace("_small", "_big")+ '">\
        			</div>';
        			_img.siblings('.colect-type-img').html(_tpl);   
        		}
        	}
        	_img.hide();
        	_img.siblings('.colect-type-img').show();    
        }
    }

    fm.answer = fm.answer || {};
})(colect.media);

$('.collect-feed').off('click', '.colect-type-img').on('click', '.colect-type-img', function(){
	colect.media.img.toggle(this);
});


//音频时间长短控制背景长度
$(function(){
	var $times = $('.icoVoiceCon .voiceTime em');
	$times.each(function() {
		var $len = $(this).text();
		var $con = $(this).parents('.icoVoiceCon');
		if($len > 0){
			$con.css('width','80px');  
		}
		if ($len > 20) {
			$con.css('width','100px');
		}
		if($len > 40){
			$con.css('width','120px'); 
		}	
	});
	//点击播放音频
	$('.content-collect').on('click', '.icoVoiceCon span.icoVoice', function(){
		var that = $(this),
		par = that.parents('.collect-feed'),
		len = par.hasClass('icoVoicePlaying'),
		_url = $('#audioUrl');
		var times = that.next().find('em').text();
		// alert(times);
		var ur = that.parents('.icoVoiceCon').find('#voiceUrl').val();
		if (len === false) {
			// alert(1111)
			par.addClass('icoVoicePlaying').siblings().removeClass('icoVoicePlaying');
			_url.attr('src', ur);
		}else{
			// alert(222)
			par.removeClass('icoVoicePlaying');
			_url.attr('src', 'http://img04.xesimg.com/xuelibugou_logo.png');
		};
		setTimeout(function(){
			par.removeClass('icoVoicePlaying');
			_url.attr('src', 'http://img04.xesimg.com/xuelibugou_logo.png');
		}, times +'000');
	});

	$('.content-collect').on('click', '.feed-media', function(){
		$(this).addClass('hide').siblings('').removeClass('hide');
	});
});
