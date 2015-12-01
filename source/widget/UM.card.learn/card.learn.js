//切换
function changeTab(d,box){
    var that = $(d),
    box = $(box).children();
    that.addClass("current").siblings().removeClass("current");  
    var index =  that.index(); 
    box.eq(index).show().siblings().hide();
}

$('#pay_tab li').click(function(){
  changeTab(this,".contentbind");
});

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

$(function() {
    $(".btn-pay").click(function() {
        if ($(".studyCardPwd").val() == '') {
              fCheck.setTips(".studyCardPwd-warning",'请输入学习卡密码');
            $(".studyCardPwd").focus(function() {
              fCheck.clearTips(".studyCardPwd-warning");});
            return false;
        }
        fCheck.bordercss('.studyCardPwd');

        $.ajax({
            type: "POST",
            url: "/RequestPassword/UpdatePassword",
            data: "studyCardPwd=" + $(".studyCardPwd").val(),
            success: function(msg) {
                if (msg == "True") {
                    location.href = "/RequestPassword/UpdatePasswordSecuess";
                } else {
                    fCheck.setTips('.studyCardPwd-warning','学习卡密码错误');
                    $('.studyCardPwd').css('border','1px solid #eaeaea');
                }
            }
        });
    })
 
})  