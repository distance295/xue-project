/**
 * Created by yangmengyuan on 16/4/5.
 */
$(function(){
    var $remarkFocus = $("#remarkFocus"),
        $body = $('body');

    $(".bill-list li").on('click', function(){
        var that = $(this),
            ordertype = that.data('params');
        page = that.data('pages');
        that.addClass("current").siblings().removeClass("current");
        billList(ordertype,page);
    });
    $('.bill-list li:first').click();

    function billList(ordertype,page){
        $.ajax({
            type: "get",
            url: "/MyOrders/ajaxInvoiceOrder",
            dataType: "html",
            data:'type=' + ordertype + '&curpage=' + page,
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
            },
            error:function(){
                alert("异步失败");
            }
        });
    }

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

    var $bsb = $('.bill-sum-button')

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

    $body.on('click','.bill-apply-check',function(){
        $('.bill-hidden').css({'display':'none'});
        $('.bill-apply-check-detail').css({'display':'block'});
    });

    var addressInput = '#realname, #add_province, #add_city, #add_country, #address, #zipcode,#phone, #recipientphone';

    function saveNewAddress(addInput) {
        if($('#address_submit_btn').hasClass('submit_in_use')){//提交时，检测是否有标识的类名
            return false;
        }
        $('#address_submit_btn').addClass('submit_in_use');//增加类名，用来防止ajax提交过程中用户重复点击
        var input = $(addInput);
        var data = {
            id: 0
        };
        data.id = $('#add_id').val();
        var id;
        input.each(function() {
            id = this.id;
            id = id.replace('add_', '');
            data[id] = $(this).val();
        });
        data['province_text'] = $('#add_province option:checked').text();
        data['city_text'] = $('#add_city option:checked').text();
        data['country_text'] = $('#add_country option:checked').text();
        var _tpl = '  <input type="hidden" '
            + '      data-recipientphone="$phone$" '
            + '      data-zipcode="$zipcode$" '
            + '      data-address="$address$" '
            + '      data-area="$province_text$ $city_text$ $country_text$" '
            + '      data-county="$country$" '
            + '      data-city="$city$" '
            + '      data-province="$province$" '
            + '      data-realname="$realname$" '
            + '      value="$id$" '
            + '      name="data[addid]" '
            + '      id="addid_$id$"'
            + '  />'
            + '<div class="addr_detail">'
            + '  <span class="addr_name" title="$realname$">$realname$</span>'
            + '  <span class="addr_info" title="$province_text$ $city_text$ $country_text$ $address$">$province_text$ $city_text$ $country_text$ $address$</span>'
            + '  <span class="addr_tel">$phone$</span>'
            + '</div>'
            + '<div class="ship_btns">'
            + '  <a class="setdefault_consignee" href="/MyInfos/setDefaultAddress/$addId$">设为默认地址</a>'
            + '  <a class="edit_consignee" href="javascript:updateAddress($id$);">编辑</a>'
            + '  <a class="del_consignee" href="#none" onclick="delAddress($id$)">删除</a>'
            + '</div>';
        var o = {
            id: data.id,
            recipient: data.realname,
            province: data.province,
            city: data.city,
            county: data.country,
            address: data.address,
            zipcode: data.zipcode,
            phone: data.recipientphone

        };
        $.ajax({
            url: '/MyInfos/editAddressInfo',
            type: 'POST',
            dataType: 'json',
            data: o,
            success: function(result) {
                $('#address_submit_btn').removeClass('submit_in_use');
                if (!result.sign) {
                    alert(result.msg);
                    return false;
                }
                var _id = result.addId;
                var tp = _tpl;
                tp = tp.replace(/\$id\$/g, _id);
                tp = tp.replace(/\$phone\$/g, data.recipientphone);
                tp = tp.replace(/\$zipcode\$/g, data.zipcode);
                tp = tp.replace(/\$address\$/g, data.address);
                tp = tp.replace(/\$country\$/g, data.country);
                tp = tp.replace(/\$city\$/g, data.city);
                tp = tp.replace(/\$province\$/g, data.province);
                tp = tp.replace(/\$realname\$/g, data.realname);
                tp = tp.replace(/\$province_text\$/g, data.province_text);
                tp = tp.replace(/\$city_text\$/g, data.city_text)
                tp = tp.replace(/\$country_text\$/g, data.country_text);
                tp = tp.replace(/\$addId\$/g, _id);
                var _addid = $('#addid_' + data.id).parent();
                if (result.type === 1) {
                    $('<li id="' + _id + '">' + tp + '</li>').prependTo('ul#shopAdderTo');
                    $('#numberAddress').text(result.rows);
                }
                if (result.type === 2) {
                    _addid.html(tp);
                    $('#numberAddress').text(result.rows);
                }
                if (result.isDefault == 1) {
                    _addid.html(tp);
                    _addid.find('.addr_detail').append('<span class="default_addr">默认地址</span>');
                    _addid.find('.setdefault_consignee').remove();
                }
                $('.info_from').hide();
            },
            error:function(){
                alert('数据加载失败！');
                $('#address_submit_btn').removeClass('submit_in_use');
            }
        });
    }
    // 保存收货地址
    $body.on('click','#address_submit_btn',function() {
        var inputs = $(addressInput),
            errorbox = $('.error_tips_address');

        var ids = {
            realname: '收货人姓名',
            province: '省份',
            city: '城市',
            country: '地区',
            address: '详细地址',
            zipcode: '邮政编码',
            phone: '手机',
            add_province: '省份',
            add_city: '城市',
            add_country: '地区'
        };
        var _reg = {
            phone: (/^(13|15|18|14|17)[0-9]{9}$/.test($('#phone').val()) ? true : false),
            zipcode: (/^[0-9][0-9]{5}$/.test($('#zipcode').val()) ? true : false)
        };
        //邮编
        var id, error = [],
            error_text = '',
            tpl = '$input$ 不能为空',
            error_reg = [],
            reg_text = '';
        inputs.each(function() {
            id = this.id;
            if ($(this).val().trim() === '') {
                error.push(ids[id]);
                $(this).addClass('error');
            } else {
                // 判断手机号与邮编格式
                if (id == 'phone' || id == 'zipcode') {
                    if (!_reg[id]) {
                        error_reg.push(ids[id]);
                        reg_text += ids[id];
                        $(this).addClass('error');
                    } else {
                        $(this).removeClass('error');
                    }
                } else {
                    $(this).removeClass('error');
                }

            }
        });
        var temp_text = '';
        if (error.length > 0) {
            error_text = error.toString();
            temp_text = tpl.replace('$input$', error_text);
        }
        // 判断手机号与邮编格式
        if (error_reg.length > 0) {
            reg_text = error_reg.toString() + '格式不正确';
            if (error.length > 0) {
                temp_text += ', ';
            }
            temp_text += reg_text;
        }
        if (temp_text != '') {
            errorbox.text(temp_text);
            return;
        }
        errorbox.empty();
        saveNewAddress(inputs);

    });
    //编辑收货人地址
    function updateAddress(id) {
        $(addressInput).removeClass('error');
        $('.error_tips_address').empty();
        var box = $('#addid_' + id);
        if (box.length == 0) {
            return;
        }
        var data = box.data();
        var inputs = $(addressInput);
        inputs.each(function() {
            var _id = this.id;
            _id = _id.replace('add_', '');
            if (this.id == 'add_province' || this.id == 'add_city' || this.id == 'add_country') {
                $(this).find('option[value="' + data[_id] + '"]').prop('selected', true);
                $('#' + _id).val(data[_id]);
            } else {
                $(this).val(data[_id]);

            }
        });
        renderAreaSelect();
        $('#add_id').val(id);
        var newAddress = $('#details_form');
        newAddress.show();
    }
    //删除收货人地址
    function delAddress(id) {
        var _data = id;
        if (window.confirm("确定删除该收货地址?")){
            $.ajax({
                url: '/MyInfo/delStuAddress',
                type: 'POST',
                dataType: 'json',
                data: {id: _data},
                success: function (result) {
                    xue.ajaxCheck.JSON(result);
                    if (result.sign == 1) {
                        $('.shipadd_list li#' + _data).remove();
                        pay.adderss();
                        $(addressInput).val('');
                        $('.shipadd_list li:eq(0)').show().removeClass('f_detailAddress');
                    } else {
                        alert(result.msg);
                    }
                }
            });
        }else{
            return false;
        }

    }

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

    // 新增收货人地址显示或隐藏
    $('.extra_r a').on('click', function() {
        var newAddress = $('#details_form');
        var number = Number($('#numberAddress').text());
        $(addressInput).val('');
        $('#add_id').val('');
        if (newAddress.is(':hidden') && number < 10) {
            newAddress.show();
        }
    });

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


    //Form表单提交
    $bsb.on('click',function(event){
        if($("input[type='checkbox']:checked").length == 0){
            event.preventDefault();
        }else{
            $(this).css({'cursor':'pointer'});
            if($('.bill-title-input').val()){

            }
        }
    })

    function billTab(ordertype,page){
        $.ajax({
            type: "get",
            url: "ajaxInvoiceOrder",
            dataType: "html",
            data:'type=' + ordertype + '&curpage=' + page,
            success: function(list){
                var list = $.trim(list);
                if(list.substr(0,1)=='<'){
                    var box = $('#page_list');
                    box.html(list);
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


    //$body.on('click', '.find-more', function() {
    //    var params = $('#url').val();
    //    var curpage = $('#page').val();
    //    var url = "/TeacherSearch/ajaxGetTeacherList/" + params + "/" + curpage;
    //    $('.load_container').remove();
    //    var loading ='<div class="loading_div"><i class="fa fa-spinner fa-spin fa-4"></i><span>加载中</span></div>';
    //    $(loading).appendTo('.bill-details-list');
    //    $.ajax({
    //        url : url,
    //        type: 'GET',
    //        dataType: 'html',
    //        success: function(d){
    //            var resDat =d;
    //            if(resDat){
    //                $('.loading_div').remove();
    //                $(resDat).appendTo('.bill-details-list');
    //            }
    //            else{
    //                $('.loading_div').remove();
    //                var pm='<div class="media" style="height: 270px;text-align:center;line-height:90px;color:#666;">该年级下没有老师</div>';
    //                $('.bill-details-list').append(pm);
    //            }
    //        }
    //    });
    //});

});


