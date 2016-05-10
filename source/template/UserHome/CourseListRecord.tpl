<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 ************************ -->

            <link rel="import" href="../../widget/UserHome.courses/list.record.tpl?__inline">

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
    ID: 'Courses',
    MODULE: 'UserHome',
    TITLE: '录播列表-学习中心',
};
$(function(){
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
                if(data){
                    $('.course-table').html(data);
                }
            },
            error: function(){
                alert(222)
            }
        });
    }
});
   tabRecord();
   tabProgram();
});
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
