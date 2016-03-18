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

    $('body').on('click', '.live-order', function () {
        //var presentid = $(this).closest('.gold-store-present-card').attr('id');
        //$.ajax({
        //    url: '/GoldShop/realAwardDetail',
        //    //url:'/data/gold/gold-present-modal.html',
        //    type: 'post',
        //    //type:'get',
        //    dataType: 'html',
        //    data: {
        //        id: presentid
        //    },
        //    success: function (result) {
        //        if (result.substr(0, 4) == 'http' || result.substr(0, 1) == '/') {
        //            window.location.href = result;
        //            return;
        //        }
        //        liveOrderModal.showModal(result);
        //    }
        //})
        liveOrderModal.showModal();

    });

    var liveOrderModal = liveOrderModal || {};

    liveOrderModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = "<img src='img/orderSuccess.png'>";
        //console.log(data);
        createModal.show({
            id : 'liveOrderModal',
            width : '530',
            title : "预约直播",
            cls : "liveOrderModal aaa ccc",
            content : con
        });
    };
});