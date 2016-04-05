<!--
    @require bill.less
    @require bill.js
    @require ../Module.Modal/Modal.js
    @require areadata.js
    @require areadata_function.js
-->
<ul class="bill-list">
    <li class="bill-tab">可申请开发票订单</li>
    <li>开发票申请</li>
</ul>
<div class="bill-content bill-hidden" style="display: block">
    <div class="some-bill">
        <ul class="bill-title">
            <li class="bill-first">选择订单</li>
            <li class="bill-second">发票详情</li>
            <li class="bill-third">可开发票总金额</li>
        </ul>
        <div class="bill-details">
            <div class="bill-number">
                <span class="bill-number-time">2015-08-02  14:32:12</span>
                <span>订单号：201508021432120909</span>
            </div>
            <ul>
                <li class="bill-select">
                    <input type="checkbox">
                </li>
                <li class="bd-lif">
                    <div class="bill-subtitle-left">
                        <div class="order-teacher ot-first">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher drop-class">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                            <span class="drop-class-tip">已退课</span>
                        </div>
                    </div>
                </li>
                <li class="bill-li">￥<em>1389.00</em></li>
            </ul>
        </div>
        <div class="bill-details">
            <div class="bill-number">
                <span class="bill-number-time">2015-08-02  14:32:12</span>
                <span>订单号：201508021432120909</span>
            </div>
            <ul>
                <li class="bill-select">
                    <input type="checkbox">
                </li>
                <li class="bd-lif">
                    <div class="bill-subtitle-left">
                        <div class="order-teacher ot-first">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                    </div>
                </li>
                <li class="bill-li">￥<em>1389.00</em></li>
            </ul>
        </div>
        <div class="bill-check-more">查看更多</div>
        <div class="user_site_info">
            <div class="site_title">
                <h3>收货地址</h3>
                <div class="extra_r">
                    <a href="#none" data-toggle="modal" data-target="#billAddressModal">新增收货地址</a>
                </div>
            </div>
            <div class="ui_ship_addr">
                <ul class="shipadd_list">
                    <li id="101572" class="">
                        <input type="radio" style="display:none" data-phone="15652398774" data-zipcode="414100" data-address="sdfsfsdf" data-country="0" data-city="217" data-province="19" data-realname="sss" value="101572" name="data[addId]" id="addid_101572" autocomplete="off" checked="">
                        <label class="consignee_item current" for="addid_101572">
                            <span title="sss">sss</span>
                        </label>
                        <div class="addr_detail">
                            <span class="addr_name" title="sss">sss</span>
                            <span class="addr_info" title="广东省 中山市  sdfsfsdf">广东省 中山市  sdfsfsdf</span>
                            <span class="addr_tel">15652398774</span>
                        </div>
                        <div class="ship_btns">
                            <a class="edit_consignee" href="javascript:updateAddress(101572);">编辑</a>
                            <a class="del_consignee" href="#none" onclick="delAddress(101572)">删除</a>
                        </div>
                    </li>
                    <li id="61217" class="f_detailAddress">
                        <input type="radio" style="display:none" data-phone="15645874588" data-zipcode="414100" data-address="枯自卫队自卫队 " data-country="1" data-city="1" data-province="1" data-realname="李明test" value="61217" name="data[addId]" id="addid_61217" autocomplete="off">
                        <label class="consignee_item " for="addid_61217">
                            <span title="李明test">李明test</span>
                        </label>
                        <div class="addr_detail">
                            <span class="addr_name" title="李明test">李明test</span>
                            <span class="addr_info" title="北京市 市辖区 东城区 枯自卫队自卫队 ">北京市 市辖区 东城区 枯自卫队自卫队 </span>
                            <span class="addr_tel">15645874588</span>
                        </div>
                        <div class="ship_btns">
                            <a class="edit_consignee" href="javascript:updateAddress(61217);">编辑</a>
                            <a class="del_consignee" href="#none" onclick="delAddress(61217)">删除</a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="addr_switch">
                <span>更多地址</span><em></em>
            </div>
        </div>
        <div class="bill-type">
            <h3>发票信息</h3>
            <label for="">发票类型</label>
            <div class="select-div">
                <select name="" id="">
                    <option value="请选择">请选择</option>
                    <option value="服务费">服务费</option>
                    <option value="服务费">服务费</option>
                    <option value="服务费">服务费</option>
                </select>
            </div>
            <label for="">发票抬头</label>
            <input type="text">
        </div>
        <div class="bill-remark">
            <h3>备注信息</h3>
            <textarea id="remarkFocus">选填,请填写备注信息</textarea>
        </div>
        <div class="bill-tips">
            <p>温馨提示:发票的开票金额不包括代金卡、优惠券、课程退款、课程打折部分涉及的金额</p>
        </div>
        <div class="bill-sum">
            <div class="bill-sum-container">
                <p class="bill-sum-num">已选中<em>0</em>个订单</p>
                <p class="bill-sum-price">发票总金额<em>0</em>元</p>
                <div class="bill-sum-button">申请开发票</div>
            </div>
        </div>
    </div>
