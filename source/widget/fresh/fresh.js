/*******************************************
 *
 * 新鲜事所有交互逻辑业务功能
 * @authors Du xin li
 * @date    2015-10-22
 * @version $Id$
 *
*********************************************/

var fresh = fresh || {};


/**
 * 
 * 动态切换大小图片、视频、作答效果
 * @param {Object} fm fresh.media前缀
 * 
 */
fresh.media = fresh.media || {};

(function(fm){

	fm.img = fm.img || {};
	/**
	 * 切换大小图片方法
	 * @param  {Object} dom 任意子节点
	 */
    fm.img.toggle = function(dom){
        var _img = $(dom);
        //判断是否存在图片，如果不存在则返回false
        if( _img.length == 0 ){ 
       	    return false; 
        } else {
       	    var _url = _img.find('img').attr('src');
            if( _img.hasClass('fresh-media-img-list') ){
            	if( _img.siblings('.fresh-type-img').find('img').length == 0 ){
                   var _tpl ='<div class="fresh-media-big-img">\
      			                    <img src="'+ _url.replace("_small", "_big")+ '">\
      			                  </div>';
                    _img.siblings('.fresh-type-img').html(_tpl);   
            	}
	        }
	        _img.hide();
	        _img.siblings('.fresh-type-img').show();    
        }
    }

    fm.answer = fm.answer || {};

    /**
     * 点击作答按钮动态切换试题大小图方法
     * @param  {Object} dom 任意子节点
     */
    fm.answer.btnToggle = function(dom){
        var that = $(dom), 
            _wrap = that.closest('.fresh-detail'), 
            _item = _wrap.find('.fresh-type-answer');
        _item.toggle();
        if(_item.hasClass('fresh-big-img-answer')){
            _item.find('.fresh-sign-remove').remove();
        }
    }

    /**
     * 点击动态试题图片切换方法
     * @param  {Object} dom 任意子节点
     * @param  {Object} e event对象
     */
    fm.answer.imgToggle = function(dom, e){
        var that = $(dom);
        if($(e.target).data('type') == 'radio'){
            return false;
        }else{
            that.hide().siblings('.fresh-type-answer').show();
            if(that.hasClass('fresh-big-img-answer')){
                that.find('.fresh-sign-remove').remove();
            }
        }
    }

    /**
     * 选择动态试题答案：提交答案
     * @param  {Object} dom 任意子节点
     */
    fm.answer.answerSubmit = function(dom){
        var that = $(dom),
            selectAnswer_Box = that.closest('.fresh-big-answer'),
            smallAnswer_Box = that.closest('.fresh-type-answer').siblings('.fresh-type-answer').find('.fresh-media-small-img');

        //解析html
        var analysis_html = '<div class="fresh-big-analysis">$analysis$</div>';

        //增加答题正确与否与抢金币成功与否的图片提示html
        var bigSign_html = '<div class="fresh-big-sign-exam fresh-sign-remove"><img src="img/$bigSignImg$.png" /></div>';

         //增加大图右上角正确或错误图标html
        var examRight_html = '<i class="fresh-bigimg-examIcon $examRightIcon$"></i>';

        //改变小图试题右上角正确或错误图标html
        var smallRight_html = '<i class="fresh-examIcon $smallRightIcon$"></i>';

        //作题结果提示html
        var examRezult_html = '';

        var _url = window.location.pathname;
        $.ajax('answer.json', {
              type : 'post',
              dataType : 'json',
              data : {
                  url : _url,
                  dynId : that.closest('.feed_detail').data('id'),
                  stuAnswer : $.trim(that.text())
              },
              success : function(data){
                    if( data.sign != 1 ){
                         alert(data.msg);
                         return false;
                    }
                    var dataMsg = data.msg;

                    // 增加解析内容
                    if(dataMsg.analysisimg_path != ''){
                        analysis_html = analysis_html.replace('$analysis$', '<strong>解析</strong><img src="' + dataMsg.analysisimg_path + '">');
                    }else{
                        analysis_html = analysis_html.replace('$analysis$', '');
                    }
                    selectAnswer_Box.after(analysis_html);

                    // 增加右上角正确/错误提示图标
                    if(dataMsg.is_right == '1'){
                        if(dataMsg.is_gold == '1'){
                            bigSign_html = bigSign_html.replace('$bigSignImg$', 'fresh_examtip1');
                        }else{
                            bigSign_html = bigSign_html.replace('$bigSignImg$', 'fresh_examtip');
                        }
                        examRight_html = examRight_html.replace('$examRightIcon$', 'fresh-bigimg-examIcon-right');
                        smallRight_html = smallRight_html.replace('$smallRightIcon$', 'fresh-examIcon-right');
                    }else{
                        bigSign_html = bigSign_html.replace('$bigSignImg$', 'fresh_examtip2');
                        examRight_html = examRight_html.replace('$examRightIcon$', 'fresh-bigimg-examIcon-error');
                        smallRight_html = smallRight_html.replace('$smallRightIcon$', 'fresh-examIcon-error');
                    }
                    selectAnswer_Box.before(bigSign_html);
                    selectAnswer_Box.after(examRight_html);
                    smallAnswer_Box.append(smallRight_html);

                    //作题结果提示
                    examRezult_html += '您的答案是：<em>'+ dataMsg.stu_answer +'</em>&nbsp;&nbsp;';
                    examRezult_html += '&nbsp;&nbsp;参考答案是：<span>'+ dataMsg.right_answer +'</span>&nbsp;&nbsp;&nbsp;&nbsp;';
                    if(dataMsg.right_num <= 5){
                        examRezult_html += '<span class="fresh-sign-remove">每日五题已答对<em> '+ dataMsg.right_num +' </em>题</span>&nbsp;&nbsp;&nbsp;&nbsp;';
                    }else{
                        examRezult_html += '<span class="fresh-sign-remove">每日五题已完成</span>';
                    }
                    examRezult_html += '<span class="fresh-sign-remove">你是第<em> '+ dataMsg.dyn_que_replynum +' </em>';
                    examRezult_html += '<span class="fresh-sign-remove">你是第<em> '+ dataMsg.dyn_que_replynum +' </em>个答题的学员，已有<em> '+ dataMsg.dyn_que_rightnum +' </em>人答对!</span>';
                    selectAnswer_Box.html(examRezult_html)
              }
        });
    };

    fm.video = fm.video || {};

    /**
     * 新鲜事点击视频缩略图展开播放视频方法
     * @param  {Object} dom 任意子节点
     */
    fm.video.videoPlay = function(dom){
        var videoBox = $(dom).closest('.fresh-type-video');
        //视频div层显示
        videoBox.next().show();
        //视频缩略图隐藏
        videoBox.hide();//图隐藏
        var url = videoBox.next().data('url');
        var video_html ='<div class="fresh-media-big-video">'
                            + '<p class="fresh-media-packUp"><a href="javascript:void(0);" class="fresh-packUp-video">收起</a></p>'
                            + '<div id="flashcontent" style ="height:408px;">'
                            + '<object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" height="408" width="600"> '
                            + '<param name="movie" value="http://www.xueersi.com/flash/xueersiPlayer.swf" />'
                            + '<param name="quality" value="high" />'
                            + '<param name="wmode" value="opaque" />'
                            + '<param name="allowscriptaccess" value="always">'
                            + '<param name="allowFullScreen" value="true" />'
                            + '<param name="swfversion" value="9.0.115.0" />'
                            + '<param name="FlashVars" value="url='+ url +'/&autoPlay=true" />'
                            + '<!-- 此 param 标签提示使用 Flash Player 6.0 r65 和更高版本的用户下载最新版本的 Flash Player。如果您不想让用户看到该提示，请将其删除。 -->'
                            + '<param name="expressinstall" value="./player/expressInstall.swf" />'
                            + '<!-- 下一个对象标签用于非 IE 浏览器。所以使用 IECC 将其从 IE 隐藏。 --> '
                            + '<!--[if !IE]>-->'
                            + '<object type="application/x-shockwave-flash" data="http://www.xueersi.com/flash/xueersiPlayer.swf" height="100%" width="100%">'
                            + '<!--<![endif]-->'
                            + '<param name="quality" value="high" />'
                            + '<param name="wmode" value="opaque" />'
                            + '<param name="allowscriptaccess" value="always">'
                            + '<param name="allowFullScreen" value="true" />'          
                            + '<param name="swfversion" value="9.0.115.0" />'         
                            + '<param name="expressinstall" value="player/expressInstall.swf" />'
                            +'<param name="FlashVars" value="url='+ url +'/&autoPlay=true" />'
                            +'<!-- 浏览器将以下替代内容显示给使用 Flash Player 6.0 和更低版本的用户。 -->'
                            +'<div>'
                            +'<h4>此页面上的内容需要较新版本的 Adobe Flash Player。</h4>'
                            +'<p><a href="http://www.adobe.com/go/getflashplayer"><img src="http://www.adobe.com/images/shared/download_buttons/get_flash_player.gif" alt="获取 Adobe Flash Player" height="33" width="112" /></a></p>'
                            +'</div>'
                            +'<!--[if !IE]>-->'
                            +'</object>    '       
                            +'<!--<![endif]-->'
                            +'</object>'
                          + '</div>'
                        + '</div>'; 
        videoBox.next().html(video_html);  
    }
    
    /**
     * 点击视频大图上的收起显示小图视频方法
     * @param  {Object} dom 任意子节点
     */
    fm.video.videoHide = function(dom){
        var videoBox = $(dom).closest(".fresh-media-expand-video");
        videoBox.hide();
        videoBox.prev().show();
        videoBox.find(".fresh-media-big-video").remove();
  } 

})(fresh.media);




