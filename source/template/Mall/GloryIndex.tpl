<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<!--   12栏的用这个    -->
<div class="gloryConPicId">
  <!-- <div class="gloryConPicId" style='background:  url("/static/img/glory-banner.jpg") no-repeat scroll center top'>
    <div class="gloryConPicId-inner">
        <a href="/vips/apply">立即申请</a>
        <ul class="glory-grades-list">
            <h3>2015年成绩秀</h3>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
            <li>学而思图书大狂欢</li>
        </ul>
    </div>
</div>  -->

<link rel="import" href="../../widget/Public.Module/gloryAd.tpl?__inline">
<link rel="import" href="../../widget/Public.FocusPic/index.tpl?__inline">
</div>
<!--   12栏结束    -->

<div class="container top">
    <div class="glory-main-wrap">
        <link rel="import" href="../../widget/Public.Module/glory.tpl?__inline">
    </div>
    <div class="ui-pages text-center"></div>
</div>
<!-- 页面配置 -->
<script>
var PAGE_CONFIG = {
    ID: 'Index',
    MODULE: 'Mall',
    TITLE: '看学霸',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };

    $('.ui-pages').pages({
    total : 29, // 总记录数
    size: 10, // 每页显示记录数
    index : 1, // 当前页
    // 点击分页时的回调，返回被点击的页数
    click : function(index){
        $.ajax({
            url : '',
            // data : '&type='+_type+'&curpage='+index,
            type: "get",
            dataType: 'html',
            success: function(data){
                if(data){
                    $('.glory-main-wrap').html(data);
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
    <link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">
