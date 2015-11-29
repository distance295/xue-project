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
            url : '',
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
function ymd()   
{   
   MonHead = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];   
   //先给年下拉框赋内容
   var y  = new Date().getFullYear();   
   for (var i = (y-19); i < (y+1); i++)  
           document.date.year.options.add(new Option(" "+ i +" ", i));   
   //赋月份的下拉框  
   for (var i = 1; i < 13; i++)   
           document.date.month.options.add(new Option(" " + i + " ", i));   
   document.date.year.value = y;   
   document.date.month.value = new Date().getMonth() + 1;   
   var n = MonHead[new Date().getMonth()];   
   if (new Date().getMonth() ==1 && IsPinYear(yearvalue)) n++;   
        writeDay(n); //赋日期下拉框Author:meizz     
   document.date.day.value = new Date().getDate();   
}   
if(document.attachEvent)   
   window.attachEvent("onload", ymd);   
else   
   window.addEventListener('load', ymd, false);   
function yearday(str) //年发生变化时日期发生变化(主要是判断闰平年)   
{   
       var monthvalue = document.date.month.options[document.date.month.selectedIndex].value;   
       if (monthvalue == ""){ var e = document.date.day; optionsClear(e); return;}   
       var n = MonHead[monthvalue - 1];   
       if (monthvalue ==2 && IsPinYear(str)) n++;   
            writeDay(n)   
}   
function monthday(str)   //月发生变化时日期联动   
{   
    var yearvalue = document.date.year.options[document.date.year.selectedIndex].value;   
    if (yearvalue == ""){ var e = document.date.day; optionsClear(e); return;}   
    var n = MonHead[str - 1];   
    if (str ==2 && IsPinYear(yearvalue)) n++;   
   writeDay(n)   
}   
function writeDay(n)   //据条件写日期的下拉框    
{   
       var e = document.date.day; optionsClear(e);   
       for (var i=1; i<(n+1); i++)   
            e.options.add(new Option(" "+ i + " ", i));   
}   
function IsPinYear(year)//判断是否闰平年      
{     return(0 == year%4 && (year%100 !=0 || year%400 == 0));}   
function optionsClear(e)   
{   
    e.options.length = 1;   
}   

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
    })
}) 