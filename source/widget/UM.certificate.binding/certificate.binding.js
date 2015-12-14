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
    $(".btn-bindcard").click(function() {
        if ($(".bindcardNo").val() == '') {
              fCheck.setTips(".bindcardNo-warning",'请输入课程绑定卡卡号');
            $(".bindcardNo").focus(function() {
              fCheck.clearTips(".bindcardNo-warning");});
            return false;
        }
        fCheck.bordercss('.bindcardNo');

        if ($(".bindcardPass").val() == '') {
              fCheck.setTips(".bindcardPass-warning",'请输入课程绑定卡密码');
            $(".bindcardPass").focus(function() {
              fCheck.clearTips(".bindcardPass-warning");});
            return false;
        }
        fCheck.bordercss('.bindcardPass');

        $.ajax({
            type: "POST",
            url: "/MyCards/courseCardActive",
            data: "bindcardNo=" + $(".bindcardNo").val() + "&bindcardPass=" + $(".bindcardPass").val(),
            success: function(msg) {
                if (msg == "True") {
                    location.href = "/RequestPassword/UpdatePasswordSecuess";
                } else {
                    fCheck.setTips('.bindcardPass-warning','课程绑定卡卡号、密码不匹配');
                    $('.bindcardNo,.bindcardPass').css('border','1px solid #eaeaea');
                }
            }
        });
    })
 
})  