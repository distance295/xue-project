/**
* @param  {string} ordertype   [订单内容]
* @param  {number} page        [页面页数]
*/
$("#order_tab li").on('click', function(){
    var that = $(this),
        ordertype = that.data('params');
        page = that.data('pages');
    that.addClass("current").siblings().removeClass("current"); 
    orderTab(ordertype,page);
});
function orderTab(ordertype,page){
    $.ajax({
        type: "get",
        url: "/MyOrders/ajaxOrderList",
        dataType: "html",
        data:'type=' + ordertype + '&curpage=' + page, 
        success: function(list){
            var box = $('#page_list');
            box.innerHTML="list";
        },
        error:function(){  
            alert("异步失败");  
        }  
    });
}

//调用模态框js
function orderModal(){
    $.ajax({
        type: "get",
        url: "order.modal.html",
        dataType: "html",
        success: function(result) {
            if(result){
                createModal.show({
                    id : 'orderModal',
                    title : '重新购买',
                    cls : 'infor-Modal',
                    content : result
                }); 
                $('#orderModal').modal({0: 'static', keyboard: false,show: true});
            }
        },
    });
} 