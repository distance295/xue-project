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
$('.rank-photo').on('mouseover',function(){

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