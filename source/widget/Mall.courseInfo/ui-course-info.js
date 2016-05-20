/**
 * @name ui-course-infor.js
 * @description 课程详情页
 * 
 * @author alexliu
 * @modify 2013-07-12 16:52:31
 * @links https://github.com/xueAlex/
 */
// 课程详情页头像切换封装函数
var xue = xue || {};
xue.avatar = xue.avatar || {};

(function () {
    var a = xue.avatar;

    a.box = {
        pic: null,
        list: null,
        btn: null
    };

    a.step = $(".avatar_items li").width();
    a.size = 0;
    a.max = 0;

    a.len = 0;

    a.toggle = function (expr) {
        var btn = $(expr);
        if (btn.length == 0) {
            return;
        }
        var wrap = btn.parent();
        var pic = wrap.hasClass('avatar_roll') ? wrap.siblings('.avatar_items') : wrap.find('.avatar_items');
        if (pic.length == 0) {
            return;
        }


        this.box.pic = pic;
        this.box.list = pic.find('li');
        this.box.btn = btn;
        this.box.prev = btn.hasClass('prev') ? btn : btn.siblings('.prev');
        this.box.next = btn.hasClass('next') ? btn : btn.siblings('.next');
        this.size = this.box.list.length;
        this.max = this.size - 1;

        var list = pic.find('li');
        var left = pic.css('margin-left');

        this.left = Number(left.replace('px', ''));

        if (btn.hasClass('prev')) {
            a.prev();
        } else {
            a.next();
        }
    }

    a.prev = function () {

        if (a.left < 0) {
            a.box.pic.animate({
                marginLeft: '+=' + a.step + 'px'
            }, 500, function () {
                a.left += a.step;
                a.setCls();
                if (a.left >= 0) {
                    $(this).clearQueue();
                }
            });
        } else {
            a.box.pic.clearQueue();
        }
    };

    a.next = function () {
        var box = a.box.pic,
            left = Number(box.css('margin-left').replace('px', ''));

        if (a.left > -(a.max * a.step)) {
            a.box.pic.animate({
                marginLeft: '-=' + a.step + 'px'
            }, 500, function () {
                a.left -= a.step;
                a.setCls();
                if (a.left <= -(a.max * a.step)) {
                    $(this).clearQueue();
                }
            });
        } else {
            a.box.pic.clearQueue();
        }
    };

    a.setCls = function () {
        var hasNext = Math.abs(a.left) < ((a.box.list.length - 1) * a.step);
        var hasPrev = a.left < 0;

        if (hasNext) {
            a.box.next.removeClass('none');
        } else {
            a.box.next.addClass('none');
        }

        if (hasPrev) {
            a.box.prev.removeClass('none');
        } else {
            a.box.prev.addClass('none');
        }
    };

})(xue.avatar);
var courseInfor = courseInfor || {};
//视频弹层方法封装
courseInfor.videoPlaySwitch = function (u, w, h, t) {
        xue.win({
            id: 'videoPlayWrap',
            title: t,
            content: '<iframe frameborder="0" scrolling="no" src="' + u + '" width="100%" height="100%"> </iframe>',
            width: w,
            height: h,
            lock: true,
            close: true,
            submit: false,
            cancel: false
        });
        if($('#xuebox_videoPlayWrap').length == 1){
            $('body').css('overflow-y','hidden');
        }
        $('#xuebox_videoPlayWrap .dialog_close').on('click',function(){
             $('body').css('overflow-y','scroll');
        });
    }
    //课程大纲切换方法
courseInfor.courseTab = function (tabTit, on, tabCon) {
        var items = $(tabTit).children();
        items.click(function () {
            var that = $(this),
                con = $(tabCon).children(),
                index = items.index(this);
            that.addClass(on).siblings().removeClass(on);
            con.eq(index).show().siblings().hide();
        });
    }
    //直播课程详情页---查看直播时间列表
//courseInfor.lookTimeList = function () {
//    var that = $('#lookTimeList');
//    that.on('click', function (event) {
//        $('.ui-nav-link li:eq(1)').addClass('current').siblings().removeClass('current');
//        $('.course-info-box .course-detail:eq(1)').show().siblings().hide();
//    });
//}

