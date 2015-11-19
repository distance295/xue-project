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

