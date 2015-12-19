<!--
    @require third.bind.less
    @require third.bind.js
-->
<div class="tb-content">
    <p>绑定第三方账户后，就可以使用以下网站账户登录，并同步分享</p>
    <ul>
        <li class="app-qq unbounded">
            <h5>腾讯QQ</h5>
            <span>未绑定</span>
            <span class="btn btn-info">立即绑定</span>
        </li>
        <li class="app-weixin unbounded">
            <h5>腾讯微信</h5>
            <span>未绑定</span>
            <span class="btn btn-info">立即绑定</span>
        </li>
        <li class="app-weibo bounded">
            <h5>新浪微博</h5>
            <span>已绑定</span>
            <p>绑定账号：<a class="app-user" href="#">快乐的小鸟</a></p>
            <a id="boundedBtn" href="#" onclick="return sure();">解除绑定</a>
        </li>
        <li class="app-jia bounded">
            <h5>家长帮</h5>
            <span >已绑定</span>
            <p>绑定账号：<a class="app-user" href="#">快乐的小鸟</a></p>
            <a id="boundedBtn" href="#" onclick="return sure();">解除绑定</a>
        </li>
    </ul>

    <div class="prompt-box">
        <img class="prompt" src="img/prompt.png">
        <div class="cb-prompt-box">
            <h3>提示</h3>
            <p>同一账号只能绑定一个相同类型的第三方账号（QQ/微博/家长帮）”，如果你的账号之前绑定过多个相同类型的第三方账号，当进行“解除绑定”操作时，我们将会对“你已绑定的、相同类型的第三方账号”进行全部解绑。</p>
        </div>
    </div>
</div>
