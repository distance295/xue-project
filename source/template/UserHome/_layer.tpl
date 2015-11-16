<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->
            <link rel="import" href="../../widget/UserHome.alert/index.tpl?__inline">

            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">全部</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">录播</a></li>
                <li><a href="#">已过期课程</a></li>
<!--
                <li class="pull-right">
                    <a href="#" class="btn btn-danger">
                        <i class="fa fa-plus"></i> 发新鲜事
                    </a>
                </li>
-->
            </ul>
            <div class="panel panel-default ">
                <div class="panel-body">left 个人中心左边主要内容区哉</div>
            </div>
            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side">
            <link rel="import" href="../../widget/UserHome.sidebar/index.tpl?__inline">
        </div>
    </div>
</div>
<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'UserHome',
        TITLE: '学习中心',
    };

</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
