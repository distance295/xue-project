var xue =xue || {};
    xue.formCheck = xue.formCheck || {};
var fCheck = xue.formCheck;

/* 提示信息的css样式 */
fCheck.setTips = function(select, tips){
  $(select).css({
    'display': 'block',
  }).html(tips);
};

/* 输入正确时，清除提醒 */
fCheck.clearTips = function(select){
  $(select).css({
    'display':'none'
  }).html(null);
};

/* 边框样式 */
fCheck.bordercss = function(argument) {
   if($(argument).val() !== ''){
     $(argument).css('border','1px solid #68c04a');
   }else{$(argument).css('border','1px solid #eaeaea');}
}

$(function(){
    var nickname = $('.nickname');
    $(nickname).on('focus',function(){
        $('.prompt-empty').html('请输入不多于18个字，昵称为“数字”“字母”“中文”的任意组合').css({
            color: '#999',
            display: 'block'
        });
        fCheck.clearTips(".nickname-warning");
    });
    $(nickname).on('blur',function(){
        fCheck.clearTips(".prompt-empty");
        $.fn.nickname();
    });
});

/* 验证昵称 */
var boxs = {
    nickname: '.nickname',
    school:'.school'
}

$.fn.nickname = function(){
    var box = $(boxs.nickname),
    val = box.val();
    var text = box.next('.nickname-warning'),
    block = text.addClass('success');
    if (val == '') {
        fCheck.setTips(".nickname-warning",'请输入昵称');
    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/;
        if(reg.test(val)){
            $.fn.nicknameajax();
        }else{
            fCheck.setTips(".nickname-warning",'只能输入数字、汉字和字母');
            return false;
        }
    }
};
$.fn.nicknameajax = function(){
    // 昵称与其他用户重复，请重新设置
    var box = $(boxs.nickname),
    val = box.val();
    var d_val = Number($(box).data('nickname'));
    if(Number(val) != d_val){
        $.ajax({
            url : '/MyInfos/getNicknameUseful',
            type : 'GET',
            dataType : 'json',
            timeout: 7000,
            async: false,
            success  : function(result){
                if(result.sign == false){
                    fCheck.setTips(".nickname-warning",'昵称与其他用户重复，请重新设置');
                    return false;
                } else {
                    fCheck.clearTips(".nickname-warning");
                    fCheck.bordercss('.nickname');
                    return true;
                }
            },
            error: function(){

            }
        });
    }else{
        return false;
    }
}

/* 生日日期 */
var date_select = {};
(function() {
 var d = date_select;
 d.opt = {
     year: '#year',
     month: '#month',
     day: '#day',
     formName: 'date'
 };
 d.MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 d.ymd = function(year_data) {
     var _date = year_data ? year_data.split('-') : false;     
     //先给年下拉框赋内容
     var y = new Date().getFullYear();
     var _dom = {
         year: $(d.opt.year),
         month: $(d.opt.month),
         day: $(d.opt.day),
     };
     for (var i = (y - 19); i < (y + 1); i++) {
         _dom.year.append('<option value="' + i + '">' + i + '</option>');
     }
     //赋月份的下拉框
     for (var i = 1; i < 13; i++) {
         _dom.month.append('<option value="' + i + '">' + i + '</option>');
     }
     _dom.year.val(_date[0] || y);
     _dom.month.val(_date[1] || new Date().getMonth() + 1);
     var n = d.MonHead[new Date().getMonth()];
     if (new Date().getMonth() == 1 && this.IsPinYear(yearvalue)) n++; {
         this.writeDay(n); //赋日期下拉框Author:meizz
     }
     _dom.day.val(_date[2] || new Date().getDate());
 };
 d.yearday = function(str) {
     var monthvalue = document.date.month.options[document.date.month.selectedIndex].value;
     console.log(monthvalue);
     if (monthvalue == "") {
         var e = document.date.day;
         this.optionsClear(e);
         return;
     }
     var n = d.MonHead[monthvalue - 1];
     if (monthvalue == 2 && this.IsPinYear(str)) {
         n++;
     }
     this.writeDay(n)
 };
 d.monthday = function(str) {
     var yearvalue = document.date.year.options[document.date.year.selectedIndex].value;
     console.log(yearvalue);

     if (yearvalue == "") {
         var e = document.date.day;
         this.optionsClear(e);
         return;
     }
     var n = d.MonHead[str - 1];
     if (str == 2 && this.IsPinYear(yearvalue)) {
         n++;
     }
     this.writeDay(n)
 };
 d.writeDay = function(n) {
     var e = document.date.day;
     this.optionsClear(e);
     for (var i = 1; i < (n + 1); i++) {
         e.options.add(new Option(" " + i + " ", i));
     }
 };
 d.IsPinYear = function(year) {
     return (0 == year % 4 && (year % 100 != 0 || year % 400 == 0));
 };
 d.optionsClear = function(e) {
     e.options.length = 1;
 };
})();

/* 学校格式验证 */
$.fn.school = function(){
    var box = $(boxs.school),
    val = box.val();
    var text = box.next('.school-warning'),
    block = text.addClass('success');
    if (val == '') {
        fCheck.clearTips(".school-warning");
    }else {
        var reg = /^[0-9a-zA-Z\u4e00-\u9fa5]{1,18}$/;
        if(reg.test(val)){
            fCheck.clearTips(".school-warning");
            fCheck.bordercss('.school');
        }else{
            fCheck.setTips(".school-warning",'只能输入数字、汉字和字母');
            $('.school').css('border','1px solid #eaeaea');
            return false;
        }
    }
};
$('.school').on('blur',function(){
    $.fn.school();
});
/* 点击提交按钮验证 */
$(function() {
    $(".btn-submit").click(function() {
       $.fn.nickname();
       $.ajax({
        type:"GET",
        url:"/MyInfos/editStuInfo",
        dataType: "json",
        data: 'nickname=' + $('.nickname').val() + '&date=' + $('.date').val() + '&school=' + $('.school').val(),
        timeout: 7000,
        success: function(result) {
          /* 填写的信息验证不通过 */
          if(result.sign == 1){
            window.location.href= '/Reg/RegSuc';
          }else{
            fCheck.setTips('.message-error span',result.msg);
          }
        },
        error: function() {
          alert('数据读取错误,请重试..');
          return false;
        }
       });
    })
}) 