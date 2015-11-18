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
};
