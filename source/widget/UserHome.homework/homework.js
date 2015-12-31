
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
homeWork.url = '/data/homework/';

(function(hm){
  
   /**
	* 缩略图等比例缩放
	* @param  {Object} dom 任意子节点
	*/
    hm.imageRate =function(dom){
    	if( !dom ){
           return false;
		}
    	//判断多个的情况下
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

        $(dom).each(function(){
	    		var samllBox_W = $(this).find('.homework-Thumbnails-img-list li').width();
		   	    var samllBox_H = $(this).find('.homework-Thumbnails-img-list li').height();
		   	    var imgNum = $(this).find('.homework-Thumbnails-img-list li').length;
		   	    var Feedback_flag = $(this).find('.homework-Thumbnails-img-list').find('li').eq(imgNum-1).find('.homework-MaskLayer').length;
		   	    $(this).find('.homework-Thumbnails-img-list li').each(function(index){
		   	    	 if( imgNum-1 == index && Feedback_flag == 0 ){
		                  return false;
		   	    	 }
		   	    	 var that = $(this).find('img');
		   	    	 var _imgs = new Image();
		   	    	 //_imgs.src = that.attr('src');
		   	    	 _imgs.onload = function(){
		   	    	 	  hm.showImg(this, samllBox_W, samllBox_H);
					      var _top = (samllBox_H - _imgs.height)/2 +"px";
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
	hm.showImg = function(img,maxWidth,maxHeight){
		var rate = (maxHeight/img.height>maxWidth/img.width?maxWidth/img.width:maxHeight/img.height);
	    img.width = img.width*rate;
	    img.height = img.height*rate;
	    return img;
	}

    /**
	 * 作业反馈分数显示事件
	 * @param  {number} score 分数d
	 */
	hm.score = function(score){
		if( !score ){
           return false;
		}
		//多个情况下的使用
		$(score).each(function(){
			   var _score = $(this).attr('score');
			   var _scoreArr = _score.split('');
			   var _scoreHtml = '';
			   $.each(_scoreArr, function(k, v) {
			       _scoreHtml += '<img src="' + homeWork.path + '/' + v + '.png" alt="" />';
			   });
			   $(this).html(_scoreHtml) 
		})
	}

	/**
	 * 老师评语音播放的相关业务方法
	 * @param  {Object} dom 任意子节点
	 */
	hm.audio =function(dom){
		 //判断dom元素是否存在
		 if( !dom ){
           return false;
		 }
		 //可能存在多个的情况
		  $(dom).each(function(){
			  	var that = this,
			  	    _audio = $(this).find('.homework-audio-btn-box')[0],
				  	_ReviewsBox = $(this).find('.homework-Reviews'),
			        _audioBg = $(this).find('.homework-audio-box'),
				    _audioTime = '';
				//判断是否有音频元素存在
				if( !_audio ){
                  return false;
				}

			  	setTimeout(function(){
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
			        var allTime = parseInt(minutes*60 + seconds);
			      
		            //给语音按钮赋值时长
		            _audioBg.find('em').text(allTime + ' "');

		            _audioTime = parseFloat(_audioBg.find('em').text());
		         
	           }, 1000)
	          
	          /**
	           * 判断语音按钮的宽度
	           * 1-5秒宽度100  5-10秒宽度150  >10S的200
	           */
	          if( _audioTime>0 && _audioTime <=5 ){
                  _audioBg.width('100');
	          } else if ( _audioTime>5 && _audioTime <=10 ){
                  _audioBg.width('150');
	          } else {
                  _audioBg.width('200');
	          }

	          //判断语音的播放和停止
	          $(this).off('click', '.homework-audio-box').on('click','.homework-audio-box', function(){
                    var  _Playing = _ReviewsBox.hasClass('homework-audio-playing');
                    if( !_Playing){
                    	$('body').find('.homework-Reviews').removeClass('homework-audio-playing');
                    	//播放时其他的音频都要重新加载停止
                    	$('body').find('.homework-audio-btn-box').each(function(index){
                    		$('body').find('.homework-audio-btn-box')[index].load();
                    	})
                        _ReviewsBox.addClass('homework-audio-playing')
                        _audio.play();
                    }else{
                    	_ReviewsBox.removeClass('homework-audio-playing');
                    	_audio.load();//重新加载和暂停是不同的
                    }
                    setTimeout(function(){
						_ReviewsBox.removeClass('homework-audio-playing');
					}, _audioTime +'000');
	          })
		  })
	}

	/**
	 * 老师评语音播放的相关业务方法
	 */
	hm.remind =function(){
		$('body').off('click', '.homework-remind-btn').on('click', '.homework-remind-btn', function(){
			   var that = this;
			   var _remindFlag = $(this).hasClass('homework-remind-disabled-btn');
			   if( _remindFlag ){
                    return false;
			   }else{
			   	    //提示弹出层显示
			        popoverTips.show({
			            dom: that,
			            placement: 'bottom',
			            trigger: 'click', 
			            con: '<div class="homework-remid-box">老师会快马加鞭地为你批改哦~</div>'
			        });
			        setTimeout(function(){
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
	 
	hm.starScore =function(params){
        params = $.extend({
        	 starBox:null,//星星评分的框架
			 className:"on",//星星选中状态类
 	         scoreNum:null,//显示评分分数的类
 	         starIndex:0//开始默认选择星星
		}, params || {});

		//判断是否存在dom元素
		if( !(params.starBox) ){
            return false;
		}
        
        //多个的情况下依然可以使用
        $(params.starBox).each(function(){
        	var that = this;
			var _starLi = $(this).find('li');
		    var i = 0;
		    var _starIndex = params.starIndex;
		    fnPoint(_starIndex);
			//鼠标滑过星星的效果
			$(this).find('li').hover(function (){
				var _index = $(this).closest('ul').find('li').index(this);
				fnPoint(_index+1);
			},function(){
		        fnPoint();
			});

			//点击后进行评分处理
			$(this).find('li').click(function (){
				var _index = $(this).closest('ul').find('li').index(this);
				_starIndex = _index + 1;
				$(that).find(params.scoreNum).text(_starIndex);
			})

			//评分处理
			function fnPoint(num){
				var _iScore = num || _starIndex;
				for (i = 0; i < _starLi.length; i++){
					_starLi[i].className = i < _iScore ? params.className : "";
				} 	
			}
        })
	}

	/**
	 * 提交评论方法
	 * @param  {Object} dom 任意子节点
	 */
	 
	hm.submitComment =function(dom){
		//判断dom元素是否存在
		if( !dom ){
           return false;
		}

		var _score = $(dom).find('.homework-star-score-num').text();
		var _cont = $.trim($(dom).find('.homework-comment').val());
		var _commitId = $(dom).find('.homework_commit_id').val();

		var _homeworkbox = $(dom).closest('.homework-image-box');

		//判断评星不能为空
		if( _score == 0 || !_score ){
			 alert("评星不能为空！");
			 return false;
		}

		$.ajax({
            url: hm.url,
            data:{
            	score: _score,//评论分数
            	cont: _cont,//评论内容
            	commitId: _commitId//提交作业自增id
            },
            type : 'get',
            dataType:'json',
            beforeSend: function() {
                  $(dom).find('.homework-submit-btn').addClass('homework-submit-btn-disabled');
            },
            success:function(data){
        	    if( data.sign != 1 ){
                     alert(data.msg);
                     return false;
                }

                //计算发布日期
                var _d = new Date(),
                    _year = _d.getFullYear(),
                    _month = _d.getMonth() + 1,
                    _day = _d.getDate();

                //月份和天数小于10的前面加0    
                if( _month<10 ){
                    _month = "0" + _month;
                }
                if( _day<10 ){
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
				for( var i =0; i<_score; i++ ){
                    _html += '<li class="on"></li>'
				}

				//未被选择的星星的样式
				for( var i =0; i<(5-_score); i++ ){
                    _html += '<li></li>'
				}
							
				_html +=				'</ul>\
										<span class="homework-star-score-num">_score</span>\
									</div>\
								</div>\
								<p class="homework-comment">'+_cont+'</p>\
								<p class="homework-date">'+_date+'</p>\
							</div>'
                $(dom).remove();
				_homeworkbox.append(_html);
            },
            complete: function() {
            	 $(dom).find('.homework-submit-btn').removeClass('homework-submit-btn-disabled');
            }
        })   	
    }



})(homeWork)


/**
 * 图片轮播插件
 * @param  {Object} params 参数对象
 */
$.fn.imagePage = function(params){

	//判断dom元素是否存在
	if( !this ){
        return false;
	}

	params = $.extend({
					bigPic:null,//大图框架
					smallPic:null,//小图框架
					prev_btn:null,//小图左箭头
					next_btn:null,//小图右箭头
					delayTime:800,//切换一张图片时间
					order:0,//当前显示的图片（从0开始）
					ImageTransform:null,//旋转大图框架
					zoom:null,//放大按钮
					zoomout:null,//缩小按钮
					leftRotate:null,//向左旋转按钮
				    rightRotate:null,//向右旋转按钮
					min_picnum:null,//小图显示数量
					isZoom:true//是否存在旋转缩放
				}, params || {});
	var _this = this;
	var picsmall_num = $(this).find(params.smallPic).find('ul li').length;
	var picsmall_w = $(this).find(params.smallPic).find('ul li').outerWidth(true);
	var picsmall_h = $(this).find(params.smallPic).find('ul li').outerHeight(true);
	$(this).find(params.smallPic).find('ul').height(picsmall_num*picsmall_h);

	//判断作业反馈是否存在
	var Feedback_flag = $(this).find(params.smallPic).find('li').eq(picsmall_num-1).find('.homework-MaskLayer').length;
	var pictime;
	var tpqhnum=0;//当前选中图片的个数
	var xtqhnum=0;
	var popnum=0;
	var _tabnum = 0;
	var _src;
	if( params.isZoom ){
		var _ImageTransform ='';
		var _container = $$(params.ImageTransform);
		var _options = {
					onPreLoad: function(){ _container.style.backgroundImage = ""; },
					onLoad: function(){ _container.style.backgroundImage = ""; },
					onError: function(err){ _container.style.backgroundImage = ""; alert(err); }
				};
	    _ImageTransform = new ImageTrans( _container, _options );
	}
	
	//点击小图切换大图
    $(this).find(params.smallPic).find('li').click(function () {
	    tpqhnum = $(_this).find(params.smallPic).find('li').index(this);
	    show(tpqhnum);
		minshow(tpqhnum);
    }).eq(params.order).trigger("click");

    //大图切换过程
	function show(tpqhnum){
		if( tpqhnum == picsmall_num -1 && Feedback_flag == 0 ){
		  $(_this).find('.homework-Feedback').show();
		  $(_this).find('.ImageTransformJs').hide();
		}else{
		  $(_this).find('.homework-Feedback').hide();
		  $(_this).find('.ImageTransformJs').show();
		  _src = $(_this).find(params.bigPic).find('li').eq(tpqhnum).find('img').attr('src');

		  //判断是否存在缩放功能
		  if( params.isZoom ){
               _ImageTransform.load(_src);
		  }else{
		  	  $(_this).find(params.bigPic).find('.ImageTransformJs').remove();
		  	  var _imgHtml = '<img style="position: absolute; border: 0px none; padding: 0px; margin: 0px;" src="'+_src+'" class="ImageTransformJs" />';
		  	  $(_this).find(params.bigPic).append(_imgHtml);

		  	  /*
			   *图片缩放居中
			   */
			  var maxWidth =  $(_this).find(params.bigPic).width();
			  var maxHeight = $(_this).find(params.bigPic).height();
			  var imgWidth = $(_this).find(params.bigPic).find('.ImageTransformJs').width();
			  var imgHeight = $(_this).find(params.bigPic).find('.ImageTransformJs').height();

			  var rate=(maxHeight/imgHeight>maxWidth/imgWidth?maxWidth/imgWidth:maxHeight/imgHeight);
              $(_this).find(params.bigPic).find('.ImageTransformJs').attr('_imgW',imgWidth).attr('_imgH',imgHeight);

			  $(_this).find(params.bigPic).find('.ImageTransformJs').css({
			  	  'width':imgWidth*rate,
			  	  'height':imgHeight*rate,
			  	  'left': ( maxWidth - imgWidth*rate ) / 2 + "px",
				  'top': ( maxHeight - imgHeight*rate ) / 2 + "px"
			  })
		  }
		}
		$(_this).find(params.smallPic).find('li').eq(tpqhnum).addClass('homework-current').siblings(this).removeClass("homework-current");
	};

	//小图切换过程
	function minshow(tpqhnum){
		var picsmall_h = $(_this).find(params.smallPic).find('ul li').outerHeight(true);
		if( picsmall_num > params.min_picnum ){

		   $(_this).find(params.prev_btn).addClass('homework-prev-active').removeClass('homework-prev-disabled');
           $(_this).find(params.next_btn).addClass('homework-next-active').removeClass('homework-next-disabled');
           
           //判断滚动到最后一个时按钮置灰
           if( tpqhnum == picsmall_num-1 ){
              $(_this).find(params.next_btn).addClass('homework-next-disabled').removeClass('homework-next-active');
           }
           //判断滚动到最后一个时按钮置灰
           if( tpqhnum == 0 ){
              $(_this).find(params.prev_btn).addClass('homework-prev-disabled').removeClass('homework-prev-active');
           }
		   var _scrollnum = tpqhnum-params.min_picnum +2;
		   var _scrollH = -_scrollnum*picsmall_h;
		   _tabnum = _scrollnum;
		   if( tpqhnum < params.min_picnum-1 ){
		   	  _scrollH=0;
		   	  _tabnum=0;
		   }else if( tpqhnum == picsmall_num-1 ){
		   	  _scrollH = -(_scrollnum-1)*picsmall_h;
		   	  _tabnum = _scrollnum-1;
		   }
		   
           $(_this).find(params.smallPic).find('ul').stop().animate({'top':_scrollH},params.delayTime).attr('_topNum',_tabnum);
		}else{
		  $(_this).find(params.prev_btn).addClass('homework-prev-disabled').removeClass('homework-prev-active');
          $(_this).find(params.next_btn).addClass('homework-next-disabled').removeClass('homework-next-active');
		}
	}

	//大图左右切换	
	$(this).find(params.prev_btn).click(function(){
		if( picsmall_num > params.min_picnum ){
			if(tpqhnum == 0){
				tpqhnum = 0;
				return false;
			};
			tpqhnum--;
			show(tpqhnum);
			minshow(tpqhnum);
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
			minshow(tpqhnum)
			show(tpqhnum);
		}else{
			return false;
		}	
	})
	
	/**
	 * (1)点击放大按钮放大大图
	 * (2)判断是否存在缩放功能,如果存在缩放功能才有下面的一系列事件
	 */
	if( params.isZoom ){
		$(this).find(params.zoom).click(function(){ 
			_ImageTransform.zoomin(); 
		})

		//点击缩小按钮缩小大图
		$(this).find(params.zoomout).click(function(){ 
			_ImageTransform.zoomout(); 
		})

		//点击向左旋转按钮旋转大图
		$(this).find(params.leftRotate).click(function(){ 
			_ImageTransform.left(); 
		})

		//点击向右旋转按钮旋转大图
		$(this).find(params.rightRotate).click(function(){ 
			_ImageTransform.right(); 
		})
	}	
}

