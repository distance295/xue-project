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