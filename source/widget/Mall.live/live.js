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
var liveOrderAjax = liveOrderAjax || {};
    liveOrderAjax = function(that,ajaxUrl){
        var liveOrderId = $(that).closest('.live-card').attr('id'),
            url =  $(that).closest('.live-card').attr('data-url'),
            timer;
        var t = $(that);
        if(t.hasClass('success_join') === true){
            return false;
        }
        $.ajax({
            url : ajaxUrl,
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
                    if (msg.type == 1) {
                        var m_url = msg.url;
                        t.attr("data-target","#liveOrderSuccessModal");
                        liveOrderSuccessModal.showModal(m_url);
                    }else{
                        t.attr("data-target","#liveSuccessModal");
                        liveSuccessModal.showModal(); 
                    }
                    t.closest('.live-course-title').addClass('success_join');
                    t.find('span').html("已预约，请耐心等待");
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
    };
    var liveSuccessModal = liveSuccessModal || {};
    liveSuccessModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = "<img src='http://res18.xesimg.com/www/img/orderSuccess_A.png'><span class='orderSuccessTip'><span>5</span>秒钟后关闭</span>";
        createModal.show({
            id : 'liveSuccessModal',
            width : '560',
            title : "预约直播",
            cls : "liveSuccessModal aaa ccc",
            content : con
        });
        $('#liveSuccessModal').modal({backdrop: 'static', keyboard: false})

    };
    var liveOrderSuccessModal = liveOrderSuccessModal || {};
    liveOrderSuccessModal.showModal = function(mUrl){
        var that = $(this), data = that.data();
        var con ='<div class="live-fail-modal">'
                  +'<p class="success-title">恭喜您预约成功</p>'
                  +'<p class="success-pic"><img src="'+mUrl+'"></p>'
                  +'<p class="success-txt">扫描上方微信二维码</p>'
                  +'<p class="success-txt">直播前<span>30</span>分钟您会在微信上收到直播提醒和直播链接！</p>' 
                  +'<p class="success-o">(首次关注赠送100金币！)</p>'     
                  +'</div>';
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
        var con = "<img src='/static/img/orderFail_A.png'><span class='orderFailTip'><span>5</span>秒钟后关闭</span>";
        createModal.show({
            id : 'liveOrderFailModal',
            width : '560',
            title : "预约直播",
            cls : "liveOrderFailModal aaa ccc",
            content : con
        });
        $('#liveOrderFailModal').modal({backdrop: 'static', keyboard: false})

    };
     $('body').off('click', '.live-order').on('click', '.live-order', function () {
        var ajaxUrl = '/Lecture/ajaxFollow/';
        liveOrderAjax(this,ajaxUrl);
    });
    $('body').off('click', '.live-order-course').on('click', '.live-order-course', function () {
        var ajaxUrl = '/Index/ajaxFollow/';
        liveOrderAjax(this,ajaxUrl);
    });
});