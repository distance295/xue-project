
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
homeWork.path = '/static/img/Homework/shuzi';

(function(hm){
  
   /**
	* 控制查看作业区域的高度和宽度，限制的一屏之内
	* @param  {Object} dom 任意子节点
	*/
   hm.imageCtl =function(dom){
        //关联的元素box
        this.box = {
       	    home_header:$('.homework-header'),//交作业区域头部的类名
       	    home_samllBox:$(dom).find('.homework-Thumbnails-box'),//左侧缩略图的总框架
       	    home_bigBox:$(dom).find('.homework-bigImg-box'),//右侧大图的总框架
       	    home_pageBtn:$(dom).find('.homework-page-btn'),//缩略图上下翻页按钮框架
       	    home_minImg:$(dom).find('.homework-Thumbnails-img-list'),//缩略图图片的总框架
       	    home_bigImg:$(dom).find('.homework-ImageTransform'),//大图图片框架
       	    home_size:$(dom).find('.homework-Thumbnails-img-list').find('li .homework-MaskLayer-num'),//图片数字
       	    home_Feedback:$(dom).find('.homework-Feedback'),//作业反馈总框架
       	    home_Feedback_header:$(dom).find('.homework-Feedback-header'),//作业反馈头部框架
       	    home_Feedback_video:$(dom).find('.homework-Feedback-video'),//作业反馈中的推荐视频框架
       	    home_Feedback_describe:$(dom).find('.homework-Feedback-describe'),//作业反馈中文字描述的框架
       	    header_topbar:$('#module-topbar'),//头部工具条的框架
       	    header_myheader:$('#module-myheader'),//我的头部框架
        }
        
        //浏览器可视区域的宽和高
        var _bodyW, _bodyH;
		if(document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		   _bodyW = document.documentElement.clientWidth;
		   _bodyH = document.documentElement.clientHeight;	
		}else{
	       _bodyW = document.body.clientWidth;
		   _bodyH = document.body.clientHeight;
		}
		if( _bodyW < 1190){
	      // _bodyH = (1024*10)/16;
	        _bodyH = (1190*10)/16;
		}else{
			_bodyH = (1190*10)/16;
		}
        
        //具体交作业图片区域的跨度和高度的控制
		var _home_Thumbnails_H = parseInt(_bodyH - this.box.home_header.height() - this.box.header_topbar.height() - this.box.header_myheader.height() - 30*2 - 20*2 -10*2);
		var _home_bigImg_H = parseInt(_bodyH - this.box.home_header.height() - this.box.header_topbar.height() - this.box.header_myheader.height() - 30*2 - 20*2);

		this.box.home_samllBox.height(_home_Thumbnails_H);
		this.box.home_bigBox.height(_home_bigImg_H);
        
        //缩略图的高度和宽度等一系列缩略图的控制
		var _Thumbnails_H = _home_Thumbnails_H - parseFloat(this.box.home_pageBtn.height())*2;
		var _ImgLi_H = parseInt(_Thumbnails_H/4) - 24;
		var _ImgLi_W = parseInt((_ImgLi_H*4)/3);

		this.box.home_samllBox.width(_ImgLi_W + 4 + 10);
		this.box.home_minImg.height(_Thumbnails_H);
		this.box.home_minImg.find('li').height(_ImgLi_H).width(_ImgLi_W);
		this.box.home_minImg.find('li').find('i').css('top',_ImgLi_H/2 - 7);
        this.box.home_size.css('lineHeight', _ImgLi_H +"px");

		//大图的高度控制
		var _home_ImageTransform_H = _home_bigImg_H - 2;
		var _home_ImageTransform_W = (_home_ImageTransform_H)*4/3;

		this.box.home_bigImg.height(_home_ImageTransform_H);

		//计算作业反馈中的box中html的居中情况
		var _home_Feedback_left = (this.box.home_bigImg.width() - this.box.home_Feedback.width())/2;
		var _home_Feedback_top = (this.box.home_bigImg.height() - this.box.home_Feedback.height())/2;
		this.box.home_Feedback.css({'left':_home_Feedback_left,'top':_home_Feedback_top})

		//计算作业反馈中文字区域p的高度
		var _Feedback_describe = this.box.home_Feedback.height() - 40*2 - this.box.home_Feedback_header.height() - this.box.home_Feedback_video.height() - 10 - 20;
		this.box.home_Feedback_describe.height(_Feedback_describe);
    }

    /**
	 * 作业反馈分数显示事件
	 * @param  {number} score 分数d
	 */
	hm.score = function(score){
	   var _score = $(score).attr('score');
	   var _scoreArr = _score.split('');
	   var _scoreHtml = '';
	   $.each(_scoreArr, function(k, v) {
	       _scoreHtml += '<img src="' + homeWork.path + '/' + v + '.png" alt="" />';
	   });
	   $(score).html(_scoreHtml)
	}

})(homeWork)


/**
 * 图片轮播插件
 * @param  {Object} params 参数对象
 */
$.fn.imagePage = function(params){
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
			  var rate=(maxHeight/imgHeight>maxWidth/imgHeight?maxWidth/imgHeight:maxHeight/imgHeight);
              
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
		   if( tpqhnum < params.min_picnum-1 ){
		   	  _scrollH=0;
		   }
		   if( tpqhnum == picsmall_num-1 ){
		   	  _scrollH = -(_scrollnum-1)*picsmall_h;
		   }
           $(_this).find(params.smallPic).find('ul').stop().animate({'top':_scrollH},params.delayTime);
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

	//点击放大按钮放大大图
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

/**
 * 星星评分插件
 * @param  {Object} params 参数对象
 * @example
 * $('#starArea1').starScore({
	 	     className:"on",//星星选中状态类
	 	     scoreNum:".scoreNum"//显示评分分数的类
	 })
 */
$.fn.starScore = function(params){
	params = $.extend({
					 className:"on",//星星选中状态类
	     	         scoreNum:null,//显示评分分数的类
	     	         starIndex:0//开始默认选择星星
				}, params || {});
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
}
