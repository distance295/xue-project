<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">
<!-- 学习中心区域 -->
<div class="container top m20">
    <div class="row">
        <div class="col-md-10 wrap-body">
            <!-- *********************** 内容区域开始 *********************** -->

            <ul class="nav nav-tabs">  
                <li role="presentation" class="active"><a href="#">新鲜事</a></li>
                <li><a href="#">@我的</a></li>
                <li><a href="#">关注的人</a></li>
                <li class="pull-right">
                    <a href="#" class="btn btn-danger" id="freshPost">
                        <i class="fa fa-plus"></i> 发新鲜事
                    </a>
                </li>                                
            </ul>
  

            <div class="row">              
                <div class="col-md-2 wrap w120">                 
                    <div class="panel panel-default wrap h630">
                        <div class="list-group top m20">
                            <a href="#" class="list-group-item active">我关注的</a>
                            <a href="#" class="list-group-item">我自己的</a>

                        </div>   
                    </div>
                </div>
                <div class="col-md-10 wrap w930">
                    <div class="panel panel-default">
                        <div class="panel-body" style="padding:0">
                            <link rel="import" href="../../widget/Dynamic/index.tpl?__inline">
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
