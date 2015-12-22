/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-30 14:50:51
 * @version $Id$
 */

var miniCart = miniCart || {};
//头部购物车显示隐藏
miniCart.shopCart = function(e){
   var that = $(e);
   that.addClass('hover');
    var _html = that.find('.dropdown-body').html();
    console.log(_html);
    if(_html == ''){
         console.log(1);
        return false;
    }else{
        console.log(2); 
    }
   //鼠标移出
	$('.ui-dropdown-miniCart').on('mouseleave',function(event) {
		$(this).removeClass('hover');
	});
};
$(function(){
	//头部购物车鼠标移入
	$('.ui-dropdown-miniCart').on('mouseenter',function() {
		miniCart.shopCart(this);
	});
});







