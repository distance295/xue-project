<!--
   金币商城首页
    @require gold.less
    @require ../../lib/Font-Awesome/4.4.0/css/font-awesome.css
    @require ../../static/css/ui.calendar.css
    @require ../../static/js/xue.ui.calendar.js
    @require gold.js
    @require ../Module.Modal/Modal.js
    @require gold-address.less
    @require ../Module.Pagination/paginations.js
-->

<!-- 金币商城头部 -->
<ul class="gold-detail-title nav nav-tabs">
    <li class="active"><a href="###" data-target=".gold-detail-container">金币明细</a></li>
    <li><a href="###" data-target=".gold-store-container">金币商城</a></li>
    <li><a href="###" data-target=".gold-exchange-container">我兑换的</a></li>
</ul>
<!-- 金币明细 -->
<div class="gold-detail-container gold-detail-block-change" style="display: block">
    <!-- 金币总数 -->
    <div class="gold-detail-account">
        <span class="gold-detail-account-title">目前您的金币数:</span><em>9786</em>
        <span class="gold-detail-account-exchange">立即兑换</span>
    </div>
    <!-- 日期查询 -->
    <div class="gold-detail-check-date">
        <span class="gold-detail-check-title">按时间查询</span>
        <input class="gold-detail-check-time" id="dateStart" />
        <span class="gold-detail-check-title">至</span>
        <input class="gold-detail-check-time" id="dateEnd" />
        <div class="gold-detail-check">查询</div>
    </div>
    <!-- 查询明细头部 -->
    <div class="gold-detail-show-title">
        <span>名称</span>
        <span>收支</span>
        <span>金币数</span>
        <span>时间</span>
    </div>
    <!-- 查询明细 -->
    <div class="gold-detail-show-container">
        <div class="gold-detail-show" style="border-top: none">
            <span class="gold-detail-show-name">首次直播回放扣除</span>
            <span class="gold-detail-show-add">+14</span>
            <span class="gold-detail-show-number">765</span>
            <span class="gold-detail-show-time">2小时以前</span>
        </div>
        <div class="gold-detail-show">
            <span class="gold-detail-show-name">直播讲座送礼</span>
            <span class="gold-detail-show-dec">-14</span>
            <span class="gold-detail-show-number">765</span>
            <span class="gold-detail-show-time">2小时以前</span>
        </div>
        <div class="gold-detail-show">
            <span class="gold-detail-show-name">直播讲座送礼</span>
            <span class="gold-detail-show-dec">-14</span>
            <span class="gold-detail-show-number">765</span>
            <span class="gold-detail-show-time">2015-10-25 15:46</span>
        </div>
        <div class="gold-detail-show">
            <span class="gold-detail-show-name">节学习完</span>
            <span class="gold-detail-show-dec">-14</span>
            <span class="gold-detail-show-number">765</span>
            <span class="gold-detail-show-time">2015-10-25 15:46</span>
        </div>
    </div>
