<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container">
  <ol id="module-breadcrumb" class="breadcrumb">
    <li><a href="#">课程分类</a></li>
    <li class="active">三年级</li>
  </ol>
  <div class="row">
    <!--   12栏的用这个    -->
    <div class="col-md-12">

      <link rel="import" href="../../widget/Public.Selector/index.tpl?__inline">
    </div>
    <!--   12栏结束    -->
       <!--   12栏的用这个    -->
    <div class="col-md-12 top m10">
          <div class="add-selector-pic">
                <img src="http://r01.xesimg.com/web/2016/04/20/14611181672040.jpg"/>
          </div>
          <div class="add-selector-seo">
               <img src="http://r01.xesimg.com/web/2016/04/20/14611181672040.jpg"/>
          </div>        
    </div>
    <!--   12栏结束    -->
    <!--   左右分栏的用这个    -->
    <div class="col-md-12 top m10">

      <!-- *********************** 内容区域开始 ********************** -->
      <ul class="screen-rank preletive">
        <li class="popular-rank active"><a href="##">综合</a></li>
        <li class="popular-price"><a href="##">价格<i class="glyphicon glyphicon-arrow-down"></i><!-- <i class="glyphicon glyphicon-arrow-up"></i> --></a></li>
        <li>选择学期：</li>
        <li class="stu-term-select">
          <a href="###" class="stu-term-select-title">全部学期<i class="fa fa-angle-down"></i></a>
          <div class="stu-term-select-content">
           <a href="http://www.wangxiao.com/xiao6-0-3-0-0-0-0-0-0-0-0-0-0-1-1/">全部</a>
           <a href="http://www.wangxiao.com/xiao6-0-3-0-0-0-0-0-0-0-0-1-0-1-1/">春季班</a>
           <a href="http://www.wangxiao.com/xiao6-0-3-0-0-0-0-0-0-0-0-2-0-1-1/">暑假班</a>
         </div>
       </li>
          <li class="Onlylive-select">
             共 <strong>12</strong> 个课程，已有 <strong>2000</strong> 名学员报名
          </li>
     </ul>
     <div class="panel panel-default top m10">
      <div class="panel-body pd0 wd110">
          <link rel="import" href="../../widget/Public.Module/course08.tpl?__inline">
          <link rel="import" href="../../widget/Public.Module/course08.tpl?__inline">
          <link rel="import" href="../../widget/Public.Module/course08.tpl?__inline">
           <link rel="import" href="../../widget/Public.Module/course08.tpl?__inline">
          <link rel="import" href="../../widget/Public.Module/course10.tpl?__inline">
          <link rel="import" href="../../widget/Public.Module/course09.tpl?__inline">
     </div>
   </div>

   <!-- *********************** 内容区域结束 *********************** -->
 </div>

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
