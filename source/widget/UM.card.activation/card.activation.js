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

    fCheck.bordercss = function(argument) {
       if($(argument).val() !== ''){
         $(argument).css('border','1px solid #68c04a');
       }else{$(argument).css('border','1px solid #eaeaea');}
    }

    $(function() {
        $(".btn-active").click(function() {
            if ($(".cardNo").val() == '') {
                  fCheck.setTips(".cardNo-warning",'请输入课程绑定卡卡号');
                $(".cardNo").focus(function() {
                  fCheck.clearTips(".cardNo-warning");});
                return false;
            }
            fCheck.bordercss('.cardNo');

            if ($(".cardPass").val() == '') {
                  fCheck.setTips(".cardPass-warning",'请输入课程绑定卡密码');
                $(".cardPass").focus(function() {
                  fCheck.clearTips(".cardPass-warning");});
                return false;
            }
            fCheck.bordercss('.cardPass');

            $.ajax({
                type: "POST",
                url: "/RequestPassword/UpdatePassword",
                data: "cardNo=" + $(".cardNo").val() + "&cardPass=" + $("#cardPass").val(),
                success: function(msg) {
                    if (msg == "True") {
                        location.href = "/RequestPassword/UpdatePasswordSecuess";
                    } else {
                        fCheck.setTips('.cardPass-warning','课程绑定卡卡号、密码不匹配');
                        $('.cardNo,.cardPass').css('border','1px solid #eaeaea');
                    }
                }
            });
        })
     
    })  