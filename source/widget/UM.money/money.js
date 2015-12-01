function moneyAjax(page){
    $.ajax({
        type: "post",
        url: "/MyPayCenters/ajaxGiftCardData",
        dataType: "html",
        data: '&curpage=' + page,
        success:function(result){  
            alert(result);  
        },  
        error:function(){  
            alert("异步失败");  
        }  
    });
}