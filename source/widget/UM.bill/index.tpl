<!--
    @require bill.less
    @require bill.js
    @require ../Module.Modal/Modal.js
    @require areadata.js
    @require areadata_function.js
-->
<div class="bill-content">
    <div class="some-bill">
        <ul class="bill-title">
            <li class="bill-first">发票详情</li>
            <li class="bill-second">可开票金额</li>
            <li class="bill-third">状态</li>
        </ul>
        <div class="bill-details-list">
            <div class="bill-details">
                <div class="bill-number">
                    <span class="bill-number-time">2015-08-02  14:32:12</span>
                    <span class="bill-order-num">订单号：<em>201508021432120910</em></span>
                </div>
                <ul>
                    <li class="bd-lif">
                        <div class="bill-subtitle-left">
                            <div class="order-teacher ot-first">
                                <div class=" teacher-main teacher-main-border majar-items">
                                    <ul class="avatar-items">
                                        <li>
                                            <a class="avatar-photo">
                                                <img src="img/order-teacher.png">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="avatar-roll">
                                        <a href="javascript:void(0);" class="prev none">
                                            <em class="icon-chevron-left">左</em>
                                        </a>
                                        <a href="javascript:void(0);" class="next">
                                            <em class="icon-chevron-right">右</em>
                                        </a>
                                    </div>
                                </div>
                                <div class="course-detail">
                                    <p class="c-title">
                                        <em class="course-icon">语文</em>
                                        <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                                    </p>
                                    <p class="c-info">
                                        <span class="bill-teacher-name"><img src="img/teacher-name.png" alt="">&nbsp;&nbsp;顾斐</span>
                                        <span class="bill-look"><img src="img/bill-look.png" alt="">&nbsp;&nbsp;4612453</span>
                                    </p>
                                    <div class="bill-gifts">
                                        <p>赠品：奥数思维训练汇编六年级</p>
                                    </div>                            
                                </div>                       
                            </div>
                        </div>
                    </li>
                    <li class="bill-li">
                        <div>
                            ￥<em>1389.00</em>
                        </div>
                    </li>
                    <li class="bill-status applyBill" id="123456">
                        <div class="applyBox">
                            <p>未开发票</p>
                            <div>
                                <a href="javascript:;">申请开票</a>
                            </div>
                        </div>
                    </li>
                    <!-- <li class="bill-status billing bill-hidden">
                        <div class="billingBox">
                           <p>正在开票中，请稍后</p>
                            <div>
                                <a href="javascript:;">下载发票</a>
                            </div> 
                        </div>
                    </li> -->
                    <li class="bill-status download bill-hidden">
                        <div class="downloadBox">
                            <p>已经为你开具电子发票</p>
                            <div>
                                <a href="javascript:;">下载发票</a>
                            </div>
                        </div>
                    </li>
                    <li class="bill-status unableBill bill-hidden">
                        <p>已过了开票时效，不能开票</p>
                    </li>
                </ul>
            </div>
            <div class="bill-details">
                <div class="bill-number">
                    <span class="bill-number-time">2015-08-02  14:32:12</span>
                    <span class="bill-order-num">订单号：<em>201508021432120910</em></span>
                </div>
                <ul>
                    <li class="bd-lif">
                        <div class="bill-subtitle-left">
                            <div class="order-teacher ot-first">
                                <div class=" teacher-main teacher-main-border majar-items">
                                    <ul class="avatar-items">
                                        <li>
                                            <a class="avatar-photo">
                                                <img src="img/order-teacher.png">
                                            </a>
                                        </li>
                                        <li>
                                            <a class="avatar-photo">
                                                <img src="img/order-teacher.png">
                                            </a>
                                        </li>
                                    </ul>
                                    <div class="avatar-roll">
                                        <a href="javascript:void(0);" class="prev none">
                                            <em class="icon-chevron-left">左</em>
                                        </a>
                                        <a href="javascript:void(0);" class="next">
                                            <em class="icon-chevron-right">右</em>
                                        </a>
                                    </div>
                                </div>
                                <div class="course-detail">
                                    <p class="c-title">
                                        <em class="course-icon">语文</em>
                                        <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                                    </p>
                                    <p class="c-info">
                                        <span class="bill-teacher-name"><img src="img/teacher-name.png" alt="">&nbsp;&nbsp;顾斐</span>
                                        <span class="bill-look"><img src="img/bill-look.png" alt="">&nbsp;&nbsp;4612453</span>
                                    </p>
                                    <div class="bill-gifts">
                                        <p>赠品：奥数思维训练汇编六年级</p>
                                    </div>                            
                                </div>                       
                            </div>
                        </div>
                    </li>
                    <li class="bill-li">
                        <div>
                            ￥<em>1389.00</em>
                        </div>
                    </li>
                    <li class="bill-status applyBill bill-hidden">
                        <div class="applyBox">
                            <p>未开发票</p>
                            <div>
                                <a href="javascript:;">申请开票</a>
                            </div>
                        </div>
                    </li>
                    <!-- <li class="bill-status billing">
                        <div class="billingBox">
                           <p>正在开票中，请稍后</p>
                            <div>
                                <a href="javascript:;">下载发票</a>
                            </div> 
                        </div>
                    </li> -->
                    <li class="bill-status download">
                        <div class="downloadBox">
                            <p>已经为你开具电子发票</p>
                            <div>
                                <a href="javascript:;">下载发票</a>
                            </div>
                        </div>
                    </li>
                    <li class="bill-status unableBill bill-hidden">
                        <p>已过了开票时效，不能开票</p>
                    </li>
                </ul>
            </div>
            <div class="load_container">
                <!-- <input type="hidden" id="url" value="chu1-0-1-1"> -->
                <input type="hidden" id="page" value="2">
                <div class="bill-check-more">查看更多</div>
            </div>
        </div>
        <!-- <div class="bill-mask bill-hidden">
            <div class="bill-pop">
                <p class="billPop-title">完善发票信息
                    <a href="javascript:;" class="btn-close"><img src="img/close.png"></a>
                </p>
                <div class="invoice-type">
                    <span>请选择发票类型</span>
                    <select name="bill-title-select" id="bill-title-select">
                        <option value="0">请选择</option>
                        <option value="1">培训费</option>
                        <option value="2">资料费</option>
                    </select>
                </div>
                <div class="invoice-title">
                    <span>发票抬头</span>
                    <input type="text" class="bill-title-input" placeholder="详细填写发票公司名称">
                </div>
                <p class="bill-tips">注：网校现仅支持电子发票，发票开具后请自行下载打印！</p>
                <p class="bill-tips-error"></p>发票信息错误，请重新申请！
                <div class="invoice-btn">
                    <a href="javascript:;" class="btn-confirm">确认</a>
                    <a href="javascript:;" class="btn-cancel">取消</a>
                </div>
            </div>
        </div> -->
    </div>
</div>