/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

 var header = header || {};
 header.hide = function(){};
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
