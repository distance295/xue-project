<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">我的收藏</a></li>
            </ul>

            <div class="row">
                <div class="col-md-2 wrap w120">
                    <div class="panel panel-default wrap h630">
                        <div id="sub-nav" class="list-group top m30">
                            <a data-id="Fresh" href="/pages/UserHome/CollectDynamicIndex.html" class="list-group-item active">新鲜事</a>
                            <a data-id="Course" href="/pages/UserHome/CollectcourseIndex.html" class="list-group-item ">课程</a>
                            <a data-id="FreeCourse" href="/pages/UserHome/CollectFreeCourseIndex.html" class="list-group-item ">免费课程</a>
                            <a data-id="Appschool" href="/pages/UserHome/CollectAppIndex.html#" class="list-group-item">网校App</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <link rel="import" href="../../widget/Dynamic/dynAnswer.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynAttention.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynContact.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynExpand.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynImg.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynMyself.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynPopular.tpl?__inline">
                            <link rel="import" href="../../widget/Dynamic/dynVideo.tpl?__inline">
                        </div>
                    </div>
                </div>
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
        ID: 'Notice',
        SUBJECT:'System',
        MODULE: 'UserHome',
        TITLE: '网校通知-我的收藏-新鲜事'
    };
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