</div>
<div class="bill-apply bill-hidden" style="display: none">
    <ul>
        <li class="bill-apply-cr">
            <span class="bill-apply-time">申请时间</span>
            <span class="bill-apply-title">发票抬头</span>
            <span class="bill-apply-price">发票金额</span>
            <span class="bill-apply-state">申请状态</span>
            <span class="bill-apply-handle">操作</span>
        </li>
        <li>
            <span class="bill-apply-time">2015-09-21</span>
            <span class="bill-apply-title">xx'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x</span>
            <span class="bill-apply-price">¥1111</span>
            <span class="bill-apply-state">待审核</span>
            <span class="bill-apply-handle"><a class="bill-apply-check">查看</a></span>
        </li>
        <li>
            <span class="bill-apply-time">2015-09-21</span>
            <span class="bill-apply-title">xx'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x</span>
            <span class="bill-apply-price">¥1111</span>
            <span class="bill-apply-state bill-apply-no">审核未通过</span>
            <span class="bill-apply-handle"><a class="bill-apply-check">查看</a></span>
        </li>
        <li>
            <span class="bill-apply-time">2015-09-21</span>
            <span class="bill-apply-title">xx'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x'x</span>
            <span class="bill-apply-price">¥1111</span>
            <span class="bill-apply-state bill-apply-yes">审核通过</span>
            <span class="bill-apply-handle"><a class="bill-apply-check">查看</a></span>
        </li>
    </ul>
</div>
<div class="bill-apply-check-detail" style="display: none">
    <div class="bill-apply-check-title">
        <h3>审核状态</h3>
        <ul>
            <li>
                <span class="bill-check-state-title">审核时间</span>
                <span class="bill-check-state-content">2015-09-10 09:09:09</span>
            </li>
            <li>
                <span class="bill-check-state-title">订单状态</span>
                <span class="bill-check-state-content bill-check-state-state">待审核</span>
            </li>
        </ul>
    </div>
    <div class="bill-apply-check-title">
        <h3>审核说明</h3>
        <ul>
            <li>
                <span class="bill-check-state-title">待审核状态</span>
                <span class="bill-check-state-content">您的发票申请还未审核,请耐心等待</span>
            </li>
            <li>
                <span class="bill-check-state-title">审核时间</span>
                <span class="bill-check-state-content">2015-09-10 09:09:09</span>
            </li>
            <li>
                <span class="bill-check-state-title">发票类型</span>
                <span class="bill-check-state-content">服务费</span>
            </li>
            <li>
                <span class="bill-check-state-title">发票抬头</span>
                <span class="bill-check-state-content">北京一度回答教育科技有限公司</span>
            </li>
            <li>
                <span class="bill-check-state-title">开票总金额</span>
                <span class="bill-check-state-content">3780元</span>
            </li>
        </ul>
    </div>
    <div class="bill-apply-check-title">
        <h3>收货人信息</h3>
        <ul>
            <li>
                <span class="bill-check-state-title">收货人姓名</span>
                <span class="bill-check-state-content">王小明</span>
            </li>
            <li>
                <span class="bill-check-state-title">所在地区</span>
                <span class="bill-check-state-content">北京市朝阳区</span>
            </li>
            <li>
                <span class="bill-check-state-title">所在地址</span>
                <span class="bill-check-state-content">三环到四环之间芍药居2号院3号楼2门203</span>
            </li>
            <li>
                <span class="bill-check-state-title">手机号</span>
                <span class="bill-check-state-content">18623343334</span>
            </li>
            <li>
                <span class="bill-check-state-title">邮编</span>
                <span class="bill-check-state-content">100000</span>
            </li>
        </ul>
    </div>
    <div class="bill-apply-check-title">
        <h3>备注</h3>
        <ul>
            <li>
                <span class="bill-check-state-content">我希望你们可以给我开个10000的发票</span>
            </li>
        </ul>
    </div>
    <div class="bill-apply-check-detail-content">
        <h3>订单详情</h3>
        <ul class="bill-title">
            <li class="bill-first">订单详情</li>
            <li class="bill-second">可开发票金额</li>
        </ul>
        <div class="bill-details">
            <div class="bill-number">
                <span class="bill-number-time">2015-08-02  14:32:12</span>
                <span>订单号：201508021432120909</span>
            </div>
            <ul>
                <li class="bd-lif">
                    <div class="bill-subtitle-left">
                        <div class="order-teacher ot-first">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                    </div>
                </li>
                <li class="bill-li">￥<em>1389.00</em></li>
            </ul>
        </div>
        <div class="bill-details">
            <div class="bill-number">
                <span class="bill-number-time">2015-08-02  14:32:12</span>
                <span>订单号：201508021432120909</span>
            </div>
            <ul>
                <li class="bd-lif">
                    <div class="bill-subtitle-left">
                        <div class="order-teacher ot-first">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <img class="teacher-head" src="img/order-teacher.png" alt="">
                            <em class="course-icon">语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p class="bill-teacher-name"><img src="img/teacher-name.png" alt="">顾斐</p>
                            <p class="bill-look"><img src="img/bill-look.png" alt="">4612453</p>
                            <p class="bill-gifts">赠品：奥数思维训练汇编六年级</p>
                        </div>
                    </div>
                </li>
                <li class="bill-li">￥<em>1389.00</em></li>
            </ul>
        </div>
    </div>
    <div class="bill-sum-button">取消申请</div>
</div>
