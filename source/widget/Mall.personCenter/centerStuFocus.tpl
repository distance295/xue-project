<!--
  @require personalCenter.less
  @require personalCenter.js
-->

<div class="centerHeader-office-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
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
        <div class="centerHeader-notFoucs"><span class="centerHeader-notFoucs-btn">+关注</span></div>

        <!--2、已经关注-->
        <div class="centerHeader-alFocus hide"><span class="centerHeader-alFocus-btn">已关注</span><span class="centerHeader-willFocus-btn">取消关注</span></div>
    </div>
    <link rel="import" href="tab-stu-focus.tpl?__inline">
    <div class="row bottom m20">
        <div class="col-md-9 top m20">
            <link rel="import" href="../../widget/Public.Dynamic/dynAttention.tpl?__inline">
        </div>
        <div class="col-md-3 top m20">
            <div class="center-left-m">
                <link rel="import" href="center-stu-info.tpl?__inline">
                <link rel="import" href="stuVerify.tpl?__inline">
                <link rel="import" href="center-visit.tpl?__inline">
            </div>
        </div>
    </div>
</div>