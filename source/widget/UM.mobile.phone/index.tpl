<!--
    @require mobile.phone.less
    @require mobile.phone.js
-->
<div class="form-check" id="form-register" action="" method="POST">
    <div class="phone-user">
        <p>当前手机号：</p>
        <strong id="tel">182****2367</strong>
    </div>
    <div class="phone-k">
        <p>手机号码：</p>
        <input id="phone" name="phone" type="text" maxlength="11" />
        <label for="phone" class="phone-tip">请输入手机号</label>
        <span class="phone-warning error"></span>
    </div>

    <div>
        <div class="verification-k">
            <p>验证码：</p>
            <input type="text" maxlength="4" id="verificationCode" class="verification" name="verificationCode" />
            <label for="verificationCode" class="verification-tip">请输入右侧的验证码</label>
            <img height="35" width="120" id="verificationImg" alt="验证码" src="http://www.xueersi.com/verifications/show?6Inw5RD3cqVg" />
        </div>
        <span class="veri-warning error"></span>
    </div>

    <div>
        <div class="phonecode-k">
            <p>短信验证码：</p>
            <input id="phonecode" name="code" type="text" />
            <label for="phonecode" class="phonecode-tip">请输入短信验证码</label>
            <button class="vcode" id="vcode">获取短信验证码</button>
        </div>
        <span id="tips-phonecode" class="tips error"></span>
    </div>

    <div>
        <div class="pass-eye">
            <p>当前密码：</p>
            <input id="password" name="password" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;" />
            <label for="password" class="pass-tip">请输入当前网站密码</label>
        </div>
        <span class="pass-warning error"></span>
    </div>

    <div>
        <button id="form_submit" class="login_btn btn_submit" name="submit" type="submit">保存</button>
    </div>
</div>
<script>
    /* 火狐浏览器刷新之后的界面不同的处理 */ ! function() {
        $('#phone').val('');
        $('#password').val('');
        $('#grade').val('')
        $('#verificationCode').val('');
        $('#phonecode').val('');
    }();

</script>
