<!--
    @require topbar.less
    @require ../Module.Dropdown/dropdown.js
    @require ../Module.Follow/follow.less
    @require ../Module.Follow/follow.js    
-->

<!-- 登录后 -->
<div id="module-topbar">
    <div class="ui-header-menu">
        <ul class="topleft-bar pull-left list-unstyled breadcrumb">
            <li class="">
                <em class="text-danger">你好，人</em>
                <a href="#">退出</a>
            </li>
            <li class="ui-dropdown">
                <span class="dropdown-handle">消息<i class="fa fa-angle-down dropdown-icon"></i></span>
                <ul class="dropdown-body">
                    <li data-type="1">
                        <a href="/LearningCenter/message#_1">网校通知<em class="text-danger">(100)</em></a>
                    </li>
                    <li data-type="4">
                        <a href="/LearningCenter/message#_4">教师留言</a>
                    </li>
                    <li data-type="3">
                        <a href="/LearningCenter/message#_3">直播提醒</a>
                    </li>
                    <li data-type="5">
                        <a href="/LearningCenter/message#_5">考试提醒</a>
                    </li>
                    <li data-type="2">
                        <a href="/LearningCenter/message#_2">资料提醒<em class="text-danger">(100)</em></a>
                    </li>
                </ul>
            </li>
            <li class="ui-dropdown">
                <span class="dropdown-handle">移动网校<i class="fa fa-angle-down dropdown-icon"></i></span>
                <ul class="dropdown-body">
                    <li><a href="#">手机版</a></li>
                    <li><a href="#">IPAD版</a></li>
                </ul>
            </li>
        </ul>
        <ul class="topright-bar pull-right pull-right breadcrumb">
            <li class="ui-dropdown hoverHideTips">
                <span class="dropdown-handle">你正在访问：<em class="text-danger">选择</em><i class="fa fa-angle-down dropdown-icon"></i></span>
                <div class="selGradeTips">
                    <img src="http://res14.xesimg.com/www/img/selClass.png">
                </div>
                <ul class="dropdown-body dropdown-body-widen">
                    <li>其他年级</li>
                    <li class="inline-block"><a data-grade="1" class="" href="javascript:void(0)">幼升小</a></li>
                    <li class="inline-block"><a data-grade="2" class="" href="javascript:void(0)">一年级</a></li>
                    <li class="inline-block"><a data-grade="3" class="" href="javascript:void(0)">二年级</a></li>
                    <li class="inline-block"><a data-grade="4" class="" href="javascript:void(0)">三年级</a></li>
                    <li class="inline-block"><a data-grade="5" class="" href="javascript:void(0)">四年级</a></li>
                    <li class="inline-block"><a data-grade="6" class="" href="javascript:void(0)">五年级</a></li>
                    <li class="inline-block"><a data-grade="7" class="" href="javascript:void(0)">六年级</a></li>
                    <li class="inline-block"><a data-grade="8" class="" href="javascript:void(0)">初一</a></li>
                    <li class="inline-block"><a data-grade="9" class="" href="javascript:void(0)">初二</a></li>
                    <li class="inline-block"><a data-grade="10" class="" href="javascript:void(0)">初三</a></li>
                    <li class="inline-block"><a data-grade="11" class="" href="javascript:void(0)">高一</a></li>
                    <li class="inline-block"><a data-grade="12" class="" href="javascript:void(0)">高二</a></li>
                    <li class="inline-block"><a data-grade="13" class="" href="javascript:void(0)">高三</a></li>
                </ul>
            </li>
            <li><a href="#">网校首页</a></li>
            <li><a href="#">个人中心</a></li>
            <li><a href="#">购物车 <em class="text-danger">2</em></a></li>
            <li><a href="#">订单</a></li>
            <li class="ui-dropdown">
                <span class="dropdown-handle">卡激活<i class="fa fa-angle-down dropdown-icon"></i></span>
                <ul class="dropdown-body">
                    <li><a href="#">代金卡</a></li>
                    <li><a href="#">听课证</a></li>
                    <li><a href="#">课程绑定卡</a></li>
                </ul>
            </li>
            <li class="ui-dropdown">
                    <span class="dropdown-handle">更多<i class="fa fa-angle-down dropdown-icon"></i></span>
                    <ul class="dropdown-body">
                            <li><a href="#">线下小班</a></li>
                            <li><a href="#">线下1对1</a></li>
                    </ul>
            </li>
            <li class="phone-400 active">400-800-2211</li>
        </ul>
    </div>
</div>

<script type = "text/javascript">  
    setTimeout(function(){
       $('.selGradeTips').css('display' , 'none');
    },5000);
    $('.hoverHideTips').on('mouseover' , function() {
        $('.selGradeTips').css('display' , 'none');
    });
    $('body').on('click', '.inline-block a', function() {
        var that = $(this);
        var grade = that.data('grade');
        var defaultGrade = $.cookie('defaultGrade');
        var rzt = defaultGrade.match(/(\d{1,2})-/);
        defaultGrade = defaultGrade.replace(new RegExp(rzt[1]), grade);
        $.cookie('defaultGrade', defaultGrade, {path: '/', domain: '.xueersi.com'});
        window.location.reload();
    });
</script>

<!-- 登录前 -->


<!--
<div id="module-topbar">
    <div class="ui-header-menu">
        <ul class="topleft-bar pull-left list-unstyled breadcrumb">
            <li>
                <span class="xes">学而思网校欢迎你</span>
                <a href="#" class="login text-danger">请登录</a>
                <a href="#" class="register">免费注册</a>
            </li>
            <li class="ui-dropdown">
                <span class="dropdown-handle">移动网校<i class="fa fa-angle-down dropdown-icon"></i></span>
                <ul class="dropdown-body">
                    <li><a href="#">手机版</a></li>
                    <li><a href="#">IPAD版</a></li>
                </ul>
            </li>
        </ul>
        <ul class="topright-bar pull-right pull-right breadcrumb">
            <li><a href="#">网校首页</a></li>
            <li><a href="#">个人中心</a></li>
            <li><a href="#">购物车<em class="text-danger">2</em></a></li>
            <li><a href="#">订单<em class="text-danger">2</em></a></li>
            <li class="ui-dropdown">
                <span class="dropdown-handle">卡激活<i class="fa fa-angle-down dropdown-icon"></i></span>
                <ul class="dropdown-body">
                    <li><a href="#">代金卡</a></li>
                    <li><a href="#">听课证</a></li>
                    <li><a href="#">课程绑定卡</a></li>
                </ul>
            </li>
            <li><a href="http://www.speiyou.com/" target="_blank">更多课程</a></li>
            <li class="phone-400">400-800-2211</li>
        </ul>
    </div>
</div>
-->
