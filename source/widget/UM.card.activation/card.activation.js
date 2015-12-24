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
        $(".btn-active").click(function() {
            if ($(".cardNo").val() == '') {
                  fCheck.setTips(".cardNo-warning",'请输入代金卡卡号');
                $(".cardNo").focus(function() {
                  fCheck.clearTips(".cardNo-warning");});
                return false;
            }

            if ($(".cardPass").val() == '') {
                  fCheck.setTips(".cardPass-warning",'请输入代金卡密码');
                $(".cardPass").focus(function() {
                  fCheck.clearTips(".cardPass-warning");});
                return false;
            }

            $.ajax({
                type: "POST",
                url: "/MyCards/ajaxActiveGift",
                data: "cardNo=" + $(".cardNo").val() + "&cardPass=" + $(".cardPass").val(),
                dataType: 'json',
                success: function(d) {
                    if (d.sign == 1) {
                        alert('代金卡激活成功');
                        location.href = "/MyCards/giftCard";
                    } else {
                        fCheck.setTips('.cardPass-warning',d.msg);
                    }
                    if(d.sign === 2){
                        window.location.href = d.msg;
                    } 
                }
            });
        })
     
    })  