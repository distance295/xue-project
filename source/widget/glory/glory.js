/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */


 function showCourse( dom){
 	var t= $(dom).siblings('.glory-window'),
 	b=g_sign = $('#window_sign'),
 	bl=g_id_unexist = $('#window_sign').length == !!0,
 	tl=g_class_unexist=t.children('.window_detail').length==!!0,
 	h=-10,
 	that =$(dom);
 	t.html('<div class="window_arrow"></div><div class="window_detail"><span class="learning">正在学习：</span><span class="teacher_name"><a target="_blank" href="/t/zhutao">朱韬</a> </span><span class="learning">老师的</span> <a title="2015学年初一数学年卡目标满分班（沪教版）" class="learning_course_name" target="_blank" href="/kc/19236.html" xes_id="gloryCourse">2015学年初一数学年卡目标满分班（沪教版）</a></div>');
            // if(tl){
            //     $.ajax({
            //         url : '/glorys/ajaxStuCourse',
            //         data : 'gloryId='+gloryId+'&stuId='+stuId,
            //         type: "POST",
            //         dataType: 'html',
            //         success: function(result) { 
            //             if(result){
            //                 t.html(result);
            //                 winContorl(t,b,bl,h,that);
            //             }       
            //         },
            //         error: function() {
            //             alert('数据读取错误,请重试..');
            //             return false;
            //         }
            //     });
            // }else{
            	winContorl(t,b,bl,h,that);
            // }       
        };
        function winContorl(t,b,bl,h,that){
        	var left=that.offset().left,
        	top=that.offset().top,
        	h=-5;
        	t.children().each(function(){
        		var ch=$(this).innerHeight();
        		h+=ch;
        	}).last().removeClass('hasborder_1');;

        	if($('.glory_window_come').length == 0){
        		$(document.body).append('<div class="glory_window_come"></div>');
        	}
        	var content=t.html(); 
        	if(bl){
        		that.attr('id','window_sign');
        		$('.glory_window_come').html(content).offset({
        			left:left,
        			top:top-h-10
        		}).height(h).fadeIn();

        	}else if(typeof that.attr('id')=='undefined'){
        		$('#window_sign').removeAttr('id');
        		that.attr('id','window_sign');
        		$('.glory_window_come').html(content).height(h).offset({
        			left:left,
        			top:top-h-10
        		});

        	}else{
        		$('.glory_window_come').html('').remove();
        		$('#window_sign').removeAttr('id');

        	}
        }
        $(function(){
        	$(document.body).on('click',function(event){
        		var a=$(event.target).hasClass('show-course'),
        		b=$(event.target).hasClass('glory_window_come');
        		if (!a && !b && $('.glory_window_come').length!==0){

        			$('.glory_window_come').remove();
        			$('#window_sign').removeAttr('id');

        		}

        	})
        }); 

