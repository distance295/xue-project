<!--
  @require personalCenter.less
-->

<!--个人主页tab标签开始-->
   <div class="homepage-public-tab">
   	   <ul id="psCenterOffice">
          <li class="current forGuyTab"><a href="###">新鲜事</a></li>
          <li class="forGuyTab"><a href="###" >关注的人</a></li>
       </ul>
   </div>
   <div class="row bottom m20">
    
            <div class="col-md-9 top m20 fresh-main-wrapper" >
                
                <!--官方账号新鲜事开始-->
                <div class="focusGuyTab">
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
                <!--官方账号新鲜事结束--> 
                       
                <!-- 关注的人开始 -->
               <div class="focusGuyTab hide">
                    <link rel="import" href="../../widget/Public.Dynamic/dynAttention.tpl?__inline">
                </div>
                <!--关注的人结束-->
            </div>
    

    
                
            
        
        <div class="col-md-3 top m20">
            <div class="center-left-m">
                <link rel="import" href="center-info.tpl?__inline">
                <link rel="import" href="center-visit.tpl?__inline">
            </div>
        </div>
    </div>
<!--个人主页tab标签结束-->