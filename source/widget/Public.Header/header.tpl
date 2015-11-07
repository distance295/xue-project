<!--
    @require header.js
    @require header.less"
    @require ../Public.MiniCart/minicart.less

-->

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
        <link rel="import" href="../Public.MiniCart/minicart.tpl?__inline">
    </div>
