/**
 * @name ui-course-infor.js
 * @description 课程详情页
 * 
 * @author alexliu
 * @modify 2013-07-12 16:52:31
 * @links https://github.com/xueAlex/
 */
// 课程详情页头像切换封装函数
var xue = xue || {};
xue.avatar = xue.avatar || {};

(function(){
    var a = xue.avatar;

    a.box = {
        pic : null,
        list: null,
        btn : null
    };

    a.step = 120;
    a.size = 0;
    a.max = 0;

    a.len = 0;

    a.toggle = function( expr ){
        var btn = $(expr);
        if(btn.length == 0){ return; }
        var wrap = btn.parent();
        var pic = wrap.hasClass('avatar_roll') ? wrap.siblings('.avatar_items') : wrap.find('.avatar_items');
        if(pic.length == 0){ return; }


        this.box.pic = pic;
        this.box.list = pic.find('li');
        this.box.btn = btn;
        this.box.prev = btn.hasClass('prev') ? btn : btn.siblings('.prev');
        this.box.next = btn.hasClass('next') ? btn : btn.siblings('.next');
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
                marginLeft : '+=120px'
            }, 500, function(){
                a.left += 120;
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
                marginLeft : '-=120px'
            }, 500, function(){
                a.left -= 120;
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
        var hasNext = Math.abs(a.left) < ((a.box.list.length - 1) * 120);
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

})(xue.avatar);
var courseInfor = courseInfor || {};
//课程大纲切换方法
courseInfor.courseTab = function (tabTit,on,tabCon){
   var items = $(tabTit).children();
       items.click(function(){
        var that = $(this),
             con = $(tabCon).children(),
           index = items.index(this);
           that.addClass(on).siblings().removeClass(on);
           con.eq(index).show().siblings().hide();
      });
}
//直播课程详情页---查看直播时间列表
 courseInfor.lookTimeList = function() {
    var that = $('#lookTimeList');
        that.on('click', function(event) {
            $('.ui-nav-link li:eq(0)').addClass('current').siblings().removeClass('current');
            $('.course-info-box .course-detail:eq(0)').show().siblings().hide();
        });
}
$(function(){
    courseInfor.courseTab('.ui-nav-link','current','.course-info-box');//课程详情页--课程大纲切换
    var ouline = $('#open-outline');//免费试听详情页------试听节超过规定节数出现滚动条
    if(ouline.length != 0){//当id:ouline的值不等于零的时候执行
         ouline.jScrollPane();
    }
    courseInfor.lookTimeList();//直播课程详情页---查看直播时间列表
    // 绑定老师头像切换事件
    $('body').on('click', '.ui_avatar_con .prev,.ui_avatar_con .next', function() {
        var that = $(this);
        console.log(that);
        if (that.hasClass('none')) {
            return false;
        } else {
          xue.avatar.toggle(that)     
       }
    });
})



