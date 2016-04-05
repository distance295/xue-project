/**
 * Created by yangmengyuan on 16/4/5.
 */
$(function(){
    var $remarkFocus = $("#remarkFocus"),
        $body = $('body');

    $('.bill-list li').click(function(){
        $(this).addClass('bill-tab').siblings().removeClass();
        $(".bill-hidden").hide().eq($(this).index()).show();
        $('.bill-apply-check-detail').css({'display':'none'});
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


    $("input[type='checkbox']").click(function() {
        var num = $body.find("input[type='checkbox']:checked").length;
        $('.bill-sum-num em').html(num);
        var sum = 0;
        $body.find("input[type='checkbox']:checked").parents('.bill-details').find('.bill-li em').each(function(k,v){
            sum += ($(v).text().match(/\d+/g)[0] * 1);
        });
        $('.bill-sum-price em').html(sum)
    });

    $body.on('click','.bill-apply-check',function(){
        $('.bill-hidden').css({'display':'none'});
        $('.bill-apply-check-detail').css({'display':'block'});
    });

    var addressInput = '#realname, #add_province, #add_city,#add_country, #address, #zipcode, #phone';

    function saveNewAddress(addInput){
        if($('#address_submit_btn').hasClass('submit_in_use')){//提交时，检测是否有标识的类名
            return false;
        }
        $('#address_submit_btn').addClass('submit_in_use');//增加类名，用来防止ajax提交过程中用户重复点击
        var input = $(addInput);
        var data = { id : 0 };
        data.id = $('#add_id').val();

        var id;
        input.each(function(){
            id = this.id;
            id = id.replace('add_', '');
            data[id] = $(this).val();
        });

        data['province_text'] = $('#add_province option:checked').text();
        data['city_text'] = $('#add_city option:checked').text();
        data['country_text'] = $('#add_country option:checked').text();

        var _tpl =  '  <input type="radio" '
            +'      style="display:none;"'
            +'      data-phone="$phone$" '
            +'      data-zipcode="$zipcode$" '
            +'      data-address="$address$" '
            +'      data-county="$country$" '
            +'      data-city="$city$" '
            +'      data-province="$province$" '
            +'      data-realname="$realname$" '
            +'      value="$id$" '
            +'      name="data[addId]" '
            +'      id="addid_$id$"'
            +'      autocomplete="off"  checked=""'
            +'  />'
            +'<label class="consignee_item current" for="addid_$id$">'
            +'	<span>$realname$</span>'
            +'</label>'
            +'<div class="addr_detail">'
            +'	<span class="addr_name" title="$realname$">$realname$</span>'
            +'	<span class="addr_info" title="$province_text$ $city_text$ $country_text$ $address$">$province_text$ $city_text$ $country_text$ $address$</span>'
            +'	<span class="addr_tel">$phone$</span>'
            +'</div>'
            +'<div class="ship_btns">'
            +'	<a class="edit_consignee" href="javascript:updateAddress($id$);">编辑</a>'
            +'	<a class="del_consignee" href="#none" onclick="delAddress($id$)">删除</a>'
            +'</div>';

        var o = {
            id : data.id,
            realname : data.realname,
            province_id : data.province,
            city_id : data.city,
            country_id : data.country,
            address : data.address,
            zipcode : data.zipcode,
            phone : data.phone
        };
        $('<li id="'+_id+'">'+ tp + '</li>').prependTo('ul.shipadd_list');
        var _li = $('.shipadd_list li');
        var _index = _li.eq(0);
        _li.not(_index).find('.consignee_item').removeClass('current');
        _li.not(_index).addClass('f_detailAddress');
        _li.show();
        $('.addr_switch').addClass('switch_off');
        $('.addr_switch span').text('收起地址');
        pay.adderss();
        //$.ajax({
        //    url : '/MyInfo/saveStuAdds/',
        //    type: 'POST',
        //    dataType:'json',
        //    data : o,
        //    success:function(result){
        //        $('#address_submit_btn').removeClass('submit_in_use');
        //        xue.ajaxCheck.JSON(result);
        //        if(!result.sign){
        //            return;
        //        }
        //        var _id = result.addId;
        //        var tp = _tpl;
        //        tp = tp.replace(/\$id\$/g, _id);
        //        tp = tp.replace(/\$phone\$/g, data.phone);
        //        tp = tp.replace(/\$zipcode\$/g, data.zipcode);
        //        tp = tp.replace(/\$address\$/g, data.address);
        //        tp = tp.replace(/\$country\$/g, data.country);
        //        tp = tp.replace(/\$city\$/g, data.city);
        //        tp = tp.replace(/\$province\$/g, data.province);
        //        tp = tp.replace(/\$realname\$/g, data.realname);
        //        tp = tp.replace(/\$province_text\$/g, data.province_text);
        //        tp = tp.replace(/\$city_text\$/g, data.city_text)
        //        tp = tp.replace(/\$country_text\$/g, data.country_text);
        //
        //        if(result.type === 1){
        //            $('<li id="'+_id+'">'+ tp + '</li>').prependTo('ul.shipadd_list');
        //            var _li = $('.shipadd_list li');
        //            var _index = _li.eq(0);
        //            _li.not(_index).find('.consignee_item').removeClass('current');
        //            _li.not(_index).addClass('f_detailAddress');
        //            _li.show();
        //            $('.addr_switch').addClass('switch_off');
        //            $('.addr_switch span').text('收起地址');
        //            pay.adderss();
        //        }else if(result.type === 2){
        //            $('#addid_'+data.id).parent().html(tp);
        //            $('#addid_'+data.id).parent().find('.consignee_item').addClass('current').parent().siblings().find('.consignee_item').removeClass('current');
        //        }
        //        $('.info_from').hide();
        //    },
        //    error:function(){
        //        alert('数据加载失败！');
        //        $('#address_submit_btn').removeClass('submit_in_use');
        //    }
        //});
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
    function updateAddress(id){
        $(addressInput).removeClass('error');
        $('.error_tips_address').empty();
        var box = $('#addid_' + id);
        if(box.length == 0){ return ; }
        var data = box.data();
        var inputs = $(addressInput);
        inputs.each(function(){
            var _id = this.id;
            _id = _id.replace('add_','');
            if(this.id == 'add_province' || this.id == 'add_city' || this.id == 'add_country'){
                $(this).find('option[value="' + data[_id] + '"]').prop('selected', true);
                $('#' + _id).val(data[_id]);
            }else{
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
    $('.extra_r a').on('click', function(){
        //var newAddress = $('#details_form');
        //$(addressInput).val('');
        //$('#add_id').val('0');
        //if(newAddress.is(':hidden')){
        //    newAddress.show();
        //    pay.browserScroll();//重新计算.form_order_btn区域的offset.top()的值
        //}
        $.ajax({
            //url: '/GoldShop/realAwardDetail',
            url:'/data/UM.bill/bill-modal.html',
            //type: 'post',
            type:'get',
            dataType: 'html',
            data: {
                //id: presentid
            },
            success: function (result) {
                //if (result.substr(0, 4) == 'http' || result.substr(0, 1) == '/') {
                //    window.location.href = result;
                //    return;
                //}
                //console.log(result)
                billAddressModal.showModal(result);

            }
        })
    });

    var billAddressModal = billAddressModal || {};

    billAddressModal.showModal = function(con){
        var that = $(this), data = that.data();
        var con = con;
        createModal.show({
            id : 'billAddressModal',
            width : '600',
            title : "新增收货地址",
            cls : "billAddressModal aaa ccc",
            content : con
        });

        //$('#billAddressModal').modal('show')

        $('#billAddressModal').modal({backdrop: 'static', keyboard: false});
    };

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
})
