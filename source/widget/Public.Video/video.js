
var xue = xue || {};
xue.video = xue.video || {};
(function(){
    var v = xue.video;
    v.opt = {
        url : '',
        dom : '.video-player-wrap'
    };
    v.get = function(url){
        var _url = $(v.opt.dom).data('url') || url || v.opt.url;
        var _params = $(v.opt.dom).data('params') || '';
        if(_url == '' || !_url){
            return this;
        }
        if(window.XDomainRequest){
            xdr = new XDomainRequest();
            if (xdr) {
//                    xdr.onerror = err;
//                    xdr.ontimeout = 10000;
//                    xdr.onprogress = progres;
                xdr.onload = function(){
                    $(v.opt.dom).html(xdr.responseText);
                };
                xdr.timeout = 10000;
                xdr.open("get", _url);
                xdr.withCredentials = true;
                xdr.send();
            } else {
                alert("Failed to create");
            }
        }else{
            $.ajax({
                url : _url,
                type : 'GET',
                dataType : 'html',
                xhrFields: {
                    withCredentials: true
                },
                success : function(result){
                    $(v.opt.dom).html(result);
                }
            });
        }
        return this;
//        $(v.opt.dom).get(_url, _params);
    };
}());

$(function(){
    if($(xue.video.opt.dom).length > 0){
        xue.video.get();
    }
});