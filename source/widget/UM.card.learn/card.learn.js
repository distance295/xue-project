//切换
function table_qiehuan(d){
    var that = $(d),
    box = $('.contentbind').children();
    that.addClass("current").siblings().removeClass("current");  
    var index =  that.index(); 
    box.eq(index).show().siblings().hide();
}

$(function(){
    $('#pay_tab li').click(function(){
     table_qiehuan(this);
 });
});

var xue =xue || {};
    xue.formCheck = xue.formCheck || {};
var fCheck = xue.formCheck;

//提示css样式
fCheck.setTips = function(select, tips){
  $(select).css({
    'background': 'url("img/warning.png") no-repeat 10px 5px',
    'padding-left':'32px' 
  }).html(tips);
};
//清除提示
fCheck.clearTips = function(select){
  $(select).css({
    'background':'none'
  }).html(null);
};
//边框样式
fCheck.bordercss = function(argument) {
   if($(argument).val() !== ''){
     $(argument).css('border','1px solid #68c04a');
   }else{$(argument).css('border','1px solid #eaeaea');}
}

$(function() {
    $(".btn_blue").click(function() {
        if ($(".cl-pass").val() == '') {
              fCheck.setTips(".cl-pass-warning",'请输入学习卡密码');
            $(".cl-pass").focus(function() {
              fCheck.clearTips(".cl-pass-warning");});
            return false;
        }
        fCheck.bordercss('.cl-pass');

        $.ajax({
            type: "POST",
            url: "/RequestPassword/UpdatePassword",
            data: "cl-pass=" + $(".cl-pass").val(),
            success: function(msg) {
                if (msg == "True") {
                    location.href = "/RequestPassword/UpdatePasswordSecuess";
                } else {
                    fCheck.setTips('.cl-pass-warning','学习卡密码错误');
                    $('.cl-pass').css('border','1px solid #eaeaea');
                }
            }
        });
    })
 
})  