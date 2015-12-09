function balanceAjax(page){
    $.ajax({
        type: "GET",
        url: "/MyPayCenters/ajaxRechargeData",
        dataType: "html",
        data: '&curpage=' + page,
        //object是后台传过来的list数据集合  
        success:function(objects){                                           
          var box = $('#generatedTable');
          box.html(objects); 
        },    
        error:function(){  
            alert("异步失败");  
        }  
    });
}


           