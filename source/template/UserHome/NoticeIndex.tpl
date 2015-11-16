<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">我的通知</a></li>
            </ul>

            <div class="row">
                <div class="col-md-2 wrap w120">
                    <div class="panel panel-default wrap h630">
                        <div id="sub-nav" class="list-group top m30">
                            <a data-id="System" href="#" class="list-group-item active">网校通知</a>
                            <a data-id="Teacher" href="#" class="list-group-item">教师留言 <em class="text-danger">(10)</em></a>
                            <a data-id="Live" href="" class="list-group-item">直播提醒</a>
                            <a data-id="Test" href="" class="list-group-item">考试提醒</a>
                            <a data-id="Files" href="" class="list-group-item">资料提醒</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <link rel="import" href="../../widget/UserHome.notice/index.tpl?__inline">
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
        TITLE: '网校通知-我的通知'
    };
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