/**
 * 
 * 评论所有相关业务
 * @param {Object} fc fresh.comment前缀
 * 
 */
fresh.comment = fresh.comment || {};

(function(fc){

  fc.tpl ={
      formBox: '<form class="fresh-comment-form fresh-parentComment-formBox" action="javascript:void(0);">\
                      <div class="fresh-comment-title">\
                          <span class="fresh-comment-title-text left">原文评论</span> \
                          <span class="fresh-comment-close-btn right"></span>\
                      </div>\
                      <div class="fresh-comment-textarea">\
                        <textarea></textarea>\
                      </div>\
                      <div class="fresh-comment-func">\
                          <i class="fresh-comment-emote-btn"></i>\
                          <a href="javascript:void(0);" class="fresh-comment-emotetext">表情</a>\
                          <div class="fresh-comment-btn">\
                             <span class="fresh-comment-size">您还可以输入<em class="fresh-comment-text-num"> 140 </em>字</span>\
                             <div class="fresh-comment-submit-btn">\
                                <a href="javascript:void(0);" class="small radius button">评论</a>\
                             </div>\
                          </div>\
                      </div>\
                  </form>',
      replyForm: '<form class="fresh-comment-form fresh-comment-repley" action="javascript:void(0);">\
                      <div class="fresh-comment-textarea">\
                        <textarea>$textarea$</textarea>\
                      </div>\
                      <div class="fresh-comment-func">\
                          <i class="fresh-comment-emote-btn"></i>\
                          <a href="javascript:void(0);" class="fresh-comment-emotetext">表情</a>\
                          <div class="fresh-comment-btn">\
                             <div class="fresh-comment-submit-btn">\
                                <a href="javascript:void(0);" class="small radius button">评论</a>\
                             </div>\
                          </div>\
                      </div>\
                  </form>'            
    };

    fc.param = {
        wraper: null,//单条评论信息fresh-detail类名
        commentBox: null,//单条评论信息评论框fresh-comment-box类名
        infoBox: null,//显示评论信息的fresh-comment-detail-info类名
        bar: null,//评论按钮fresh-comment-expand-btn类名
        close: null,//评论框的关闭按钮fresh-comment-close-btn类名
        form: null,//评论框文本域fresh-comment-textarea类名下的textarea
        submit: null,//提交评论按钮fresh-comment-submit-btn类名下的a
        textSzie: null,//评论文字限制区域的文字数量fresh-comment-text-num类名
        status: null//发送评论状态显示fresh-comment-status类名在fresh-comment-textarea的自己中
    };

    /**
     * 设置默认参数
     * @param  {Object} dom 任意子节点
     */
    fc.setParam = function(dom) {
        var that = $(dom);

        if (that.length == 0) {
            return false;
        }
        var wraper = that.closest('.fresh-detail');
        if (wraper.length == 0) {
            return false;
        }
        //获取信息id
        this.id = wraper.data('id');
        var _infoBox = null;
        if( wraper.find('.fresh-comment-detail-info').length == 0 ){
            _infoBox = wraper.closest('.fresh-comment-detail-info');
        } else {
            _infoBox = wraper.find('.fresh-comment-detail-info');
        }
        var _commentBox = null;
        if( wraper.find('.fresh-comment-box').length == 0 ){
            _commentBox = wraper.closest('.fresh-comment-box');
        } else {
            _commentBox = wraper.find('.fresh-comment-box');
        }
        this.param = {
            wraper: wraper,
            commentBox: _commentBox,
            bar: wraper.find('.fresh-comment-expand-btn'),
            infoBox: _infoBox,
            close: wraper.find('.fresh-comment-close-btn'),
            form: wraper.find('.fresh-comment-textarea:eq(0) textarea'),
            submit: wraper.find('.fresh-comment-submit-btn:eq(0) a'),
            textSzie: wraper.find('.fresh-comment-form:eq(0)').find('.fresh-comment-text-num'),
            status: wraper.find('.fresh-comment-form:eq(0)').find('.fresh-comment-status')
        };
    }

    /**
     * 点击评论切换评论框区域和评论消息方法
     * @param  {Object} dom 任意子节点
     */
    fc.toggle = function(dom){
        if(dom){
           this.setParam(dom);
        }else{
           return false;
        }
        if( this.param.bar.hasClass('fresh-comment-show') ){
           this.hide();
        } else {
           this.show(dom);
        }
        
    } 

    /**
     * 评论框区域和评论消息显示方法
     * @param  {Object} dom 任意子节点
     */
    fc.show = function(dom){
        this.param.bar.addClass('fresh-comment-show');
        var _formBox = this.tpl.formBox;
        this.param.commentBox.removeClass('hide')
        if( this.param.commentBox.find('.fresh-parentComment-formBox').length == 0 ){
            this.param.commentBox.prepend(_formBox);
        }
        this.getList(dom);

    }

    /**
     * 评论框区域和评论消息隐藏方法
     * @param  {Object} dom 任意子节点
     */
    fc.hide = function(){
        this.param.bar.removeClass('fresh-comment-show');
        this.param.commentBox.addClass('hide');
        // 隐藏后初始化参数
        $.each(this.param, function(k, v) {
            fc.param[k] = null;
        });
    }

    /**
     * 关闭评论框方法
     * @param  {Object} dom 任意子节点
     */
    fc.close = function(dom){
        if(dom){
           this.setParam(dom);
        }else{
           return false;
        }
        //判断评论类型
        if (this.param.bar.data('type') && this.param.bar.data('type') == 2) {
            return false;
        }
        this.hide();
    }

    /**
     * 获取评论列表信息
     * @param  {Object} dom 任意子节点
     */
    fc.getList = function(dom){

        if(dom){
          this.setParam(dom);
        }

        //ajax获取评论信息
        $.ajax({
            url: 'coment.html',
            type: 'POST',
            dataType: 'html',
            data: {
                'dynId': fc.id
            },
            beforeSend: function() {
                fc.param.infoBox.html('<span class="fresh-commentInfo-loading">Loading...</span>');
            },
            success: function(data) {
                fc.setMsg(data);
            },
            error: function(a, b, c) {
                alert(c);
            },
            complete: function() {
                fc.param.infoBox.find('.fresh-commentInfo-loading').remove();
            }
        }); 
    }
     
    /**
     * 设置评论内容信息方法
     * @param  {string} msg 评论信息html内容
     */
    fc.setMsg = function(msg) {
        if (!msg) {
            return false;
        }
        //如果没有评论消息返回的是暂无评论的html
        this.param.infoBox.html(msg);
        this.param.commentBox.find('.fresh-comment-form:eq(0) textarea').focus();
        //判断关闭按钮显示与否
        if ( this.param.bar.data('codetype') && this.param.bar.data('codetype') == 1) {
            this.param.close.hide();
        } else {
            this.param.close.show();
        }
    }

    /**
     * 评论框文本域属于字数限制方法
     * @param  {string} dom 任意子节点
     */
    fc.textareaNum = function(dom) {
        var that = $(dom);
        if (that.length == 0) {
            return false;
        }
        var val = $.trim(that.val());
        var len = val.length;
        var form = that.closest('.fresh-comment-form'),
            size = form.find('.fresh-comment-size .fresh-comment-text-num');

        if (len > 140) {
            that.val(val.substring(0, 140));
            size.text(0);
            return false;
        } else {
            size.text(140 - len);
        }
    };

    /**
     * 设置评论数量方法
     * @param  {string} dom 任意子节点
     */
    fc.setcount = function() {
        var countbox = this.param.commentBox.prev('.fresh-barinfo').find('.fresh-comment-expand-btn').next('em').find('i');
        if( countbox.length == 0){
            return false;
        }
        var _num = Number(countbox.text());
        _num++;
        countbox.text(_num);
    };
    
    /**
     * 发布评论方法
     * @param  {string} dom 任意子节点
     */
    fc.post = function(dom){

        //判断元素节点是否存在
        if (dom) {
            this.setParam(dom);
        } else {
            return false;
        }
        var that = $(dom);
        if (that.length == 0) {
            return false;
        }
        
        var val = $.trim(this.param.form.val());
        var len = val.length;
        if( len == 0 ){
           alert('请您填写内容');
           return false; 
        }
        
        //验证码的值
        var vd = $('#verificationCode').val() || '';
        var _tipCode = $('#fresh-dialog-tips-Code');
        
        var param = this.param.wraper.data('params') || {
            'dynId': fc.id,
            'content': val,
            'verificationCode': vd
        };
        $.ajax({
            url: 'ajaxAddDynComment.json',//添加成功与否验证ajax
            data: param + '&content=' + encodeURIComponent(val) + '&verificationCode=' + vd,
            type: 'POST',
            dataType: 'json',
            beforeSend: function() {
                fc.param.form.before('<div class="fresh-comment-status"><span class="fresh-comment-loading">Loading...</span></div>');
                fc.param.submit.before('<span class="fresh-comment-submit-disabled"></span>');
                $('.fresh-dialog-verificationCode .fresh-dialog-sure-btn a').addClass('fresh-dialog-btn-disabled');
                //重新设置参数才能获取到动态增加的元素状态
                fc.setParam(dom);
            },
            success: function(data) {
                var tp = data.sign,
                    msg = data.msg;
                if( tp === 0 ){
                    alert(msg);
                    fc.param.form.val('');
                    fc.param.textSzie.text(140);
                    return false;
                } else if( tp === 1 ) {
                    //关闭验证弹出层
                    fc.param.form.val('');
                    fc.param.status.html('<span class="fresh-comment-success">发布成功</span>');
                    //获取信息列表
                    fc.getList(dom);
                    fc.setcount();
                    //文本框清空后可属于数字还原
                    fc.param.textSzie.text(140);
                } else if( tp === 2 ) {
                    //跳转页面
                    window.location.href = msg;
                } else if( tp === 3 ) {
                    _tipCode.text(msg);
                    $('#verificationCode').focus();
                    $('.fresh-dialog-verificationCode .fresh-dialog-sure-btn a').removeClass('fresh-dialog-btn-disabled');
                    return false;
                } else{
                    return false;
                }  
            },
            error: function(a, b, c) {
                  fc.param.form.before('<div class="fresh-comment-status"><span class="fresh-comment-warning">' + c + '</span></div>');
            },
            complete: function() {
                setTimeout(function() {
                    fc.param.status.fadeOut('fast', function() {
                        $(this).remove();
                    });
                    fc.param.submit.closest('.fresh-comment-func').find('.fresh-comment-submit-disabled').remove();
                    $('#verificationCode').focus();
                }, 1000);
            }
        });
    }

    /**
     * 发布评论检测是否需要验证码
     * @param  {string} dom 任意子节点
     */
    fc.sendComment = function(dom){
        //判断元素节点是否存在
        if (dom) {
            this.setParam(dom);
        } else {
            return false;
        }
        var that = $(dom);
        if (that.length == 0) {
            return false;
        }

        var val = $.trim(this.param.form.val());
        var len = val.length;
        if( len == 0 ){
           alert('请您填写内容');
           return false; 
        }
        var _dataInfo = $(dom).closest('.fresh-comment-box').prev('.fresh-barinfo').find('.fresh-comment-expand-btn');
        var _par = _dataInfo.data('params');
        var _ty = _dataInfo.data('codetype');
        $.ajax({
            url: 'ajaxCheckVerCode.json',
            type: 'POST',
            dataType: 'JSON',
            data: _par + '&codetype='+_ty,
            success: function(data) {
                var tp = data.sign,
                    msg = data.msg;
                if( tp === 0 ){//错误提醒   
                    alert(msg);
                    fc.param.form.val('');
                    fc.param.textSzie.text(140);
                    return false;
                } else if( tp === 1 ) {//不需要验证码验证直接提交
                    fc.post(dom);
                } else if( tp === 2 ) {//跳转页面
                    window.location.href = msg;
                } else if( tp === 3 ) {//需要验证码 弹出证码提示框
                    //缺少弹出层现实效果
                    //获取验证码
                    fc.changeVerificationImg('verificationImg');
                    //点击验证码弹出层中的确定按钮
                    $('body').on('click' , '.fresh-dialog-sure-btn a' , function(){
                        var _val = $('#verificationCode').val();  
                        var _tipCode = $('#fresh-dialog-tips-Code');
                        if( _val == '' ){
                            _tipCode.text('请输入验证码'); 
                            $('#verificationCode').focus();
                            return false;
                        } else if( !/^[a-zA-Z0-9]{4,4}$/.test(_val) ) {
                             _tipCode.text('验证码错误，请重新输入'); 
                        }
                        if( $(this).hasClass('fresh-dialog-btn-disabled') ){
                            return false;
                        }
                         fc.post(dom);
                    })
                } else{
                    return false;
                }
            }
        });
    }

    /**
     * 调用验证码方法
     * @param  {imgId} dom 任意子节点
     */
    fc.changeVerificationImg = function(imgId){
        $.ajax({
            url: 'ajaxGetVerCode.json',
            type: 'post',
            dataType: 'json',
            success  : function(data){
                if(data.sign == 1){
                  $('img[id="' + imgId + '"]').attr('src', data.msg);
                }
            }
        })
    }

    /**
     * 评论列表里回复区域评论切换
     * @param  {string} dom 任意子节点
     */
    fc.replyToggle = function(dom){
        if (dom) {
            this.setParam(dom);
        } else {
            return false;
        }
        var _tpl = this.tpl.replyForm,
            _wraper = this.param.wraper,
            _text = _wraper.find('.fresh-text .fresh-info')
            _user = _wraper.find('.fresh-text .fresh-uesr'),
            _bar  = _wraper.find('.fresh-barinfo');

        //将HTML大写标签转换为小写
        _text = _text.html().replace(/<[^>].*?>/g,function(a1){
            var dom = a1.toLowerCase();
            return dom;
        });

        //查找img标签，替换为img的title
        _text = _text.replace(/<img.*?>/g,function(a1){
            var img = $(a1),
                tit = img.attr('title');
            if(img.attr('src').indexOf('http://img04.xesimg.com/icon/emoji') > -1){
                return '[' + tit + ']';
            }else{
                return a1;
            }
        });

        // 再去掉内容中的所有标签
        _text = _text.replace(/<[^>].*?>/g,'');
        _tpl = _tpl.replace('$textarea$', '//@' + _user.data('user') + ' ' + _text);

        var form = _bar.next('.fresh-comment-repley');
        if (form.length == 0) {
            _bar.after(_tpl);
            _bar.next().find('.fresh-comment-textarea textarea').focus();
        } else {
            form.remove();
        }
    }

    /**
     * 点击表情按钮插入表情方法
     * @param  {string} dom 任意子节点
     * @param  {Object} event event对象
     * @param  {number} send 判断是发送新鲜事表情还是评论中的表情,send存在是发送新鲜事的表情，不存在是评论
     */
    fc.emote = function(dom, event, send){
        //当前文本框textarea
        var _currentTextarea = null;
        //判断是评论中表情还是发送新鲜事表情
        if( send ){
            _currentTextarea = $(dom).closest('.fresh-send-box').find('.fresh-send-textareaBox');
        } else {
            if (dom) {
                this.setParam(dom);
            } else {
                return false;
            }
            _currentTextarea = this.param.form;
        }

        var e = window.event || event;
        if(e.stopPropagation){
            e.stopPropagation();
        }else{
            e.cancelBubble = true;
        } 
        
        //显示表情弹出层
        $('.fresh-dialog-emote').removeClass('hide');
        
        //点击表情插入文本框
        $('.fresh-dialog-emote').off('click', '.fresh-jsSmilies li').on('click', '.fresh-jsSmilies li', function(){
              var _val = $(this).data('action');
              _currentTextarea.focus();
              _currentTextarea.insertContent(_val);
              $('.fresh-dialog-emote').addClass('hide');
        })

        //关闭表情层(关闭表情弹出层)
        $('.fresh-dialog-emote').off('click', '.fresh-smilies-close').on('click', '.fresh-smilies-close', function(){
            $(this).closest('.fresh-dialog-emote').addClass('hide');
        });

         //tabs和分页切换
         this.emoteTabs(".fresh-smilies-tabs","current",".fresh-dialog-smilies-box");
         this.emoteTabs(".fresh-smilies-page-box","current",".fresh-dialog-smilies-con");
    }

    /**
     * 删除新鲜事和评论方法
     * @param  {Object} tabTit 任意子节点
     * @param  {Object} on 任意类名
     * @param  {Object} tabCon 任意子节点
     */
    fc.emoteTabs = function(tabTit, on, tabCon){
        $(tabTit).children().click(function(){
            $(this).addClass(on).siblings().removeClass(on);
            var index = $(tabTit).children().index(this);
            $(tabCon).children().eq(index).show().siblings('ul').hide();
        });
    }

    /**
     * 删除新鲜事和评论方法
     * @param  {string} dom 任意子节点
     */
    fc.delComment = function(dom){
        if(dom){
          this.setParam(dom);
        }else{
          return false;
        }
        //判断删除的是新鲜事还是评论中的删除
        var _type = $(dom).data().sign;
        //需要传递的参数
        var _data = $(dom).data('params');
        $('.fresh-dialog-delete').removeClass('hide');

        //提示信息
        var tipInfo = null;
        if( _type == 1){
            tipInfo = '你确定删除该新鲜事吗?';
        } else if( _type == 2 ){
            tipInfo = '你确定删除该评论吗?';
        }
        $('.fresh-dialog-delete .fresh-dialog-delete-tips').html(tipInfo);
        
        //点击确认按钮删除
        $('body').off('click', '.fresh-dialog-delete .fresh-sure-btn').on('click', '.fresh-dialog-delete .fresh-sure-btn', function(){
             console.log(123456)
              $.ajax({
                  url: "ajaxDelDynamic.json",
                  type: 'POST',
                  dataType: 'json',
                  data: _data,
                  success: function(data) {
                      var _tp = data.sign;
                          _msg = data.msg;
                      if( _tp ==0 ){
                          alert(_msg);
                          return false;
                      } else if( _tp == 1 ){
                          if( _type == 2 ){
                               var changebox = fc.param.commentBox.prev('.fresh-barinfo').find('.fresh-comment-expand-btn').next('em').find('i');
                               if( changebox.length == 0){
                                    return false;
                                }
                                var _num = Number(changebox.text());
                                _num--;
                                changebox.text(_num);
                                fc.getList(dom);
                          } else if( _type == 1 ){
                                 var changeText = "抱歉，该新鲜事已被删除";
                                 var changeBox = fc.param.wraper.find('.fresh-text:eq(0) .fresh-info');
                                 changeBox.html(changeText);
                                 //删除右侧文本中除了文本头部和显示时间的地方
                                 fc.param.commentBox.remove();//删除评论框所有信息
                                 fc.param.wraper.find('.fresh-media').remove();//删除图片
                                 fc.param.wraper.find('.fresh-barinfo:eq(0) .fresh-right').remove();//删除评论和删除以及收藏按钮
                          } else {
                                 return false;
                          }
                      } else if( _tp == 2 ){
                          window.location.href = _msg;
                          return false;
                      } else {
                           return false;
                      }  
                       $('.fresh-dialog-delete').addClass('hide');
                  }
              });
        })
        
        //点击取消按钮
        $('body').off('click', '.fresh-dialog-delete .fresh-cancel-btn').on('click', '.fresh-dialog-delete .fresh-cancel-btn', function(){
            console.log(123)
            $('.fresh-dialog-delete').addClass('hide');
        })
        

    }
    
})(fresh.comment);


