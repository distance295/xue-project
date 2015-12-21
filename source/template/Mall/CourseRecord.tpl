<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container">
    <ol id="module-breadcrumb" class="breadcrumb">
        <li><a href="#">课程分类</a></li>
        <li class="active">三年级</li>
    </ol>
    <div class="row top m20 ">
        <!--   12栏的用这个    -->
        <div class="col-md-12">

            <link rel="import" href="../../widget/Public.Selector/index.tpl?__inline">
        </div>
        <!--   12栏结束    -->
        <!--   左右分栏的用这个    -->
        <div class="col-md-10 wrap-body wrap-mall">

            <!-- *********************** 内容区域开始 *********************** -->
            <ul class="screen-rank">
                <li class="popular-rank">综合</li>
                <li>学员数</li>
                <li>价格<img src="../../widget/Mall.FindTeacher/img/down.png"></li>
            </ul>
            <div class="panel panel-default ">
                <div class="panel-body pd0">
                	<link rel="import" href="../../widget/Public.Module/course05.tpl?__inline">
                	<link rel="import" href="../../widget/Public.Module/course05.tpl?__inline">
                </div>
            </div>

            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side wrap-mall pull-right">
            <div class="panel panel-default ">
                <div class="panel-body sideright-body pd0">
                	<div class="sideright-ad">
                      <a href="###"><img src="http://x04.xesimg.com/web/2015/11/19/14479235823994.jpg" ></a>
                  </div>
                  <div class="sideright-ad">
                      <a href="###"><img src="http://x04.xesimg.com/web/2015/11/19/14479235823994.jpg" ></a>
                  </div>
                  <div class="sideright-hotcourse">
                      <h3>热门专题课</h3>
                      <link rel="import" href="../../widget/Public.Module/hot-course.tpl?__inline">
                  </div>
                  <div class="sideright-hotcourse">
                      <h3>热门新鲜事</h3>
                      <link rel="import" href="../../widget/Public.Dynamic/dynPopular.tpl?__inline">
                  </div>
              </div>
          </div>
      </div>
      <!--    左右分栏结束    -->

  </div><!-- row end -->
  <div id="wrapper" class="container row">
    <section class="col-md-6 col-md-offset-3">
        <div class="ui-pages"></div>
    </section>
</div>
</div>
<!-- 页面配置 -->
<script>
var PAGE_CONFIG = {
    ID: 'Index',
    MODULE: 'Mall',
    TITLE: '二级-课程筛选页-录播课',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };
 $('.ui-pages').pages({
            total : 8, // 总记录数
            size: 10, // 每页显示记录数
            index : 1, // 当前页
            // 点击分页时的回调，返回被点击的页数
            click : function(e){
                alert(1111)
            }
        });
    </script>


    <!-- 公共底部 -->
    <link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">
