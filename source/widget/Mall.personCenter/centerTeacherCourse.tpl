<!--
  @require personalCenter.less
  @require personalCenter.js
  @require ../Module.Modal/Modal.js
  @require ../Module.Pagination/pagination.js
-->

<div class="centerHeader-teacher-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
                <div class="centerHeader-img-level" title="学而思网校认证老师">
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
        <div class="centerHeader-notFoucs"><span class="centerHeader-notFoucs-btn btn btn-warning follow_add">+关注</span></div>

        <!--2、已经关注-->
        <div class="centerHeader-alFocus hide ui_follow"><span class="centerHeader-alFocus-btn btn btn-default">已关注</span><a href="###" class="centerHeader-willFocus-btn btn follow_cancel">取消关注</a></div>
    </div>
    <link rel="import" href="../../widget/Mall.personCenter/tab-teacher-course.tpl?__inline">
    <div class="row bottom m20">
        <div class="center-left-w top m20">
            <!--新鲜事筛选tab标签开始-->
            <div class="filter-public-tab">
               <span class="filter-text-style">排序：</span>
               <div class="filter-nav-list">
                  <ul id="fresh-filter-nav">
                      <li class="current" data-params="category=1" data-type="0"><a href="javascript:void(0)">综合</a></li>
                      <li data-type="20"><a href="javascript:void(0)">学员数</a></li>
                      <li data-type="2"><a href="javascript:void(0)">价格</a></li>
                  </ul>
               </div>
            </div>
            <!--新鲜事筛选tab标签结束--> 
            <div class="center-teacher-course">
              <link rel="import" href="../../widget/Public.Module/course04.tpl?__inline">
              <link rel="import" href="../../widget/Public.Module/course05.tpl?__inline">
            </div>
        </div>
        <div class="center-right top m20">
            <link rel="import" href="center-teacher-info.tpl?__inline">
            <link rel="import" href="teacherVerify.tpl?__inline">
            <link rel="import" href="center-visit.tpl?__inline">
        </div>
    </div>
</div>