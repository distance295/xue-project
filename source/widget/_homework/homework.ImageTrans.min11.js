/**
 * ImageTrans图片旋转 缩放 拖拽
 * @authors duxinli
 * @date    2015-10-12
 * @version $Id$
 */

/**
 * 判断浏览器ie版本号
 */
var $ImageB = $ImageB || {};
$ImageB.browser = $ImageB.browser || {};
$ImageB.browser.uga = navigator.userAgent.toLowerCase();
$ImageB.browser.msie = /msie/.test($ImageB.browser.uga);

$ImageB.check = $ImageB.check || {};
$ImageB.check.isIE6 = !-[1, ] && !window.XMLHttpRequest;
$ImageB.check.isIE7 = $ImageB.browser.uga.indexOf("msie 7.0") > 0;
$ImageB.check.isIE8 = $ImageB.browser.uga.indexOf("msie 8.0") > 0;
$ImageB.check.isIE9 = $ImageB.browser.uga.indexOf("msie 9.0") > 0;

//容器对象
var ImageTrans = function(container, options){
	this._initialize( container, options );
	this._initMode();
	if ( this._support ) {
		this._initContainer();
		this._init();
	} else {//模式不支持
		this.onError("not support");
	}
};
ImageTrans.prototype = {
  //初始化程序
  _initialize: function(container, options) {
	var container = this._container = $$(container);
	this._clientWidth = container.clientWidth;//变换区域宽度
	this._clientHeight = container.clientHeight;//变换区域高度
	this._img = new Image();//图片对象
	this._style = {};//备份样式
	this._x = this._y = 1;//水平/垂直变换参数
	this.rotateNum = 1;//1是原图没有旋转，宽和高都是原图 0是高和宽对调，就是把原图的高变为宽，宽变为高
	this._radian = 0;//旋转变换参数
	this._support = false;//是否支持变换
	this._init = this._load = this._show = this._dispose = $$.emptyFunction;
	
	var opt = this._setOptions(options);
	
	this._zoom = opt.zoom;
	
	this.onPreLoad = opt.onPreLoad;
	this.onLoad = opt.onLoad;
	this.onError = opt.onError;
	
	this._LOAD = $$F.bind( function(){
		this.onLoad(); this._load(); this.reset();
		this._img.style.visibility = "visible";
	}, this );
	
	$$CE.fireEvent( this, "init" );
  },
  //设置默认属性
  _setOptions: function(options) {
    this.options = {//默认值
		mode:		"css3|filter|canvas",
		zoom:		.1,//缩放比率
		onPreLoad:	function(){},//图片加载前执行
		onLoad:		function(){},//图片加载后执行
		onError:	function(err){}//出错时执行
    };
    return $$.extend(this.options, options || {});
  },
  //模式设置
  _initMode: function() {
	var modes = ImageTrans.modes;
	this._support = $$A.some( this.options.mode.toLowerCase().split("|"), function(mode){
		mode = modes[ mode ];
		if ( mode && mode.support ) {
			mode.init && (this._init = mode.init);//初始化执行程序
			mode.load && (this._load = mode.load);//加载图片执行程序
			mode.show && (this._show = mode.show);//变换显示程序
			mode.dispose && (this._dispose = mode.dispose);//销毁程序
			//扩展变换方法
			$$A.forEach( ImageTrans.transforms, function(transform, name){
				this[ name ] = function(){
					transform.apply( this, [].slice.call(arguments) );
					this._show();
				}
			}, this );
			return true;
		}
	}, this );
  },
  //初始化容器对象
  _initContainer: function() {
	var container = this._container, style = container.style, position = $$D.getStyle( container, "position" );
	this._style = { "position": style.position, "overflow": style.overflow };//备份样式
	if ( position != "relative" && position != "absolute" ) { style.position = "relative"; }
	style.overflow = "hidden";
	if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
		style.cursor = "move";
	}
	$$CE.fireEvent( this, "initContainer" );
  },
  //加载图片
  load: function(src) {
	if ( this._support ) {
		var img = this._img, oThis = this;
		img.onload || ( img.onload = this._LOAD );
		img.onerror || ( img.onerror = function(){ oThis.onError("err image"); } );
		img.style.visibility = "hidden";
		this.onPreLoad();
		img.src = src;
		img.className = 'ImageTransformJs';
		img.style.cursor="move";
		img.style.width="auto";//更换图片时初始化宽
		img.style.height="auto";//更换图片时初始化高
		this.rotateNum = 1;//更换图片时重新定义
		this._x = this._y = 1;//更换图片时重新定义水平/垂直变换参数
		$(this._img).attr('_y',this._y).attr('_x',this._x);
	}
  },
  //重置
  reset: function() {
	if ( this._support ) {
		this._x = this._y = 1; this._radian = 0;
		this._show();
	}
  },
  //销毁程序
  dispose: function() {
	if ( this._support ) {
		this._dispose();
		$$CE.fireEvent( this, "dispose" );
		$$D.setStyle( this._container, this._style );//恢复样式
		this._container = this._img = this._img.onload = this._img.onerror = this._LOAD = null;
	}
  }
};
//变换模式
ImageTrans.modes = function(){
	var css3Transform;//ccs3变换样式
	//初始化图片对象函数
	function initImg(img, container) {
		$$D.setStyle( img, {
			position: "absolute",
			border: 0, padding: 0, margin: 0, width: "auto", height: "auto",//重置样式
			visibility: "hidden"//加载前隐藏
		});
		container.appendChild( img );
	}
	//获取变换参数函数
	function getMatrix(radian, x, y) {
		var Cos = Math.cos(radian), Sin = Math.sin(radian);
		return {
			M11: Cos * x, M12:-Sin * y,
			M21: Sin * x, M22: Cos * y
		};
	}
	return {
		css3: {//css3设置
			support: function(){
				var style = document.createElement("div").style;
				return $$A.some(
					[ "transform", "MozTransform", "webkitTransform", "OTransform" ],
					function(css){ if ( css in style ) {
						css3Transform = css; return true;
					}});
			}(),
			init: function() { initImg( this._img, this._container ); },
			load: function(){
				var img = this._img;
				/*
				 *图片缩放
				 */
				var maxWidth = this._clientWidth;
				var maxHeight = this._clientHeight;
				var rate=(maxHeight/img.offsetHeight>maxWidth/img.offsetWidth?maxWidth/img.offsetWidth:maxHeight/img.offsetHeight); 
			   
			   //设置等比例图片的宽和高以及居中显示
			    $$D.setStyle( img, {
					width: img.offsetWidth*rate + "px",
					height: img.offsetHeight*rate + "px",
					top: ( this._clientHeight - img.offsetHeight*rate ) / 2 + "px",
					left: ( this._clientWidth - img.offsetWidth*rate ) / 2 + "px",
					visibility: "visible"
				});
			},
			show: function() {
				var matrix = getMatrix( this._radian, this._y, this._x );
				//设置变形样式
				this._img.style[ css3Transform ] = "matrix("
					+ matrix.M11.toFixed(16) + "," + matrix.M21.toFixed(16) + ","
					+ matrix.M12.toFixed(16) + "," + matrix.M22.toFixed(16) + ", 0, 0)";
			},
			dispose: function(){ this._container.removeChild(this._img); }
		},
		filter: {//滤镜设置
			support: function(){ return "filters" in document.createElement("div"); }(),
			init: function() {
				initImg( this._img, this._container );
				//设置滤镜
				this._img.style.filter = "progid:DXImageTransform.Microsoft.Matrix(SizingMethod='auto expand')";
			},
			load: function(){
				this._img.onload = null;//防止ie重复加载gif的bug
				this._img.style.visibility = "visible";
				/*
				 *图片缩放
				 */
				var img = this._img;
				var maxWidth = this._clientWidth;
				var maxHeight = this._clientHeight;
				var rate=(maxHeight/img.offsetHeight>maxWidth/img.offsetWidth?maxWidth/img.offsetWidth:maxHeight/img.offsetHeight); 
			    
			    //设置等比例图片的宽和高
			    $$D.setStyle( img, {
					width: img.offsetWidth*rate + "px",
					height: img.offsetHeight*rate + "px",
				});
			},
			show: function() {
				var img = this._img;
				//设置滤镜
				$$.extend(
					img.filters.item("DXImageTransform.Microsoft.Matrix"),
					getMatrix( this._radian, this._y, this._x )
				);
				
			    //设置等比例图片的宽和高
			    $$D.setStyle( img, {
					top: ( this._clientHeight - img.offsetHeight ) / 2 + "px",
					left: ( this._clientWidth - img.offsetWidth ) / 2 + "px",
					visibility: "visible"
				});
			},
			dispose: function(){ this._container.removeChild(this._img); }
		},
		canvas: {//canvas设置
			support: function(){ return "getContext" in document.createElement('canvas'); }(),
			init: function() {
				var canvas = this._canvas = document.createElement('canvas'),
					context = this._context = canvas.getContext('2d');
				//样式设置
				$$D.setStyle( canvas, { position: "absolute", left: 0, top: 0 } );
				canvas.width = this._clientWidth; canvas.height = this._clientHeight;
				this._container.appendChild(canvas);
			},
			show: function(){
				var img = this._img, context = this._context,
					clientWidth = this._clientWidth, clientHeight = this._clientHeight;
				//canvas变换
				context.save();
				context.clearRect( 0, 0, clientWidth, clientHeight );//清空内容
				context.translate( clientWidth / 2 , clientHeight / 2 );//中心坐标
				context.rotate( this._radian );//旋转
				context.scale( this._y, this._x );//缩放
				context.drawImage( img, -img.width / 2, -img.height / 2 );//居中画图
				context.restore();
			},
			dispose: function(){
				this._container.removeChild( this._canvas );
				this._canvas = this._context = null;
			}
		}
	};
}();
//变换方法
ImageTrans.transforms = {
  //垂直翻转
  vertical: function() {
	this._radian = Math.PI - this._radian; this._y *= -1;
  },
  //水平翻转
  horizontal: function() {
	this._radian = Math.PI - this._radian; this._x *= -1;
  },
  //根据弧度旋转
  rotate: function(radian) { this._radian = radian; },
  //向左转90度
  left: function() { 
  	this._radian -= Math.PI/2; 
  	if(this.rotateNum == 1){
       this.rotateNum = 0;
  	}else if(this.rotateNum == 0){
       this.rotateNum = 1;
  	}
  	this._img.style.left =  ($(this._container).width() - $(this._img).width())/2  +"px";
	this._img.style.top =   ($(this._container).height() - $(this._img).height())/2  +"px";
  },
  //向右转90度
  right: function() { 
  	this._radian += Math.PI/2;
  	if(this.rotateNum == 1){
       this.rotateNum = 0;
  	}else if(this.rotateNum == 0){
       this.rotateNum = 1;
  	}
  	this._img.style.left =  ($(this._container).width() - $(this._img).width())/2  +"px";
	this._img.style.top =   ($(this._container).height() - $(this._img).height())/2  +"px"; 
  },
  //根据角度旋转
  rotatebydegress: function(degress) { this._radian = degress * Math.PI/180; },
  //缩放
  scale: function () {
	function getZoom(scale, zoom) {
		return	scale > 0 && scale >-zoom ? zoom :
				scale < 0 && scale < zoom ?-zoom : 0;
	}
	return function(zoom) { if( zoom ){
		var hZoom = getZoom( this._y, zoom ), vZoom = getZoom( this._x, zoom );
		if ( hZoom && vZoom ) {
			//缩小的时候图片居中放置和控制图片缩小的最小的比例
			if( zoom <0 ){
				//判断图片缩放的大小限制
	            if(this._y<0.2){
	               return false;
				}
				//图片重新居中
				this._img.style.left =  ($(this._container).width() - $(this._img).width())/2  +"px";
		        this._img.style.top =   ($(this._container).height() - $(this._img).height())/2  +"px";  
			}	
			this._y += hZoom; this._x += vZoom;
			$(this._img).attr('_y',this._y).attr('_x',this._x);
		}
	}}
  }(),
  //放大
  zoomin: function() { this.scale( Math.abs(this._zoom) ); },
  //缩小
  zoomout: function() { this.scale( -Math.abs(this._zoom) ); }
};


