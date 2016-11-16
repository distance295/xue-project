
/*******************************************
 *
 * 交作业逻辑业务功能
 * @authors Du xin li
 * @date    2015-10-12
 * @update  2015-10-27
 * @version $Id$
 *
 *********************************************/

var homeWork = homeWork || {};

//分数图片路径
homeWork.path = '/static/img';
homeWork.url = '/Homework/ajaxStuComment';

(function(hm) {

	/**
	 * 缩略图等比例缩放
	 * @param  {Object} dom 任意子节点
	 */
	hm.imageRate = function(dom) {
		if (!dom) {
			return false;
		}

		//判断多个的情况下---
		/*$(dom).each(function(){
	    		var samllBox_W = $(this).find('.homework-Thumbnails-img-list li').width();
		   	    var samllBox_H = $(this).find('.homework-Thumbnails-img-list li').height();
		   	    var imgNum = $(this).find('.homework-Thumbnails-img-list li').length;
		   	    var Feedback_flag = $(this).find('.homework-Thumbnails-img-list').find('li').eq(imgNum-1).find('.homework-MaskLayer').length;
		   	    $(this).find('.homework-Thumbnails-img-list li').each(function(index){
		   	    	 if( imgNum-1 == index && Feedback_flag == 0 ){
		                  return false;
		   	    	 }
		   	    	 var img_W = $(this).find('img').width();
		   	    	 var img_H = $(this).find('img').height();
		   	    	 var rate=(samllBox_H/img_H>samllBox_W/img_W?samllBox_W/img_W:samllBox_H/img_H);
		   	    	 var _top = (samllBox_H - img_H*rate)/2 +"px";
		   	    	 $(this).find('img').width(img_W*rate);
		   	    	 $(this).find('img').height(img_H*rate);
		   	    	 $(this).find('img').css('marginTop', _top);
		   	    })
    	})*/

		$(dom).each(function() {
			var samllBox_W = $(this).find('.homework-Thumbnails-img-list li').width();
			var samllBox_H = $(this).find('.homework-Thumbnails-img-list li').height();
			var imgNum = $(this).find('.homework-Thumbnails-img-list li').length;
			var Feedback_flag = $(this).find('.homework-Thumbnails-img-list').find('li').eq(imgNum - 1).find('.homework-MaskLayer').length;
			$(this).find('.homework-Thumbnails-img-list li').each(function(index) {
				if (imgNum - 1 == index && Feedback_flag == 0) {
					return false;
				}
				var that = $(this).find('img');
				var _imgs = new Image();
				//_imgs.src = that.attr('src');
				_imgs.onload = function() {
					hm.showImg(this, samllBox_W, samllBox_H);
					var _top = (samllBox_H - _imgs.height) / 2 + "px";
					that.width(_imgs.width);
					that.height(_imgs.height);
					that.css('marginTop', _top);
				}
				_imgs.src = that.attr('src');
			})
		})

	}

	/**
	 * 图片等比例缩放方法
	 * @param  {html|string} img  预加载图片html元素
	 * @param  {number} maxWidth  最大宽
	 * @param  {number} maxHeight 最大高
	 * @return {html|string}   预加载图片html元素       
	 */
	hm.showImg = function(img, maxWidth, maxHeight) {
		var rate = (maxHeight / img.height > maxWidth / img.width ? maxWidth / img.width : maxHeight / img.height);
		img.width = img.width * rate;
		img.height = img.height * rate;
		return img;
	}

	/**
	 * 作业反馈分数显示事件
	 * @param  {number} score 分数d
	 */
	hm.score = function(score) {
		if (!score) {
			return false;
		}
		//多个情况下的使用
		$(score).each(function() {
			var _score = $(this).attr('score');
			var _scoreArr = _score.split('');
			var _scoreHtml = '';
			$.each(_scoreArr, function(k, v) {
				_scoreHtml += '<img src="' + 'http://i.xueersi.com/static/img/' + v + '.png" alt="" />';
			});
			$(this).html(_scoreHtml)
		})
	}

	/**
	 * 老师评语音播放的相关业务方法
	 * @param  {Object} dom 任意子节点
	 */
	hm.audio = function(dom) {
		//判断dom元素是否存在
		if (!dom) {
			return false;
		}
		//可能存在多个的情况
		$(dom).each(function() {
			var that = this,
				_audio = $(this).find('.homework-audio-btn-box')[0],
				_ReviewsBox = $(this).find('.homework-Reviews'),
				_audioBg = $(this).find('.homework-audio-box'),
				_audioTime = '';
			//判断是否有音频元素存在
			if (!_audio) {
				return false;
			}

			//默认的时候让所有的音频加载，否则在火狐ie等浏览器下由于jquery插件的存在导致onloadedmetadata事件不响应
			_audio.load();

			//音频加载完成后的一系列操作
			function duration() {
				if (_ReviewsBox.hasClass('homework-audio-loading')) {
					return false;
				}
				var time = _audio.duration;
				//分钟
				var minute = time / 60;
				var minutes = parseInt(minute);
				if (minutes < 10) {
					minutes = "0" + minutes;
				}
				//秒
				var second = time % 60;
				var seconds = Math.round(second);
				if (seconds < 10) {
					seconds = "0" + seconds;
				}

				//总共时长的秒数
				var allTime = parseInt(minutes * 60 + seconds);

				//给语音按钮赋值时长
				_audioBg.find('em').text(allTime + ' "');

				_audioTime = parseFloat(_audioBg.find('em').text());

				/**
				 * 判断语音按钮的宽度
				 * 1-5秒宽度100  5-10秒宽度150  >10S的200
				 */
				if (_audioTime > 0 && _audioTime <= 5) {
					_audioBg.width('100');
				} else if (_audioTime > 5 && _audioTime <= 10) {
					_audioBg.width('150');
				} else {
					_audioBg.width('200');
				}

				//判断语音的播放和停止
				$(that).off('click', '.homework-audio-box').on('click', '.homework-audio-box', function() {
					var _Playing = _ReviewsBox.hasClass('homework-audio-playing');
					if (!_Playing) {
						$('body').find('.homework-Reviews').removeClass('homework-audio-playing').addClass('homework-audio-loading');
						//播放时其他的音频都要重新加载停止
						$('body').find('.homework-audio-btn-box').each(function(index) {
							$('body').find('.homework-audio-btn-box')[index].load();
						})
						_ReviewsBox.addClass('homework-audio-playing')
						_audio.play();
					} else {
						_ReviewsBox.removeClass('homework-audio-playing').addClass('homework-audio-loading');
						_audio.load(); //重新加载和暂停是不同的
					}
					setTimeout(function() {
						_ReviewsBox.removeClass('homework-audio-playing');
					}, _audioTime + '000');
				})

			}

			_audio.onloadedmetadata = duration;

			/*setTimeout(function(){
			  	    
		         
	           }, 1000)*/

		})
	}

	/**
	 * 老师评语音播放的相关业务方法
	 */
	hm.remind = function() {
		$('body').off('click', '.homework-remind-btn').on('click', '.homework-remind-btn', function() {
			var that = this;
			var _remindFlag = $(this).hasClass('homework-remind-disabled-btn');
			if (_remindFlag) {
				return false;
			} else {
				//提示弹出层显示
				popoverTips.show({
					dom: that,
					placement: 'bottom',
					trigger: 'click',
					con: '<div class="homework-remid-box">老师会快马加鞭地为你批改哦~</div>'
				});
				setTimeout(function() {
					popoverTips.destroy(that);
				}, 3000)
				$(that).addClass('homework-remind-disabled-btn');
			}

		})
	}

	/**
	 * 星星评分方法
	 * @param  {Object} params 参数对象
	 */

	hm.starScore = function(params) {
		params = $.extend({
			starBox: null, //星星评分的框架
			className: "on", //星星选中状态类
			scoreNum: null, //显示评分分数的类
			starIndex: 0 //开始默认选择星星
		}, params || {});

		//判断是否存在dom元素
		if (!(params.starBox)) {
			return false;
		}

		//多个的情况下依然可以使用
		$(params.starBox).each(function() {
			var that = this;
			var _starLi = $(this).find('li');
			var i = 0;
			var _starIndex = params.starIndex;
			fnPoint(_starIndex);
			//鼠标滑过星星的效果
			$(this).find('li').hover(function() {
				var _index = $(this).closest('ul').find('li').index(this);
				fnPoint(_index + 1);
			}, function() {
				fnPoint();
			});

			//点击后进行评分处理
			$(this).find('li').click(function() {
				var _index = $(this).closest('ul').find('li').index(this);
				_starIndex = _index + 1;
				$(that).find(params.scoreNum).text(_starIndex);
			})

			//评分处理
			function fnPoint(num) {
				var _iScore = num || _starIndex;
				for (i = 0; i < _starLi.length; i++) {
					_starLi[i].className = i < _iScore ? params.className : "";
				}
			}
		})
	}

	/**
	 * 提交评论方法
	 * @param  {Object} dom 任意子节点
	 */

	hm.submitComment = function(dom) {
		//判断dom元素是否存在
		if (!dom) {
			return false;
		}

		var _score = $(dom).find('.homework-star-score-num').text();
		var _cont = $.trim($(dom).find('.homework-comment').val());
		var _commitId = $(dom).find('.homework_commit_id').val();

		var _homeworkbox = $(dom).closest('.homework-image-box');

		//判断评星不能为空
		if (_score == 0 || !_score) {
			alert("评星不能为空！");
			return false;
		}

		$.ajax({
			url: hm.url,
			data: {
				score: _score, //评论分数
				cont: encodeURIComponent(_cont), //评论内容
				commitId: _commitId //提交作业自增id
			},
			type: 'post',
			dataType: 'json',
			beforeSend: function() {
				$(dom).find('.homework-submit-btn').addClass('homework-submit-btn-disabled');
			},
			success: function(data) {
				if (data.sign != 1) {
					alert(data.msg);
					return false;
				}

				//计算发布日期
				var _d = new Date(),
					_year = _d.getFullYear(),
					_month = _d.getMonth() + 1,
					_day = _d.getDate();

				//月份和天数小于10的前面加0    
				if (_month < 10) {
					_month = "0" + _month;
				}
				if (_day < 10) {
					_day = "0" + _day;
				}

				//日期显示方式
				var _date = _year + "-" + _month + "-" + _day;

				//评论成功后删除可评论框
				var _html = '';
				_html += '<div class="homework-comment-box">\
								<div class="homework-star pull-left">\
									<span class="pull-left">评价作业批改</span>\
									<div class="homework-star-area pull-left">\
										<ul class="pull-left">'
					//判断选择几颗星
				for (var i = 0; i < _score; i++) {
					_html += '<li class="on"></li>'
				}

				//未被选择的星星的样式
				for (var i = 0; i < (5 - _score); i++) {
					_html += '<li></li>'
				}

				_html += '</ul>\
										<span class="homework-star-score-num">_score</span>\
									</div>\
								</div>\
								<p class="homework-comment">' + _cont + '</p>\
								<p class="homework-date">' + _date + '</p>\
							</div>'
				$(dom).remove();
				_homeworkbox.append(_html);
			},
			complete: function() {
				$(dom).find('.homework-submit-btn').removeClass('homework-submit-btn-disabled');
			}
		})
	}

	/**
	 * 老师评语音播放的相关业务方法
	 * @param  {Object} dom 任意子节点
	 */
	hm.audioPlay = function(dom) {

		if (!dom) {
			return false;
		}

		//存在多个的情况下
		$(dom).each(function() {
			var that = this;
			var _audio = null; //$(that).find('.homework-audio-btn-style')[0];
			var hasVideo = !!(document.createElement('audio').canPlayType);
			var audio_val = null;

			//点击音频评语按钮效果
			$(that).find('.homework-audio-btn-click').click(function() {

				//点击的时候右侧的音频列表消失
				$(that).find('.homework-audio-list-box').hide('fast');
				$(that).find('.homework-audio').attr('flag', '0');

				//右侧音频列表消失之后删除homework-audio-list-box-display

				if ($(that).find('.homework-audio-list-box').hasClass('homework-audio-list-box-display')) {
					$(that).find('.homework-audio-list-box').removeClass('homework-audio-list-box-display');
				}

				//判断是否正在播放
				var _Playing = $(this).hasClass('homework-audio-btn-playing');
				if (!_Playing) {
					audio_val = $.trim($(this).data('val'));
					var audio_url = $(this).data('audio');
					$(that).find('.homework-audio-btn-click').removeClass('homework-audio-btn-playing');

					//判断是否有相同的音频按钮
					$(that).find('.homework-audio-btn-click').each(function() {
						var current_audio_val = $.trim($(this).data('val'));
						if (current_audio_val == audio_val) {
							$(this).addClass('homework-audio-btn-playing');
						}
					})

					//判断是否支持音频
					if (hasVideo) {
						var audio_url = $(this).data('audio');
						var html = [
							'<audio class="homework-audio-btn-style" controls="controls" Autoplay="Autoplay" src="' + audio_url + '"> </audio>'
						]
						$(that).find('.homework-audio-btn-style').remove();
						$(that).find('.homework-bigImg-box').prepend(html.join(''));

						_audio = $(that).find('.homework-audio-btn-style')[0];

						//播放结束
						_audio.addEventListener('ended', function() {
							//判断当前播放的是哪个按钮点击事件
							$(that).find('.homework-audio-btn-click').each(function() {
								var current_audio_val = $.trim($(this).data('val'));
								if (current_audio_val == audio_val) {
									$(this).removeClass('homework-audio-btn-playing');
								}
							})
							_audio.pause();
						}, false);

						//播放状态
						_audio.addEventListener('playing', function() {
							//判断当前播放的是哪个按钮点击事件
							$(that).find('.homework-audio-btn-click').each(function() {
								var current_audio_val = $.trim($(this).data('val'));
								if (current_audio_val == audio_val) {
									if (!$(this).hasClass('homework-audio-btn-playing')) {
										$(this).addClass('homework-audio-btn-playing');
									}
								}
							})
						}, false);

					} else {
						alert("当前浏览器版本过低，不支持语音播放。请更换浏览器或者升级至IE8以上的版本。");
					}
				} else {
					//console.log(2)
					//已经在播放的情况下再次点击否可以暂停
				}


			})


			//音频列表展开收缩效果
			$(that).find('.homework-audio-disabled').click(function() {
				if ($('.homework-audio-list-box').find('li').length > 1) {
					$('.homework-audio-list-box').toggle()
				}
			})

		})
	}



})(homeWork)


