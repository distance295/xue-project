<!--
    @require certificate.less
    @require certificate.js   
-->
<div class="certificate-content">
    <div class="certificate-content-left">
        <p>请刮开开听课证正面的涂层，在右侧输入编号和密码</p>
        <img src="img/card.certificate.jpg" alt="">
    </div>
    <div class="certificate-content-right">
        <div>
            <label for="">编号：</label>
            <input class="serialNo" type="text">
        </div>
        <div class="error-box">
            <span class="serialNo-warning error"></span>
        </div>
        
        <div>
            <label for="">密码：</label>
            <input class="serialPass" type="password">
        </div>
        <div class="error-box">
            <span class="serialPass-warning error"></span>
        </div>

        <span class="btn-certificate btn btn-info">激活</span>
    </div>
</div>
<div class="prompt-box">
    <img class="prompt" src="img/prompt.png">
    <div class="certificate-prompt-box">
        <h3>提示</h3>
        <p>如果您对激活听课证有任何疑问，请查看“帮助中心”或拨打：<strong>400-800-2211</strong></p>
    </div>
</div>
