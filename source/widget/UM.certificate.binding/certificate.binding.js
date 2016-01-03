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

$(function() {
    $(".btn-bindcard").click(function() {
        if ($(".bindcardNo").val() == '') {
            fCheck.setTips(".bindcardNo-warning",'请输入课程绑定卡卡号');
            $(".bindcardNo").focus(function() {
              fCheck.clearTips(".bindcardNo-warning");
            });
            return false;
        }

        if ($(".bindcardPass").val() == '') {
            fCheck.setTips(".bindcardPass-warning",'请输入课程绑定卡密码');
            $(".bindcardPass").focus(function() {
              fCheck.clearTips(".bindcardPass-warning");
            });
            return false;
        }

        $.ajax({
            type: "POST",
            url: "/MyCards/courseCardActive",
            data: "bindcardNo=" + $(".bindcardNo").val() + "&bindcardPass=" + $(".bindcardPass").val(),
            dataType: "json",
            success: function(d) {
                if(d.sign === 2){
                    window.location.href = d.msg;
                } 
                if (d.sign == 1) {
                    fCheck.clearTips(".bindcardNo-warning,.bindcardPass-warning");
                    alert('课程绑定卡激活成功');
                    location.href = "/MyCards/courseCard";
                } else {
                    fCheck.setTips('.bindcardPass-warning',d.msg);
                }
            }
        });
    })
 
})  