<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.Mall.head.tpl?__inline">

<!-- 学习中心区域 -->
<div class="container">
    <ol id="module-breadcrumb" class="breadcrumb">
        <li><a href="#">课程分类</a></li>
        <li class="active">三年级</li>
    </ol>
    <div class="row top m20">
<!--   12栏的用这个    -->
       <div class="col-md-12">
         <link rel="import" href="../../widget/Public.Selector/index.tpl?__inline">
       </div>
<!--   12栏结束    -->
<!--   左右分栏的用这个    -->
        <div class="col-md-10 wrap-body wrap-mall">

            <!-- *********************** 内容区域开始 *********************** -->
            <ul class="screen-rank" id="fresh-DynamicFilter-nav">
                <li class="popular-rank active" data-type="0"><a href="##">全部</a></li>
                <li data-type="2"><a href="##">图文</a></li>
                <li data-type="20"><a href="##">题目</a></li>
                <li data-type="21"><a href="##">视频</a></li>
            </ul>
             
            <div class="panel panel-default ">
                <input type="hidden" value="200" id="pagesTotal">
                <div class="panel-body pd0 fresh-main-wrapper">
                	<link rel="import" href="../../widget/Public.Dynamic/index.tpl?__inline">
                </div>
                <div id="wrapper" class="container row">
                  <section class="col-md-6 col-md-offset-3">
                      <div class="data-container"></div>
                      <div id="pagination-demo1"></div>
                      <div class="ui-wrap"></div>
                      <div class="ui-pages"></div>
                  </section>
                </div>
            </div>

            <!-- *********************** 内容区域结束 *********************** -->
        </div>
        <div class="col-md-2 col-sm-2 wrap-side wrap-mall pull-right">
            <div class="panel panel-default ">
                <div class="panel-body sideright-body pd0">
                	<div class="sideright-hotcourse">
                		<h3>热门新鲜事</h3>
                		<link rel="import" href="../../widget/Public.Dynamic/dynPopular.tpl?__inline">
                	</div>
                    <div class="sideright-hotcourse">
                        <h3>热门老师</h3>
                        <link rel="import" href="../../widget/Public.Module/hot-teacher.tpl?__inline">
                    </div>
                    <div class="sideright-hotcourse">
                        <h3>热门学生</h3>
                        <link rel="import" href="../../widget/Public.Module/hot-students.tpl?__inline">
                    </div>
                </div>
            </div>
        </div>
<!--    左右分栏结束    -->
   
    </div><!-- row end -->
</div>
<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'Index',
        MODULE: 'Mall',
        TITLE: '二级-新鲜事',
        NAV_FIXED: false // 如果想要头部分类展开的话，设为true，如果不想直接展开设为false
    };

</script>


<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.Mall.foot.tpl?__inline">


<script type="text/javascript">
    //tab切换
    $(function(){

        $('#fresh-DynamicFilter-nav li').click(function(){
              //切换改变样式
              $(this).addClass('active').siblings('li').removeClass('active');
              var _type = $(this).data('type');
              //ajax请求列表信息
              $.ajax({
                  url : '/data/Dynamic/ajaxDynamicList.html',
                  data : {
                     type:_type
                  },
                  type: "get",
                  dataType: 'html',
                  success: function(data){
                      if(data){
                          $('.fresh-main-wrapper').html(data);
                      }else{
                          $('.fresh-main-wrapper').html('');
                      }
                      var pageNun = parseInt($.trim($('#pagesTotal').val()));
                      //分页的方法
                      $('.ui-pages').pages({
                          total : pageNun, // 总记录数
                          size: 20, // 每页显示记录数
                          index : 1, // 当前页
                          click : function(index){
                              $.ajax({
                                  url : '/data/Dynamic/ajaxDynamicList.html',
                                  data : '&type='+_type+'&curpage='+index,
                                  type: "get",
                                  dataType: 'html',
                                  success: function(data){
                                    if(data){
                                       $('.fresh-main-wrapper').html(data);
                                    }
                                  }
                              });
                          }
                      });
                  }
              })
        })

        //默认加载第一个标签
        $('#fresh-DynamicFilter-nav li:first').click();
       
    })
</script>
