/**
 * 
 * 
    关注按钮：
    <div class="ui_follow add focus_m" data-url="/teachers/follow/" data-params="urlStr=287&amp;urlKey=30a7f6b663710b1824a13eca674021ae" data-type="3"> 
		<em>+</em>关注
	</div>
 
    已关注，带取消：
    <div class="ui_follow follow_cancel" data-url="/teachers/follow/" data-value="425" data-params="urlStr=425&amp;urlKey=7830acaf10067e0302053fb4f9d0c6e0" data-type="2"> 
        <em class="addsucess"></em>
        已关注 <i class="line">|</i>
        <a href="javascript:void(0)" class="">取消</a>
    </div>
    
    已关注：
    <div class="ui_follow follow_cancel" data-url="/teachers/follow/" data-params="urlStr=30263&amp;urlKey=a0fb1a25fcfffd5722a8a9d8db52215e" data-type="2"> 
        <em class="addsucess"></em>已关注
    </div>
    
    $().follow({
        
    });
 
 */

;(function($){
    // 默认配置
    var defaults = {
        url: '', // 每页的条目数
        type: 1, // 关注按钮类型：1、灰底；2、加关注；3、已关注，取消
        params : null, // 点击关注时请求ajax的携带的参数
        state: 1, // 关注状态：1. 不可取消； 2. 可取消
        goto : window.location.href
    };
    /*
     * @name 关注老师操作
     * @param userId:被关注人id，type:操作类型(1:改为已关注，2：改为取消关注成功，3：改为已关注可取消状态，4：改为取消关注成功且删除)
     * @return sign(0:未登录，1：成功 2：失败 3：未登录)
     */
    // 发送请求
    var _followPost = function(options){
//        console.log('ajax:');
        var that = $(this);
        var data = that.data();
        var settings = $.extend({}, defaults, data);
        settings.tp = (that.find('a.follow_add').length > 0) ? 'add' : 'cancel';
        
        if(!settings.url){
            return false;
        }
        $.ajax({
            type: "post",
            url: settings.url,
            timeout: 7000,
            dataType: 'json',
            data: settings.params  + '&type=' + settings.type,
            success: function(msg) {
                if (msg.sign == 2) {
                    window.location.href = msg.msg;
                }else if(msg.sign == 1) {
                    var btnCls = that.find('.follow_add').hasClass('btn') ? 'btn' : 'btn-sm';
                    var btn = that.find('a');
                    if(settings.tp == 'add'){
                        defaults.tp = 'cancel';
                        btn.removeClass('follow_add btn-warning').addClass('btn-default');
                        var cls = btn.attr('class');
                        var tpl = '<span class="' + cls + '">已关注</span> ';
                        if(settings.state == 1){
                            tpl += '<a href="###" class="' + btnCls + ' btn-link text-primary follow_cancel">取消</a>';
                        }
                        that.html(tpl);
                        follows.unbind.call(that.find('.follow_add'));
                    }else{
                        defaults.tp = 'add';
                        btn = that.find('a').prev();
                        btn.removeClass('btn-default').addClass('btn-warning follow_add');
                        var cls = btn.attr('class');
                        var tpl = '<a href="###" class="' + cls + '">+ 关注</a>';
                        that.html(tpl);
                        follows.unbind.call(that.find('.follow_cancel'));
                    }
                    return;
                }else{
                    alert(msg.msg);
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
    };
    var follows = {
        // 初始化
        init : function(options){
            console.log('init:');
        },
        bind : function(options){
            var that = $(this);
            that.off('click', 'a').on('click', 'a', function(){
                if($(this).hasClass('follow_add')){
                    follows.add.call(that);
                }else if($(this).hasClass('follow_cancel')){
                    follows.cancel.call(that);
                }
            });
            return;
        },
        unbind: function(){
            $(this).off('click', 'a');
        },
        // 加关注
        add : function(opt){
//            console.info('add: ');
            _followPost.call(this);
        },
        // 取消关注
        cancel : function(opt){
//            console.log('cancel: ');
            _followPost.call(this);
        },
        // 返回关注、已关注的HTML结构
        template: function(tp){
            var tpl = '';
            switch(tp){
                // 1:改为已关注
                case 1:
                    tpl = '';
                    break;
                // 2：改为取消关注成功
                case 2:
                    tpl = '';
                    break;
                // 3：改为已关注可取消状态
                case 3:
                    tpl = '';
                    break;
                // 4：改为取消关注成功且删除
                case 4:
                    tpl = '';
                    break;
            }
            return tpl;
        }
    };

    $.fn.follow = function(method){
        if($.isEmptyObject(method)){
            return this.each(function(){
                var that = $(this), data = that.data();
                // 如果data为空则退出
                if($.isEmptyObject(data)){ 
                    return false; 
                }else{
                    follows.bind.call(this, data);
                }
                return this;
            });
        }else if (follows[method]) {
            return follows[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object') {
            return follows.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on $.follow');
        }
    };

})(jQuery);
