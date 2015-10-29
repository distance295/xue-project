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
})