</div>
<!-- 金币商城 -->
<div class="gold-store-container gold-detail-block-change" >
    <ul class="gold-store-title-container">
        <li class="gold-store-title-on" store-target=".gold-store-card-box">魔法卡</li>
        <li store-target=".gold-store-present-box">实物礼品</li>
    </ul>

    <!-- 魔法卡 -->
    <div class="gold-store-card-box gold-store-block-change" style="display: block">
        <div class="gold-store-card-box-over">
            <div class="gold-store-card" id="11">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange" data-toggle="modal" data-target="#cardModal">兑换</div>
            </div>
            <div class="gold-store-card" id="12">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
            <div class="gold-store-card" id="13">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
            <div class="gold-store-card" id="14">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
        </div>
        <div class="gold-store-card-box-over">
            <div class="gold-store-card" id="21">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
            <div class="gold-store-card" id="22">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
            <div class="gold-store-card" id="23">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
            <div class="gold-store-card" id="24">
                <div class="gold-store-card-img-box">
                    <img src="../../widget/UserHome.gold/img/gold-card-icon.png" />
                </div>
                <div class="gold-store-card-price-box">
                    <span class="gold-store-card-price">金币:<em>860</em>/张</span>
                    <span class="gold-store-card-level">需要等级:<em>16</em></span>
                </div>
                <p>红名卡(月卡)，尊贵的红色昵称，让你与众不同。初期每周限售100张，每人限购2张</p>
                <div class="gold-store-card-exchange">兑换</div>
            </div>
        </div>
    </div>
    <!-- 实物礼品 -->
    <div class="gold-store-present-box gold-store-block-change" >
        <div class="gold-store-present-rank">
            <span class="gold-store-present-rank-by">排序 :
                <a href="#" class="gold-store-present-rank-focus"><em class="gold-store-rank-by-gold gold-store-present-rank-gold">金币</em><i class="gold-store-gold-arrow glyphicon glyphicon-arrow-up"></i></a>
                <a href="#" ><em class="gold-store-present-rank-new">最新</em><i class="gold-store-new-arrow"></i></a>
            </span>
        </div>
        <div class="gold-store-present-card-container">
            <div class="gold-store-present-card-box">
                <div class="gold-store-present-card gold-store-present-card-center" id="31">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange" data-num="12" data-price="6300" data-toggle="modal" data-target="#presentModal">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="32">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="33">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="34">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
            </div>
            <div class="gold-store-present-card-box">
                <div class="gold-store-present-card gold-store-present-card-center" id="41">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="42">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="43">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
                <div class="gold-store-present-card gold-store-present-card-center" id="44">
                    <div class="gold-store-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <span class="gold-store-present-card-name">清华大学扑克牌</span>
                    <span class="gold-store-present-card-stock">库存还剩347套</span>
                    <span class="gold-store-present-card-gold">260金币</span>
                    <div class="gold-store-present-exchange">兑换</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="gold-exchange-container gold-detail-block-change" style="display: block">
    <ul class="gold-exchange-title-container">
        <li class="gold-exchange-title-on" exchange-target=".gold-exchange-card-box">魔法卡</li>
        <li exchange-target=".gold-exchange-present-box">实物礼品</li>
    </ul>
    <div class="gold-exchange-card-box gold-exchange-block-change" >
        <div class="gold-exchange-rank">
            <span class="gold-exchange-rank-by gold-exchange-not-use gold-exchange-use-focus" use-target=".gold-exchange-use-box">未使用</span>
            <p></p>
            <span class="gold-exchange-rank-by gold-exchange-used" use-target=".gold-exchange-used-box">已使用</span>
        </div>
        <div class="gold-exchange-use-box gold-exchange-use-block-change" style="display: block">
            <div class="gold-exchange-show-title">
                <span>图片</span>
                <span>名称</span>
                <span>兑换时间</span>
                <span>过期时间</span>
                <span>操作</span>
            </div>
            <div class="gold-exchange-show-container">
                <div class="gold-exchange-show" style="border-top: none" id="11">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use"><span>使用</span></div>
                </div>
                <div class="gold-exchange-show" id="12">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use"><span>使用</span></div>
                </div>
                <div class="gold-exchange-show" id="13">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use"><span>使用</span></div>
                </div>
            </div>
        </div>
        <div class="gold-exchange-used-box gold-exchange-use-block-change">
            <div class="gold-exchange-show-title">
                <span>图片</span>
                <span>名称</span>
                <span>兑换时间</span>
                <span>过期时间</span>
                <span>操作</span>
            </div>
            <div class="gold-exchange-show-container">
                <div class="gold-exchange-show" style="border-top: none">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use">生效中</div>
                </div>
                <div class="gold-exchange-show">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use">生效中</div>
                </div>
                <div class="gold-exchange-show">
                    <span class="gold-exchange-img"><img src="../../widget/UserHome.gold/img/gold-card-icon.png" /></span>
                    <span class="gold-exchange-name">红名卡</span>
                    <span class="gold-exchange-time">2015-10-25 15:46</span>
                    <span class="gold-exchange-show-overdue">2015-10-25</span>
                    <div class="gold-exchange-use">生效中</div>
                </div>
            </div>
        </div>
    </div>
    <div class="gold-exchange-present-box gold-exchange-block-change" >
        <div class="gold-exchange-present-card-container">
            <div class="gold-exchange-present-card-box">
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
            </div>
            <div class="gold-exchange-present-card-box">
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
                <div class="gold-exchange-present-card">
                    <div class="gold-exchange-present-img-box">
                        <img src="../../widget/UserHome.gold/img/present-img.png" />
                    </div>
                    <div class="gold-exchange-present-intro-box">
                        <span class="gold-exchange-present-card-name">奖品名称:<span>网校定制扑克牌2副</span></span>
                        <span class="gold-exchange-present-card-name">兑换时间:<span>2015-10-25 15:46</span></span>
                        <span class="gold-exchange-present-card-name">兑换个数:<span>1</span></span>
                        <span class="gold-exchange-present-card-name">发送状态:<span>未发送</span></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
