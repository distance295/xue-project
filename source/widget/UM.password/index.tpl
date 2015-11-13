<!--
    @require password.less
    @require password.js
-->

    <div class="form-password" action="" method="POST">
        <p>当前密码：</p>
        <input id="old-password" name="old-password" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="password" class="oldpass-tip">请输入当前网站密码</label>
        <span class="oldpass-warning error"></span>

        <p>新密码：</p>
        <input id="new-password" name="new-password" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="password" class="newpass-tip">请设置密码</label>
        <div class="pass-strength">
            <span class="newpass-warning error"></span>
            <span class="pass-strong">
                <i class="security">安全强度</i>
                <strong class="strong1"></strong>   
            </span>
        </div>

        <p>确认密码：</p>
        <input id="repassword" name="repassword" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="password" class="repass-tip">请再次输入密码</label>
        <span class="repass-warning error"></span>

        <button id="form_submit" name="submit" id='register' type="submit">保存</button>     
    </div>

    <script>
        /* 火狐浏览器刷新之后的界面不同的处理 */
        !function(){
            $('#phone').val('');
            $('#password').val('');
            $('#grade').val('')
            $('#verificationCode').val('');
            $('#phonecode').val('');
        }();
    </script>


