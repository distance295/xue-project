function moneyAjax(page){
    $.ajax({
        type: "GET",
        url: "/MyPayCenters/ajaxGiftCardData",
        dataType: "html",
        data: '&curpage=' + page,
        //object是后台传过来的list数据集合  
        success:function(objects){                                           
          var box = $('#moneyTable');
          box.html(objects); 
        },  
        error:function(){  
          alert("异步失败");  
        }  
    });
}
