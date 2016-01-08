<!--
    @require address.js
    @require ui-address.less
-->
<!-- 收货地址 -->

<div id="ui-setAddress">
    <div class="setAddress-title">
        <span class="btn btn-info newCreateAddress">新增收货地址</span>
        <span>
            你已创建 <strong id="numberAddress">1</strong>
            个收货地址,最多可以创建 <strong>10</strong>
            个
        </span>
    </div>

    <div class="ui_ship_addr">
        <ul class="shipadd_list">
            <li id="28126" class="">
                <input type="hidden" autocomplete="off" id="addid_28126" name="data[addid]" value="28126" data-realname="崔俊叶" data-province="2" data-city="4" data-country="0" data-address="132" data-zipcode="100010" data-recipientphone="13200000000" checked="">
                <div class="addr_detail">
                    <span title="崔俊叶" class="addr_name">崔俊叶</span>
                    <span title="北京 朝阳区 三环到四环之间 霞光里15号霄云中心B座10层1008" class="addr_info">北京 朝阳区 三环到四环之间 霞光里15号霄云中心B座10层10...</span>
                    <span class="addr_tel">135****3813</span>
                    <span class="default_addr">默认地址</span>
                </div>
                <div class="ship_btns">
                    <a href="javascript:updateAddress(28126);" class="edit_consignee">编辑</a>
                    <a onclick="delAddress(28126)" href="#none" class="del_consignee">删除</a>
                </div>
            </li>
            <li class="" id="28127">
                <input type="hidden" autocomplete="off" id="addid_28127" name="data[addid]" value="28127" data-realname="刘艳宾" data-province="2" data-city="4" data-country="0" data-address="132" data-zipcode="100010" data-recipientphone="13200000000" checked="">
                <div class="addr_detail">
                    <span title="崔俊叶" class="addr_name">崔俊叶</span>
                    <span title="北京 朝阳区 三环到四环之间 霞光里15号霄云中心B座10层1008" class="addr_info">北京 朝阳区 三环到四环之间 霞光里15号霄云中心B座10层10...</span>
                    <span class="addr_tel">135****3813</span>
                </div>
                <div class="ship_btns">
                    <a href="" class="setdefault_consignee">设为默认地址</a>
                    <a href="javascript:updateAddress(28127);" class="edit_consignee">编辑</a>
                    <a onclick="delAddress(28127)" href="#none" class="del_consignee">删除</a>
                </div>
            </li>
        </ul>
    </div>
</div>
<!-- 收货地址 -->
<div class="new_consignee_items">
    <div class="info_from" id="details_form">
        <p>
            <label for="">收货人</label>
            <span class="add-opt">
                <input type="text" autocomplete="off" id="realname" name="realname" value=""></span>
            <span class="text">请准确填写真实姓名</span>
        </p>
        <p>
            <label for="">所在地区</label>
            <span class="add-opt">
                <script src="http://www.xueersi.com/js/areadata.js" type="text/javascript"></script>
                <script src="http://www.xueersi.com/js/areadata_function.js" type="text/javascript"></script>
                <input type="hidden" autocomplete="off" id="province" value="0">
                <input type="hidden" autocomplete="off" id="city" value="0">
                <input type="hidden" autocomplete="off" id="country" value="0">
                <select id="add_province" name="province" class="select" style="display: inline-block;">
                    <option value="">省份</option>
                </select>
                &nbsp;
                <select id="add_city" name="city" class="select">
                    <option value="">城市</option>
                    <option value="">124</option>
                </select>
                &nbsp;
                <select id="add_country" name="country" class="select">
                    <option value="">区县</option>
                </select>
            </span>
            <span></span>
        </p>
        <p>
            <label for="">详细地址</label>
            <span class="add-opt">
                <input type="text" autocomplete="off" id="address" name="address" class="add-input"></span>
            <span class="text">请填写详细路名及门牌号</span>
        </p>

        <p>
            <label for="">手机号码</label>
            <span class="add-opt">
                <input type="text" autocomplete="off" id="recipientphone" name="recipientphone" value=""></span>
            <span class="text">用于接收发货通知短信和送货前通知</span>
        </p>
        <p>
            <label for="">邮政编码</label>
            <span class="add-opt">
                <input type="text" autocomplete="off" id="zipcode" name="zipcode" value=""></span>
            <span class="text">用于快递确定送货地址</span>
        </p>
        <p>
            <label></label>
            <input type="hidden" autocomplete="off" id="add_id" value="0">
            <a href="javascript:void(0);" id="address_submit_btn" class="btn btn_red">保存收货人信息</a>
        </p>
        <p class="error_tips_address"></p>
        <span class="close_address"></span>
    </div>
</div>
<script>
    function renderAreaSelect() {
        var defaults = {
            s1: 'add_province',
            s2: 'add_city',
            s3: 'add_country',
            v1: $("#province").val(),
            v2: $("#city").val(),
            v3: $("#country").val()
        };
        $('#add_province').empty('');
        threeSelect(defaults);
    };
    renderAreaSelect();
</script>
