/**
 * Created by yangmengyuan on 15/10/22.
 */
$(function(){
    var $body = $('body');
    var $liveScrollBtn = $('.live-scroll-btn-container li');
    $liveScrollBtn.on('click',function(e){
        var $target = $(e.target);
        var index = $target.index();
        $liveScrollBtn.removeClass('live-scroll-btn-on').eq(index).addClass('live-scroll-btn-on');
        $('.live-scroll-box-container').animate({top:(-1*291*index) + 'px'},300)
    });
    $body.on({
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

    $body.on('click', '.live-order', function () {
        var liveOrderId = $(this).closest('.live-card').attr('id');
        $.ajax({
            url : '/Lecture/ajaxFollow/',
            type : 'post',
            dataType : 'json',
            data : {
                liveId: liveOrderId
            },
            success : function(msg,event){
                if(msg.sign == 2){
                    window.location.href = msg.url;
                    return;
                }
                if(msg.sign == 0){
                    alert('您已预约过此课程');
                }
                if(msg.sign == 1){
                    $(this).find('.live-order').attr({'data-target':'#liveOrderSuccessModal'});
                    liveOrderSuccessModal.showModal();
                }
                if(msg.sign == 3){
                    $(this).find('.live-order').attr({'data-target':'#liveOrderFailModal'});
                    liveOrderFailModal.showModal();
                }
            }
        });
    });

    var liveOrderSuccessModal = liveOrderSuccessModal || {};

    liveOrderSuccessModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = "<img src='/static/img/orderSuccess.png'><span class='orderSuccessTip'>5秒钟后关闭</span>";
        //console.log(data);
        createModal.show({
            id : 'liveOrderSuccessModal',
            width : '560',
            title : "预约直播",
            cls : "liveOrderSuccessModal aaa ccc",
            content : con
        });
    };

    var liveOrderFailModal = liveOrderFailModal || {};

    liveOrderFailModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = "<img src='/static/img/orderFail.png'><span class='orderFailTip'>5秒钟后关闭</span>";
        //console.log(data);
        createModal.show({
            id : 'liveOrderFailModal',
            width : '560',
            title : "预约直播",
            cls : "liveOrderFailModal aaa ccc",
            content : con
        });
    }
});