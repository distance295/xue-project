/**
 * @description : for register
 * @author GeYuanjun (geyuanjun@100tal.com)
 * @modify 2015-09-17 11:04
 * @version
 */
var xue =xue || {};
  xue.formCheck = xue.formCheck || {};

!function(){
  var fCheck = xue.formCheck;

  /* 获取form表单元素 */
  fCheck.param = {
    form         : '#form-register',
    phone        : '#phone',
    curPwd       : '#curPwd',
    verifiCode   : '#verificationCode',
    phoneCode    : '#phonecode',
    phoneTip     : '.phone-tip',
    phoneWarn    : '.phone-warning',
    curPwdTip    : '.pass-tip',
    curPwdWarn   : '.pass-warning',
    passSecurity : '.security',
    verification : '#verificationImg',
    veriTip      : '.verification-tip',
    selectWarn   : '.select-warning',
    tPhoneCode   : '#tips-phonecode',
    passStrong   : '.pass-strong',
    passStrength : '.pass-strong strong',
    strong       : 'strong',
    cPhone       : 0,
    cPass        : 0,
    cImg         : 0,
    cMessage     : 0
  }; 

  /**
   * [setTips description]
   * @param {string} select [标签选择]
   * @param {string} tips   [页面显示的提示信息]
   * @description  设置提示(未经ajax认证时调用)
   */
   fCheck.setTips = function(select, tips){
     $(select).css({
       'display': 'block',
     }).html(tips);
   };

  /**
   * [clearTips description]
   * @param  {string} select [标签选择]
   * @return {[type]} none   [description]
   * @description  输入正确时，清除提醒
   */
  fCheck.clearTips = function(select){
    $(select).css({
      'display':'none'
    }).html(null);
  };

  /**
   * [checkPhone description]
   * @param  {string} phoneTip  [默认提示选择器(例如输入框内的'请输入手机号')]
   * @param  {string} phoneWarn [根据输入的手机号码的不同来展现不同提示的标签选择器]
   * @param  {string} value     [输入框内的值]
   * @return {boolean}          [手机验证的结果(只返回true,方便最后点击'立即注册'时验证)]
   * @description     检验输入的手机号码是否符合要求
   */
  fCheck.checkPhone = function(phoneTip,phoneWarn,value){
    /* 验证手机号码 */
    if( !value ){
      /* 未输入任何字符 */
      $(phoneTip).show();
      fCheck.setTips(phoneWarn,"请输入手机号");
      $('#phone').css('border','1px solid #d2d2d2');
    } else {
      /* 对手机号码进行验证 */
      var isPhone = (/^(13|15|18|14|17)[0-9]{9}$/.test(value) ? true : false);
      var is11 = (/^\d{11}$/.test(value) ? true : false);

      if(!is11){
        /* 非11位数字组成 */
        fCheck.setTips(phoneWarn,"手机号由11位数字组成");
        $('#phone').css('border','1px solid #d2d2d2');
        fCheck.param.cPhone = 0;
      }else if( isPhone ){
        if (value == $("#tel_input").val()) {
          fCheck.setTips(phoneWarn,'手机号与账户当前绑定手机号相同，请更换手机号完成绑定');
          $('#phone').css('border','1px solid #d2d2d2');
          fCheck.param.cPhone = 0;
        }else{
          $('#phone').css('border','1px solid #68c04a');
          fCheck.param.cPhone = 1;
        }
      }else{
        fCheck.setTips(phoneWarn,'不支持该手机号号段');
        $('#phone').css('border','1px solid #d2d2d2');
        fCheck.param.cPhone = 0;
      }
    }
  };

  // 更新验证码图片
  fCheck.changeVerificationImg = function (imgId) {
    var newVerificationImg = '/Verifications/show?' + fCheck.generateMixed(12);
    $('img[id="' + imgId + '"]').attr('src', newVerificationImg);
    $("input[name='verificationCode']").val("");
    $(fCheck.param.veriTip).show(); 
    $('#verificationCode').css('border','1px solid #d2d2d2');
  }
  // 生成随机字符串
  fCheck.generateMixed = function (n) {
    var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var res = "";
    for (var i = 0; i < n; i++) {
      var id = Math.ceil(Math.random() * 35);
      res += chars[id];
    }
    return res;
  }

  //验证校验码是否正确(模拟验证1234)
  fCheck.imgcode = function() {
    var input = $(fCheck.param.verifiCode),
        v = input.val();
    if (v == '') {
      fCheck.setTips('.veri-warning','请输入右侧验证码');
      $('#verificationCode').css('border','1px solid #d2d2d2');
      fCheck.param.cImg = 0;
    }else if(/^\w{4}$/.test(v)){
      /* 调用ajax取值 */
      fCheck.clearTips('.veri-warning');
      if($('#verificationCode').data('lastVal') != $.trim($('#verificationCode').val())){
        fCheck.imgCodeAjax();
      }else{
        $('#verificationCode').css('border','1px solid #68c04a');
      }     
    }else{
      fCheck.setTips('.veri-warning','请输入正确的验证码');
      $('#verificationCode').css('border','1px solid #d2d2d2');
      fCheck.param.cImg = 0;
    }
  };

  /* 验证图片验证码 */
  fCheck.imgCodeAjax = function(){
   $.ajax({
        type:"POST",
        url:"/MyInfos/getVerificationCode",
        data: 'verifyCode=' + $('#verificationCode').val(),
        dataType: "json",
        success: function(result) {
          /* 填写的信息验证不通过 */
          if(result.sign != 1){
            fCheck.changeVerificationImg("verificationImg");
            fCheck.setTips('.veri-warning','网站验证码填写错误');
            $("input[name='verificationCode']").val("");
            $(fCheck.param.veriTip).show(); 
            $('#verificationCode').css('border','1px solid #d2d2d2');
            fCheck.param.cImg = 0;
          }else{
            fCheck.clearTips('.veri-warning');
            $('#verificationCode').css('border','1px solid #68c04a');
            $('#verificationCode').data('lastVal', $.trim($('#verificationCode').val()));
            fCheck.param.cImg = 1;
          }
          if(result.sign === 2){
              window.location.href = result.msg;
          } 
        },
        error: function() {
          alert('数据读取错误,请重试..');
          return false;
        }
     });
  };

  /* 校验短信验证码 */
  fCheck.phonecode = function(param){
      var box = $(param);
      var val = box.val();
      if(val == ''){
          fCheck.setTips('#tips-phonecode', '短信验证码不能为空');
          fCheck.param.cMessage = 0;
      }else{
          if(val.length == 6 && /^[1-9]\d*|0$/.test(Number(val))){
              /* 验证手机短信验证码 */    
              fCheck.clearTips('#tips-phonecode');
              fCheck.param.cMessage = 1;
          }else{
              fCheck.setTips('#tips-phonecode', '短信验证码不正确');
              fCheck.param.cMessage = 0;
          }
      }      
  };
    
  fCheck.phonecodeAjax = function(btn){
    var that = btn;
    $.ajax({
      type: "POST",
      url: "/MyInfos/getPassCode",
      data: 'phone=' + $('#phone').val(),
      dataType: "json",
      timeout: 7000,
      async: false,
      success: function (result) {
        if(result.sign === 2){
            window.location.href = result.msg;
        } 
        if(!result.sign){
          fCheck.clearTips('#tips-phonecode');
          fCheck.setTips('#tips-phonecode',result.msg);
        }else{
          /* 短信发送成功提醒 */
          $('#tips-phonecode').removeClass('error').addClass('phonetext');
          $('.phonetext').text('由于运营商原因，手机短信可能会有延迟，请您耐心等待').show();
          /* 操作按钮文本显示 */
          $(that).text("60秒后重新获取");
          var time = 60;
          that.timer = setInterval(function(){
            if(time > 0){
              time--;
              $(that).text(time + '秒后重新获取');
            }else{
              $(that).text('获取短信验证码');
              clearInterval(that.timer);
              that.timer = null;
              $(that).removeClass('btn_in_use');
              $(that).css({'background': '#3bafda'});
            }
          }, 1000);
        }
      },
      error: function () {
        $(that).removeClass('btn_in_use');
        $(that).css({'background': '#3bafda'}); 
        return false;
      }
    });
  };
  /* 点击"保存"按钮时检查错误信息 */
  fCheck.isError = function(e){
    fCheck.checkPhone(fCheck.param.phoneTip,fCheck.param.phoneWarn,$("#phone").val());
    fCheck.imgcode();
    fCheck.phonecode('#phonecode');
    passwordfn();
    var param = fCheck.param;
    if( param.cPhone && param.cMessage && param.cImg && param.cPass ){
      return false;
    }else{
      return true;
    }
  }
  /* 手机号码输入框的操作 */
  $(fCheck.param.phone).focus(function(){
    $(fCheck.param.phoneTip).hide();
    fCheck.clearTips(fCheck.param.phoneWarn);
  });

  $(fCheck.param.phone).blur(function(){
    var value =  $("#phone").val();
    fCheck.checkPhone(fCheck.param.phoneTip,fCheck.param.phoneWarn,value);
    if(fCheck.param.cPhone !== 1){
      $('#phone').css('border','1px solid #d2d2d2');
    }
  });

  /* 密码框的操作 */
  passwordfn = function () {
    var value = $(fCheck.param.curPwd).val();
    if(value.length == 0){
       fCheck.setTips(fCheck.param.curPwdWarn,'请输入密码');
       fCheck.param.cPass = 0;
    }else{
       if (value.length > 0 && value.length < 6) {
           fCheck.setTips(fCheck.param.curPwdWarn,'密码不能少于6位字符');
           fCheck.param.cPass = 0;
       }else{
        fCheck.param.cPass = 1;
       }
    }
  }

  $(fCheck.param.curPwd).on('focus',function(){
    $(fCheck.param.curPwdTip).hide();
    fCheck.clearTips(fCheck.param.curPwdWarn);
  });

  $(fCheck.param.curPwd).blur(function(e){
    var value = $(fCheck.param.curPwd).val();
    if(value.length > 0 && value.length < 6 ){
      fCheck.setTips(fCheck.param.curPwdWarn,'密码不能少于6位字符');
    }else if(value.length == 0){
      fCheck.setTips(fCheck.param.curPwdWarn,'请输入密码');
      $(fCheck.param.curPwdTip).show();
    } 
  });

  /* 点击切换验证码 */
  $("#verificationImg").on('click',function(){
    fCheck.changeVerificationImg("verificationImg");
  })
  /* 图片验证码的操作 */
  $("#verificationCode").on('focus',function(){
    $(fCheck.param.veriTip).hide();
    fCheck.clearTips('.veri-warning');
  })

  $("#verificationCode").on('blur',function(){
    var value = $("#verificationCode").val();
    if(value == ''){
      $('#verificationCode').css('border','1px solid #d2d2d2');
      $(fCheck.param.veriTip).show();
      fCheck.setTips('.veri-warning','请输入右侧验证码');
    }else{
      fCheck.imgcode();
    }
  });

  /* 获取手机验证码 */
  $('#vcode').off('click').on('click',function(){
    if(!$(this).hasClass('btn_in_use')){
      fCheck.checkPhone(fCheck.param.phoneTip,fCheck.param.phoneWarn,$("#phone").val());    
      fCheck.imgcode();
      var that = this;
      if(fCheck.param.cImg && fCheck.param.cPhone){
        $(that).css({'background': '#ccc'});
        $(that).addClass('btn_in_use');
        fCheck.phonecodeAjax(that); 
      }
    }
  });

  /* 手机验证码输入框的操作 */
  $("#phonecode").on("focus",function(){
    $('#tips-phonecode').removeClass('phonetext').addClass('error');
    $('.phonecode-tip,#tips-phonecode').hide();
  })

  $("#phonecode").on("blur",function(){
    var value = $('#phonecode').val();
    fCheck.phonecode('#phonecode');
    if(value.length == 0){
      $('.phonecode-tip').show();
    }
  })

  /* 判断是否可以点击操作"完成"按钮 */
  $("#mpform_submit").on('click',function(e){
    var isError = fCheck.isError(e),
        phoneError = $(".phone-error span").is(":empty");
    $('#tips-phonecode').removeClass('phonetext').addClass('error');
    if(isError || !phoneError){
      return false;
    }else{
      fCheck.phonecode('#phonecode');
      /* 正常绑定 */
      $.ajax({
        type:"GET",
        url:"/MyInfos/bindStuPhone",
        dataType: "json",
        data: 'phone=' + $('#phone').val() + '&curPwd=' + $('#curPwd').val() + '&imgcode=' + $('#verificationCode').val()+'&phonecode='+$('#phonecode').val(),
        timeout: 7000,
        success: function(result) {
          /* 填写的信息验证不通过 */
          if(result.sign === 2){
              window.location.href = result.msg;
          } 
          if(result.sign == 1){
            window.location.href= '/MyInfos/phoneManager';
          }else{
            fCheck.changeVerificationImg("verificationImg");
            fCheck.setTips('.phone-error span',result.msg);
            var phoneError = $(".phone-error span").is(":empty");
            if (phoneError == 0) {
                $('.phone-error').css({
                    display: 'block'
                });
                setTimeout("$('.phone-error').css({display: 'none'});$('.phone-error span').html(null)",6000); 
            }
          }
        },
        error: function() {
          alert('数据读取错误,请重试..');
          return false;
        }
      });
    }
  });
  fCheck.changeVerificationImg("verificationImg");
}();