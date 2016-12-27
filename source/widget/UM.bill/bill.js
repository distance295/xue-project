/**
 * on 16/12/27.
 */
    var $body = $('body');

    $body.on('click', '.bill-check-more', function() {
        var curpage = $('#page').val();
        var url = "/MyOrders/ajaxStuInvoiceCouList";
        $('.load_container').remove();
        var loading ='<div class="loading_div"><i class="fa fa-spinner fa-spin fa-4"></i><span>加载中</span></div>';
        $(loading).appendTo('.bill-details-list');
        $.ajax({
            url : url,
            type: 'GET',
            dataType: 'html',
            data:{
                curpage:curpage
            },
            success: function(d){
                var resDat =d;
                if(resDat){
                    $('.loading_div').remove();
                    $(resDat).appendTo('.bill-details-list');
                }
                else{
                    $('.loading_div').remove();
                    var pm='<div class="media" style="height: 270px;text-align:center;line-height:90px;color:#666;">该年级下没有老师</div>';
                    $('.bill-details-list').append(pm);
                }
            }
        });
    });

    var courses = courses || {};

    courses.avatar = courses.avatar || {};

    (function(a){
        a.box = {
            pic : null,
            list: null,
            btn : null
        };

        a.step = $(".avatar-items li").width();
        a.size = 0;
        a.max = 0;

        a.len = 0;

        a.toggle = function( expr ){
            var btn = $(expr);
            if(btn.length == 0){ return; }
            var wrap = btn.parent();
            var pic = wrap.hasClass('avatar-roll') ? wrap.siblings('.avatar-items') : wrap.find('.avatar-items');
            if(pic.length == 0){ return; }


            this.box.pic = pic;
            this.box.list = pic.find('li');
            this.box.btn = btn;
            this.box.prev = btn.hasClass('prev') ? btn : btn.siblings('.prev');
            this.box.next = btn.hasClass('next') ? btn : btn.siblings('.next');
            this.size = this.box.list.length;
            this.max = this.size - 1;
            this.step = $(".avatar-items li").width();

            var list = pic.find('li');
            var left = pic.css('margin-left');

            this.left = Number(left.replace('px',''));

            if(btn.hasClass('prev')){
                a.prev();
            }else{
                a.next();
            }
        }

        a.prev = function(){

            if(a.left < 0){
                a.box.pic.animate({
                    marginLeft : '+='+a.step+'px'
                }, 500, function(){
                    a.left += a.step;
                    a.setCls();
                    if(a.left >= 0){
                        $(this).clearQueue();
                    }
                });
            }else{
                a.box.pic.clearQueue();
            }
        };

        a.next = function(){
            var box = a.box.pic,
                left = Number(box.css('margin-left').replace('px',''));

            if(a.left > -(a.max * a.step)){
                a.box.pic.animate({
                    marginLeft : '-='+a.step+'px'
                }, 500, function(){
                    a.left -= a.step;
                    a.setCls();
                    if(a.left <= -(a.max * a.step)){
                        $(this).clearQueue();
                    }
                });
            }else{
                a.box.pic.clearQueue();
            }
        };

        a.setCls = function(){
            var hasNext = Math.abs(a.left) < ((a.box.list.length - 1) * a.step);
            var hasPrev = a.left < 0;

            if(hasNext){
                a.box.next.removeClass('none');
            }else{
                a.box.next.addClass('none');
            }

            if(hasPrev){
                a.box.prev.removeClass('none');
            }else{
                a.box.prev.addClass('none');
            }
        };

    })(courses.avatar);

// 绑定老师头像切换事件
    $body.off('click', '.avatar-roll a, .majar-items .prev, .majar-items .next').on('click', '.avatar-roll a, .majar-items .prev, .majar-items .next', function() {
        var that = $(this);
        if (that.hasClass('none')) {
            return false;
        } else {
            courses.avatar.toggle(that)
        }
    });
    // 申请发票
    $body.off('click', '.applyBox a').on('click', '.applyBox a', function(){
        var maskPop = '<div class="bill-mask">'
                        + '<div class="bill-pop">'
                            + '<p class="billPop-title">完善发票信息'
                                + '<a href="javascript:;" class="btn-close"><img src="http://res11.xesimg.com/account/img/close.png"></a>'
                            + '</p>'
                            + '<div class="invoice-type">'
                                + '<span>请选择发票类型</span>'
                                + '<select name="bill-title-select" id="bill-title-select">'
                                    + '<option value="0">请选择</option>'
                                    + '<option value="1">培训费</option>'
                                    + '<option value="2">资料费</option>'
                                + '</select>'
                            + '</div>'
                            + '<div class="invoice-title">'
                                + '<span>发票抬头</span>'
                                + '<input type="text" class="bill-title-input" placeholder="详细填写发票公司名称">'
                            + '</div>'
                            + '<p class="bill-tips">注：网校现仅支持电子发票，发票开具后请自行下载打印！</p>'
                            + '<p class="bill-tips-error"></p>'
                            + '<div class="invoice-btn">'
                                + '<input type="button" class="btn-confirm" value="确认">'
                                + '<input type="button" class="btn-cancel" value="取消">'
                            + '</div>'
                        + '</div>'
                    +'</div>';
        $(maskPop).appendTo('.some-bill');
        var that = $(this);
        var id = that.parents('.applyBill').attr("id");
        $body.on('click', '.btn-close, .btn-cancel', function(){
            $('.bill-mask').remove();
        });
        $body.off('click', '.btn-confirm').on('click', '.btn-confirm', function(){
            var billType = $('#bill-title-select').val(),
                _billTitle = $('.bill-title-input').val(),
                billTitle = '';
            var pattern=/[`~!@#\$%\^\&\*\(\)_\+<>\?:"\{\},\.\\\/;'\[\]]/im;
            if (billType == 0) {
                alert('请选择发票类型')
                return false;
            }
            else {
                if (_billTitle == '') {
                    alert('请填写发票抬头');
                    return false;
                }else{
                    if(pattern.test(_billTitle)){
                        for (var i = 0; i < _billTitle.length; i++) {
                            billTitle = billTitle+_billTitle.substr(i, 1).replace(pattern, '');
                        }
                        if(billTitle.length > 50){
                            alert('发票抬头不能超过50个汉字');
                            return false;
                        }
                    }else{
                        billTitle = _billTitle;
                        if(billTitle.length > 50){
                            alert('发票抬头不能超过50个汉字');
                            return false;
                        }
                    }
                }
            }
            $(this).attr('disabled',true);
            $(this).addClass('btn-confirm-disable');
            $.ajax({
                url : 'http://myapache.com/xingzhenli/Test.php?param=1',
                type: 'post',
                dataType: 'jsonp',
                jsonp: 'jsonCallBack',
                data:{
                    id : id,
                    invoice_type : billType,
                    invoice_title : billTitle
                },
                success: function(result){
                    if(result.sign == 1){
                        $('.bill-mask .btn-confirm').attr("disabled",false);
                        $('.bill-mask .btn-confirm').removeClass('btn-confirm-disable');
                        $('.bill-mask').remove();
                        that.parents('.bill-status').addClass('bill-hidden').next().removeClass('bill-hidden');
                        that.parents('.bill-status').addClass('bill-hidden').next().find('a').attr('href', result.msg);
                    }
                    else if (result.sign == 0) {
                        $(this).attr("disabled",false);
                        $(this).removeClass('btn-confirm-disable');
                        $('.bill-mask .bill-tips-error').text(result.msg);
                    }
                }
            });
        });
    });

