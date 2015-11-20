/**
 * Created by user on 2015/10/21.
 */
var sideNav = sideNav || {};
sideNav.opt = {
    dom : '#side-nav',
    item : '#side-nav li',
    actCls : 'current'
};

sideNav.setActive = function(id){
    var _dom = $(this.opt.item);
    _dom.each(function(){
        if($(this).data('id') == id){
            
            $(this).find('a').addClass(sideNav.opt.actCls);
        }else{
            $(this).find('a').removeClass(sideNav.opt.actCls);
        }
    });
};