/**
 * 
 * 添加收藏和取消收藏相关业务
 * @param {Object} fc fresh.collect
 * 
 */
fresh.collect = fresh.collect || {};

(function(fl){
   
    /**
     * 添加收藏方法
     * @param  {string} dom 任意子节点
     */
    fl.add = function(dom){
        var that = $(dom);
        var params = $(dom).data().params;
        if( !params ){
           return false;
        }
        that.removeClass('fresh-collect-add-btn');
        $.ajax({
            url: 'ajaxAddCollect.json',
            data:params,
            type : 'POST',
            dataType:'json',
            success:function(data){
                if(data){
                    //收藏成功弹出层显示
                    $('.fresh-dialog-collect').removeClass('hide');//模拟假的弹出层

                    var collectBox = that.next('em').find('i');
                    setTimeout(function(){
                        that.html('取消收藏');
                        //改变收藏的数量
                        if(collectBox.length > 0){
                            var _num = Number(collectBox.text());
                            _num++;
                            collectBox.text(_num);
                        }
                        that.addClass('fresh-collect-cancel-btn');
                        $('.fresh-dialog-collect').addClass('hide');//模拟假的弹出层
                    }, 1000);
                }else{
                    that.addClass('fresh-collect-cancel-btn');
                }      
            }
        });
    }

    /**
     * 取消收藏方法
     * @param  {string} dom 任意子节点
     */
    fl.cancel = function(dom){
        var that = $(dom);
        var params = $(dom).data().params;
        if( !params ){
           return false;
        }
        that.removeClass('fresh-collect-cancel-btn');
        $.ajax({
            url: 'ajaxCancelCollect.json',
            data:params,
            type : 'POST',
            dataType:'json',
            success:function(data){
                if(data){
                    //收藏成功弹出层显示
                    $('.fresh-dialog-collect').removeClass('hide');//模拟假的弹出层
                    var collectBox = that.next('em').find('i');
                    setTimeout(function(){
                        that.html('收藏');
                        //改变收藏的数量
                        if(collectBox.length > 0){
                            var _num = Number(collectBox.text());
                            if( _num >0 ){
                                _num--;
                            } else {
                                return false;
                            }
                            collectBox.text(_num);
                        }
                        that.addClass('fresh-collect-add-btn');
                        $('.fresh-dialog-collect').addClass('hide');//模拟假的弹出层
                    }, 1000);
                }else{
                    that.addClass('fresh-collect-add-btn');
                }      
            }
        });
    }

})(fresh.collect)


