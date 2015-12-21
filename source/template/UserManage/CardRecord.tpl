<!-- 公共头部 -->
<link rel="import" href="../Layer/layer.UserHome.head.tpl?__inline">

<!-- 个人设置区域 -->

<div class="container top m20">
    <div class="row">
        <div class="col-md-2 col-sm-3 user-manage-side">
            <!-- module.UM.Nav -->
            <link rel="import" href="../../widget/UM.Nav/index.tpl?__inline">
        </div>
        <div class="col-md-10 col-sm-9 user-manage-body">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3>代金卡激活记录</h3></div>
                <div class="panel-body row">
                    <!-- *********************** 内容区域开始 *********************** -->
                    <link rel="import" href="../../widget/UM.money/index.tpl?__inline">
                    <!-- *********************** 内容区域结束 *********************** -->

                </div>
            </div>
        </div>
    </div>
</div>


<!-- 页面配置 -->
<script>
    var PAGE_CONFIG = {
        ID: 'CardRecord',
        MODULE: 'UserManage',
        TITLE: '代金卡激活记录-个人设置'
    };

    $.ajax({
            type: "GET",
            url: "/MyPayCenters/ajaxGiftCardData",
            dataType: "html",
            data: '&curpage=1',
            success:function(objects){ 
                if(objects.sign === 2){
                    window.location.href = objects.msg;
                }                                           
                var box = $('#moneyTable');
                box.html(objects); 
                $('.ui-pages').pages({
                    total : 29, // 总记录数
                    size: 5, // 每页显示记录数
                    index : 1, // 当前页
                    // 点击分页时的回调，返回被点击的页数
                    click : function(index){
                        $.ajax({
                            type: "GET",
                            url: "/MyPayCenters/ajaxGiftCardData",
                            dataType: "html",
                            data: '&curpage=' + index,
                            success:function(objects){ 
                                if(objects.sign === 2){
                                    window.location.href = objects.msg;
                                }                                           
                                var box = $('#moneyTable');
                                box.html(objects); 
                            },  
                            error:function(){  
                                alert("异步失败");  
                            }  
                        });
                    }
                });
            },  
            error:function(){  
                alert("异步失败");  
            }  
        });
    
</script>

<!-- 公共底部 -->
<link rel="import" href="../Layer/layer.UserHome.foot.tpl?__inline">
