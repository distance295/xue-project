<!--
  @require personalCenter.less
  @require personalCenter.js
-->

<div class="centerHeader-teacher-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
                <div class="centerHeader-teacher-img-level" title="学而思网校认证老师">
                    <img src="img/level.png" alt="" class="level-img" />
                </div>
            </div>
        </div>
        
        <!--2、网校老师-->
            <div class="centerHeader-intro-teacher">
              <span class="centerHeader-intro-teacher-name">王帆</span>
              <span class="centerHeader-intro-teacher-more">语文老师</span>
              <img class="teacher-prize1" src="img/teacher-prize1.png"/>
              <img class="teacher-prize2" src="img/teacher-prize2.png">
              <img class="teacher-prize3" src="img/teacher-prize3.png" />
            </div>
        <!-- 官方账号介绍栏 -->
        <div class="centerHeader-selfintro">专注于初一，初二，初三教学</div>

        <!--1、未关注时-->
        <div class="centerHeader-notFoucs"><span class="centerHeader-notFoucs-btn">+关注</span></div>

        <!--2、已经关注-->
        <div class="centerHeader-alFocus hide"><span class="centerHeader-alFocus-btn">已关注</span><a href="###" class="centerHeader-willFocus-btn">取消关注</a></div>
    </div>
    <link rel="import" href="tab-teacher-broad.tpl?__inline">
    <div class="row bottom m20">
        <div class="col-md-9 top m20 fresh-main-wrapper clo-xs-8">
            <!--新鲜事筛选tab标签开始-->
            <div class="center-rank-flower clearfix">老师最近30天在直播辅导中已收到献花：
                <span class="flower1">234</span>
                <span class="flower2">2324</span>
                <span class="flower3">123456</span>
                <span class="rank-info right">最近30天直播辅导献花排名</span>
                <span style="clear:both"></span>
            </div>
            <!--新鲜事筛选tab标签结束--> 
            <div class="center-teacher-report clearfix">
              <link rel="import" href="centerTeacherBroadFlower.tpl?__inline">
            </div>
        </div>
        <div class="col-md-3 top m20 col-xs-4">
            <div class="center-left-m">
                <link rel="import" href="center-teacher-info.tpl?__inline">
                <link rel="import" href="teacherVerify.tpl?__inline">
                <link rel="import" href="center-visit.tpl?__inline">
            </div>
        </div>
    </div>
</div>