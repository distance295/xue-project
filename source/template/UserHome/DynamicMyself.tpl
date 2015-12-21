<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <ul class="nav nav-tabs">  
                <li  role="presentation" class="active"><a href="DynamicIndex.html">新鲜事</a></li>
                <li><a href="DynamicContact.html">@我的</a></li>
                <li><a href="DynamicAttention.html">关注的人</a></li>
                <li class="pull-right">
                    <a href="#" class="btn btn-danger" id="freshPost" data-toggle="modal" data-target="#fresh-sendInfo-box" >
                        <i class="fa fa-plus"></i> 发新鲜事
                    </a>
                </li>                                
            </ul>







            <div class="row">              
                <div class="col-md-2 wrap w120">                 
                    <div class="panel panel-default wrap h630">
                        <div class="list-group top m20">
                            <a href="DynamicIndex.html" class="list-group-item">我关注的</a>
                            <a href="DynamicMyself.html" class="list-group-item active">我自己的</a>

                        </div>   
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default wrap h630">
                        <input type="hidden" value="200" id="pagesTotal">
                        <div class="panel-body fresh-main-wrapper" style="padding:0">
                            <link rel="import" href="../../widget/Public.Dynamic/dynMyself.tpl?__inline">
                            <link rel="import" href="../../widget/Public.Dynamic/dynMyself.tpl?__inline">
                            <link rel="import" href="../../widget/Public.Dynamic/dynMyself.tpl?__inline">
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
        ID: 'Dynamic',
        MODULE: 'UserHome',
        TITLE: '新鲜事'
    };

</script>
<!--ignore-->

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
<script type="text/javascript">
    $(function(){
          var pageNun = parseInt($.trim($('#pagesTotal').val()));
          //分页的方法
          $('.ui-pages').pages({
              total : pageNun, // 总记录数
              size: 20, // 每页显示记录数
              index : 1, // 当前页
              click : function(index){
                  $.ajax({
                      url : '/data/Dynamic/ajaxDynamicList.html',
                      data : '&curpage='+index,
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
    })
</script>


