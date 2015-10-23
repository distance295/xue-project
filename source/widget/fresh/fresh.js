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
	 * @param  {Object} dom 页面元素
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
     * @param  {Object} dom 页面元素
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
     * @param  {Object} dom 页面元素
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
     * @param  {Object} dom 页面元素
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
     * @param  {Object} dom 页面元素
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
     * @param  {Object} dom 页面元素
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
 * 动态切换大小图片、视频、作答效果
 * @param {Object} fc fresh.comment前缀
 * 
 */
fresh.comment = fresh.comment || {};

(function(fc){

  fc.commentBox ={
      formBox: '<form class="fresh-comment-form" action="javascript:void(0);">\
                      <div class="fresh-comment-title">\
                          <span class="fresh-comment-title-text left">原文评论</span> \
                          <span class="fresh-comment-close-btn right"></span>\
                      </div>\
                      <div class="fresh-comment-textarea">\
                        <!--评论状态开始-->\
                        <!-- <div class="fresh-comment-status">\
                          <span class="fresh-comment-loading">loading</span>\
                        </div> -->\
                        <textarea autofocus="autofocus"></textarea>\
                      </div>\
                      <div class="fresh-comment-func">\
                          <i class="fresh-comment-emote-btn"></i>\
                          <a href="javascript:void(0);" class="fresh-comment-emotetext">表情</a>\
                          <div class="fresh-comment-btn">\
                             <span class="fresh-comment-size">您还可以输入<em class="fresh-comment-text-num"> 140 </em>字</span>\
                             <div class="fresh-comment-submit-btn">\
                                <a href="###" class="small radius button">评论</a>\
                             </div>\
                          </div>\
                      </div>\
                  </form>'
    }

    /**
     * 点击评论切换评论框区域和评论消息方法
     * @param  {Object} dom 页面元素
     */
    fc.toggle = function(dom){

    }  


})(fresh.comment)


