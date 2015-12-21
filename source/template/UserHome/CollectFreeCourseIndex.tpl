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
                            <a data-id="Fresh" href="CollectDynamicIndex.html" class="list-group-item ">新鲜事</a>
                            <a data-id="Course" href="CollectcourseIndex.html" class="list-group-item ">课程</a>
                            <a data-id="FreeCourse" href="CollectFreeCourseIndex.html" class="list-group-item active">免费课程</a>
                            <a data-id="Appschool" href="CollectAppIndex.html#" class="list-group-item">网校App</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default">
                        <div class="panel-body CollectCourse-main-wrapper">
                            <link rel="import" href="../../widget/Public.Module/course06.tpl?__inline">
                        </div>

                        
                        <div class="ui-pages text-center"></div>
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
    TITLE: '网校通知-我的收藏-免费课程'
};
$('.ui-pages').pages({
    total : 29, // 总记录数
    size: 10, // 每页显示记录数
    index : 1, // 当前页
    // 点击分页时的回调，返回被点击的页数
    click : function(index){
        $.ajax({
            url : '/data/courses/course06.html',
            // data : '&type='+_type+'&curpage='+index,
            type: "get",
            dataType: 'html',
            success: function(data){
                alert(111)
                if(data){
                    $('.CollectCourse-main-wrapper').html(data);
                }
            },
            error: function(){
                alert(222)
            }
        });
    }
});
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
