<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <link rel="import" href="../../widget/UserHome.courses/list.test.tpl?__inline">

            <!-- *********************** 内容区域结束 ************************* -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side">
            <link rel="import" href="../../widget/UserHome.sidebar/index.tpl?__inline">
        </div>
    </div>
</div>
<!-- 页面配置 -->
<script>
$(function () {
  $('[data-toggle="popover"]').popover({
    content: 1111
});

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
})
var PAGE_CONFIG = {
    ID: 'Courses',
    MODULE: 'UserHome',
    TITLE: '随堂测-学习中心',
};
$('.course-table .text-style a.btn-primary').on('click', function(){
    var userID = $(this).data('url'),
        courseID = $(this).data('courseid'),
        stuID = $(this).data('stu'),
        workID = $(this).data('workid'),
        _url = $(this).data('url');

    $.ajax({
        type: "post",
        url: _url,
        dataType: 'json',
        data: {
            userID : userID,
            courseID : courseID,
            stuID : stuID,
            workID : workID
        },
        success: function() {
            if(sign == 1){
                windows.location.href = _url;
            }
        },
        error: function() {
            alert('数据读取错误..');
        }
    });
});

</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