//返回顶部
//2016-01-11-18：00
//xue.feedback = xue.feedback || {};
//
//(function () {
//    var f = xue.feedback;
//            f._tpl='<div class="rightResearch" id="FeedBack">'
//					+'		<ul>'
//					+'			<li><a xes_id="side_QQ" id="r_copyright" href="http://bbs.xueersi.com/thread-280270-1-1.html" target="_blank"></a></li>'
//					+'			<li><a xes_id="side_feedback" id="r_feedBack" target="_blank" href="http://bbs.xueersi.com/thread-362132-1-1.html"></a></li>'
//					+'			<li><a id="r_toTop" href="javascript:scroll(0,0);" style="display:none;"></a></li>'
//					+'			<li id="copy_notice" style="width:170px;">'
//					+'			</li>'
//					+'		</ul>'
//					+'	</div>';
//
//    f.append = function () {
//        if ($('#FeedBack').length == 0) {
//            $('body').append(f._tpl);
//        } else {
//            $('#FeedBack').show();
//        }
//
//        f.listener();
//
//        return this;
//    };
//
//    f.listener = function () {
//        $('#r_copyright').on('mouseenter', function () {
//            f.hover(this);
//        });
//        $(window).scroll(function () {
//            f.gotop();
//        });
//    };
//
//    f.gotop = function () {
//        var _scrollTop = $(window).scrollTop();
//
//        if (_scrollTop > $(window).height()) {
//            $('#r_toTop').show();
//        } else {
//            $('#r_toTop').hide();
//        }
//    };
//
//    f.hover = function (d) {
//        var that = $(d);
//        $.ajax('/index/ajaxGetQqGroupInfo', {
//            type: 'post',
//            dataType: 'json',
//            success: function (v) {
//                if (v.sign > 0) {
//                    var tpl = '<div style="height:72px;overflow:hidden;">' + '<p class="group_name">' + v.msg.group_name + '</p>' + '<p class="group_num copy_notice_num">' + v.msg.group_num + '</p>' + '</div>' + '<p style="font-size:12px;color:#999; font-weight:normal;font-family: 宋体;"><span style="color:#cc0000;">提示：</span>复制上面群号，打开QQ，在找群中查找并加入网校官方群</p>';
//                    $('#copy_notice').html(tpl);
//                    $('#copy_notice').show();
//                }
//            }
//        })
//        that.on('mouseleave', function (e) {
//            var tar = $(e.relatedTarget);
//            if (tar.attr('id') == 'copy_notice' || $(tar).parents('#copy_notice').length > 0) {
//                that.addClass('current');
//                $('#copy_notice').on('mouseleave', function () {
//                    var that = $(this);
//                    setTimeout(function () {
//                        that.hide();
//                        $('#r_copyright').removeClass('current');
//                    }, 5000);
//                });
//            } else {
//                $('#copy_notice').hide();
//                that.removeClass('current');
//            }
//        });
//    };
//
//})();