/**
 * 图片轮播插件
 * @param  {Object} params 参数对象
 */
$.fn.imagePage = function(params) {

	//判断dom元素是否存在
	if (!this) {
		return false;
	}

	params = $.extend({
		bigPic: null, //大图框架
		smallPic: null, //小图框架
		prev_btn: null, //小图左箭头
		next_btn: null, //小图右箭头
		delayTime: 800, //切换一张图片时间
		order: 0, //当前显示的图片（从0开始）
		ImageTransform: null, //旋转大图框架
		zoom: null, //放大按钮
		zoomout: null, //缩小按钮
		leftRotate: null, //向左旋转按钮
		rightRotate: null, //向右旋转按钮
		min_picnum: null, //小图显示数量
		isZoom: true, //是否存在旋转缩放
		lookEdit: null //查看改正中图片按钮
	}, params || {});
	var _this = this;
	var picsmall_num = $(this).find(params.smallPic).find('ul li').length;
	var picsmall_w = $(this).find(params.smallPic).find('ul li').outerWidth(true);
	var picsmall_h = $(this).find(params.smallPic).find('ul li').outerHeight(true);
	$(this).find(params.smallPic).find('ul').height(picsmall_num * picsmall_h);

	//判断作业反馈是否存在
	var Feedback_flag = $(this).find(params.smallPic).find('li').eq(0).find('.homework-MaskLayer').length;
	var pictime;
	var tpqhnum = 0; //当前选中图片的个数
	var xtqhnum = 0;
	var popnum = 0;
	var _tabnum = 0;
	var _src;
	var _islast = false;
	// $('.homework-feedback-all').click(function(){
	// 	creatAudioList($(this).data('url').split(','))
	// })
	if (params.isZoom) {
		var _ImageTransform = '';
		var _container = $$(params.ImageTransform);
		var _options = {
			onPreLoad: function() {
				_container.style.backgroundImage = "";
			},
			onLoad: function() {
				_container.style.backgroundImage = "";
			},
			onError: function(err) {
				_container.style.backgroundImage = "";
				alert(err);
			}
		};
		_ImageTransform = new ImageTrans(_container, _options);
	}

	//点击小图切换大图
	$(this).find(params.smallPic).find('li').click(function() {
		_islast = true;
		tpqhnum = $(_this).find(params.smallPic).find('li').index(this);
		var audio_url = $(this).data('url').split('|')[$(this).data('url').split('|').length - 1].split(',');
		var data_audio = $(this).data('audio').split(',');
		show(tpqhnum);
		minshow(tpqhnum);
		creatAudioList(audio_url,data_audio);
		lookEditImg(tpqhnum);

	}).eq(params.order).trigger("click");

	//大图切换过程
	function show(tpqhnum) {

		//判断是否存在音频，如果存在音频在切换图片的时候就要停止音频的一系列操作，存在音频就存在homework-Reviews

		if ($(_this).find('.homework-Reviews')) {

			//删除所有播放按钮播放样式
			$(_this).find('.homework-audio-btn-click').removeClass('homework-audio-btn-playing');

			//audio音频停止播放，重新加载
			// $(_this).find('.homework-audio-btn-style').remove();

			/*//右侧的音频列表消失

           if( tpqhnum == 0 && ($(_this).find('.homework-audio-list-box').hasClass('homework-audio-list-box-display')) ){
           	    
           }else{
				if ($('.homework-audio').length>1) {
					$('.homework-audio-list-box').show('fast');
					$('.homework-audio').attr('flag', '1');
				}
				else{
	           	   $(_this).find('.homework-audio-list-box').hide('fast');
			       $(_this).find('.homework-audio').attr('flag','0');
				}
           }*/

		}

		if (tpqhnum == 0 && Feedback_flag == 0) {
			$(_this).find('.homework-Feedback').show();
			$(_this).find('.homework-Feedback-describe').show();
			$(_this).find('.ImageTransformJs').hide();
		} else {
			$(_this).find('.homework-Feedback').hide();
			$(_this).find('.homework-Feedback-describe').hide();
			$(_this).find('.ImageTransformJs').show();
			_src = $(_this).find(params.bigPic).find('li').eq(tpqhnum).find('img').attr('src');
			bigShow(_src)
		}
		$(_this).find(params.smallPic).find('li').eq(tpqhnum).addClass('homework-current').siblings(this).removeClass("homework-current");
	};

	//生成语音列表
	function creatAudioList(arr_audio,data_audio) {
		var url = [];
		if (!_islast) {
			url = arr_audio;
		} else {
			url = ['0'];
			for(var i=0;i<data_audio.length;i++){
				if(data_audio!=''){
					url.push(data_audio[i]);
				}
			}
		}
		//判断是否正在播放语音,正在播放时移除自动播放属性并重载语音数据
		if ($('.homework-audio-btn-style').hasClass('homework-audio-playing')) {
			$('.homework-audio-btn-style').removeAttr('Autoplay').load();
		}

		var audio_ul = $('.homework-audio-list-box ul');

		audio_ul.html(' '); //语音列表置空

		for (var i = 1; i < url.length; i++) {
			var _html = '<li class="homework-audio-btn-click" data-audio ="' + url[i] + '" data-val="语音"' + i + '><i class="audio-icon"></i><em>语音' + i + '</em></li>'
			audio_ul.html(audio_ul.html() + _html)
		};
		//点击语音列表播放语音
		$('.homework-audio-btn-click').each(function() {
			$(this).click(function() {
				$('.homework-audio-btn-style').attr('src', $(this).data('audio')).attr('Autoplay', 'Autoplay').addClass('homework-audio-playing');
			})
		});

		//arr_audio数组第一个元素为图片信息,后续都是音频信息,若音频数量大于等于一个,将第一个音频写入audio标签;若大于2个,则显示列表,小喇叭按钮点亮
		if (url.length >= 2) {
			if ($('.homework-audio-btn-style').length > 0) {
				$('.homework-audio-btn-style').attr('src', audio_ul.find('li').eq(0).data('audio'))
			} else {
				$('.homework-bigImg-box').prepend('<audio class="homework-audio-btn-style" controls="controls" src="' + audio_ul.find('li').eq(0).data('audio') + '"> </audio>')
			}
			$('.homework-audio-btn-style').show();
			if (url.length == 2) {
				$('.homework-audio-list-box').hide();
				$('.homework-audio-disabled').removeClass('homework-audio');
			}
			if (url.length >= 3) {
				$('.homework-audio-list-box').show();
				$('.homework-audio-disabled').addClass('homework-audio');
			}
		} else {
			$('.homework-audio-btn-style').remove();
			$('.homework-audio-list-box').hide();
			$('.homework-audio-disabled').removeClass('homework-audio');
		}
		_islast = false;
	}

	//大图图片显示的效果
	function bigShow(url) {
		//判断是否存在缩放功能
		if (params.isZoom) {
			_ImageTransform.load(url);
		} else {
			$(_this).find(params.bigPic).find('.ImageTransformJs').remove();
			var _imgHtml = '<img style="position: absolute; border: 0px none; padding: 0px; margin: 0px;" src="' + url + '" class="ImageTransformJs" />';
			$(_this).find(params.bigPic).append(_imgHtml);
			/*
			 *图片缩放居中
			 */
			var maxWidth = $(_this).find(params.bigPic).width();
			var maxHeight = $(_this).find(params.bigPic).height();
			var imgWidth = $(_this).find(params.bigPic).find('.ImageTransformJs').width();
			var imgHeight = $(_this).find(params.bigPic).find('.ImageTransformJs').height();

			var rate = (maxHeight / imgHeight > maxWidth / imgWidth ? maxWidth / imgWidth : maxHeight / imgHeight);
			$(_this).find(params.bigPic).find('.ImageTransformJs').attr('_imgW', imgWidth).attr('_imgH', imgHeight);

			$(_this).find(params.bigPic).find('.ImageTransformJs').css({
				'width': imgWidth * rate,
				'height': imgHeight * rate,
				'left': (maxWidth - imgWidth * rate) / 2 + "px",
				'top': (maxHeight - imgHeight * rate) / 2 + "px"
			})
		}
	}

	//查看订正过程中的图片效果
	function lookEditImg(tpqhnum) {
		//查看是否有订正图片效果
		if ($(_this).find(params.lookEdit)) {
			//查看是否存在订正图片
			var dataUrl = $(_this).find(params.smallPic).find('li').eq(tpqhnum).data('url');
			//先清空要创建的html上一张下一张按钮
			$(_this).find(params.bigPic).find('.homework-lookEdit-btn').remove();
			//改正过程中的图片存在查看按钮为可编辑，反之相反
			if (dataUrl) {
				$(_this).find(params.lookEdit).addClass('homework-edit-btn');

				//查看订正之前如果存在homework-edit-two-click,先删除homework-edit-two-click，homework-edit-two-click是为了判断可编辑按钮是否已经展开订正图片
				if ($(_this).find('.homework-edit-btn').hasClass('homework-edit-two-click')) {
					$(_this).find('.homework-edit-btn').removeClass('homework-edit-two-click');
				}

				//滑过提示弹层效果
				$(_this).closest('.homework-wrapper-container').find('.lookEditImg-popover').remove();
				var html = ['<div role="tooltip" class="popover fade top in lookEditImg-popover">',
					'<div class="arrow" style="left: 50%;"></div>',
					'<div class="popover-content">',
					'<div class="lookEditImg-tips-box">点我查看订正过程中的图片</div>',
					'</div>',
					'</div>'
				]

				$(_this).closest('.homework-wrapper-container').append(html.join(''));

				//滑过提示弹层效果
				$(_this).off('mouseover ', '.homework-edit-btn').on('mouseover', '.homework-edit-btn', function() {
					//判断可编辑按钮是否是二次点击，当展开了订正图片后在滑过编辑按钮没有弹层提示
					if ($(this).hasClass('homework-edit-two-click')) {
						return false;
					}
					var lookEditImg_popover_w = $(_this).closest('.homework-wrapper-container').find('.lookEditImg-popover').width();
					var container_w = $(_this).closest('.homework-wrapper-container').width();
					var popover_left = container_w - lookEditImg_popover_w / 2 - 30 - 54 / 2;
					if (popover_left < 0) {
						popover_left = 0;
					}
					$(_this).closest('.homework-wrapper-container').find('.lookEditImg-popover').css('left', popover_left);
					$(_this).closest('.homework-wrapper-container').find('.lookEditImg-popover').show();
				})

				$(_this).off('mouseout ', '.homework-edit-btn').on('mouseout', '.homework-edit-btn', function() {
						$(_this).closest('.homework-wrapper-container').find('.lookEditImg-popover').hide();
					})
					//点击可编辑查看按钮
				$(_this).off('click', '.homework-edit-btn').on('click', '.homework-edit-btn', function() {
					//判断可编辑按钮是否是二次点击，当展开了订正图片后在点击编辑按钮收缩订正图片，显示初始化的最后一张缩略图的图片
					if ($(this).hasClass('homework-edit-two-click')) {
						$(_this).find(params.smallPic).find('li').eq(tpqhnum).trigger("click");
						return false;
					}

					$(this).addClass('homework-edit-two-click');
					var lookEditNum = 0;
					var arr_dataUrl = dataUrl.split('|');
					var dataUrl_Num = arr_dataUrl.length;
					//点击查看订正图片按钮，默认显示第一张图片
					var arr_data_url_audio = arr_dataUrl[lookEditNum].split(',');
					var imgUrl = arr_data_url_audio[0];
					var imgAudio = arr_data_url_audio[1];
					creatAudioList(arr_data_url_audio);
					bigShow(imgUrl);
					//显示上一张下一张点击按钮
					$(_this).find(params.bigPic).find('.homework-lookEdit-btn').remove();
					var lookEdit_html = '';
					lookEdit_html += '<a href="javascript:void(0)" class="homework-lookEdit-btn homework-lookEdit-prev-btn"></a><a href="javascript:void(0)" class="homework-lookEdit-btn homework-lookEdit-next-btn"></a>';
					$(_this).find(params.bigPic).append(lookEdit_html);
					//判断上一张下一张是否可点击
					if (dataUrl_Num > 1) {
						$(_this).find(params.bigPic).find('.homework-lookEdit-next-btn').addClass('homework-lookEdit-next-active-btn');

						//下一张点击按钮
						$(_this).find(params.bigPic).find('.homework-lookEdit-next-btn').click(function() {
							if (lookEditNum == dataUrl_Num - 1) {
								lookEditNum = dataUrl_Num - 1;
								return false;
							};
							lookEditNum++;
							if (lookEditNum == dataUrl_Num - 1) {
								$(_this).find(params.bigPic).find('.homework-lookEdit-next-btn').removeClass('homework-lookEdit-next-active-btn');
							}
							$(_this).find(params.bigPic).find('.homework-lookEdit-prev-btn').addClass('homework-lookEdit-prev-active-btn');

							var arr_data_url_audio_next = arr_dataUrl[lookEditNum].split(',');
							var imgUrl_next = arr_data_url_audio_next[0];
							var imgAudio_next = arr_data_url_audio_next[1];
							creatAudioList(arr_data_url_audio_next);
							bigShow(imgUrl_next);
						})

						//上一张点击按钮
						$(_this).find(params.bigPic).find('.homework-lookEdit-prev-btn').click(function() {
							if (lookEditNum == 0) {
								lookEditNum = 0;
								return false;
							};
							lookEditNum--;
							if (lookEditNum == 0) {
								$(_this).find(params.bigPic).find('.homework-lookEdit-prev-btn').removeClass('homework-lookEdit-prev-active-btn');
							}
							$(_this).find(params.bigPic).find('.homework-lookEdit-next-btn').addClass('homework-lookEdit-next-active-btn');
							var arr_data_url_audio_prev = arr_dataUrl[lookEditNum].split(',');
							var imgUrl_prev = arr_data_url_audio_prev[0];
							var imgAudio_prev = arr_data_url_audio_prev[1];
							creatAudioList(arr_data_url_audio_prev);
							bigShow(imgUrl_prev);
						})
					}
				})
			} else {
				$(_this).find(params.lookEdit).removeClass('homework-edit-btn');
			}
		}
	}

	//小图切换过程
	function minshow(tpqhnum) {
		var picsmall_h = $(_this).find(params.smallPic).find('ul li').outerHeight(true);
		if (picsmall_num > params.min_picnum) {

			$(_this).find(params.prev_btn).addClass('homework-prev-active').removeClass('homework-prev-disabled');
			$(_this).find(params.next_btn).addClass('homework-next-active').removeClass('homework-next-disabled');

			//判断滚动到最后一个时按钮置灰
			if (tpqhnum == picsmall_num - 1) {
				$(_this).find(params.next_btn).addClass('homework-next-disabled').removeClass('homework-next-active');
			}
			//判断滚动到最后一个时按钮置灰
			if (tpqhnum == 0) {
				$(_this).find(params.prev_btn).addClass('homework-prev-disabled').removeClass('homework-prev-active');
			}
			var _scrollnum = tpqhnum - params.min_picnum + 2;
			var _scrollH = -_scrollnum * picsmall_h;
			_tabnum = _scrollnum;
			if (tpqhnum < params.min_picnum - 1) {
				_scrollH = 0;
				_tabnum = 0;
			} else if (tpqhnum == picsmall_num - 1) {
				_scrollH = -(_scrollnum - 1) * picsmall_h;
				_tabnum = _scrollnum - 1;
			}

			$(_this).find(params.smallPic).find('ul').stop().animate({
				'top': _scrollH
			}, params.delayTime).attr('_topNum', _tabnum);
		} else {
			$(_this).find(params.prev_btn).addClass('homework-prev-disabled').removeClass('homework-prev-active');
			$(_this).find(params.next_btn).addClass('homework-next-disabled').removeClass('homework-next-active');
		}
	}

	//每个缩略图试卷对应一个音频，音频默认显示，但是不播放
	// function audioPage(audio){ 
	// 	//判断是否存在音频
	// 	var audioUrl = audio;
	// 	var hasVideo = !!(document.createElement('audio').canPlayType);
	// 	//改正图片中的音频为空时传过来的是''值不是空，所有必须重新判断
	// 	if( audioUrl == "''" ){
 //            audioUrl = null;
	// 	}

	// 	//判断是否支持音频
	// 	if( hasVideo ){
 //           if( audioUrl ){
	//            var audioHtml = [
	// 	                    '<audio class="homework-audio-btn-style" controls="controls" src="'+audioUrl+'"> </audio>'
	// 	                   ]
	// 	        $(_this).find('.homework-audio-btn-style').hide();
	// 	        $(_this).find('.homework-bigImg-box').prepend(audioHtml.join(''));
	// 	        $(_this).find('.homework-audio-btn-style').show();
	// 		}else{
	// 			$(_this).find('.homework-audio-btn-style').hide();
	// 		} 
	// 	}else{
	// 		alert("当前浏览器版本过低，不支持语音播放。请更换浏览器或者升级至IE8以上的版本。");
	// 	}
	// }  

	//大图左右切换	
	$(this).find(params.prev_btn).click(function(){
		if( picsmall_num > params.min_picnum ){
			if(tpqhnum == 0){
				tpqhnum = 0;
				return false;
			};
			tpqhnum--;
			_islast = true;
			var _li = $(_this).find(params.smallPic).find('li').eq(tpqhnum) ;
			var audio_url = _li.data('url').split('|')[_li.data('url').split('|').length - 1].split(',');
			var data_audio = _li.data('audio').split(',');
			console.debug();
			show(tpqhnum);
			minshow(tpqhnum);
			creatAudioList(audio_url,data_audio);
			lookEditImg(tpqhnum);
		}else{
			return false;
		}		
	})
	$(this).find(params.next_btn).click(function(){
		if( picsmall_num > params.min_picnum ){
			if(tpqhnum==picsmall_num-1){
				tpqhnum = picsmall_num-1;
				return false;
			};
			tpqhnum++;
			_islast = true;
			var _li = $(_this).find(params.smallPic).find('li').eq(tpqhnum) ;
			var audio_url = _li.data('url').split('|')[_li.data('url').split('|').length - 1].split(',');
			var data_audio = _li.data('audio').split(',');
			show(tpqhnum);
			minshow(tpqhnum);
			creatAudioList(audio_url,data_audio);
			lookEditImg(tpqhnum);
		}else{
			return false;
		}	
	})

	/**
	 * (1)点击放大按钮放大大图
	 * (2)判断是否存在缩放功能,如果存在缩放功能才有下面的一系列事件
	 */
	if (params.isZoom) {
		$(this).find(params.zoom).click(function() {
			_ImageTransform.zoomin();
		})

		//点击缩小按钮缩小大图
		$(this).find(params.zoomout).click(function() {
			_ImageTransform.zoomout();
		})

		//点击向左旋转按钮旋转大图
		$(this).find(params.leftRotate).click(function() {
			_ImageTransform.left();
		})

		//点击向右旋转按钮旋转大图
		$(this).find(params.rightRotate).click(function() {
			_ImageTransform.right();
		})
	}
}