/**
 * 
 * 发送新鲜事相关业务
 * @param {Object} fc fresh.send
 * 
 */
fresh.send = fresh.send || {};

(function(fs){

    /**
     * 限制发送新鲜事文本域可输入字数方法
     * @param  {string} dom 任意子节点
     */
    fs.limitNum = function(dom) {
        var that = $(dom);
        if (that.length == 0) {
            return false;
        }
        var val = $.trim(that.val());
        var len = val.length;
        var sendBox = that.closest('.fresh-send-box'),
            size = sendBox.find('.fresh-send-text-num');
        if (len > 140) {
            that.val(val.substring(0, 140));
            size.text(0);
            return false;
        } else {
            size.text(140 - len);
        }
    };

    /**
     * 发布新鲜事图片上传方法
     * @param  {string} dom 任意子节点
     */
    fs.fileupload = function(dom) {
        var that =$(dom);
        if( that.length == 0 ){
          return false;
        }
        if (!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG)$/.test(dom.value)) {
            alert('图片格式无效！');
            return false;
        }
        //显示图片预览区域
        $('#fresh-send-preview').removeClass('hide');
        $('.fresh-send-preview-imgvideo').find('img').attr('src', 'http://img04.xesimg.com/loading.gif');
        this.setImagePreview('fresh-fileToUpload', 'fresh-send-preview-img', 'fresh-send-preview-imgvideo');
    };

    /**
     * 上传图片本地预览方法
     * @param {Object} fileObj 上传文件file的id元素  fresh-fileToUpload 
     * @param {Object} previewObj 上传图片的预览id元素  fresh-send-preview-img
     * @param {Object} localImg 预览图片的父层id元素  fresh-send-preview-imgvideo
     */
    fs.setImagePreview =function(fileObj, previewObj, localImg) {
          var docObj = document.getElementById(fileObj);
          var imgObjPreview = document.getElementById(previewObj);

          if (docObj.files && docObj.files[0]) {
              //火狐下，直接设img属性
              //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式  
              imgObjPreview.src = window.URL.createObjectURL(docObj.files[0]);
          } else {
              //IE下，使用滤镜
              docObj.select();
              var imgSrc = document.selection.createRange().text;
              var localImagId = document.getElementById(localImg);
              //必须设置初始大小
              // localImagId.style.width = "120px";
              // localImagId.style.height = "80px";
              //图片异常的捕捉，防止用户修改后缀来伪造图片
              try {
                  localImagId.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale)";
                  localImagId.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = imgSrc;
              } catch (e) {
                  alert("您上传的图片格式不正确，请重新选择!");
                  return false;
              }
              imgObjPreview.style.display = 'none';
              document.selection.empty();
          }

          return true;
    }

    /**
     * 点击发送按钮，弹出发送新鲜事弹出框的方法
     * @param  {string} dom 任意子节点
     */
    fs.box = function(dom) {
        //虚拟弹出层显示新鲜事弹出层
        $('.fresh-send-box').removeClass('hide');
    };

    /**
     * 提交新鲜事方法
     * @param  {string} dom 任意子节点
     */
    fs.submit = function(dom) {
        var _form = $(dom);
        if( _form.length == 0 ){
            return false;
        }
        var textarea = _form.find('textarea.fresh-send-textareaBox'),
            content = $.trim(textarea.val()),
            len = content.length;

        if(len < 10 || len > 140 || len == 0){
            alert('请填写内容，长度在10~140之间');
            return false;
        }else{
            _form.submit();
        }
    };

    /**
     * 发送新鲜事检测数据时间方法
     * @param  {string} dom 任意子节点
     */
    fs.checkData = function(){
        Today = new Date(); 
        var NowHour = Today.getHours(); 
        var NowMinute = Today.getMinutes(); 
        var NowSecond = Today.getSeconds(); 
        var mysec = (NowHour*3600)+(NowMinute*60)+NowSecond; 
        var a = document.formsubmitf.mypretime.value;
        
        if((mysec-document.formsubmitf.mypretime.value)>60){//600只是一个时间值，就是5秒钟内禁止重复提交，值随你高兴设  
            document.formsubmitf.mypretime.value=mysec; 
        } else {
            //alert(' 按一次就够了，请勿重复提交！请耐心等待！谢谢合作！'); 
            return false; 
        }
        document.forms.formsubmitf.submit(); 
    }
  
})(fresh.send)


