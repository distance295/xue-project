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
                            <a data-id="Fresh" href="###" class="list-group-item ">新鲜事</a>
                            <a data-id="Course" href="CollectcourseIndex.html" class="list-group-item active">课程</a>
                            <a data-id="FreeCourse" href="CollectFreeCourseIndex.html" class="list-group-item ">免费课程</a>
                            <a data-id="Appschool" href="CollectAppIndex.html#" class="list-group-item">网校App</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default">
                        <div class="panel-body CollectCourse-main-wrapper">
                            <link rel="import" href="../../widget/Public.Module/course10-collect.tpl?__inline">
                            <link rel="import" href="../../widget/Public.Module/course10-collect02.tpl?__inline">
                            <link rel="import" href="../../widget/Public.Module/course10-collect.tpl?__inline">
                            <link rel="import" href="../../widget/Public.Module/course10-collect02.tpl?__inline">
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
    TITLE: '网校通知-我的收藏-课程'
};
// $(function () {
//     collectTabAjax();
// })
// // 收藏ajax请求
// function collectTabAjax(){
//     $('#sub-nav a').on('click',function(){
//         var that = $(this);
//         var URL = that.data('url');
//         var param = that.data('param');
//         $.ajax({
//             url : url,
//             data : param,
//             type: "POST",
//             dataType: 'html',
//             success: function(d){
//                 if(d){
//                     $('.panel-body').html(d);
//                     that.addClass('active').siblings('').removeClass('active');
//                 },
//                 error: function(){

//                 }

//             }
//         })
        
//     })
// }
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
                    $('.CollectCourse-main-wrapper').html(data);
                }
            },
            error: function(){
                alert(222)
            }
        });
    }
});

$('.course-test .cancel-courseList').on('click', function () {
        var id = $(this).data('id');
        if ($(this).hasClass('cancel-courseList-disabled')) {
            return false;
        }
        var dom = $(this);
        $.ajax({
            url: '/data/Dynamic/ajaxDelDynamic.json',
            data: 'courseId=' + id + '&type=' + 1,
            type: "get",
            dataType: 'json',
            success: function (d) {
                if (d.sign == 1) {
                    // 这里写返回成功的回调内容
                    popoverTips.show({
                        dom: dom,
                        placement: 'top',
                        trigger: 'click',
                        con: '取消收藏成功'
                    });
                    $(dom).addClass('cancel-courseList-disabled').children('a').text('已取消收藏');
                    setTimeout(function () {
                        popoverTips.destroy($(dom));
                    }, 1000)
                } else if (d.sign == 2) {
                    window.location.href = 'http://login.xueersi.com/login/';
                } else {
                    popoverTips.destroy($(dom));
                }
            }
        });
    });
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
