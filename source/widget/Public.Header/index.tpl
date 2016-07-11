<!--
    @require header.less
    @require header.js
-->
<div class="modele-header-pic">
    <img src="http://file.xueersi.com/web/2016/06/29/14671698514847.jpg" alt="暑假班抢福利倒计时" usemap="#Map" border="0">
      <map name="Map" id="Map">
        <area shape="rect" coords="991,18,1158,65" href="http://zt.xueersi.com/2016xxsjlive/" target="_blank"/>
  </map>
    <p class="settime" endtime="2016-7-01 19:15:59" style="right:235px;color:#e74c3c;"></p>
    <script type="text/javascript">
			$(function(){
			   xue.updateEndTime('.settime');//执行倒计时函数
			});
	</script>
</div>
<div id="module-header">
    <div class="h-logo"><a href="#">学而思网校</a></div>
    <div class="h-search">
        <input type="text" class="h-text pull-left" placeholder="搜索:秋季满分冲刺班" autocomplete="on">
        <button type="button" class="btn btn-primary btn-search pull-left">搜索</button>
    </div>
    <div class="h-words pull-left">
        <a target="_blank" href="#" class="text-muted">免费课</a>
        <a target="_blank" href="#" class="text-muted">9.9抢购</a>
        <a target="_blank" href="#" class="text-muted">11月11天</a>
        <a target="_blank" href="#" class="text-muted">9.9抢购</a>
        <a target="_blank" href="#" class="text-muted">11月11天</a>
        <a target="_blank" href="#" class="text-muted">9.9抢购</a>
    </div>
    <!-- 头部购物车ui部分调用 -->
    <link rel="import" href="../Public.MiniCart/index.tpl?__inline">
</div>