//滚轮缩放扩展
ImageTrans.prototype._initialize = (function(){
	var init = ImageTrans.prototype._initialize,
		mousewheel = $$B.firefox ? "DOMMouseScroll" : "mousewheel",
		methods = {
			"init": function(){
				this._mzZoom = $$F.bind( zoom, this );
			},
			"initContainer": function(){
				$$E.addEvent( this._container, mousewheel, this._mzZoom );
			},
			"dispose": function(){
				$$E.removeEvent( this._container, mousewheel, this._mzZoom );
				this._mzZoom = null;
			}
		};
	//缩放函数
	function zoom(e){
		this.scale((
			e.wheelDelta ? e.wheelDelta / (-120) : (e.detail || 0) / 3
		) * Math.abs(this._zoom) );
		e.preventDefault();
	};
	return function(){
		var options = arguments[1];
		if ( !options || options.mouseZoom !== false ) {
			//扩展钩子
			$$A.forEach( methods, function( method, name ){
				$$CE.addEvent( this, name, method );
			}, this );
		}
		init.apply( this, arguments );
	}
})();

//拖动图片扩展
ImageTrans.prototype._initialize = (function(){
	var init = ImageTrans.prototype._initialize,
		methods = {
			"init": function(){
				this._mrX = this._mrY = this._mrRadian = 0;
				this._mrSTART = $$F.bind( start, this );
				this._mrMOVE = $$F.bind( move, this );
				this._mrSTOP = $$F.bind( stop, this );
			},
			"initContainer": function(){
				if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
                    $$E.addEvent( this._container, "mousedown", this._mrSTART );
				}else{
					$$E.addEvent( this._img, "mousedown", this._mrSTART );
				}
			},
			"dispose": function(){
				if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
                    $$E.removeEvent( this._container, "mousedown", this._mrSTART );
				}else{
					$$E.removeEvent( this._img, "mousedown", this._mrSTART );
				}
				this._mrSTOP();
				this._mrSTART = this._mrMOVE = this._mrSTOP = null;
			}
		};
	var downX, downY, imgLeft = 0, imgTop = 0, moveX = 0, moveY = 0;	
	//开始函数
	function start(e){
	    downX = e.clientX;
	    downY = e.clientY;
	    //点击拖动开始时判断图片是否旋转反方向，如果是，将图片的宽和高对调
	    imgLeft = this._img.offsetLeft + 1;
	    imgTop = this._img.offsetTop + 1;
		$$E.addEvent( document, "mousemove", this._mrMOVE );
		$$E.addEvent( document, "mouseup", this._mrSTOP );
		if ( $$B.ie ) {
			var container = this._container;
			$$E.addEvent( container, "losecapture", this._mrSTOP );
			container.setCapture();
		} else {
			$$E.addEvent( window, "blur", this._mrSTOP );
			e.preventDefault();
		}
	};
	//拖动函数
	function move(e){
		  var _ImgRate, _ImgSW, _ImgSH, _ImgW, _ImgH, _ViewImgW, _ViewImgH, _LeftX, _LeftY;

          _ImgRate = parseFloat($(this._img).attr("_x") || 1).toFixed(1);

          //this.rotateNum = 1的时候图片是横向原始大小，this.rotateNum = 0时，图片是纵向将图片的宽和高对调
          if( this.rotateNum == 1 ){
              _ImgSW = parseFloat($(this._img).width());
	          _ImgSH = parseFloat($(this._img).height());
          } else if ( this.rotateNum == 0 ){
          	  if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
          	  	  _ImgSW = parseFloat($(this._img).width());
	              _ImgSH = parseFloat($(this._img).height());
          	  } else {
                 _ImgSW = parseFloat($(this._img).height());
	             _ImgSH = parseFloat($(this._img).width());
          	  }
          }

          if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
          	 _ImgW = _ImgSW;
             _ImgH = _ImgSH;
          } else {
              _ImgW = _ImgSW*_ImgRate;
              _ImgH = _ImgSH*_ImgRate;
          }
         
          _ViewImgW = parseFloat($(this._container).width());
          _ViewImgH = parseFloat($(this._container).height());
     
	      moveX = e.clientX - downX;
	      moveY = e.clientY - downY;

	      _LeftX = imgLeft + moveX;
	      _LeftY = imgTop + moveY;

	      /**
	       * 判断图片能否拖动
	       * 1.图片的宽度或者高度同时不超过图片显示区域的位置，就不拖动
	       * 2.图片宽度不超过div宽度高超过只能向上向下拖动
	       * 3.图片高度不超过div高度宽超过只能左右拖动
	       */
          if( _ViewImgW >= _ImgW && _ViewImgH >= _ImgH ){
          	 return false;
	      }

	      //横向和纵向计算拖动边界方法不同 
          if( this.rotateNum == 1 ){
          	  //判断图片的宽度是否大于可视区域的宽度
              if( _ViewImgW > _ImgW ){
                  _LeftX = imgLeft;
              } else {
              	  //判断左边允许拖拽的边界距离
			      if( _LeftX > (_ImgW-_ImgSW)/2 ){
			      	  _LeftX = (_ImgW-_ImgSW)/2;
			      }
			      //判断右边允许拖拽的边界距离
			      if( _LeftX < ((_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW)) ){
		              _LeftX = (_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW);
			      }
              }

              //判断图片的宽度是否大于可视区域的宽度
              if( _ViewImgH > _ImgH ){
                  _LeftY = imgTop;
              } else {
              	  //判断顶部允许拖拽的边界距离
			      if( _LeftY > (_ImgH-_ImgSH)/2 ){
			      	  _LeftY = (_ImgH-_ImgSH)/2;
			      }
			      //判断底部允许拖拽的边界距离
			      if( _LeftY < ((_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH)) ){
		              _LeftY = (_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH);
			      }
              }
		  } else if ( this.rotateNum == 0 ){
              //判断图片的宽度是否大于可视区域的宽度
              if( _ViewImgW > _ImgW ){
                 _LeftX = imgLeft;
              } else {
              	 //判断左边允许拖拽的边界距离
              	 if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
              	 	 //判断左边允许拖拽的边界距离
				      if( _LeftX > (_ImgW-_ImgSW)/2 ){
				      	  _LeftX = (_ImgW-_ImgSW)/2;
				      }
				      //判断右边允许拖拽的边界距离
				      if( _LeftX < ((_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW)) ){
			              _LeftX = (_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW);
				      }
              	 } else {
                     if( _LeftX > (_ImgW-_ImgSW)/2 + (_ImgSW-_ImgSH)/2 ){
			      	    _LeftX = (_ImgW-_ImgSW)/2 + (_ImgSW-_ImgSH)/2;
			         }
			         //判断右边允许拖拽的边界距离
				     if( _LeftX < ((_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW) + (_ImgSW-_ImgSH)/2 ) ){
				      	 _LeftX = (_ImgW-_ImgSW)/2 - (_ImgW -_ViewImgW) + (_ImgSW-_ImgSH)/2;
				     }
              	 }
                 
              }
		      //判断图片的宽度是否大于可视区域的宽度
              if( _ViewImgH > _ImgH ){
                 _LeftY = imgTop;
              } else {
              	if( $ImageB.check.isIE6 ||$ImageB.check.isIE7 ||$ImageB.check.isIE8 || $ImageB.check.isIE9 ){
              		  //判断顶部允许拖拽的边界距离
				      if( _LeftY > (_ImgH-_ImgSH)/2 ){
				      	  _LeftY = (_ImgH-_ImgSH)/2;
				      }
				      //判断底部允许拖拽的边界距离
				      if( _LeftY < ((_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH)) ){
			              _LeftY = (_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH);
				      }
              	} else {
              		 //判断顶部允许拖拽的边界距离
				     if( _LeftY > (_ImgH-_ImgSH)/2 - (_ImgSW-_ImgSH)/2 ){
				      	 _LeftY = (_ImgH-_ImgSH)/2 - (_ImgSW-_ImgSH)/2;
				     }
				     //判断底部允许拖拽的边界距离
				     if( _LeftY < ((_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH) - (_ImgSW-_ImgSH)/2 ) ){
				      	 _LeftY = (_ImgH-_ImgSH)/2 - (_ImgH -_ViewImgH) - (_ImgSW-_ImgSH)/2;
				     }
              	}
              }
		  }    
	      this._img.style.left = _LeftX + "px";
	      this._img.style.top = _LeftY + "px";
	};

	//停止函数
	function stop(){
		$$E.removeEvent( document, "mousemove", this._mrMOVE );
		$$E.removeEvent( document, "mouseup", this._mrSTOP );
		if ( $$B.ie ) {
			var container = this._container;
			$$E.removeEvent( container, "losecapture", this._mrSTOP );
			container.releaseCapture();
		} else {
			$$E.removeEvent( window, "blur", this._mrSTOP );
		};
	};
	return function(){
		var options = arguments[1];
		if ( !options || options.mouseRotate !== false ) {
			//扩展钩子
			$$A.forEach( methods, function( method, name ){
				$$CE.addEvent( this, name, method );
			}, this );
		}
		init.apply( this, arguments );
	}
})();