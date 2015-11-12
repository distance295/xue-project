<!--
    @require card.learn.less
    @require card.learn.js
-->

    <div class="gift-card-record">
        <ul id="pay_tab">
          <li class="current"><a href="#">学习卡充值</a></li>
          <li><a href="#">银行卡充值</a></li>
        </ul>
        <div class="contentbind">
            <div class="cl-learn">
                <div class="cl-content">
                    <div class="cl-content-left">
                        <p>请刮开学习卡背面的涂层，在右侧输入密码</p>
                        <img src="img/card.learn.jpg" alt="">
                    </div>
                    <div class="cl-content-right">
                        <div>
                            <label for="">密码：</label>
                            <input class="cl-pass" type="password">
                        </div>
                        <span class="cl-pass-warning error"></span>

                        <button class="btn_blue">充值</button>
                        <a href="">查看充值记录</a>
                    </div>
                </div>
                <div class="prompt-box">
                    <img class="prompt" src="img/prompt.png">
                    <div class="cl-prompt-box">
                        <h3>提示</h3>
                        <p>1. 您可以拨打客服热线：<strong>400-800-2211</strong>购买学习卡进行充值，我们会通过快递的方式将学习卡送到您的手中。</br>
                           2. 请您不要通过非网校官方渠道购买学习卡，如果您着急充值，建议您选择在线充值；</br>
                           3. 建议您不要将学习卡密码透露给他人，以免造成损失。</p>
                    </div>
                </div>
            </div>
            <div class="cl-bank" style="display:none;">
                <div class="cl-input">
                    <span>充值金额：</span>
                    <input type="text">
                    <span>元</span>
                    <p>只能填写大于等于10，小于等于50000 的整数金额</p>
                    <button class="cl-btn">下一步</button>
                </div>
                <div class="prompt-box">
                    <img class="prompt" src="img/prompt.png">
                    <div class="cl-prompt-box">
                        <h3>提示</h3>
                        <p>1. 充值成功后，余额可能存在延迟现象，请您耐心等候，如有问题，请咨询客服热线：400-800-2211；</br>
                           2. 充值金额输入值必须 ≥10且≤50000 的正整数； </br>
                           3. 您能用网银支付和支付平台进行充值；</br>
                           4. 充值完成后，您可以进入充值记录页面查看余额充值状态。</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
