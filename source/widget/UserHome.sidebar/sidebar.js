/**
 * Created by user on 2015/10/21.
 */
var sidebar = sidebar || {};
sidebar.opt = {
    dom : '#module-sidebar',
    item : '#module-sidebar .btn',
    actCls : 'active'
};

sidebar.setActive = function(id){
    var _dom = $(this.opt.dom).find('.btn');
    //console.log(_dom);
    _dom.each(function(){
        if($(this).data('id') == id){
            $(this).addClass(sidebar.opt.actCls);
        }else{
            $(this).removeClass(sidebar.opt.actCls);
        }
    });
};