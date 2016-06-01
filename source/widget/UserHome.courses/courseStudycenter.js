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
function testLive(dom){
    $(dom).popover({
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
function liveHelp(dom){
    $(dom).popover({
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
//辅导导师头像弹层
function QrCodeInstructor(dom){
    $(dom).popover({
        placement: 'top',
        html: true,
        trigger: 'hover',
        title: '',
        content: function() {
            var listTest_html = $(this).find('.QR-code-instructor').html();
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
        $(this).parents('.teacher-tab').siblings('.tab-record-content').find('.tab-pane').eq(index).addClass('active').siblings().removeClass('active');
    });
};
// 大纲tab切换
function tabProgram(){

    $('.program-tab li').on('click',function(){ 
        index = $(this).index();
        $(this).addClass('current').siblings().removeClass('current');
        $('.tab-program-content .tab-program-content-general').eq(index).addClass('active').siblings().removeClass('active');
    });
};
$(function(){
    // 退课成功
    $('body').on('click','.drop-course-detail-inner .drop-course-btn', function(){
        var result =  $('.dropCourse-success-wrap').html();
        $('#dropCourse .modal-body').html(result);
        countDown(3,'#dropCourse');
    });  
    // var countDownTime=parseInt(3);    //在这里设置时长
    function countDown(countDownTime,courseDownTimeId){
        $('.setTimeNum').text(countDownTime);
        var timer=setInterval(function(){
            if(countDownTime>1){
                countDownTime--;
                $('.setTimeNum').text(countDownTime);
            }else{
                clearInterval(timer);
                $(courseDownTimeId).modal('hide'); 
                $("#course_lists_label li.active").click();
            }
        },1000);
        // 手动关闭弹层时清除计时器
        $(courseDownTimeId).on('hide.bs.modal', function (e) {
           clearInterval(timer);
       });
    }

     // 退课成功
     $('body').on('click','.drop-course-detail-inner .drop-charge', function(){
         $('.drop-charge-explain-wrap').toggleClass('dropCharge-hide');
     }); 
    // 临时调课成功
    $('body').on('click','.temporary-adjust-course-detail-inner .drop-course-btn', function(){
        var result =  $('.temporary-adjust-wrap').html();
        $('#temporaryAdjustCourse .modal-body').html(result);
    }); 
    
    // 永久调课确认按钮点击
    $('body').on('click','.permanent-adjust-course-detail-inner .drop-course-btn', function(){
        var result =  $('.permanent-adjust-wrap').html();
        $('#permanentAdjustCourse .modal-body').html(result);
        countDown(3,'#permanentAdjustCourse');

    });  
    // 永久调课无课状态下确认按钮点击
    $('body').on('click','.permanent-adjust-nocourse-detail .drop-course-btn', function(){
        $('#permanentAdjustCourse').modal('hide');
    });  
     // 永久调课场次调整点击事件
     $('body').off('click','.adjust-course-select li a').on('click','.adjust-course-select li a',function(){
        if( $(this).parent('li').hasClass("adjustActive")){
            $(this).parent('li').removeClass('adjustActive'); 
            $('.permanent-adjust-course-detail-inner .ajust-course-btn').attr('disabled',true);
        }else{
            $(this).parent('li').addClass('adjustActive').siblings('li').removeClass('adjustActive'); 
            $('.permanent-adjust-course-detail-inner .ajust-course-btn').attr('disabled',false);
        }
    })
 });
/**
 * 增加对JSON数据的序列化方法，
 * 主要用于IE6、7不支持JSON对象的浏览器
 */
 var xue = xue || {};
 xue.json = xue.json || {};

 xue.json.stringify = function(obj) {
    //如果是IE8+ 浏览器(ff,chrome,safari都支持JSON对象)，使用JSON.stringify()来序列化
    if (window.JSON) {
        return JSON.stringify(obj);
    }
    var t = typeof(obj);
    if (t != "object" || obj === null) {
        // simple data type
        if (t == "string") obj = '"' + obj + '"';
        return String(obj);
    } else {
        // recurse array or object
        var n, v, json = [],
        arr = (obj && obj.constructor == Array);

        // fix.
        var self = arguments.callee;

        for (n in obj) {
            v = obj[n];
            t = typeof(v);
            if (obj.hasOwnProperty(n)) {
                if (t == "string") v = '"' + v + '"';
                else if (t == "object" && v !== null)
                // v = jQuery.stringify(v);
            v = self(v);
            json.push((arr ? "" : '"' + n + '":') + String(v));
        }
    }
    return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
}
};

var onlineHomework = onlineHomework || {};

onlineHomework.course = onlineHomework.course || {};

(function(online){
    /**
     * 渲染试题是否有答案
     * @param  {Number} id 试题id
     */
     online.renderAnswer = function(){
        var examAnswer = {};
        $('.homework-list-content').each(function(){
            var id = $(this).data('id'),
            This = this,
            type = $(this).data('type');
            var answerVals = {"id": 0, "val": [], "type": 0};
            answerVals.id = id;
            answerVals.type = type;
            //判断当前题的答案是否为空
            if( $.cookie('examAnswer') ){
                answerVals.val = JSON.parse($.cookie('examAnswer'))[id].val;
            }
            examAnswer[id] = answerVals;
            //如果不为空则渲染答案(不管答案是否为空直接赋给要渲染的答案)
            if(answerVals.val.length > 0 ){
                if(type == 'radio'){
                    // 判断选择题是否已答
                    $(This).find('.homework-list-selectlist li').each(function(){
                        var optionVal = $(this).data('option');
                        if(answerVals.val.indexOf(optionVal)>=0){
                            $(this).addClass('current');
                        }
                    })
                }else if(type == 'input'){
                    // 判断填空题是否已答
                    $(This).find('input.homework-item-input').each(function(index){
                        $(this).val(answerVals.val[index]);
                    });
                    
                }
            }
        });
        $.cookie('examAnswer', JSON.stringify(examAnswer));

     }

    /**
     * 获取用户的答案存到cookie
     * @param  {obj} obj 任意子节点元素
     */
     online.getanswer = function(obj){
        var getAnswer_cont = JSON.parse($.cookie('examAnswer'));
        var stermWrap = $(obj).parents('.homework-list-content');
        var id = stermWrap.data('id'),
        type = stermWrap.data('type');
        var answer_val = getAnswer_cont[id].val;
        // 选择题存储到cookie
        if(type == 'radio'){
            var val = $.trim($(obj).data('option'));
            answer_val.splice(0,answer_val.length); 
            answer_val.push(val);
            $(obj).addClass('current').siblings().removeClass('current');
        }
        // 填空题存储到cookie
        if(type == 'input'){
            var input = $(obj).parents().find('input'); 
            answer_val.splice(0,answer_val.length); 
            input.each(function(){
                var v = $.trim($(this).val());
                if (v) {
                    answer_val.push(v);
                } else {
                    if (v == '') {
                        answer_val.push('');
                    }
                }
            })
        }
        $.cookie('examAnswer', JSON.stringify(getAnswer_cont));
        // console.log(JSON.stringify(getAnswer_cont))
    }
     /**
     * 获取未答题个数
     * @param  {Number} Num_Null未答题个数
     */
     online.checkError = function(){
        var list = $('.homework-list-content');
        var _num = 0 ;
        list.each(function(){
            var that = $(this),
            tp = that.data('type');
            if(tp == 'radio'){
                input = that.find('li.current');
                if(input.length === 0){
                    _num ++;
                }
            }else if( tp == 'input' ){
                input = that.find('input');
                var _flag = false;
                input.each(function(){
                    var v = $.trim($(this).val());
                    if(v != ''){
                        _flag = true; 
                    }
                });
                if(!_flag){
                    _num ++;
                }


            }
        })
        return _num;
     } 
    /**
     * 提交答案ajax
     * @param  {json} stuAnswer转化为json序列化
     */
     online.ajaxExamSubmit = function(){
        var stuAnswerTotal = JSON.parse($.cookie('examAnswer'));
        var answer = {};
        $.each(stuAnswerTotal,function(k,v){
            answer[k] = v.val;
        })
        var stuAnswer = xue.json.stringify(answer);
        console.log(stuAnswer);
        var params = 'stuAnswer=' + stuAnswer;
        $.ajax({
            url: '',
            type: 'get',
            dataType: 'json',
            data: params,
            success: function(d){

            },
            error: function(){
                alert('请求失败')
            }
        })
     }
    /**
     * 提交判断题目完成与否
     * @param  {Number} Num_Null未答题个数
     */ 
     online.ExamSubmitCheck = function(){
        var _num = onlineHomework.course.checkError();
        if(_num <= 0){
            var content = '<h2 style="line-height:26px;font-size:14px;margin-bottom:10px">确定交卷</h2>';
            xue.win({
                id: 'wrong_submit',
                title: false,
                padding : '20px 20px 10px',
                content : content,
                close: false,
                submitVal : '确定',
                submit: function(){
                    onlineHomework.course.ajaxExamSubmit();
                },
                cancel : true,
                lock : true
            });
        }else{
            var content = '<h2 style="line-height:26px;font-size:14px;margin-bottom:10px">作业未完成不能交卷</h2>';
            console.log(content);
            xue.win({
                id: 'wrong_submit',
                title: false,
                padding : '20px 20px 10px',
                content : content,
                close: false,
                submitVal : '确定',
                submit: false,
                cancel : true,
                lock : true
            });
        }
    }

})(onlineHomework.course)


$(function(){
    if($('.courseListHomewok-stem').length>0){
        onlineHomework.course.renderAnswer();
    }
    // 单选题作答时
    $('body').on('click','.homework-list-selectlist li',function(){
        onlineHomework.course.getanswer(this);
    })
    // 填空题作答
    $('body').on('blur input','.homework-list-content input',function(){
        onlineHomework.course.getanswer(this);
    });
    // 提交作业
    $('body').on('click','.commit-homework-btn',function(){
        onlineHomework.course.ExamSubmitCheck()
    })
})
