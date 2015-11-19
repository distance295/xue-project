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
$('body').off('click', '.avatar-roll a, .majar-items .prev, .majar-items .next').on('click', '.avatar-roll a, .majar-items .prev, .majar-items .next', function() {
    var that = $(this);
    if (that.hasClass('none')) {
        return false;
    } else {
       courses.avatar.toggle(that)     
   }
});
// 更多服务
$(function(){
	$('.more-service h4').on('click',function(event){
        event.stopPropagation();
        var a = $(this).hasClass('blue-arrow')
        if(a){
            // $(this).removeClass('show').children('h4').removeClass('blue-arrow');
            $(this).removeClass('blue-arrow').parents('.more-service').removeClass('show');
        }else{
            // $(this).addClass('show').children('h4').addClass('blue-arrow');
            $(this).addClass('blue-arrow').parents('.more-service').addClass('show');
        }
    });
    $(document.body).on('click',function(event){
        var a = $('.more-service h4').hasClass('blue-arrow');
        if (a){
            $('.more-service h4').removeClass('blue-arrow').parents('.more-service').removeClass('show');
        }

    })
}); 
// 学习中心的直播录播切换
$(function(){
    $('.courseList-wrap').on('click','.teacher-tab li',function(){
        var that = $(this);
        // var dataUrl = 'direct-courseList.html'
        $.ajax({
            type: "POST",
            url: "direct-courseList.html",
            // data: 'email=' + $('#username').val(),
            dataType: "html",
            timeout: 300,
            success: function(result) {
                $('.courseList-wrap').html(result);
            },
            error: function() {
               alert('数据读取错误,请重试..');
               return false;
           }
       });
    });
});
// 随堂测试弹框
$(function(){
    $('.listTest-btn').popover({
        placement: 'top',
        html: true,
        trigger: 'click',
        title: '',
        content: function() {
            var listTest_html = $(this).parents('.amount-show').siblings('.listTest-pop').html();
            return listTest_html;
        }
    });
});
// 讲义资料弹框
function materialForm(){
    $.ajax({
        type: "get",
        url: "/data/courses/material.html",
        dataType: "html",
        success: function(result) {
            if(result){
               createModal.show({
                    id : 'materialForm',
                    title : '讲义资料',
                    cls : 'material-exam',
                    content : result
                });
                $('#materialForm').modal('show');
                console.log(1233333)
                console.log($('body').find('.material-wrap .material-tab li').length)
                $('body').on('click','.material-wrap .material-tab li',function(){
                    var index = $(this).index();
                    alert(index);
                    // $(this).addClass('current').siblings().removeClass('current');
                    // $('.material-content').eq(index).show().siblings().hide();
                })
            }
            
        },
    });
}
// 考试
function examTable(){
     $.ajax({
        type: "get",
        url: "/data/courses/exam.html",
        dataType: "html",
        success: function(result) {
            if(result){
               createModal.show({
                    id : 'examTable',
                    title : '本课考试',
                    cls : 'material-exam',
                    content : result
                });
                $('#examTable').modal('show')
            }
            
        },
        // error: function(){
        //     alert(2)
        // }
    });
}
// 延期
function delayDate(){
     $.ajax({
        type: "get",
        url: "/data/courses/delayDate.html",
        dataType: "html",
        success: function(result) {
            if(result){
               createModal.show({
                    id : 'delayDate',
                    title : '延期课程',
                    cls : 'delayDate',
                    content : result
                });
                $('#delayDate').modal('show')
            }
            
        },
        // error: function(){
        //     alert(2)
        // }
    });
}
$(function(){
    $('.more-list li ').eq(1).on('click',function(){
        materialForm();
    })
});
$(function(){
    $('.more-list li ').eq(2).on('click',function(){
        examTable();
    })
});
$(function(){
    $('.label-delay').on('click',function(){
        delayDate();
    })
});