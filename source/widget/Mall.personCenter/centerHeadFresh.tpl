<!--
  @require personalCenter.less
  @require personalCenter.js
  @require ../Module.Pagination/pagination.js
-->

<div class="centerHeader-office-background">
    <div class="centerHeader-ib">
        <div class="centerHeader-img">
            <div class="centerHeader-img-head">
                <!--title属性仅在学生主页进行设置-->
                <img src="img/header-img.png" class="center-img-all">
                <div class="centerHeader-office-img-level" title="学而思网校官方账号">
                    <img src="img/level.png" alt="" class="level-img" />
                </div>
            </div>
        </div>
        
        <!--1、官方账号-->
        <div class="centerHeader-intro-office">产品经理之殇</div>
        <!-- 官方账号介绍栏 -->
        <div class="centerHeader-selfintro">发布网校最新产品上线信息，吐槽在线学习最新热点</div>

        <!--1、未关注时-->
        <div class="centerHeader-notFoucs"><span class="centerHeader-notFoucs-btn">+关注</span></div>

        <!--2、已经关注-->
        <div class="centerHeader-alFocus hide"><span class="centerHeader-alFocus-btn">已关注</span><a href="###" class="centerHeader-willFocus-btn">取消关注</a></div>
    </div>
    <link rel="import" href="../../widget/Mall.personCenter/tab-office2.tpl?__inline">
    <div class="row bottom m20">
        <div class="center-left-w top m20 fresh-main-wrapper">
            <!--新鲜事筛选tab标签开始-->
            <div class="filter-public-tab">
               <span class="filter-text-style">筛选：</span>
               <div class="filter-nav-list">
                  <ul id="fresh-filter-nav">
                      <li class="current" data-params="category=1" data-type="0"><a href="javascript:void(0)">全部</a></li>
                      <li data-type="20"><a href="javascript:void(0)">题目</a></li>
                      <li data-type="2"><a href="javascript:void(0)">图文</a></li>
                      <li data-type="21"><a href="javascript:void(0)">视频</a></li>
                  </ul>
               </div>
            </div>
            <!--新鲜事筛选tab标签结束--> 
            <link rel="import" href="../../widget/Public.Dynamic/index.tpl?__inline">
        </div>
        <div class="center-right top m20">
            <link rel="import" href="center-info.tpl?__inline">
            <link rel="import" href="officeVerify.tpl?__inline">
            <link rel="import" href="center-visit.tpl?__inline">
        </div>
    </div>
</div>