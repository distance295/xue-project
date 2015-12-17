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
    $(".btn-certificate").click(function() {
        if ($(".serialNo").val() == '') {
              fCheck.setTips(".serialNo-warning",'请输入课程绑定卡卡号');
            $(".serialNo").focus(function() {
              fCheck.clearTips(".serialNo-warning");});
            return false;
        }
        fCheck.bordercss('.serialNo');

        if ($(".serialPass").val() == '') {
              fCheck.setTips(".serialPass-warning",'请输入课程绑定卡密码');
            $(".serialPass").focus(function() {
              fCheck.clearTips(".serialPass-warning");});
            return false;
        }
        fCheck.bordercss('.serialPass');

        $.ajax({
            type: "POST",
            url: "/MyCards/classCardActive",
            data: "card_num=" + $(".serialNo").val() + "&active_num=" + $(".serialPass").val(),
            datatype: 'json',
            success: function(d) {
              if (d.sign == 1) {
                  fCheck.setTips('.serialPass-warning',d.msg);
                  location.href = "/MyCards/classCard";
              } else {
                  fCheck.setTips('.serialPass-warning',d.msg);
                  $('.serialNo,.serialPass').css('border','1px solid #eaeaea');
              }
            }
        });
    })
 
})  