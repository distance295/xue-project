/**
 * Created by yangmengyuan on 15/10/22.
 */
$(function(){
    var $liveScrollBtn = $('.live-scroll-btn-container li');
    $liveScrollBtn.on('click',function(e){
        var $target = $(e.target);
        var index = $target.index();
        $liveScrollBtn.removeClass('live-scroll-btn-on').eq(index).addClass('live-scroll-btn-on');
        $('.live-scroll-box-container').animate({top:(-1*291*index) + 'px'},300)
    });
    var $liveCourseHover = $('.live-course-hover');
    $liveCourseHover.on({
        mouseenter:function(){
            $(this).find('.live-course-title').animate({"height":80},300);
            $(this).find('.live-course-show-title').fadeOut(300);
            $(this).find('.live-course-content').fadeIn(300);
        },
        mouseleave:function(){
            $(this).find('.live-course-title').animate({"height":30},300);
            $(this).find('.live-course-show-title').fadeIn(300);
            $(this).find('.live-course-content').fadeOut(300);
        }
    });
    var $liveCourseContent = $('.live-course-content');
    $liveCourseContent.each(function(){
        var maxwidth=47;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'...');
        }
    });
});