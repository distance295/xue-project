var xue =xue || {};
//自定义上传头像
function wq(){
    var img = $("#loadFile").val();
    if(img == ''){
      return true;
    }else{
      $(".btn_up,.hl-box input,.hl-box em,.hl-box span").hide();
    }
}
function headsSave(){
    var img = $("#loadFile").val();
    if(img == ''){
        alert('请选择图片');
        return false;
    }
    if($("#btn_submit").hasClass('submit')){
        return false;
    }
        confirm('确定要消耗3000金币兑换自定义头像吗？',function(){
        $("#btn_submit").addClass('submit');
        $(".hp-content").attr('action','/MyHeadImg/setHeadImage/');
        $(".hp-content").submit(); 
        })
}

function getFullPath(obj){
    if(obj){
        if (window.navigator.userAgent.indexOf("MSIE")>=1){
            var imgs = $('#preview, #hp-small, #hp-middle,#hp-big');
            try{
                imgs.each(function(){
                    var that = this,
                    id = that.id,
                    width = $(that).width(),
                    height= $(that).height();
                    $(that).find('img').empty();
                    var newPreview = document.getElementById(id);    
                    var imgDiv = document.createElement("div");
                    document.body.appendChild(imgDiv);
                    imgDiv.style.width = width + "px";    imgDiv.style.height = height + "px";
                    imgDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod = scale)";   
                    imgDiv.filters.item("DXImageTransform.Microsoft.AlphaImageLoader").src = obj.value;
                    
                    $(newPreview).find('img').append(imgDiv);    
                });
                $('.hp-box-right').show();
            }catch(e){      // ie禁用本地路径时
                $('.hp-box-right').hide();
                var btn = $('#loadFile');
                var filepath = $('.filespath');
                if(filepath.length > 0){
                    filepath.html(btn.val());
                }else{
                    btn.next('.btn_up').after('<span class="filespath">'+ btn.val() +'</span>');
                }
            }
            
        }
        //firefox
        else {
            if(obj.files){
                // 360下不支持window.URL
                if(!window.URL){
                    var btn = $('#loadFile');
                    var filepath = $('.filespath');
                    if(filepath.length > 0){
                        filepath.html(btn.val());
                    }else{
                        btn.next('.btn_up').after('<span class="filespath">'+ btn.val() +'</span>');
                    } 
                }else{
                    setImg(window.URL.createObjectURL(obj.files.item(0)));
                    return window.URL.createObjectURL(obj.files.item(0));                       
                }
            }
            setImg(obj.value);
            return obj.value;
        }
        setImg(obj.value);
        return obj.value;
      }
    
    function setImg(url){
        var strSrc = $("#loadFile").val();
        var pos = strSrc.lastIndexOf("."); 
        var lastname = strSrc.substring(pos, strSrc.length);
        if (lastname.toLowerCase() != ".jpg" && lastname.toLowerCase() != ".gif" && lastname.toLowerCase() != ".png" && lastname.toLowerCase() != ".jpeg") {  
            $('#loadFile').val('');
            alert("您选择的文件类型为" + lastname + "，图片必须为 JPG,GIF,PNG 类型");
            return false;  
        }
        $('#imghead, #hp-small img, #hp-middle img, #hp-big img').attr('src',url);
    }
}   

function validate_img(a){
   var file = a.value;
   var image = new Image();
   image.src = file;
   var height = image.height;
   var width = image.width;
   var filesize = image.filesize;
   if(width<200 && height<200 && filesize>2048){
    alert('照片尺寸请大于200×200 或者大小小于2M的图片');
    return false;
   }else{
    return true;
   }
}