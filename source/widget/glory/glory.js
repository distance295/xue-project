/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */
var glory = glory || {};
    $(function() {
        modules_params = {
            // 系统模块json文件url
            'jsonUrl': '/Glorys/getGloryTypeJson/',
            
            // 系统模块联动容器
            'container': 'span',
            // 系统模块联动容器id
            'container_id': 'glorys',
            
            // 一级系统模块标识
            'level_1_id': 'type1',
            // 一级系统模块默认值
            'level_1_default': '',
            
            // 二级系统模块标识
            'level_2_id': 'type2',
            // 二级系统模块默认值
            'level_2_default': '',
            
            // 三级系统模块标识
            'level_3_id': 'type3',
            // 三级系统模块默认值
            'level_3_default': ''
        };
        initSelects(modules_params);
    });

/**
 * 初始化三级联动下拉框
 *
 * @return
 */
function initSelects(params) {
    $.ajax({
        type: "post", 
        url: params.jsonUrl,
        dataType: "json",
        timeout: 7000,
        success: function(result) {
            // 如果有系统模块,则显示
            if (result != '') {
                var str = '';
                str += '<select id="' + params.level_1_id + '" name="' + params.level_1_id + '" onchange="selectType1(this)">';
                str += '<option value="" selected>--请选择--</option>';
                
                $.each(result, function(i, j) {
                    if (params.level_1_default != '') {
                        str += '<option value="' + i + '"';
                        if (params.level_1_default == i) {
                            str += ' selected ';
                            if (params.level_2_default != '') {
                                initSelects_2(params, i);
                            }
                        }
                        str += '>' + j['name'] + '</option>';
                    } else {
                        if (j['child'] != '') {
                            var isShow = 0;
                        } else {
                            var isShow = 1;
                        }
                        str += '<option ' +' show="'+isShow+'" description="'+j['description']+ '" value="' + i + '">' + j['name'] + '</option>';
                    }
                });
                str += '</select>';
                
                $(params.container + '[id="' + params.container_id + '"]').html(str);
                $(params.container + ' select[id="' + params.level_1_id + '"]').bind("change", function() {
                    initSelects_2(params, $(this).val());
                }); 
            }
        },
        error: function() {
            alert('数据读取错误..');
        }
    });
};


/**
 * 初始化二级联动下拉框
 */
function initSelects_2(params, pid) {
    if(pid == '') {
        // 如果没有选择一级,则删除二级,三级下拉框
        $(params.container + ' select[id="' + params.level_2_id + '"]').remove();
        $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
    } else {
        $.ajax({
            type: "GET", 
            url: params.jsonUrl,
            dataType: "json",
            timeout: 7000,
            success: function(result) {
                // 如果有子类别,则显示
                if (result[pid]['child'] != '') {
                    var str = '';
                    str += '<select id="' + params.level_2_id + '" name="' + params.level_2_id + '" onchange="selectType2(this)">';
                    str += '<option value="" selected>--请选择--</option>';
                
                    $.each(result[pid]['child'], function(i, j) {
                        if (params.level_2_default != '') {
                            str += '<option value="' + i + '"';
                            if (params.level_2_default == i) {
                                str += ' selected ';
                                if (params.level_3_default != '') {
                                    initSelects_3(params, pid, i);
                                }
                            }
                            str += '>' + j['name'] + '</option>';
                        } else {
                            if (j['child'] != '') {
                                var isShow = 0;
                            } else {
                                var isShow = 1;
                            }
                            str += '<option ' +' show="'+isShow+'" description="'+j['description']+ '" value="' + i + '">' + j['name'] + '</option>';
                        }
                    });
                    str += '</select>';
                    $(params.container + ' select[id="' + params.level_2_id + '"]').remove();
                    $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
                    $(params.container + ' select[id="' + params.level_1_id + '"]').after(str);
                
                    $(params.container + ' select[id="' + params.level_2_id + '"]').bind("change", function(){
                        initSelects_3(params, pid, $(this).val());
                    }); 
                }else{
                    $(params.container + ' select[id="' + params.level_2_id + '"]').remove();
                    $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
    }
};


/**
 * 初始化三级联动下拉框
 */
function initSelects_3(params, ppid, pid) { 
    if(pid == '') {
        // 如果没有选择二级,则删除三级下拉框
        $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
    } else {
        $.ajax({
            type: "GET", 
            url: params.jsonUrl,
            dataType: "json",
            timeout: 7000,
            success: function(result) {
                // 如果有子类别,则显示
                if (result[ppid]['child'][pid]['child'] != '') {
                    var str = '';
                    str += '<select id="' + params.level_3_id + '" name="' + params.level_3_id + '" onchange="selectType3(this)">';
                    str += '<option value="" selected>--请选择--</option>';
                    
                    $.each(result[ppid]['child'][pid]['child'], function(i, j) {
                        if (params.level_3_default != '') {
                            str += '<option val ="100" value="' + i + '"';
                            if (params.level_3_default == i) {
                                str += ' selected ';
                            }
                            str += '>' + j['name'] + '</option>';
                        } else {
                            str += '<option gold ="' + j['gold_num'] +'" description="'+j['description']+ '" value="' + i + '">' + j['name'] + '</option>';
                        }
                    });
                    str += '</select>';
                    $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
                    $(params.container + ' select[id="' + params.level_2_id + '"]').after(str);
                }else{
                $(params.container + ' select[id="' + params.level_3_id + '"]').remove();
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
    }
};


// 生成随机字符串
function generateMixed(n) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    var res = "";
    for(var i = 0; i < n ; i ++) {
        var id = Math.ceil(Math.random() * 35);
        res += chars[id];
    }
    return res;
};
 function showCourse( dom){
 	var t= $(dom).siblings('.glory-window'),
 	b=g_sign = $('#window_sign'),
 	bl=g_id_unexist = $('#window_sign').length == !!0,
 	tl=g_class_unexist=t.children('.window_detail').length==!!0,
 	h=-10,
 	that =$(dom);
 	t.html('<div class="window_arrow"></div><div class="window_detail"><span class="learning">1111</span><span class="teacher_name"><a target="_blank" href="/t/zhutao">222</a> </span><span class="learning">啊哈黑</span> <a title="33333" class="learning_course_name" target="_blank" href="/kc/19236.html" xes_id="gloryCourse">201511ankai额世界上几个IE</a></div>');
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
            //             alert('');
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

glory.comment = glory.comment || {};
/**
* 评论框文本域属于字数限制方法
* @param  {string} dom 任意子节点
*/
(function(fc){
    fc.textareaNum = function(dom) {
        var that = $(dom);
        if (that.length == 0) {
            return false;
        }
        var val = $.trim(that.val());
        var len = val.length;
        // var form = that.closest('.fresh-comment-form'),
        // size = form.find('.fresh-comment-size .fresh-comment-text-num');
        if (len > 140) {
            that.val(val.substring(0, 140));
            size.text(0);
            return false;
        } else {
            size.text(140 - len);
        }
    };
})(glory.comment);