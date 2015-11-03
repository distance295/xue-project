/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2015-10-19 23:24:37
 * @version $Id$
 */

var courses = courses || {};
 courses.attention = courses.attention || {};

(function(fa){
    
    /**
     * 关注和取消新鲜事方法
     * @param  {string} dom 任意子节点
     */
    fa.addCancel = function(dom){
        var _url = "ajaxFollow.json"//$(dom).data().url;
        var _type = $(dom).data().type;
        var _params = $(dom).data().params + '&type=' + _type;
        $.ajax({
            type: "post",
            url: _url,
            timeout: 7000,
            dataType: 'json',
            data: _params,
            success: function(msg) {
                if (msg.sign == 2) {
                    window.location.href='http://login.xueersi.com/user/login/aHR0cDovL3d3dy54dWVlcnNpLmNvbS9MZWFybmluZ0NlbnRlci9mb2xsb3c=';
                }else if(msg.sign == 1) {
                    switch(_type){
                        case 1:
                            $(e).html('<em>已关注</em>');
                            break;
                        case 2:
                            $(dom).html('<a href="javascript:void(0)" class="fresh-attention-btn fresh-add-attention-btn"><span class="fresh-add left">+</span><span class="left">关注</span></a>');
                            $(dom).data({type:3});
                            break;
                        case 3:
                            $(dom).html('<em>已关注</em><i class="fresh-course-line">|</i><a href="javascript:void(0)" class="fresh-add-cancel-btn">取消</a>');
                            $(dom).data({type:2});
                            break;
                    }
                }else{
                    alert(msg.msg);
                    return false;
                }
            },
            error: function() {
                alert('数据读取错误..');
            }
        });
    }

})(courses.attention)

/* ================= 关注相关 ============= */

    //点击添加关注按钮
    $('.follow-list').off('click', '.fresh-course-attention .fresh-add-attention-btn').on('click', '.fresh-course-attention .fresh-add-attention-btn', function(){
        var that = $(this).closest('.fresh-course-attention');
        courses.attention.addCancel(that);
    })

    //点击添加取消关注按钮
    $('.follow-list').off('click', '.fresh-course-attention .fresh-add-cancel-btn').on('click', '.fresh-course-attention .fresh-add-cancel-btn', function(){
        var that = $(this).closest('.fresh-course-attention');
        courses.attention.addCancel(that);
    })