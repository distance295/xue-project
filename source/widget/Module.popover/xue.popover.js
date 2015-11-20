/**
 * 提示弹出层封装
 * @authors duxinli
 * @date    2015-11-17
 * @version $Id$
 */

var popoverTips = popoverTips || {};


/**
 * 提示弹出层显示方法
 * @param  {Object} params 参数配置对象
 */
popoverTips.show = function (params) {
    params = $.extend({
                    dom: null, //任意子节点
                    placement: 'top', //弹出层显示位置
                    trigger: 'click', //事件
                    con: '', //提示内容，可以是function或者html字符串
                    title: '', //title内容
                    html: true //true |false
                }, params || {});

    //先清除已经存在的
    if($('body').find('.popover[role="tooltip"]')){
        $('body').find('.popover[role="tooltip"]').each(function(){
             var that = this;
             $(this).prev().prev().popover('destroy');
             $(this).siblings('.popover-mask-box').remove();
        }) 
    }
   //配置参数
    if( params.dom ){
        $(params.dom).popover({
              placement: params.placement,
              html: params.html,
              trigger: params.trigger,
              title: params.title,
              content: params.con
        });
        $(params.dom).popover('show');
    }

    //弹出展开的时候删除点击dom防止重复点击
    var _domW = $(params.dom).outerWidth();
    var _domH = $(params.dom).outerHeight();
    if( $(params.dom).nextAll('.popover-mask-box').length == 0 ){
      console.log(12345666666)
         $(params.dom).after('<span class="popover-mask-box"></span>');
         $(params.dom).nextAll('.popover-mask-box').css({
              width:_domW,
              height:_domH,
              marginLeft:-(_domW)
         });
    }
};

/**
 * 提示弹出层销毁方法
 * @param  {Object} dom 任意子节点
 */
popoverTips.destroy = function (dom) {
    $(dom).popover('destroy');
    $(dom).nextAll('.popover-mask-box').remove();
}

