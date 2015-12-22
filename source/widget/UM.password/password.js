    var xue =xue || {};
        xue.formCheck = xue.formCheck || {};
    var fCheck = xue.formCheck;

    /* 输入正确时，清除提醒 */
    fCheck.clearTips = function(select){
      $(select).css({
        'display':'none'
      }).html(null);
    };

    /* 提示信息的css样式 */
    fCheck.setTips = function(select, tips){
      $(select).css({
        'display': 'block',
      }).html(tips);
    };

    /* input边框样式 */
    fCheck.bordercss = function(argument) {
       if($(argument).val() !== ''){
         $(argument).css('border','1px solid #68c04a');
       }else{$(argument).css('border','1px solid #eaeaea');}
    }

    /* 密码安全强度 */
    fCheck.strength = function(password){
        var score = 0;

        /* 单独数字 */
        if (password.match(/(.*[0-9].*[0-9].*[0-9])/)) { score += 5; }

        /* 特殊字符 */
        if (password.match(/(.*[!,@,#,$,%,^,&,*,?,_,~,\[,\]].*[!,@,#,$,%,^,&,*,?,_,~,\[,\]])/)) { score += 5; }

        /* 单独字母 */
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) { score += 5; }

        /* 字母以及数字的组合 */
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) { score += 15; }

        /* 特殊字符以及数字 */
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~,\[,\]])/) && password.match(/([0-9])/)) { score += 15; }

        /* 特殊字符以及字母 */
        if (password.match(/([!,@,#,$,%,^,&,*,?,_,~,\[,\]])/) && password.match(/([a-zA-Z])/)) { score += 15; }

        /* 特殊字符+数字+字母 */
        if (password.match(/^\w+$/) && password.match(/^\d+$/) && password.match(/([!,@,#,$,%,^,&,*,?,~,\[,\]])/)) { score += 20; }
        return score;

    };

    /* 新密码强度验证 */
    $('#newPwd').off('keyup').on('keyup',function(e){
      var value = $('#newPwd').val();
      var s = $('#newPwd').next('strong');
      if(e.keyCode != 32){
        fCheck.checkStrength('.newPwd-tip','.newPwd-warning',value,fCheck.param.passStrong,e);
      }else{
        $('.newPwd-tip').hide();
        fCheck.clearTips('.newPwd-warning');
      }
    });

    fCheck.checkStrength  = function(tip,passwordWarn,value,passStrong,e){
      var val = $.trim(value);
      if(val.length >= 6){
        $(tip).hide();
        fCheck.clearTips(passwordWarn);
        $(passStrong).css({
          'display' : 'inline-block'
        })
        var score = fCheck.strength(val);
        var tp = score < 6 ? 1 : (score <= 49 ? 2 : 3);
        $(fCheck.param.passStrength).removeClass().addClass('strong' + tp);
        /* 方便最后的验证 */
        fCheck.param.cPass = 1;     
      }else if(val.length > 0 && val.length <= 5){  
        $(tip).hide();
        $(passStrong).css({
          'display' : 'none'
        });
        fCheck.param.cPass = 0; 
      }else if(!val){
        /* 防止出现未输入字符修改大小写的情况 */
        if(e.keyCode !== 20){
          $(tip).show();
          $(passStrong).css({
            'display' : 'none'
          })
        }
        fCheck.param.cPass = 0; 
      }
    }

    /* 显示隐藏label */
    function labelfn(pwd,tip,warning) {
      $(pwd).focus(function(){
        $(tip).hide();
        fCheck.clearTips(warning);
      });
      $(pwd).blur(function(){
        var value = $(pwd).val();
        if(value == ''){
          $(tip).show();
        }
      })
    }
    labelfn("#curPwd",".curPwd-tip",".curPwd-warning");
    labelfn("#newPwd",".newPwd-tip",".newPwd-warning");
    labelfn("#confirmPwd",".confirmPwd-tip",".confirmPwd-warning");

    //设置密码错误赋值
    var cPassword = 0,
        nPassword = 0,
        conPassword = 0;
    /* 当前密码设置 */
    curPwdfn = function () {
      var curpasswd = $("#curPwd").val();
      if (curpasswd == '') {
          fCheck.setTips(".curPwd-warning",'请输入当前密码');
          $("#curPwd").css('border','1px solid #eaeaea');
          cPassword = 0;
      }else{
          if (curpasswd.length > 0 && curpasswd.length < 6) {
              fCheck.setTips(".curPwd-warning",'密码不能少于6位字符');
              $("#curPwd").css('border','1px solid #eaeaea');
              cPassword = 0;
          }else{
              cPassword = 1;
          }  
      }
    }
    $("#curPwd").on('focus', function() {
      fCheck.clearTips(".curPwd-warning");
    });
    $("#curPwd").on('blur', function() {
       curPwdfn(); 
    });
    
    /* 新密码设置 */
    newpasswdfn = function () {
      var curpasswd = $("#curPwd").val();
      var newpasswd = $("#newPwd").val();
      if (newpasswd == '') {
          fCheck.setTips(".newPwd-warning",'请设置密码');
          $("#newPwd").css('border','1px solid #eaeaea');
          nPassword = 0;
      }else{
          if (newpasswd.length < 6) {
              fCheck.setTips(".newPwd-warning",'密码不能少于6位字符');
              $("#newPwd").css('border','1px solid #eaeaea');
              nPassword = 0;
          }else{
            if (newpasswd == curpasswd) {
                $(".pass-strong").hide();
                fCheck.setTips(".newPwd-warning",'新密码与当前密码相同');
                $("#newPwd").css('border','1px solid #eaeaea');
                nPassword = 0;
            }else{
              fCheck.bordercss('#newPwd');
              nPassword = 1;
            }
          }
      }
    }
    $("#newPwd").on('focus', function() {
       fCheck.clearTips(".newPwd-warning");
    });
    $("#newPwd").on('blur', function() {
       newpasswdfn();
       var newpasswd = $("#newPwd").val();
       var confirmpasswd = $("#confirmPwd").val();
       if (confirmpasswd == '') {
          return false;
       }else{
          if (newpasswd != confirmpasswd) {
            fCheck.setTips(".confirmPwd-warning",'新密码与确认密码不一致');
            $("#confirmPwd").css('border','1px solid #eaeaea');
            conPassword = 0;
          }else{
            fCheck.clearTips(".confirmPwd-warning");
            fCheck.bordercss('#confirmPwd');
            conPassword = 1;
          }
       }
    });

    /* 确认新密码 */
    confirmPwdfn = function () {
      var newpasswd = $("#newPwd").val();
      var confirmpasswd = $("#confirmPwd").val();
      if (confirmpasswd == '') {
          fCheck.setTips(".confirmPwd-warning",'请输入确认密码');
          $("#confirmPwd").css('border','1px solid #eaeaea');
          conPassword = 0;
      }else{
          if (newpasswd != confirmpasswd) {
              fCheck.setTips(".confirmPwd-warning",'新密码与确认密码不一致');
              $("#confirmPwd").css('border','1px solid #eaeaea');
              conPassword = 0;
          }else{
            fCheck.clearTips(".confirmPwd-warning");
            fCheck.bordercss('#confirmPwd');
            conPassword = 1;
          }
      }
    }
    $("#confirmPwd").on('focus', function() {
       fCheck.clearTips(".confirmPwd-warning");
    });
    $("#confirmPwd").on('blur', function() {
       confirmPwdfn(); 
    });

    /* 点击提交按钮检验错误信息 */
    passwordError = function () {
      curPwdfn();
      newpasswdfn();
      confirmPwdfn();
        if( cPassword && nPassword && conPassword){
          return false;
        }else{
          return true;
        }
    }

    /* 密码验证流程 */
    $(function() {
        $("#form_submit").click(function() {
          var curpasswd = $("#curPwd").val(),
              newpasswd = $("#newPwd").val(),
              confirmpasswd = $("#confirmPwd").val(),
              pwdError = $(".password-error span").is(":empty"),
              Error = passwordError();

          fCheck.clearTips(".confirmPwd-warning , .newPwd-warning , .curPwd-warning");
          passwordError();

          if (!Error && pwdError) {
            /* ajax发送请求 */
            $.ajax({
                type: "POST",
                url: "/MyInfos/changeStuPwd",
                data: "curPwd=" + curpasswd + '&newPwd=' + newpasswd + '&confirmPwd=' + confirmpasswd,
                dataType: 'json',
                success: function(d) {
                    if(d.sign === 2){
                        window.location.href = d.msg;
                    } 
                    if (d.sign == 1) {
                      alert('密码修改成功');
                      location.href = "/MyInfos/passwordManager";
                    }else{
                      fCheck.setTips('.password-error span',d.msg);
                      var pwdError = $(".password-error span").is(":empty");
                      if (pwdError == 0) {
                          $('.password-error').css({
                              display: 'block'
                          });
                          setTimeout("$('.password-error').css({display: 'none'});$('.password-error span').html(null)",6000); 
                      }
                    }
                },
                error: function() {
                  alert('数据读取错误,请重试..');
                  return false;
                }
            });
          };
        })  
    })  