/**
 * 
 * 关注新鲜事相关业务
 * @param {Object} fc fresh.attention
 * 
 */
fresh.attention = fresh.attention || {};

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

})(fresh.attention)





/*******************************************
 *
 * 插入光标处的插件
 * @authors Du xin li
 * @update    2015-10-25
 *
*********************************************/

$.fn.extend({  
    insertContent : function(myValue, t) {  
        var that = $(this);
        var $t = $(this)[0];  
        if (document.selection) {  
            this.focus();  
            var sel = document.selection.createRange();  
            sel.text = myValue;  
            this.focus();  
            sel.moveStart('character', -l);  
            var wee = sel.text.length;  
            if (arguments.length == 2) {  
            var l = $t.value.length;  
            sel.moveEnd("character", wee + t);  
            t <= 0 ? sel.moveStart("character", wee - 2 * t - myValue.length) : sel.moveStart("character", wee - t - myValue.length);  
            sel.select();  
            }  
        } else if ($t.selectionStart || $t.selectionStart == '0') {  
            var startPos = $t.selectionStart;  
            var endPos = $t.selectionEnd;  
            var scrollTop = $t.scrollTop;  
            $t.value = $t.value.substring(0, startPos) + myValue + $t.value.substring(endPos,$t.value.length);  
            this.focus();  
            $t.selectionStart = startPos + myValue.length;  
            $t.selectionEnd = startPos + myValue.length;  
            $t.scrollTop = scrollTop;  
            if (arguments.length == 2) { 
                $t.setSelectionRange(startPos - t,$t.selectionEnd + t);  
                this.focus(); 
            }  
        } else {                              
            this.value += myValue;                              
            this.focus();  
        }  
    }  
})


