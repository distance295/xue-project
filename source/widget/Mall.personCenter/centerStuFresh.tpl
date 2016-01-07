<!--
  @require personalCenter.less
  @require personalCenter.js
  @require ../Module.Pagination/pagination.js
-->

<div class="centerHeader-stu-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
                <img src="img/header-img.png" class="center-img-all">
                <div class="centerHeader-stu-img-level" title="学而思网校认证学员">
                    <img src="img/level.png" alt="" class="level-img" />
                </div>
            </div>
        </div>
        
        <!--1、学生账号-->
        <div class="centerHeader-intro-stu">圣诞老人 <img src="img/sex-man.png" alt="" class="centerHeader-stud-sex"/></div>
        <!-- 学生账号介绍栏 -->
        <div class="centerHeader-selfintro">
            <span class="centerHeader-selfintro-location">湖南省长沙市</span>
            <span class="centerHeader-selfintro-school">一中</span>
            <span class="centerHeader-selfintro-grade">初二</span>
        </div>

        <!--1、未关注时-->
        <div class="centerHeader-notFoucs"><span class="centerHeader-notFoucs-btn btn btn-warning follow_add">+关注</span></div>

        <!--2、已经关注-->
        <div class="centerHeader-alFocus hide ui_follow"><span class="centerHeader-alFocus-btn btn btn-default">已关注</span><a href="###" class="centerHeader-willFocus-btn btn follow_cancel">取消关注</a></div>
    </div>
    <link rel="import" href="tab-stu-fresh.tpl?__inline">
    
</div>