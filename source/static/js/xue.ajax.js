
/* ========================== Ajax封装通用类 =========================== */
var xue = xue || {};
    xue.ajaxCheck = xue.ajaxCheck || {};

xue.ajaxCheck.html = function( str ){
    if(!str){ 
        xue.alert('数据读取错误……');
        return false; 
    }
    var str = $.trim(str);
    if(str.substr(0,1)=='<'){
        return str;
    }else if(str.substr(0,4)=='http' || str.substr(0,1)=='/'){
        window.location.href = str;
        return false;
    }else{
        // if(str.substr(0,6) == 'error:'){
            xue.alert(str);
            return false;
        // }
        // xue.alert(str);
        // return str;
    }
};

xue.ajaxCheck.json = function( d ){
    if(!d){ 
        xue.alert('数据读取错误……');
        return false; 
    }
    var tp = d.sign, msg = d.msg;
    if(tp === 0){
        xue.alert(msg);
        return false;
    }
    if(tp === 2){
        window.location.href = d.msg;
    }
    if(tp === 1){
        return msg;
    }
};

loadingHtml =  function(){document.write("<div id='loading' style=\"position:absolute;top:0;left:0;width:100%;height:100%;background:#000;opacity:0.1;filter:alpha(opacity=10);\"><div style=\"position:absolute;left:50%;top:50%;\"><i class='fa fa-spinner fa-spin'></i></div></div>");} 
function beforeSendfn(){  
   $("body").append(loadingHtml);  
}
function completefn(){  
   $("#loading").remove();
}  

$.ajaxSetup({
  type: 'post',
  dataType: 'json',
});   