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

      <!-- *********************** 内容区域开始 ********************** -->
      <ul class="screen-rank">
        <li class="popular-rank active"><a href="##">综合</a></li>
        <li><a href="##">学员数</a></li>
        <li><a href="##">价格<i class="glyphicon glyphicon-arrow-down"></i><!-- <i class="glyphicon glyphicon-arrow-up"></i> --></a></li>
        <li class="Onlylive-select"><a href="##"><input type="checkbox"/><b>只看直播</b></a></li>
      </ul>
      <div class="panel panel-default ">
        <div class="panel-body pd0">
         <link rel="import" href="../../widget/Public.Module/course04.tpl?__inline">
         <link rel="import" href="../../widget/Public.Module/course04.tpl?__inline">
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

<div class="ui-pages text-center"></div>
</div>
<!-- 页面配置 -->
<script>
var PAGE_CONFIG = {
  ID: 'Index',
  MODULE: 'Mall',
  TITLE: '二级-课程筛选页',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
      };
      $('.ui-pages').pages({
            total : 29, // 总记录数
            size: 10, // 每页显示记录数
            index : 1, // 当前页
            // 点击分页时的回调，返回被点击的页数
            click : function(e){
              
            }
          });
      </script>


      <!-- 公共底部 -->
      <link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">
