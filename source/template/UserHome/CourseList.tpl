<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->
            
            <div class="alert alert-warning alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <i class="fa fa-exclamation-circle"></i>
                <strong>[通知]：</strong>今晚7点，辅导老师 李丽 将定语从句的关键考点为大家举办一次复习直播，请报名学员参加
            </div>
            
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">全部</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">录播</a></li>
                <li><a href="#">已过期课程</a></li>
            </ul>
            <link rel="import" href="../../widget/UserHome.courses/list.course.tpl?__inline">

            <!-- *********************** 内容区域结束 ******************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side">
            <link rel="import" href="../../widget/UserHome.sidebar/index.tpl?__inline">
        </div>
    </div>
</div>

<!-- 页面配置 -->
<script>
$(function () {
  $('[data-toggle="popover"]').popover()
})
    var PAGE_CONFIG = {
        ID: 'Courses',
        MODULE: 'UserHome',
        TITLE: '我的课程-学习中心'
    };

</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