$(function () {
//   // xue.feedback.append();
//    var liveHtml ='<div style="width:140px;height:174px;position:fixed;right:7px;top:196px;z-index:100;">'
//        +' <a href="http://www.xueersi.com/index/visit">'
//            +'<img src="/static/img/live-pic.jpg">'
//        +'</a>'
//    +'</div>';
//    $("body").append(liveHtml);
    courseInfor.courseTab('.ui-nav-link', 'current', '.course-info-box'); //课程详情页--课程大纲切换
    var ouline = $('#open-outline'); //免费试听详情页------试听节超过规定节数出现滚动条
    if (ouline.length != 0) { //当id:ouline的值不等于零的时候执行
        ouline.jScrollPane();
    }
    //courseInfor.lookTimeList(); //直播课程详情页---查看直播时间列表
    // 绑定老师头像切换事件
    $('body').on('click', '.ui_avatar_con .prev ,  .ui_avatar_con .next', function () {
        var that = $(this);
        if (that.hasClass('none')) {
            return false;
        } else {
            xue.avatar.toggle(that)
        }
    });
    //加入购物车效果
    $('body').on('click', '.button_shop-cart', function () {
        var that = $(this),
            _id = that.data('id'),
            _url = miniUrl + '/ShoppingCart/addCart/' + _id;
        $.ajax({
            url: _url,
            type: 'GET',
            dataType: 'jsonp',
            jsonp: 'jsonpCallback',
            success: function (result) {
                if (result.sign == 1) {
                    var num = Number($('small.minicart-total').text());
                    $('small.minicart-total').text(num + 1);
                    $('#miniCart-body').empty();
                    $('.button_shop-cart').button('loading');
                    $.ajax({
                        url: '/ShoppingCart/ajaxGetCartList/',
                        type: 'POST',
                        dataType: 'html',
//                        xhrFields: {
//                            withCredentials: true
//                        },
//                        crossDomain: true,
                        success: function (result) {
                            $(result).appendTo('#miniCart-body');

                        }
                    });
                }
                if (result.sign == 2) {
                    window.location.href = result.url;
                }
            }
        });
    });
     //暂时不可报名
    $('body').on('mouseenter','.do_not_sign_up', function(){
        var that = $(this);
        var tpl = that.text();
        var con ='';
        var a = $('#courseExam'),
            b = a.data('stuscore'),
            c = a.data('cutscore');
        if(tpl === '无报名资格'){
            con = '抱歉，您不具备本课程的报名资格，详情请咨询<strong style="color:#cc0000;">4008002211</strong>'
        }else if(tpl === '报满'){
            con = '抱歉，本课程已经报满，暂时无法报名';
        }else if(tpl === '考试未通过'){
			 con = '抱歉您未通过考试，您的得分<strong style="color:#cc0000;">'+ b +'</strong>分，分数线<strong style="color:#cc0000;">'+ c +'</strong>分。请报名其他课程。';
		}else{
            con = '抱歉，当前没有正在进行的课程排期';
        }
        xue.win({
            id: 'DoNotSignUp',
             title : false,
             arrow : 'bc',
             follow : that,
             content : con,
             lock : false,
             close : false,
             submit : false,
             cancel : false
        });
         var box = $('#xuebox_DoNotSignUp'),
             size = xue.win('DoNotSignUp').getSize(),
             o = {
             left : that.offset().left + (that.outerWidth() / 2) - (size.outerWidth / 2),
             top : that.offset().top + that.height() - 73
         };
         xue.win('DoNotSignUp').position(o.left, o.top);
         $(this).on('mouseleave', function(e){
             if($(e.relatedTarget).attr('id') != 'xuebox_DoNotSignUp' && $(e.relatedTarget).parents('#xuebox_DoNotSignUp').length === 0){
                 xue.win('DoNotSignUp').close();
             }
         });
         $('#xuebox_DoNotSignUp').on('mouseleave', function(){
             xue.win('DoNotSignUp').close();
         });
    });
       //参加考试
    $('body').on('mouseenter','.btn-join-exam', function(){
        var that = $(this);
        xue.win({
            id: 'btnJoinExam',
             title : false,
             arrow : 'bc',
             follow : that,
             content : '通过入学考试才能报名此课程',
             lock : false,
             close : false,
             submit : false,
             cancel : false
        });
         var box = $('#xuebox_btnJoinExam'),
             size = xue.win('btnJoinExam').getSize(),
             o = {
             left : that.offset().left + (that.outerWidth() / 2) - (size.outerWidth / 2),
             top : that.offset().top + that.height() - 73
         };
         xue.win('btnJoinExam').position(o.left, o.top);
         $(this).on('mouseleave', function(e){
             if($(e.relatedTarget).attr('id') != 'xuebox_btnJoinExam' && $(e.relatedTarget).parents('#xuebox_btnJoinExam').length === 0){
                 xue.win('btnJoinExam').close();
             }
         });
         $('#xuebox_btnJoinExam').on('mouseleave', function(){
             xue.win('btnJoinExam').close();
         });
    });
    //辅导老师介绍
//    $('body').on('mouseenter','.coach-avatar-info', function(){
//        var that = $(this);
//        var con = $('.coachAvatarInfo').html();
//        xue.win({
//            id: 'coachAvatar',
//             title : false,
//             arrow : 'bc',
//             follow : that,
//             content : con,
//             lock : false,
//             close : false,
//             submit : false,
//             cancel : false
//        });
//         var box = $('#xuebox_coachAvatar'),
//             size = xue.win('coachAvatar').getSize(),
//             o = {
//             left : that.offset().left + (that.outerWidth() / 2) - (size.outerWidth / 2),
//             top : that.offset().top + that.height() - 111
//         };
//         xue.win('coachAvatar').position(o.left, o.top);
//         $(this).on('mouseleave', function(e){
//             if($(e.relatedTarget).attr('id') != 'xuebox_coachAvatar' && $(e.relatedTarget).parents('#xuebox_coachAvatar').length === 0){
//                 xue.win('coachAvatar').close();
//             }
//         });
//         $('#xuebox_coachAvatar').on('mouseleave', function(){
//             xue.win('coachAvatar').close();
//         });
//    });
    //随屏滚动
         var rollStart = $('.scroll-box-wrap'); 
         var offset = rollStart.offset();
         var rollBox = rollStart.prev();
	     $(window).scroll(function() {
	            if ($(window).scrollTop() > offset.top){
	                    rollStart.addClass("rollbox");
                        rollStart.find('.scroll-btn').show();
                        rollBox.stop().animate({top:0,paddingTop:10},0);
	            } else {
	                    rollStart.removeClass("rollbox");
                        rollStart.find('.scroll-btn').hide();
                        rollBox.stop().animate({top:0},0);
	            }
	    });
});