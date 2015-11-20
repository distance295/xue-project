<!--
    @require basic-information.less
    @require basic-information.js
-->
<div class="bi-content">
    <div class="bi-left">
        <p>
            <label for="">用户名：</label>
            <span>gonghaibin3018@100tal.com</span>
        </p>
        <p>
            <label for="">昵称：</label>
            <input class="nickname" type="text" maxlength="18">
            <span class="nickname-warning error"></span>
            <span class="prompt-empty"></span>
        </p>
        <p>
            <label for="">真实姓名：</label>
            <span>龚海滨</span>
        </p>
        <p>
            <label for="">性别：</label>
            <span>男</span>
        </p>
        <p>
            <label for="">年级：</label>
            <span>初三</span>
            <em>网校会在每年7月1日自动为你更新年级</em>
        </p>
        <p>
            <span class="date">
                <label for="">生日：</label>
                <select class="year">
                  <option>请选择</option>
                </select>
                <i>年</i>
                <select class="month">
                  <option>请选择</option>
                </select>
                <i>月</i>
                <select class="day">
                  <option>请选择</option>
                </select>
                <i>日</i>
            </span>
        </p>
        <p>
            <label for="">所在地：</label>
            <span>北京市  市辖区  东城区</span>
        </p>
        <p>
            <label for="">学校：</label>
            <input class="school" type="text" maxlength="50">
            <span class="school-warning error"></span>
        </p>
        <button class="btn-submit btn btn-info" name="submit" type="submit">保存</button>
    </div>
    <div class="bi-right">
        <span>真实姓名、性别、所在地、年级等基本资料如需修改请拨打客服电话：<em>400-800-2211</em></span>
    </div>
</div>
<script>
    /* 火狐浏览器刷新之后的界面不同的处理 */ 
    !function() {
        $('#phone').val('');
        $('#password').val('');
        $('#grade').val('')
        $('#verificationCode').val('');
        $('#phonecode').val('');
    }();

</script>
