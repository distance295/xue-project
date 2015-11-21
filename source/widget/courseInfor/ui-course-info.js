/**
 * @name ui-course-infor.js
 * @description 课程详情页
 * 
 * @author alexliu
 * @modify 2013-07-12 16:52:31
 * @links https://github.com/xueAlex/
 */
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
})