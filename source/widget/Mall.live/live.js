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
    $('body').on({
        mouseenter:function(){
            $(this).find('.live-course-title').stop().animate({"height":80},300);
            $(this).find('.live-course-show-title').stop().fadeOut(300);
            $(this).find('.live-course-content').stop().fadeIn(300);
        },
        mouseleave:function(){
            $(this).find('.live-course-title').stop().animate({"height":30},300);
            $(this).find('.live-course-show-title').stop().fadeIn(300);
            $(this).find('.live-course-content').stop().fadeOut(300);
        }
    },'.live-course-hover');
    var $livecourseshowtitle = $('.live-course-show-title');
    $livecourseshowtitle.each(function(){
        var maxwidth=16;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'…');
        }
    });
    var $liveCourseContent = $('.live-course-content');
    $liveCourseContent.each(function(){
        var maxwidth=47;
        if($(this).text().length>maxwidth){
            $(this).text($(this).text().substring(0,maxwidth));
            $(this).html($(this).html()+'…');
        }
    });
});