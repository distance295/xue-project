<!--
    @require password.less
    @require password.js
-->

<div class="form-password" action="" method="POST">
    <div class="curPwd-box">
        <p>当前密码：</p>
        <input id="curPwd" name="curPwd" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="curPwd" class="curPwd-tip">请输入当前网站密码</label>
        <div class="error-box">
            <span class="curPwd-warning error"></span>
        </div>
    </div>

    <div class="newPwd-box">
        <p>新密码：</p>
        <input id="newPwd" name="newPwd" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="newPwd" class="newPwd-tip">请设置密码</label>
        <div class="pass-strength">
            <div class="error-box">
                <span class="newPwd-warning error"></span>
            </div>
            <span class="pass-strong">
                <i class="security">安全强度</i>
                <strong class="strong1"></strong>   
            </span>
        </div>
    </div>

    <div class="confirmPwd-box">
        <p>确认密码：</p>
        <input id="confirmPwd" name="confirmPwd" type="password" maxlength="18" onKeypress="javascript:if(event.keyCode == 32)event.returnValue = false;"/>
        <label for="confirmPwd" class="confirmPwd-tip">请再次输入密码</label>
        <div class="error-box">
            <span class="confirmPwd-warning error"></span>
        </div>
    </div>

    <button id="form_submit" class="btn" name="submit" type="submit">保存</button>     
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


