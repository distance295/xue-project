function sure() {
    var conf = confirm("确定要解除绑定吗？");
    if(conf == true) {
        window.location.href=""; 
        return true;
    } else {
        return false;
    }
}