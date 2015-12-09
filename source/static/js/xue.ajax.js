
/* ========================== Ajax封装通用类 =========================== */
var xue = xue || {};
    xue.ajaxCheck = xue.ajaxCheck || {};

xue.ajaxCheck.HTML = function( str ){
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

xue.ajaxCheck.JSON = function( d ){
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

xue.ajaxCheck.json = xue.ajaxCheck.JSON;
xue.ajaxCheck.html = xue.ajaxCheck.HTML;

xue.ajaxCheck.Initfn = function(){
   $.ajax(
   {
      type:"GET",//通常会用到两种：GET,POST。默认是：GET
      url:"a.php",//(默认: 当前页地址) 发送请求的地址
      dataType:"json",//预期服务器返回的数据类型。
      beforeSend:beforeSendfn, //发送请求前
      success:successfn, //请求成功
      error:errorfn,//请求出错 
      complete:completefn//请求完成
   });
}
function errorfn(){
  $("#showResult").append("<div>请求出错啦！</div>");
}
function beforeSendfn(){
  $("#showResult").append('<i class="fa fa-spinner fa-spin"></i>');
}
function completefn(){
  $("#showResult").remove();
}
function successfn(msg){
  $("#showResult").append("<div>请求成功，回传数:"+msg+"<div>");
}
xue.ajaxCheck.InitParamfn = function(url, data, async, type, dataType, successfn, errorfn){
    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
     *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
     * type 请求方式("POST" 或 "GET")， 默认为 "GET"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    async = (async==null || async=="" || typeof(async)=="undefined")? "true" : async;
    type = (type==null || type=="" || typeof(type)=="undefined")? "post" : type;
    dataType = (dataType==null || dataType=="" || typeof(dataType)=="undefined")? "json" : dataType;
    data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
    $.ajax({
        type: type,
        async: async,
        data: data,
        url: url,
        dataType: dataType,
        beforeSend: beforeSendfn,
        success: successfn(msg),
        error: errorfn(e)
    });
}

/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * successfn 成功回调函数
 */
xue.ajaxCheck.Success=function(url, data, successfn) {
    data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
    $.ajax({
        type: "post",
        data: data,
        url: url,
        dataType: "json",
        success: successfn(msg)
    });
};

/**
 * ajax封装
 * url 发送请求的地址
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
 * successfn 成功回调函数
 * errorfn 失败回调函数
 */
xue.ajaxCheck.successError=function(url, data, successfn, errorfn) {
    data = (data==null || data=="" || typeof(data)=="undefined")? {"date": new Date().getTime()} : data;
    $.ajax({
        type: "post",
        data: data,
        url: url,
        dataType: "json",
        success: successfn(msg),
        error: errorfn(e)
    });
};


/**   
*  页面加载等待页面 
*/    
var height = window.screen.height-180;     
var width = window.screen.width;     
var leftW = 300;     
 if(width>1200){     
    leftW = 500;     
 }else if(width>1000){     
    leftW = 350;     
 }else {     
    leftW = 100;     
 }         
 var loadingHtml = "<div id='loading' style=\"position:absolute;left:0;width:100%;height:" + height + "px;top:0;background:#E0ECFF;opacity:0.8;filter:alpha(opacity=80);\"><div style=\"position:absolute;  cursor1:wait;left:"+leftW+"px;top:200px;width:auto;height:16px;padding:12px 5px 10px 30px;\"><i class='fa fa-spinner fa-spin'></i></div></div>";     

 function beforeSendfn(){  
    $("#showResult").html(loadingHtml);  
 }  
   
 function completefn(){  
    $("#showResult").remove(loadingHtml);
 }  