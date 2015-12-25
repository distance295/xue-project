/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

/* ========================== Ajax封装通用类 =========================== */
var xue = xue || {};
    xue.ajaxCheck = xue.ajaxCheck || {};

xue.alert = function(tips){
    alert(tips);
};
xue.ajaxCheck.html = function( str ){
    if(!str){ 
        //xue.alert('数据读取错误……');
        return false; 
    }
    var str = $.trim(str);
    if(str.substr(0,1)=='<'){
        return str;
    }else if(str.substr(0,4)=='http' || str.substr(0,1)=='/'){
        window.location.href = str;
        return false;
    }else{
         if(str.substr(0,6) == 'error:'){
             alert(str);
             return false;
         }
    }
};

xue.ajaxCheck.json = function( d ){
    if(!d){ 
        //xue.alert('数据读取错误……');
        return false; 
    }
    var tp = d.sign, msg = d.msg;
    if(tp === 0){
        xue.alert(msg);
        return false;
    }
    if(tp === 2){
        window.location.href = d.msg;
    }
    if(tp === 1){
        return msg;
    }
};

loadingHtml =  function(){document.write("<div id='loading' style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.1;filter:alpha(opacity=10);\"><div style=\"position:absolute;left:50%;top:50%;\"><i class='fa fa-spinner fa-spin'></i></div></div>");} 
function beforeSendfn(){  
   $("body").append(loadingHtml);  
}
function completefn(){  
   $("#loading").remove();
}  

$.ajaxSetup({
  type: 'post',
  dataType: 'json',
}); 

var miniCart = miniCart || {};
var miniUrl = $('#myCartUrl').attr('href');
//头部购物车显示隐藏
miniCart.shopCart = function(e){
    var that = $(e);
    var _html = that.find('#miniCart-body').html();
    if(_html !== ''){
        that.addClass('hover');
        return false;
    }else{
       var url = miniUrl + '/ShoppingCart/ajaxGetCartList/';
       $.ajax({
	         	url: url,
	         	type: 'POST',
	         	dataType: 'html',
				xhrFields:{withCredentials:true},
				crossDomain:true,
	         	success:function (result) {
                       that.addClass('hover');
                       $(result).appendTo('#miniCart-body');
	         	},
	         	error : function() {
	         		alert('数据加载失败！');
	         	}
	         }); 
    }
   //鼠标移出
	$('.ui-dropdown-miniCart').on('mouseleave',function(event) {
		$(this).removeClass('hover');
	});
};
 //删除头部购物车里的课程
    miniCart.shopCartDel = function(e){
        var that= $(e),
                _id = that.data('id'),
                _num = $('.minicart-footer .minicart-total').data('num');
        var url = miniUrl + '/ShoppingCart/delCart/';
                $.ajax({
                    url: url,
                    type: 'get',
                    dataType: 'jsonp',
                    data: {id:_id},
                    jsonp:'jsonpCallback',
                    success:function (result) {
						if(result.sign == 2){
							 window.location.href = result.url;
						}
                        if(result.sign == 1){
                            $('small.minicart-total').text(_num - 1);
							$('.dropdown-body').empty();
							$.ajax({
								url: miniUrl + '/ShoppingCart/ajaxGetCartList/',
								type: 'POST',
								dataType: 'html',
								xhrFields:{withCredentials:true},
								crossDomain:true,
								success:function (result) {
									   $(result).appendTo('#miniCart-body');
								},
								error : function() {
									alert('数据加载失败！');
								}
							 }); 
                        }
                    },
                    error : function() {
                        alert('数据加载失败！');
                    }
                 });    
    }
$(function(){
	//头部购物车鼠标移入
	$('.ui-dropdown-miniCart').on('mouseenter',function() {
		miniCart.shopCart(this);
	});
    //删除头部购物车里的课程
    $('body').on('click','.course-function .delete',function(){
        miniCart.shopCartDel(this);
    });
    
});







