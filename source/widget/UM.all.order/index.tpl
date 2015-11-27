<!--
    @require all.order.less
    @require order.modal.less
    @require order.modal.js
-->
<div id="order-modal" data-toggle="modal" data-target="#orderModal"></div>
<div class="ao-content">
    <ul class="ao-list">
        <li class="current"><a href="#">全部订单 32</a></li>
        <li><a href="#">已完成 19</a></li>
        <li><a href="#">待支付 22</a></li>
        <li><a href="#">已取消 11</a></li>
        <li><a href="#">待审核 10</a></li>
        <li><a href="#">审核未通过 5</a></li>
        <li><a href="#">待发货 5</a></li>
        <li><a href="#">待收货 6</a></li>
    </ul>
    <div class="some-order">
        <ul class="ao-title">
            <li class="ao-first">订单详情</li>
            <li class="ao-second">总计</li>
            <li class="ao-third">状态</li>
            <li class="ao-fourth">操作</li>
        </ul>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
                <li>你需要在<em>47小时</em>之内支付</li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher ot-first">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师<br/>赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">待支付</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-danger">立即支付</button>
                        <span>
                            <a href="#">查看详情</a>
                            <a href="#">取消订单</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">已完成</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-info">查看详情</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">已取消</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-danger" onclick="orderModal();">重新购买</button>
                        <span>
                            <a href="#">查看详情</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">待审核</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-info">查看详情</button>
                        <span>
                            <a href="#">取消订单</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">待收货</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-danger">确认收货</button>
                        <span>
                            <a href="#">查看详情</a>
                        </span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">待发货</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-info">查看详情</button>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ao-details">
            <ul class="ao-subtitle">
                <li><p>2015-08-02  14:32:12</p></li>
                <li><span>订单号：201508021432120909</span></li>
            </ul>
            <ul>
                <li>
                    <div class="ao-subtitle-left">
                        <div class="order-teacher">
                            <img src="img/order-teacher.png" alt="">
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师</p>
                        </div>
                    </div>
                </li>
                <li class="ao-second ao-li">￥1389.00</li>
                <li class="ao-third ao-li">审核未通过</li>
                <li class="ao-li">
                    <div class="ao-operation">
                        <button class="btn btn-info">查看详情</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</div>
<!-- 这是jquery库文件 -->
<script type="text/javascript" src="../../lib/jQuery/1.11.1/jquery.min.js"></script>
<script src="../../lib/bootstrap/3.3.5-custom/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../Module.Modal/Modal.js"></script>
