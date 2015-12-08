<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

      		<!-- tab切换开始 -->
            <ul class="nav nav-tabs">
                <li role="presentation"><a href="#">直播课</a></li>
                <li role="presentation" class="active"><a href="#">录播课</a></li>
            </ul>
            <!-- tab切换结束 -->
            <div class="chooseGradeForLb">
            <!-- 年级选择展示区域 -->
                <link rel="import" href="../../widget/Public.Selector/chooseGradeForLb.tpl?__inline">
            </div>

            <!-- 错题本展示区域 -->
			<link rel="import" href="../../widget/UserHome.wrongQues/showWrongQuesForLb.tpl?__inline">

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
        ID: 'WrongQuestion',
        MODULE: 'UserHome',
        TITLE: '错题本',
    };

</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">