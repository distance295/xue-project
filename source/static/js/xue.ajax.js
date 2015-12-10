
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
function errorfn(){
  $("body").append("<div>请求出错啦！</div>");
}
function successfn(msg){
  $("body").append("<div>请求成功，回传数:"+msg+"<div>");
}
function beforeSendfn(){  
   $("body").append(loadingHtml);  
}   
function completefn(){  
   $("#loading").remove();
}       

xue.ajaxCheck.Initfn = function(params){
   /**
    * ajax         封装
    * url          发送请求的地址
    * data         发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
    * async        默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
    *              注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
    * type         默认值："POST"请求方式("POST" 或 "GET")
    * dataType     默认值：json。预期服务器返回的数据类型，常用的如：html、json
    * beforeSendfn 发送请求前执行函数
    * successfn    成功回调函数
    * errorfn      失败回调函数
    * completefn   请求完成函数
    */
   params = $.extend({
               type: 'post',
               async: true,
               url: null,
               data:null,
               dataType: 'json',
               success:successfn
            }, params || {});
   
   $.ajax({
       type: params.type,
       async: params.async,
       url: params.url,
       data: params.data,
       dataType: params.dataType,
       beforeSend: beforeSendfn,
       success: params.successfn,
       error: errorfn,
       complete:completefn
   });
}