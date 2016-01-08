function sure() {
    var href = $('#boundedBtn').href;
    var conf = confirm("确定要解除绑定吗？");
    if(conf == true) {
        window.location.href="href"; 
        return true;
    } else {
        return false;
    }
}

//调用模态框js
function bindModal(){
    var con = $('#bind_defeat').html();
    createModal.show({
        id : 'bindDefeat',
        title : '第三方绑定',
        cls : 'infor-Modal',
        content : con
    }); 
    $('#bindDefeat').modal({backdrop: 'static', keyboard: false});
} 