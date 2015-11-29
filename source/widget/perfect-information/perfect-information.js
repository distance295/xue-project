/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

 var courses = courses || {};
 courses.attention = courses.attention || {};

 (function(fa){

    /**
     * 关注和取消新鲜事方法
     * @param  {string} dom 任意子节点
     */
     fa.addCancel = function(dom){
        var _url = "ajaxFollow.json"//$(dom).data().url;
        var _type = $(dom).data().type;
        var _params = $(dom).data().params + '&type=' + _type;
        $.ajax({
            type: "post",
            url: _url,
            timeout: 7000,
            dataType: 'json',
            data: _params,
            success: function(msg) {
                if (msg.sign == 2) {
                    window.location.href='http://login.xueersi.com/user/login/aHR0cDovL3d3dy54dWVlcnNpLmNvbS9MZWFybmluZ0NlbnRlci9mb2xsb3c=';
                }else if(msg.sign == 1) {
                    switch(_type){
                        case 1:
                        $(e).html('<em>已关注</em>');
                        break;
                        case 2:
                        $(dom).html('<a href="javascript:void(0)" class="fresh-attention-btn fresh-add-attention-btn"><span class="fresh-add left">+</span><span class="left">关注</span></a>');
                        $(dom).data({type:3});
                        break;
                        case 3:
                        $(dom).html('<em>已关注</em><a class="fresh-add-cancel-btn" href="javascript:void(0)">取消</a>');
                        $(dom).data({type:2});
                        break;
                    }
                }else{
                    alert(msg.msg);
                    return false;
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
}

})(courses.attention)

/* ================= 关注相关 ============= */

    //点击添加关注按钮
    $('.follow-list').off('click', '.fresh-course-attention .fresh-add-attention-btn').on('click', '.fresh-course-attention .fresh-add-attention-btn', function(){
        var that = $(this).closest('.fresh-course-attention');
        courses.attention.addCancel(that);
    })

    //点击添加取消关注按钮
    $('.follow-list').off('click', '.fresh-course-attention .fresh-add-cancel-btn').on('click', '.fresh-course-attention .fresh-add-cancel-btn', function(){
        var that = $(this).closest('.fresh-course-attention');
        courses.attention.addCancel(that);
    });
    /* ================= 关注相关 ============= */

    /* ================= 登陆注册流程中个人设置完善信息 ============= */
// 昵称与姓名相关验证

$(function(){
    // placeholder样式
    var nickname = $('#nickname');
    var realname = $('#realname');
    
    $(nickname).on('focus',function(){
        $(nickname).siblings('.label-value').css('display','none');
    });
    nickname.on('blur',function(){
        $.fn.nickname();
    });

    // 姓名
    $(realname).on('focus',function(){
         $(realname).siblings('.label-value').css('display','none');
    });
    $(realname).on('blur',function(){
        $.fn.realname();
    });
});

// 输入框信息验证
var boxs = {
    nickname: '#nickname',
    realname: '#realname',
    addprovince: '#add-province',
    addcity: '#add-city',
    addcountry: '#add-country'
}
// 验证昵称
$.fn.nickname = function(){
    var box = $(boxs.nickname),
    val = box.val();
    var text = box.next('.errTips'),
    block = text.addClass('success');
    if (val == '') {
        block.html('请设置昵称');
        $(nickname).siblings('.label-value').css('display','block');
        box.parents('.f1').addClass('has-error');
    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/;
        if(reg.test(val)){
            $.fn.nicknameajax();
        }else{
            block.html('只能输入汉字和字母');
            box.parents('.f1').removeClass('has-success').addClass('has-error');
            return false;
        }
    }
};
$.fn.nicknameajax = function(){
    var box = $(boxs.nickname),
    val = box.val();
    var text = box.next('.errTips'),
    block = text.addClass('success');
    // 昵称与其他用户重复，请重新设置
    var box = $(boxs.nickname),
    val = box.val();
    var d_val = Number($(box).data('nickname'));
    if(Number(val) != d_val){
        $.ajax({
            url : '',
            type : 'GET',
            dataType : 'json',
            timeout: 7000,
            async: false,
            success  : function(result){
                if(result.sign == false){
                    block.html('昵称与其他用户重复，请重新设置');
                    box.parents('.f1').removeClass('has-success').addClass('has-error');
                    return false;
                } else {
                    block.html('');
                    box.parents('.f1').addClass('has-success').removeClass('has-error');
                    $(val).data('nickname',val);
                    return true;
                }
            },
            error: function(){

            }
        });
    }else{
        block.html('');
        box.parents('.f1').addClass('has-success').removeClass('has-error');
        return false;
    }
}

// 验证真实姓名
$.fn.realname = function(){
    var box = $(boxs.realname),
    val = box.val();
    var text = box.next('.errTips'),
    block = text.addClass('success');
    if (val == '') {
        block.html('请填写姓名');
        $(realname).siblings('.label-value').css('display','block');
        box.parents('.f1').addClass('has-error');
    }else {
        var reg=/[^\x00-\x80]/;
        if(!reg.test(val)){
            block.html('姓名格式有误');
            box.parents('.f1').addClass('has-error').removeClass('has-success');
        }else{
            block.html('');
            box.parents('.f1').addClass('has-success').removeClass('has-error');
        }
    }
};
// 验证性别
$.fn.sex = function(){
    var n = $(".sex-tip input:checked").length;
    // alert(n)
    if(n == 0){
        $('.sex-tip .errTips').html('请选择性别');
    }else{
        $('.sex-tip .errTips').html('')
    }
    $('.sex-tip input').on('click', function(){
       $('.sex-tip .errTips').html('');
   });
};
//验证地区是否选中
$.fn.areaprovince = function() {
    var box = $(boxs.addprovince),
    val = box.val();
    var text = box.siblings('.area-tips').children('.errTips');
    if (val == '') {
        text.html('请选择所在地');
        box.addClass('has-error').removeClass('has-success');
    } else {
        text.html('');
        box.removeClass('has-error').addClass('has-success');
    }
    return this;
};
$.fn.areacity = function() {
    var box = $(boxs.addcity),
    val = box.val();
    var text = box.siblings('.area-tips').children('.errTips');
    if (val == '') {
        text.html('请选择所在地');
        box.addClass('has-error').removeClass('has-success');
    } else {
        text.html('');
        box.removeClass('has-error').addClass('has-success');
    }
    return this;
};
$.fn.areacountry = function() {
    var box = $(boxs.addcountry),
    val = box.val();
    var text = box.siblings('.area-tips').children('.errTips');
    if (val == '') {
        text.html('请选择所在地');
        box.addClass('has-error').removeClass('has-success');
    } else {
        text.html('');
        box.removeClass('has-error').addClass('has-success');
    }
    return this;
};
$('body').on('blur', boxs.addprovince, function() {
    $.fn.areaprovince();
});
$('body').on('blur', boxs.addcity, function() {
    $.fn.areacity();
});
$('body').on('blur', boxs.addcountry, function() {
    $.fn.areacountry();
});
// 完善信息提交
$('.setting-infor').off('click', '#inforSubmit').on('click', '#inforSubmit', function() {
    var error = $('.setting-infor').find('.has-error');
    $.fn.nickname();
    $.fn.realname();
    $.fn.sex();
    $.fn.areaprovince();
    $.fn.areacity();
    $.fn.areacountry();
    if (error.length > 0) {
        return false;
    } else {
        $.ajax({
            url : '',
            type: 'POST',
            dataType: "json",
            data: 'nickname=' + $('#nickname').val() + 'realname=' + $('#realname').val(),
            timeout: 7000,
            beforeSend: function(){

            },
            success:function(d){
                var tp = d.sign,
                msg = d.msg;
                if (tp == 0) {

                    return false;
                } else if (tp == -1) {

                    return false;
                } else {
                    window.location.href = '/Reg/regSuccess';
                }
            },
            complete: function () {

            },
            error: function(){

            }
        });
    }
});
