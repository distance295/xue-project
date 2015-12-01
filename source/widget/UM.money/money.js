function orderTab(ordertype,page){
    $.ajax({
        type: "post",
        url: "/MyPayCenters/ajaxGiftCardData",
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