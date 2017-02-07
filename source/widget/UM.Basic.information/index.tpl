<!--
    @require basic-information.less
    @require birthday.js
    @require basic-information.js
-->
<div class="bi-content">
    <form action="" name="information" method="post" onsubmit="return inforCheckform()" onkeydown="if(event.keyCode==13){return false;}">
        <div class="bi-left">
            <div class="message-error">
                <span></span>
            </div>
            <div>
                <label for="">用户名：</label>
                <span>gonghai1234@100tal.com</span>
            </div>
            <div>
                <label for="">昵称：</label>
                <input class="nickname" type="text" name="nickname" maxlength="18" data-nickname="123" value="123" autocomplete="off"/>
                <div class="error-box">
                    <span class="nickname-warning error"></span>
                </div>
                <span class="prompt-empty-nick"></span>
            </div>
            <div>
                <label for="">真实姓名：</label>
                <input class="realname" name="realname" type="text" maxlength="" autocomplete="off" value="四喜丸子呀">
                <em>仅有一次修改机会哦，请珍惜！</em>
                <div class="error-box">
                    <span class="realname-warning error"></span>
                </div>
                <span class="prompt-empty-real"></span>
            </div>
            <div>
                <label for="">英文名：</label>
                <input class="englishName" type="text" name="englishName" maxlength="12" data-nickname="" value="" autocomplete="off"/>
                <div class="error-box">
                    <span class="englishname-warning error"></span>
                </div>
                <span class="prompt-empty-english"></span>
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
                <div id="date">
                    <label for="">生日：</label>
                    <select id="year" name="year" rel="2014" >
                    </select>
                    <i>年</i>
                    <select id="month" name="month"  rel="4" >
                    </select>
                    <i>月</i>
                    <select id="day" name="day" rel="24" >
                    </select>
                    <i>日</i>
                </div>
                <div class="error-box">
                    <span class="date-warning error"></span>
                </div>
            </div>
            <div>
                <label for="">所在地：</label>
                <span>北京市  市辖区  东城区</span>
            </div>
            <div>
                <label for="school">学校：</label>
                <input class="school" type="text" maxlength="50" autocomplete="off" data-school="123" value="123"/>
                <div class="error-box">
                    <span class="school-warning error"></span>
                </div>
            </div>
            <button class="btn-submit btn btn-info" name="submit" type="submit">保存</button>
        </div>
    <div class="bi-right">
        <span>真实姓名、性别、所在地、年级等基本资料如需修改请拨打客服电话：<em>400-800-2211</em></span>
    </div>
    </form>
</div>