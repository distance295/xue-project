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

//定位右侧边栏
function ctrlRight(){
    var _bodyW;
    if(document.documentElement && document.documentElement.clientWidth){
       _bodyW = document.documentElement.clientWidth;
    }else{
       _bodyW = document.body.clientWidth;
    }
    if( $('#module-sidebar') ){
       if( _bodyW < 1190 ){
           $('#module-sidebar').addClass('module-sidebar-right');
        }else{
           $('#module-sidebar').removeClass('module-sidebar-right');
        }
    }
}

$(function(){
    ctrlRight();
    //根据分辨率重新计算图片
    $(window).resize(function(){
        ctrlRight();
    })
})



