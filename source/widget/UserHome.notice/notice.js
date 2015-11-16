function ConfirmDel() {
        if(!confirm("确认要删除？"))
        {
            window.event.returnValue = false;
        }
    }

//左侧导航高度自适应右侧
//document.getElementById("notice-l").style.height=document.getElementById("notice-r").scrollHeight+"px";
var subNav = subNav || {};
subNav.opt = {
    dom : '#sub-nav',
    item : '#sub-nav .list-group-item',
    actCls : 'active'
};

subNav.setActive = function(id){
    var _dom = $(this.opt.item);
    _dom.each(function(){
        if($(this).data('id') == id){
            
            $(this).addClass(subNav.opt.actCls);
        }else{
            $(this).removeClass(subNav.opt.actCls);
        }
    });
};