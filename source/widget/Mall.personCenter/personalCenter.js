/* 关注会遇到ajax与后台进行交互 */
$('.centerHeader-notFoucs-btn').on('click',function(){
	/* 隐藏自己，显示其兄弟节点 */
	var that = this;
	$(that).addClass('hide');

	$('.centerHeader-alFocus').removeClass('hide');
});

$('.centerHeader-willFocus-btn').on('click',function(){
	var that = this;
	$(that).parent().addClass('hide');
	$('.centerHeader-notFoucs-btn').removeClass('hide');
});

/*直播鲜花学员头像滑过显示学员卡*/
$('.rank-photo').on('mouseon',function(){

});

$('.center-info-stud').on('mouseover',function(){
    var num = $('.center-info-stud-num').text();
    $(this).attr('title','最近3个月消耗了'+num+'金币');
});

$('.center-visit-person').on('mouseover', function(){
        //鼠标划过显示用户页卡，蓝V和红V用户可点击，点击后跳转到客人页
        var that = this;
        if($(that).hasClass('blueRed-v')) {
            var nickname = $(that).find('.center-visit-name');
            nickname.css({
                'color': '#1e89e0'
            });
            $(that).on('click', function () {
                window.location.href = '###';
            });
        }
    });
$('.center-visit-person').on('mouseout', function(){
    var that = this;
    var nickname = $(that).find('.center-visit-name');
    nickname.css({'color': '#222'});
});

/* 点击"老师介绍"弹出视频 */

function videoPlay(videoUrl,flashplayerUrl){
    var _html = '<script type="text/javascript">'
        +'var swfVersionStr = "10.2.0";'
        +'var xiSwfUrlStr = "playerProductInstall.swf";'
        +'var flashvars = {};'
        +'flashvars.url = "'+videoUrl+'";'
        +'flashvars.autoPlay = "true";'
        +'var params = {};'
        +'params.quality = "high";'
        +'params.bgcolor = "#666666";'
        +'params.wmode = "transparent";'
        +'params.allowscriptaccess = "sameDomain";'
        +'params.allowfullscreen = "true";'
        +'var attributes = {};'
        +'attributes.id = "EncryptPlayer";'
        +'attributes.name = "EncryptPlayer";'
        +'attributes.align = "middle";'
        +'swfobject.embedSWF("'+flashplayerUrl+'", "flashContent", "530px", "314px", swfVersionStr, xiSwfUrlStr, flashvars, params, attributes);'
        +'swfobject.createCSS("#flashContent", "display:block;text-align:left;");'
            +'<\/script>';

             _html +=   '<div class="player_live">'
                        +'<div id="VideoPlay" style="width:530px;height:314px">'
                                +'<div class="lyrics-con-video" id="flashContent">'
                                        +'<script type="text/javascript">'
                                                +'var pageHost = ((document.location.protocol == "https:") ? "https://" :   "http://"); '
                                                +'document.write("<a href=\'http://www.adobe.com/go/getflashplayer\'><img src=\'" + pageHost + "www.adobe.com/images/shared/download_buttons/get_flash_player.gif\' alt=\'Get Adobe Flash player\' /></a>" ); '
                                        +'<\/script>'
                                +'<\/div>'
                        +'<\/div>'
                +'<\/div>';
            createModal.show({
                content : _html,
                id : 'video-lay',
                cancel : false,
                width  : 530,
                height : 314,
                title : "老师风采"            
        })
}