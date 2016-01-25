<!--
    @require header.less
    @require header.js
-->
<div class="modele-header-pic">
    <img src="http://file.xueersi.com/web/2016/01/25/14537065408790.png" alt="下半年卡9折优惠倒计时" usemap="#Map" border="0">
      <map name="Map" id="Map">
      <area shape="rect" coords="905,22,995,59" href="http://www.xueersi.com/1" target="_blank"/>
      <area shape="rect" coords="1002,22,1090,58" href="http://www.xueersi.com/2" target="_blank"/>
      <area shape="rect" coords="1093,22,1186,57" href="http://www.xueersi.com/3" target="_blank"/>
    </map>
    <p class="settime" endtime="2016-1-29 23:59:59"></p>
    <script type="text/javascript">
			$(function(){
			   xue.updateEndTime('.settime');//执行倒计时函数
			});
	</script>
</div>
    <div id="module-header">
        <div class="h-logo"><a herf="#">学而思网校</a></div>
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
