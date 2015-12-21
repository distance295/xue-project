
<div class="row bottom m20">
    <div class="col-md-9 top m20 fresh-main-wrapper">
        <!--新鲜事开始-->
        <div class="focusGuyTab">
            <!--新鲜事筛选tab标签结束--> 
            <div class="all-fresh-list">
                <link rel="import" href="../../widget/Public.Dynamic/dynExpand.tpl?__inline">
            </div>
        </div>
        <!--新鲜事结束-->
    </div>
    <div class="col-md-3 top m20">
        <div class="center-left-m">
            <link rel="import" href="center-teacher-info.tpl?__inline">
            <link rel="import" href="teacherVerify.tpl?__inline">
            <link rel="import" href="center-visit.tpl?__inline">
        </div>
    </div>
</div>
<script>
    $(function(){
        var dom = $('.fresh-list').find('.fresh-barinfo');
        fresh.comment.getList(dom);
    })
</script>