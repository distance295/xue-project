/**
 * Created by user on 2015/10/21.
 */
var select = {
	chooseSpan : function(all,that,className){
        $(all).removeClass(className);
        $(that).addClass(className);
    }
};


$('.choice-point-cur span').on('click',function(){
	var that = this;
    select.chooseSpan('.choice-point-cur span',that,'select-point');
})

$('.choice-grade-cur span').on('click',function(){
    var that = this;
    select.chooseSpan('..choice-grade-cur span',that,'select-grade');
})

$('.chocie-point-show').on('click',function(){
    var that = this;
    $(that).child('span').html('收起');
    $(that).child('img').attr('src','img/arrow_up.png');
})
