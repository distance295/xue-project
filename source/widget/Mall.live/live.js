/**
 * Created by yangmengyuan on 15/10/22.
 */
$(function(){
    var $body = $('body');
    $('.carousel:gt(0)').carousel({
        interval:'10000'
    });
    $('.closeH').bind('click',function(){
        $('.closeH').parent().css({display:'none'})
    })
    var $liveScrollBtn = $('.live-scroll-btn-container li');
    $liveScrollBtn.on('click',function(e){
        var $target = $(e.target);
        var index = $target.index();
        $liveScrollBtn.removeClass('live-scroll-btn-on').eq(index).addClass('live-scroll-btn-on');
        $('.live-scroll-box-container').animate({top:(-1*291*index) + 'px'},300)
    });
    $('.problem .answer').eq(0).css({display:'block'});
    $('.problem .title').each(function(index){
        $(this).bind('mouseenter',function(){
            $('.answer').css({display:'none'}).eq(index).css({display:'block'});
            $('.problem .title a').removeClass('font-blue');       
            $(this).find('a').addClass('font-blue');
        })
    })
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

    $('body').off('click', '.live-order').on('click', '.live-order', function () {
        var liveOrderId = $(this).closest('.live-card').attr('id'),
            url = $(this).closest('.live-card').attr('data-url'),
            timer;
        var t = $(this);
        $.ajax({
            url : '/Lecture/ajaxFollow/',
            type : 'post',
            dataType : 'json',
            data : {
                liveId: liveOrderId,
                url: url
            },
            success : function(msg,event){
                if(msg.sign == 0){
                   alert('您已预约过此类课程或无此直播');
                }
                if(msg.sign == 2){
                    window.location.href = msg.msg;
                    return;
                }
                if(msg.sign == 1){
                    t.attr("data-target","#liveOrderSuccessModal");
                    liveOrderSuccessModal.showModal();
                    var tim = 5;
                    timer = setInterval(function(){
                        tim --;
                        $('.orderSuccessTip span').html(tim);
                        if(tim == 0){
                            $("#liveOrderSuccessModal").modal("hide");
                            clearInterval(timer);
                        }
                    },1000);
                    t.closest('.live-course-title').addClass('success_join')
                    t.find('span').html("已预约，请耐心等待")
                }
                if(msg.sign == 3){
                    t.attr("data-target","#liveOrderFailModal");
                    liveOrderFailModal.showModal();
                    var tim = 5;
                    timer = setInterval(function(){
                        tim --;
                        $('.orderFailTip span').html(tim);
                        if(tim == 0){
                            $("#liveOrderFailModal").modal("hide");
                            clearInterval(timer);
                        }
                        $('#liveOrderFailModal').on('hidden.bs.modal',function(){
                            clearInterval(timer);
                        });
                    },1000);
                }
            }
        });
    });

    var liveOrderSuccessModal = liveOrderSuccessModal || {};

    liveOrderSuccessModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = "<img src='/static/img/orderSuccess.png'><span class='orderSuccessTip'><span>5</span>秒钟后关闭</span>";
        //console.log(data);
        createModal.show({
            id : 'liveOrderSuccessModal',
            width : '560',
            title : "预约直播",
            cls : "liveOrderSuccessModal aaa ccc",
            content : con
        });
        $('#liveOrderSuccessModal').modal({backdrop: 'static', keyboard: false})

    };

    var liveOrderFailModal = liveOrderFailModal || {};

    liveOrderFailModal.showModal = function(timer){
        var that = $(this), data = that.data();
        var con = "<img src='/static/img/orderFail.png'><span class='orderFailTip'><span>5</span>秒钟后关闭</span>";
        //console.log(data);
        createModal.show({
            id : 'liveOrderFailModal',
            width : '560',
            title : "预约直播",
            cls : "liveOrderFailModal aaa ccc",
            content : con
        });
        $('#liveOrderFailModal').modal({backdrop: 'static', keyboard: false})

    };
});