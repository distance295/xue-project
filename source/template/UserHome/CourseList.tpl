<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->
            
            <div class="alert alert-warning alert-dismissible" role="alert">
                <!-- <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button> -->
                <i class="fa fa-exclamation-circle"></i>
                <strong>[通知]：</strong>今晚7点，辅导老师 李丽 将定语从句的关键考点为大家举办一次复习直播，请报名学员参加
            </div>
            
            <ul class="nav nav-tabs">
                <li role="presentation" class="active"><a href="#">全部</a></li>
                <li><a href="#">直播</a></li>
                <li><a href="#">录播</a></li>
                <li><a href="#">已过期课程</a></li>
            </ul>
            <div class="filter-public-tab">
                <span class="filter-text-style">筛选：</span>
                <div class="filter-nav-list">
                    <ul id="fresh-filter-nav">
                        <li data-type="0" class="current"><a href="javascript:void(0)">全部</a></li>
                        <li data-type="20" class=""><a href="javascript:void(0)">题目</a></li>
                        <li data-type="2"><a href="javascript:void(0)">图文</a></li>
                        <li data-type="21"><a href="javascript:void(0)">视频</a></li>
                    </ul>
                </div>
            </div>
            <div class="course-main-wrap">
                <link rel="import" href="../../widget/UserHome.courses/list.course.tpl?__inline">
            </div>
            <!-- *********************** 内容区域结束 **************** -->

            <div class="ui-pages text-center"></div>
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
    TITLE: '我的课程-学习中心'
};
// 延期
function delayDate(){
    $.ajax({
        type: "get",
        url: "/data/courses/delayDate.html",
        dataType: "html",
        success: function(result) {
            if(result){
                createModal.show({
                    id : 'delayDate',
                    title : '延期课程',
                    cls : 'delayDate',
                    width: 530,
                    content : result
                });
                $('#delayDate').modal('show')
            }
        },
    });
}

$(function  () {
    progressBar();

    // 更多服务
    moreService ();
    // 延期课程
    $('.label-delay').on('click',function(){
        delayDate();
    });
    // 更多服务的资料弹框
    $('.more-list li.courseList-material').on('click',function(){
        materialForm();
    });
    // 更多服务的考试弹框
    $('.more-list li.courseList-exam').on('click',function(){
        examTable();
    });
    testLive('.listTest-btn');
    liveHelp('.liveHelp-btn');
})
// 更多服务
function moreService (){
    $('.more-service h4').on('click',function(event){
        event.stopPropagation();
        var a = $(this).hasClass('blue-arrow')
        if(a){
            // $(this).removeClass('show').children('h4').removeClass('blue-arrow');
            $(this).removeClass('blue-arrow').parents('.more-service').removeClass('show');
        }else{
            // $(this).addClass('show').children('h4').addClass('blue-arrow');
            $(this).addClass('blue-arrow').parents('.more-service').addClass('show');
        }
    });
    $(document.body).on('click',function(event){
        var a = $('.more-service h4').hasClass('blue-arrow');
        if (a){
            $('.more-service h4').removeClass('blue-arrow').parents('.more-service').removeClass('show');
        }
    })
}
// 讲义资料弹框
function materialForm(){
    $.ajax({
        type: "get",
        url: "/data/courses/material.html",
        dataType: "html",
        success: function(result) {
            if(result){
             createModal.show({
                id : 'materialForm',
                title : '讲义资料',
                cls : 'material-exam',
                width: 770,
                content : result
            });
             $('#materialForm').modal('show');
         }
     },
 });
}
// 讲义资料弹框tab事件
$('body').on('click','.material-wrap .material-tab li',function(){
    var index = $(this).index();
    $(this).addClass('current').siblings().removeClass('current');
    $('.material-content').eq(index).show().siblings('.material-content').hide();
})
// 考试
function examTable(){
    $.ajax({
        type: "get",
        url: "/data/courses/exam.html",
        dataType: "html",
        success: function(result) {
            if(result){
             createModal.show({
                id : 'examTable',
                title : '本课考试',
                cls : 'material-exam',
                width: 770,
                content : result
            });
             $('#examTable').modal('show')
         }
     },
 });
}
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
                    $('.course-main-wrap').html(data);
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
