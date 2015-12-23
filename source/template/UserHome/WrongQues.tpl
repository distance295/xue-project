<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 直播课错题本 -->
<div class="container top m20 wrongQuest">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <!-- tab切换开始 -->
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#" class="broadZb">直播课</a></li>
                <li role="presentation"><a href="#" class="broadLb">录播课</a></li>
                <p class="wrongQuest-sum">共有<span>172</span>道错题</p>
            </ul>
            <!-- tab切换结束 -->

            <!-- 年级筛选 -->
            <link rel="import" href="../../widget/UserHome.wrongQues/chooseShow.tpl?__inline">

            <!-- 错题本展示区域 -->
            <link rel="import" href="../../widget/UserHome.wrongQues/showWrongQues.tpl?__inline">

            <div class="ui-pages text-center"></div>

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
<script>
    var allPages = $('.que-num').data('num');
    $(function () {
        $('.wrap-body .ui-pages').pages({
            total: 5,
            size: 2,
            index: 1,
            click: function (index) {
                $.ajax({
                    url: '/data/Dynamic/ajaxDynamicList.html',
                    //data: '&category=' + _category + '&curpage=' + index,
                    type: "get",
                    dataType: 'html',
                    success: function (data) {
                        if (data) {
                            $('.que-num').html(data);
                        }
                    }
                });
            }
        });
    });
</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">