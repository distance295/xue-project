/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

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
        this.step = $(".avatar-items li").width();
        this.size = this.box.list.length;
        this.max = this.size - 1;

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
$(function(){
    $('body').off('click', '.avatar-roll a, .majar-items .prev, .majar-items .next').on('click', '.avatar-roll a, .majar-items .prev, .majar-items .next', function() {
        var that = $(this);
        if (that.hasClass('none')) {
            return false;
        } else {
         courses.avatar.toggle(that)     
     }
 });
})

// 随堂测试弹框
function testLive(){
    $('.listTest-btn').popover({
        placement: 'top',
        html: true,
        trigger: 'hover',
        title: '',
        content: function() {
            var listTest_html = $(this).parents('.amount-show').siblings('.listTest-pop').html();
            return listTest_html;
        }
    });
}
// 直播辅导弹框
function liveHelp(){
    $('.liveHelp-btn').popover({
        placement: 'top',
        html: true,
        trigger: 'hover',
        title: '',
        content: function() {
            var listTest_html = $(this).parents('.amount-show').siblings('.list-help-pop').html();
            return listTest_html;
        }
    });
}
// 讲义资料弹框tab事件
$('body').on('click','.material-wrap .material-tab li',function(){
    var index = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.material-content').eq(index).show().siblings('.material-content').hide();
})
// 录播课程
function tabRecord(){

    $('.teacher-tab li').on('click',function(){ 
        index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.tab-record-content .tab-pane').eq(index).addClass('active').siblings().removeClass('active');
    });
};
