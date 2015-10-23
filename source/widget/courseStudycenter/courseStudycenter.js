/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

 var header = header || {};
 header.hide = function(){};
 $(function(){
 	$('.more-service h4').on('click',function(){
 		var a = $(this).hasClass('blue-arrow')
 		if(a){
 			$(this).removeClass('blue-arrow').parents('.more-service').removeClass('show');
 		}else{
 			$(this).addClass('blue-arrow').parents('.more-service').addClass('show');
 		}
 	});
 })