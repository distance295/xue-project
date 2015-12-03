var xue =xue || {};

//切换
function changeTab(d,box){
    var that = $(d),
    box = $(box).children();
    that.addClass("current").siblings().removeClass("current");  
    var index =  that.index(); 
    box.eq(index).show().siblings().hide();
}
$('#head_tab li').click(function(){
  changeTab(this,".hp-box-left");
});
//推荐头像
$(".hpr-img").on("click",function(){
   var url = $(this).attr("src");
   $("#hp-small img, #hp-middle img, #hp-big img").attr("src",url)
})

//自定义上传头像
$("#loadFile").change(function(){
    var img = $("#loadFile").val();
    if(img == ''){
      return true;
    }else{
        $(".hl-box em,.hl-box span").hide();
        $(".btn_loadFile,.hl-box input").css({
            position: 'absolute',
            top: '360px',
            left: '300px',
            fontSize: '14px',
            width: '100px',
            height: '35px'
        });
    }
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
                    imgDiv.style.width = width + "px";
                    imgDiv.style.height = height + "px";
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

        var dom = document.getElementById('loadFile');
        var size = $("#loadFile")[0].files.item(0).size/1024;

        if (lastname.toLowerCase() != ".jpg" && lastname.toLowerCase() != ".gif" && lastname.toLowerCase() != ".png" && lastname.toLowerCase() != ".jpeg") {  
            $('#loadFile').val('');
            alert("您选择的文件类型为" + lastname + "，图片必须为 JPG,GIF,PNG 类型");
            return false;  
        }else{
            if (size>2*1024) {
                alert('图片大小请不要大于2MB');
                return false;
            }else{
                $('#imghead, #hp-small img, #hp-middle img, #hp-big img').attr('src',url);
                return true;
            };
        }
    }
}   

