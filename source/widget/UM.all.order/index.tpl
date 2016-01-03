<!--
    @require all.order.less
    @require order.modal.less
    @require all.order.js
    @require Modal.js
    @require ../Module.Pagination/paginations.js
-->

<div class="ao-content">
    <ul id="order_tab" class="ao-list">
        <li class="current" data-pages="" data-params="1"><a href="#">全部订单 32</a></li>
        <li data-pages="" data-params="2"><a href="#">已完成 19</a></li>
        <li data-pages="" data-params="3"><a href="#">待支付 22</a></li>
        <li data-pages="" data-params="4"><a href="#">已取消 11</a></li>
        <li data-pages="" data-params="5"><a href="#">待审核 10</a></li>
        <li data-pages="" data-params="6"><a href="#">审核未通过 5</a></li>
        <li data-pages="" data-params="7"><a href="#">待发货 5</a></li>
        <li data-pages="" data-params="8"><a href="#">待收货 6</a></li>
    </ul>
    <div id="page_list" class="some-order">
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
                            <em>语文</em>
                            <span>[课程升级] 2015学年五升六年级奥数年卡（竞赛班）</span>
                            <p>顾斐老师<br/>赠品：奥数思维训练汇编六年级</p>
                        </div>
                        <div class="order-teacher">
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-danger" href="#">立即支付</a>
                        <span>
                            <a href="#">查看详情</a>
                            <a class="del" onclick="orderDel()" href="#">取消订单</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-info" href="#">查看详情</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-danger" href="#" data-toggle="modal" data-target="#orderModal" onclick="orderModal();">重新购买</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-info" href="#">查看详情</a>
                        <span>
                            <a class="del" href="#">取消订单</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-info" href="#">查看详情</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-info" href="#">查看详情</a>
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
                            <div class=" teacher-main teacher-main-border majar-items">
                                <ul class="avatar-items">
                                    <li>
                                        <a class="avatar-photo">
                                            <img src="img/order-teacher.png">
                                        </a>
                                    </li>
                                </ul>
                            </div>
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
                        <a class="btn btn-info" href="#">查看详情</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ui-pages text-center"></div>
    </div>
</div>