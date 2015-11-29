<!--
    @require basic-information.less
    @require basic-information.js
-->
<div class="bi-content">
    <div class="bi-left">
        <div>
            <label for="">用户名：</label>
            <span>gonghai1234@100tal.com</span>
        </div>
        <div>
            <label for="">昵称：</label>
            <input class="nickname" type="text" maxlength="18">
            <div class="error-box">
                <span class="nickname-warning error"></span>
            </div>
            <span class="prompt-empty"></span>
        </div>
        <div>
            <label for="">真实姓名：</label>
            <span>龚海滨</span>
        </div>
        <div>
            <label for="">性别：</label>
            <span>男</span>
        </div>
        <div>
            <label for="">年级：</label>
            <span>初三</span>
            <em>网校会在每年7月1日自动为你更新年级</em>
        </div>
        <div>
            <form id="date" name="date">
                <label for="">生日：</label>
                <select class="year" name="year" onchange="yearday(this.value)">
                  <option>请选择</option>
                </select>
                <i>年</i>
                <select class="month" name="month" onchange="monthday(this.value)">
                  <option>请选择</option>
                </select>
                <i>月</i>
                <select class="day" name="day">
                  <option>请选择</option>
                </select>
                <i>日</i>
            </form>
        </div>
        <div>
            <label for="">所在地：</label>
            <span>北京市  市辖区  东城区</span>
        </div>
        <div>
            <label for="school">学校：</label>
            <input class="school" type="text" maxlength="50">
            <div class="error-box">
                <span class="school-warning error"></span>
            </div>
        </div>
        <button class="btn-submit btn btn-info" name="submit" type="submit">保存</button>
    </div>
    <div class="bi-right">
        <span>真实姓名、性别、所在地、年级等基本资料如需修改请拨打客服电话：<em>400-800-2211</em></span>
    </div>
</div>

