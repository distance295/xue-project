var xue =xue || {};

//头像tab切换
$('#head_tab li').click(function(e){
    var box = $(".hp-box-left").children();
    e.preventDefault();
    $(this).addClass("current").siblings().removeClass("current");  
    var index =  $(this).index(); 
    box.eq(index).addClass("active").siblings().removeClass("active");
});

//推荐头像
$(".hpr-img").on("click",function(){
   var url = $(this).attr("src");
   $(this).addClass('imghover').siblings().removeClass("imghover");
   $("#hp-small img, #hp-middle img, #hp-big img").attr("src",url)
})

$(".hpr-btn").on('click', function(){
    var headId = $(".imghover").data('id');
    $.ajax({
        type: "POST",
        url: "/MyInfos/changeImg",
        dataType: "JSON",
        data:'headId=' + headId,
        success: function(msg){
            if(msg.sign == 1){
                window.location.reload();
            }
        },
        error:function(){  
            alert("异步失败");  
        }  
    });
});

//自定义上传头像
$("#loadFile").change(function(){
    var img = $("#loadFile").val();
    if(img == ''){
      return true;
    }else{
        $(".hl-box em,.hl-box span").hide();
        $("#upload_img").removeClass("btn_loadFile").addClass("btn-change");
    }
});

var imgError = $(".img-error span").is(":empty");
if (imgError == '0') {
    $('.img-error').css({
        display: 'block'
    });
    $('.hp-local').addClass('active').siblings().removeClass("active");
    $('.tab-local').addClass('current').siblings().removeClass("current");
}else{
    $('.img-error').css({
        display: 'none'
    });
}

$("#upload_img").on('click', function(e) {
    e.preventDefault();
    $("#loadFile").click();
});

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
            var imgs = $('#preview, #hp-small, #hp-middle, #hp-big');
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
                    imgDiv.style.width = width + "px";
                    imgDiv.style.height = height + "px";
                    imgDiv.style.filter="progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod = scale)";   
                    //console.log(document.selection.text)
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

              var dom = document.getElementById('loadFile');

              if( !isIE(9) ) {
                  var size = dom.files.item(0).size/1024;
              }
             
              if (lastname.toLowerCase() != ".jpg" && lastname.toLowerCase() != ".gif" && lastname.toLowerCase() != ".png" && lastname.toLowerCase() != ".jpeg") {  
                  $('#loadFile').val('');
                  alert("您选择的文件类型为" + lastname + "，图片必须为 JPG,GIF,PNG 类型");
                  return false;  
              }else{
                  if (!isIE(9) && size>2*1024) {
                      alert('图片大小请不要大于2MB');
                      return false;
                  }else{
                      $('#imghead, #hp-small img, #hp-middle img, #hp-big img').attr('src',url);
                  };
              }
        }

        function isIE(ver){
            var b = document.createElement('b');
            b.innerHTML = '<!--[if lte IE ' + ver + ']><i></i><![endif]-->';
            return b.getElementsByTagName('i').length === 1;
        }
}   

