<!--
    @require card.learn.less
    @require card.learn.js
-->

<div class="gift-card-record">
     <ul id="pay_tab">
         <li class="current">
             <a href="#">学习卡充值</a>
         </li>
         <li>
             <a href="#">银行卡充值</a>
         </li>
     </ul>
     <div class="contentbind">
         <div class="cl-learn">
             <div class="cl-content">
                 <div class="cl-content-left">
                     <p>请刮开学习卡背面的涂层，在右侧输入密码</p>
                     <img src="img/card.learn.jpg" alt=""></div>
                 <div class="cl-content-right">
                     <div>
                         <label for="">密码：</label>
                         <input class="studyCardPwd" type="text">
                     </div>
                     <div class="error-box">
                         <span class="studyCardPwd-warning error"></span>
                     </div>
                     <button class="btn-pay btn btn-info">充值</button>
                     <a href="">查看充值记录</a>
                 </div>
             </div>
             <div class="prompt-box">
                 <img class="prompt" src="img/prompt.png">
                 <div class="cl-prompt-box">
                     <h3>提示</h3>
                     <p>
                         1. 您可以拨打客服热线： <strong>400-800-2211</strong>
                         购买学习卡进行充值，我们会通过快递的方式将学习卡送到您的手中。
                         <br/>
                         2. 请您不要通过非网校官方渠道购买学习卡，如果您着急充值，建议您选择在线充值；
                         <br/>
                         3. 建议您不要将学习卡密码透露给他人，以免造成损失。
                     </p>
                 </div>
             </div>
         </div>
         <div class="cl-bank" style="display:none;">
             <div class="cl-input">
                 <span>充值金额：</span>
                 <input id="bankpay" type="text">
                 <span>元</span>
                 <p>只能填写大于等于10，小于等于50000 的整数金额</p>
                 <button class="cl-btn btn btn-info">下一步</button>
             </div>
             <div class="payment_bank">
                 <div class="recharge_sum">充值金额：<strong>100</strong>元</div>
                 <input type="hidden" autocomplete="off" name="default_bank" id="default_bank" value="1" paytype="1">
                 <input type="hidden" autocomplete="off" name="paytype_id" id="paytype_id" value="">
                 <div class="paylists hasCkecked" style="display: block;">
                     <ul class="bank_list">
                         <li class="current">
                             <input type="radio" autocomplete="off" payid="" paytype="2" name="bank_id" value="" checked="checked">
                             <label for="" class="bank-item ZFB" title="支付宝"></label>
                         </li>
                     </ul>
                     <p id="chose_other">选择其他银行</p>
                 </div>
                 <div style="display: block;" class="paylists">
                     <h6 class="shopcar_title">支付平台：推荐使用支付宝支付。支持所有银行卡和支付宝，无需开通网银。</h6>
                     <ul class="bank_list">
                         <li>
                             <input type="radio" autocomplete="off" payid="401001" paytype="2" name="bank_id" value="alipay">
                             <label for="" class="bank-item ZFB" title="支付宝"></label>
                         </li>
                     </ul>
                 </div>
                 <div style="display: block;" class="paylists">
                     <h6 class="shopcar_title">网银支付：</h6>
                     <ul class="bank_list">
                         <li>
                             <input type="radio" autocomplete="off" payid="401101" paytype="1" name="bank_id" value="ICBCB2C">
                             <label for="" class="bank-item ICBC" title="中国工商银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401104" paytype="1" name="bank_id" value="CCB">
                             <label for="" class="bank-item CCB" title="中国建设银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401102" paytype="1" name="bank_id" value="CMB">
                             <label for="" class="bank-item CMB" title="招商银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401103" paytype="1" name="bank_id" value="ABC">
                             <label for="" class="bank-item ABC" title="中国农业银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401105" paytype="1" name="bank_id" value="COMM">
                             <label for="" class="bank-item BCM" title="交通银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401116" paytype="1" name="bank_id" value="GDB">
                             <label for="" class="bank-item CGD" title="广东发展银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401109" paytype="1" name="bank_id" value="BOCB2C">
                             <label for="" class="bank-item BOC" title="中国银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401115" paytype="1" name="bank_id" value="POSTGC">
                             <label for="" class="bank-item POST" title="中国邮政"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401107" paytype="1" name="bank_id" value="CITIC">
                             <label for="" class="bank-item ECITIC" title="中信银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401119" paytype="1" name="bank_id" value="SPABANK">
                             <label for="" class="bank-item PAYH" title="平安银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401112" paytype="1" name="bank_id" value="CMBC">
                             <label for="" class="bank-item CMBC" title="中国民生银行"></label>
                         </li>
                         <li>
                             <input type="radio" autocomplete="off" payid="401106" paytype="1" name="bank_id" value="SDB">
                             <label for="" class="bank-item SDB" title="深证发展银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401108" paytype="1" name="bank_id" value="CIB">
                             <label for="" class="bank-item CIB" title="兴业银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401111" paytype="1" name="bank_id" value="SPDB">
                             <label for="" class="bank-item SPD" title="上海浦东发展银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401113" paytype="1" name="bank_id" value="HZCBB2C">
                             <label for="" class="bank-item HCCB" title="杭州银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401114" paytype="1" name="bank_id" value="BJRCB">
                             <label for="" class="bank-item RCB" title="中国农村商业银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401117" paytype="1" name="bank_id" value="SHBANK">
                             <label for="" class="bank-item SHYH" title="上海银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401118" paytype="1" name="bank_id" value="FDB">
                             <label for="" class="bank-item FDYH" title="富滇银行"></label>
                         </li>
                         <li class="list_more" style="display: none;">
                             <input type="radio" autocomplete="off" payid="401120" paytype="1" name="bank_id" value="NBBANK">
                             <label for="" class="bank-item NBCB" title="宁波银行"></label>
                         </li>

                     </ul>
                     <p class="bank_more">
                         <span>更多银行</span>
                     </p>
                 </div>
                 <div class="formPastPayment">
                    <button class="cl-btn btn btn-info" type="button">去充值</button>
                 </div>
             </div>
            
             <div class="prompt-box">
                 <img class="prompt" src="img/prompt.png">
                 <div class="cl-prompt-box">
                     <h3>提示</h3>
                     <p>
                         1. 充值成功后，余额可能存在延迟现象，请您耐心等候，如有问题，请咨询客服热线：400-800-2211；
                         <br/>
                         2. 充值金额输入值必须 ≥10且≤50000 的正整数；
                         <br/>
                         3. 您能用网银支付和支付平台进行充值；
                         <br/>
                         4. 充值完成后，您可以进入充值记录页面查看余额充值状态。
                     </p>
                 </div>
             </div>
         </div>
     </div>
</div>
