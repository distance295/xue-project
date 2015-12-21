<!--
  @require personalCenter.less
  @require personalCenter.js
  @require ../Module.Modal/Modal.js
-->

<div class="centerHeader-teacher-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
                <img src="img/header-img.png" class="center-img-all">
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
    <link rel="import" href="../../widget/Mall.personCenter/tab-teacher-more-fresh.tpl?__inline">

</div>