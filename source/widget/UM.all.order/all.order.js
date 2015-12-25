/**
* @param  {string} ordertype   [订单内容]
* @param  {number} page        [页面页数]
*/
$("#order_tab li").on('click', function(){
    var that = $(this),
        ordertype = that.data('params');
        page = that.data('pages');
    that.addClass("current").siblings().removeClass("current"); 
    orderTab(ordertype,page);
});
$('#order_tab li:first').click();

function orderTab(ordertype,page){
    $.ajax({
        type: "get",
        url: "/MyOrders/ajaxOrderList",
        dataType: "html",
        data:'type=' + ordertype + '&curpage=' + page, 
        success: function(list){
            var list = $.trim(list);
            if(list.substr(0,1)=='<'){
                var box = $('#page_list');
                box.html(list);
            }else{
                if(list.substr(0,4)=='http' || list.substr(0,1)=='/'){
                    window.location.href = list;
                    return false;
                }
            } 
        },
        error:function(){  
            alert("异步失败");  
        }  
    });
}

//调用模态框js
function orderModal(){
    $.ajax({
        type: "get",
        url: "order.modal.html",
        dataType: "html",
        success: function(result) {
            if(result){
                createModal.show({
                    id : 'orderModal',
                    title : '重新购买',
                    cls : 'infor-Modal',
                    content : result
                }); 
                $('#orderModal').modal({0: 'static', keyboard: false,show: true});
            }
        },
    });
} 

// 头像切换封装函数
var courses = courses || {};

courses.avatar = courses.avatar || {};

(function(a){
    a.box = {
        pic : null,
        list: null,
        btn : null
    };

    a.step = $(".avatar-items li").width();
    a.size = 0;
    a.max = 0;

    a.len = 0;

    a.toggle = function( expr ){
        var btn = $(expr);
        if(btn.length == 0){ return; }
        var wrap = btn.parent();
        var pic = wrap.hasClass('avatar-roll') ? wrap.siblings('.avatar-items') : wrap.find('.avatar-items');
        if(pic.length == 0){ return; }


        this.box.pic = pic;
        this.box.list = pic.find('li');
        this.box.btn = btn;
        this.box.prev = btn.hasClass('prev') ? btn : btn.siblings('.prev');
        this.box.next = btn.hasClass('next') ? btn : btn.siblings('.next');
        this.size = this.box.list.length;
        this.max = this.size - 1;
        this.step = $(".avatar-items li").width();

        var list = pic.find('li');
        var left = pic.css('margin-left');

        this.left = Number(left.replace('px',''));

        if(btn.hasClass('prev')){
            a.prev();
        }else{
            a.next();
        }
    }

    a.prev = function(){

        if(a.left < 0){
            a.box.pic.animate({
                marginLeft : '+='+a.step+'px'
            }, 500, function(){
                a.left += a.step;
                a.setCls();
                if(a.left >= 0){
                    $(this).clearQueue();
                }
            });
        }else{
            a.box.pic.clearQueue();
        }
    };

    a.next = function(){
        var box = a.box.pic,
        left = Number(box.css('margin-left').replace('px',''));

        if(a.left > -(a.max * a.step)){
            a.box.pic.animate({
                marginLeft : '-='+a.step+'px'
            }, 500, function(){
                a.left -= a.step;
                a.setCls();
                if(a.left <= -(a.max * a.step)){
                    $(this).clearQueue();
                }
            });
        }else{
            a.box.pic.clearQueue();
        }
    };

    a.setCls = function(){
        var hasNext = Math.abs(a.left) < ((a.box.list.length - 1) * a.step);
        var hasPrev = a.left < 0;

        if(hasNext){
            a.box.next.removeClass('none');
        }else{
            a.box.next.addClass('none');
        }

        if(hasPrev){
            a.box.prev.removeClass('none');
        }else{
            a.box.prev.addClass('none');
        }
    };

})(courses.avatar);

// 绑定老师头像切换事件
$('body').off('click', '.avatar-roll a, .majar-items .prev, .majar-items .next').on('click', '.avatar-roll a, .majar-items .prev, .majar-items .next', function() {
    var that = $(this);
    if (that.hasClass('none')) {
        return false;
    } else {
       courses.avatar.toggle(that)     
   }
});