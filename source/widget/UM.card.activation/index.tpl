<!--
    @require card.activation.less
    @require card.activation.js
-->

<div class="ca-content">
    <div class="ca-content-left">
        <p>请刮开代金卡背面的涂层，在右侧输入卡号和密码</p>
        <img src="img/card.activation.jpg" alt="">
    </div>
    <div class="ca-content-right">
        <div><label for="">卡号：</label><input class="cardNo" type="text"></div>
        <div class="error-box"><span class="cardNo-warning error"></span></div>
        <div><label for="">密码：</label><input class="cardPass" type="password"></div>
        <div class="error-box"><span class="cardPass-warning error"></span></div>
        <button class="btn-active btn btn-info">激活</button><a href="">查看激活记录</a>
    </div>
</div>
<div class="prompt-box">
    <img class="prompt" src="img/prompt.png">
    <div class="ca-prompt-box">
        <h3>提示</h3>
        <p>如果您对充值代金卡有任何疑问，请查看“帮助中心”或拨打：<strong>400-800-2211</strong></p>
    </div>
</div>
