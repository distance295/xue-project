<!--
   报名页面
    @require apply.less
    @require LiveApply.js
-->

<div id="containerItem">
    <div class="apply_container">
        <div class="overview">
            <div class="applyinfo">
                <a class="application" href="http://login.xueersi.com/user/login/aHR0cDovL3d3dy54dWVlcnNpLmNvbS9TaWdudXAvZGV0YWlsLzgyMw==">
                    <img src="http://img04.xesimg.com/button/baoming_rightnow.png">
                </a>
                <p class="settime" endtime="">剩余：<span>1</span>天<span>1</span>时<span>2</span>分<span>16</span>秒</p>
                <p>
                    <span>已报名：<b class="red">99</b>名</span>
                    <!-- 总人数大于0时-->
                    <span>剩余名额：<b class="red">1</b>名</span>
                    <!-- end-->
                </p>
            </div>
            <div class="special">
                <div class="usersinfo">
                    <form class="form_check" id="form">
                        <p>
                            <label>用户名：</label>
                            <span id="stu_name">zhaoyuantong@100tal.com</span>
                        </p>
                        <p>
                            <label>姓名：</label>
                            <input type="text" name="realname" value="赵远通">
                        </p>
                        <p>
                            <label>手机：</label>
                            <input type="tel" name="phone" value="13621278919">
                        </p>
                        <p>
                            <label>邮箱：</label>
                            <input type="text" name="mail" value="zhaoyuantong@100tal.com">
                        </p>
                        <p class="prompt">为了更好地服务，请核对信息是否正确，如果错误，请及时改正！</p>
                        <p class="prompt">
                            <input type="hidden" name="signup_id" value="823">
                            <button name="applybtn" type="button" id="apply_button"></button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>