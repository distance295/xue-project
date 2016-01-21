<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 三种类型考试 -->
<div class="container top m20 testShow">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <!-- tab切换开始 -->
            <ul class="nav nav-tabs" role="tablist">
                <li role="presentation" class="active"><a href="#testJCSTab" aria-controls="testJCSTab" role="tab" data-toggle="tab">讲测试</a></li>
                <li role="presentation"><a href="#testKNTab" aria-controls="testKNTab" role="tab" data-toggle="tab">课内考试</a></li>
                <li role="presentation"><a href="#testGKTab" aria-controls="testGKTab" role="tab" data-toggle="tab">公开考试</a></li>
            </ul>
            <!-- tab切换结束 -->

            <div class="tab-content">
                <!-- 讲测评start -->
                <link rel="import" href="../../widget/UserHome.testShow/testJCS.tpl?__inline">
                <!-- 讲测评end -->

                <!-- 课内考试start -->
                <link rel="import" href="../../widget/UserHome.testShow/testKN.tpl?__inline">
                <!-- 课内考试end -->

                <!-- 公开考试start -->
                <link rel="import" href="../../widget/UserHome.testShow/testGK.tpl?__inline">
                <!-- 公开考试end -->
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
        ID: 'TestPapers',
        MODULE: 'UserHome',
        TITLE: '试卷集',
    };
</script>
<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
