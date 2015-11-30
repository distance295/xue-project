function orderTab(ordertype,page){
    $.ajax({
        type: "get",
        url: "/MyOrders/ajaxOrderList",
        dataType: "html",
        data:'type=' + ordertype + '&curpage=' + page,
        success:function(result){  
            alert(result);  
            $(".ao-list li").addClass("current");
            $(".ao-list li").siblings().removeClass("current");
        },  
        error:function(){  
            alert("异步失败");  
        }  
    });
}
