/**
 * Created by yangmengyuan on 16/4/5.
 */
//$(function(){
    var $remarkFocus = $("#remarkFocus"),
        $body = $('body'),
        $blli = $(".bill-list li");

    $blli.on('click', function(){
        var that = $(this);
        page = that.data('pages');
        that.addClass("bill-tab").siblings().removeClass("bill-tab");
        $(".bill-hidden").hide().eq($(this).index()).show();
        var url = that.attr('data-url');
        if(url == '/MyOrders/ajaxInvoiceOrder'){
            billList(url,page);
            noneAddress()
        }else{
            billTab();
        }
    });
    $('.bill-list li:first').click();

    var $bsb = $('.bill-sum-button');

    function billList(url,page){

        $.ajax({
            type: "get",
            url: url,
            dataType: "html",
            data:'curpage=' + page,
            success: function(list){
                var list = $.trim(list);
                if(list.substr(0,1)=='<'){
                    var box = $('.bill-details-list');
                    box.html(list);
                }else{
                    if(list.substr(0,4)=='http' || list.substr(0,1)=='/'){
                        window.location.href = list;
                        return false;
                    }
                }
                checkBox();
            },
            error:function(){
                alert("异步失败");
            }
        });
    };

    function checkBox(){
        $("input[type='checkbox']").click(function() {
            var num = $body.find("input[type='checkbox']:checked").length;
            $('.bill-sum-num em').html(num);
            var sum = 0;
            $body.find("input[type='checkbox']:checked").parents('.bill-details').find('.bill-li em').each(function(k,v){
                sum += ($(v).text().match(/\d+/g)[0] * 1);
            });
            $('.bill-sum-price em').html(sum)
            if($("input[type='checkbox']:checked").length == 0){
                $bsb.css({'background-color':'#a0a0a0'});
            }else{
                $bsb.css({'background-color':'#3bafda'});
            }
        });
    }

    function noneAddress(){
        var addr = $('.shipadd_list').text();
        if(addr == ''){
            $('.addr_switch span').hide();
            $('.info_from').show();
        }
    }

    function billTab(){
        $.ajax({
            type: "get",
            url: "ajaxInvoiceApplyList",
            dataType: "html",
            data:{},
            success: function(list){
                var list = $.trim(list);
                if(list.substr(0,1)=='<'){
                    var box = $('.bill-apply'),
                        content = $('.bill-content');
                    box.html(list).show();
                    content.css({'display':'none'});
                }else{
                    if(list.substr(0,4)=='http' || list.substr(0,1)=='/'){
                        window.location.href = list;
                        return false;
                    }
                }
            },
            error:function(){
                alert("异步失败");
            }
        });
    }

    $body.on('click', '.bill-check-more', function() {
        var curpage = $('#page').val();
        var url = "/MyOrders/ajaxInvoiceOrder/";
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
                    checkBox()
                }
                else{
                    $('.loading_div').remove();
                    var pm='<div class="media" style="height: 270px;text-align:center;line-height:90px;color:#666;">该年级下没有老师</div>';
                    $('.bill-details-list').append(pm);
                }
            }
        });
    });

    $remarkFocus
        .focus(function(){
            if($(this).val() == '选填,请填写备注信息'){
                $(this).val("")
            }
        })
        .blur(function(){
            if($(this).val() == ''){
                $(this).val("选填,请填写备注信息")
            }
        });

    $body.on('click','.bill-apply-check',function(){
        $('.bill-hidden').css({'display':'none'});
        $('.bill-apply-check-detail').css({'display':'block'});
    });

    //关闭收货地址
    $(".close_address").on('click',function(){
        var that = $(this);
        if($('.shipadd_list li').length > 0){
            that.parents('#details_form').hide();
        }
    });
    //展开收起更多收货地址
    $('.addr_switch').on('click', function(event) {
        var that = $(this);
        if(that.hasClass('switch_off') !== true){
            that.addClass('switch_off').find('span').text('收起地址');
            that.prev().find('.f_detailAddress').show();
        }else{
            that.removeClass('switch_off').find('span').text('更多地址');
            that.prev().find('.f_detailAddress').hide();
        }

    });

    var $usi = $('.user_site_info');


    //鼠标进入时增加样式
    $usi.on('mouseenter', '.shipadd_list li', function(event) {
        var that = $(this);
        that.addClass('current');
    });
    //鼠标离开时删除样式
    $usi.on('mouseleave', '.shipadd_list li', function(event) {
        var that = $(this);
        that.removeClass('current');
    });
    //选择收货人地址
    $usi.on('click', '.consignee_item', function(event) {
        var that = $(this);
        that.addClass('current')
            .parent().siblings()
            .find('.consignee_item')
            .removeClass('current');
        //var _id = that.parents('li').attr('id');
        // console.log(_id);
        //$('#AddressId').val(_id);
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


    //提交按钮
    $bsb.on('click',function(event){
        var checkInput = $body.find("input[type='checkbox']:checked");
        var addId = $('input[type="radio"]:checked').attr('id').match(/\d+$/)[0],
            billType = $('#bill-title-select').val(),
            billTitle = $('.bill-title-input').val(),
            billTip = $('#remarkFocus').val();
        var arr = [],
            textNum;
        checkInput.parents('.bill-details').find('.bill-order-num em').each(function (k,v) {
            textNum = $(this).text();
            arr.push(textNum)
        });
        if(checkInput.length == 0){
            event.preventDefault();
        }else {
            if (billType == '请选择') {
                alert('请选择发票类型')
                //console.log(event)
                return false;
            } else {
                if (billTitle == '') {
                    alert('请填写发票抬头')
                    return false;
                }
            }
            $(this).css({'cursor': 'pointer'});
            $.ajax({
                url : '/MyOrders/ajaxInvoiceAdd',
                type: 'post',
                dataType: 'json',
                data:{
                    send_id : addId,
                    order_nums : arr,
                    invoice_type : billType,
                    invoice_title : billTitle,
                    invoice_note : billTip
                },
                success: function(d){
                    var resDat = d;
                    if(resDat){
                        checkInput.parents('.bill-details').remove();
                    }
                    else{
                        $('.bill-check-more').remove();
                        var pm='<div class="media" style="height: 270px;text-align:center;line-height:90px;color:#666;">该年级下没有老师</div>';
                        $('.bill-details-list').append(pm);
                    }
                    window.location.href = '/MyOrders/invoice';
                }
            });
        }
    })
//
//});


