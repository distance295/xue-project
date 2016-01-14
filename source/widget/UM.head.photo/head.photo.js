/* =====================头像tab切换===================== */
$('#head_tab li').click(function(e){
    var box = $(".hp-box-left").children();
    e.preventDefault();
    $(this).addClass("current").siblings().removeClass("current");  
    var index =  $(this).index(); 
    box.eq(index).addClass("active").siblings().removeClass("active");
});

/* =====================推荐头像===================== */
$(".hpr-img").on("click",function(){
   var url = $(this).attr("src");
   $(this).addClass('imghover').siblings().removeClass("imghover");

   //40*40
   var hpsmall = document.getElementById('hp-small');
   hpsmall.innerHTML = "<img id='img-small'><span>40*40像素</span>";

   //60*60
   var hpmiddle = document.getElementById('hp-middle');
   hpmiddle.innerHTML = "<img id='img-middle'><span>60*60像素</span>";

   //100*100
   var hpbig = document.getElementById('hp-big');
   hpbig.innerHTML = "<img id='img-big'><span>100*100像素</span>";
   
   $("#hp-small img, #hp-middle img, #hp-big img").attr("src",url);
})

$(".hpr-btn").on('click', function(){
    var headId = $(".imghover").data('id');
    var hprSrc = $(".imghover").attr("src");
    if ($('.hpr-img').hasClass('imghover')) {
      if(confirm("若你当前使用的是“用3000金币更换的本地上传头像”，换成推荐头像后本地上传头像将无法再次使用。你是否确定更换推荐头像？")) {
          $.ajax({
              type: "POST",
              url: "/MyInfos/changeImg",
              dataType: "JSON",
              data:'headId=' + headId + '&hprSrc=' + hprSrc,
              success: function(msg){
                  if(msg.sign == 1){
                      window.location.reload();
                  }
              },
              error:function(){  
                  alert("异步失败");  
              }  
          });
          return true;
      } else {
          return false;
      }
    }else{
      return false;
    }
});

/* =====================自定义上传头像===================== */

/* 上传头像后端返回信息 定位tab页面 */
var headError = $(".img-error span").is(":empty");
var headSuccess = $(".img-success span").is(":empty");
if (headError == 0) {
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
if (headSuccess == 0) {
    $('.hp-local').addClass('active').siblings().removeClass("active");
    $('.tab-local').addClass('current').siblings().removeClass("current");
};

/* 上传头像表单绑定事件 */
function headsSave(){
    var img = $("#loadFile").val();
    if(img == ''){
        alert('请选择图片');
        return false;
    }

    var conf = confirm("如果你的学力未达到16级，本地上传将会消耗3000金币，是否确定上传头像？");
    if(conf == true) {
        $("#btn_submit").addClass('submit');
        $(".hp-content").attr('action','/MyHeadImg/setHeadImage/');
        $(".hp-content").submit(); 
    } else {
        return false;
    }
}

//图片等比例缩放
function showImg(img,maxWidth,maxHeight){
    var rate = (maxHeight/img.height>maxWidth/img.width?maxWidth/img.width:maxHeight/img.height);
    img.width = img.width*rate;
    img.height = img.height*rate;
    return img;
}

/**
 * 上传图片本地预览方法
 * @param {Object} fileObj 上传文件file的id元素  fresh-fileToUpload 
 * @param {Object} previewObj 预览图片的父层id元素  fresh-send-preview-imgvideo
 * @param {Number} maxWidth 预览图最大宽  
 * @param {Number} maxHeight 预览图最大高  
 */
function setImagePreview(fileObj, previewObj, maxWidth, maxHeight) {
      var docObj = document.getElementById(fileObj);
      var imgObjPreview = document.getElementById(previewObj);

      if (docObj.files && docObj.files[0]) {
          //火狐下，直接设img属性
          //火狐7以上版本不能用上面的getAsDataURL()方式获取，需要一下方式
          imgObjPreview.innerHTML ='<img id="imghead">';
          var img = document.getElementById('imghead');
          img.src = window.URL.createObjectURL(docObj.files[0]);
          var _imgs = new Image();
          _imgs.src = window.URL.createObjectURL(docObj.files[0]);
          _imgs.onload = function(){
              showImg(this, maxWidth, maxHeight);
              $("#imghead").width(_imgs.width);
              $("#imghead").height(_imgs.height);
          }
      } else {
          //IE下，使用滤镜
          try {
              var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';  
              docObj.select();
              imgObjPreview.focus();//防止在ie9下拒绝访问，解决办法是让其他的div元素获取焦点
              var imgSrc = document.selection.createRange().text; 
              imgObjPreview.innerHTML ='<img id="imghead">'; 
              var img = document.getElementById('imghead');                 
              img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = imgSrc;
                                  
              //等比例缩放图片的大小  
              var rate = (maxHeight/img.offsetHeight>maxWidth/img.offsetWidth?maxWidth/img.offsetWidth:maxHeight/img.offsetHeight); 
              imgObjPreview.innerHTML = "<div id='imghead' style='width:"+img.offsetWidth*rate+"px;height:"+img.offsetHeight*rate+"px;"+sFilter+imgSrc+"\"'></div>";
              
              //40*40
              var hpsmall = document.getElementById('hp-small');
              hpsmall.innerHTML = "<div id='img-small' style='width:40px;height:40px;margin: 30px auto 10px;padding: 4px;border: 1px solid #dedede;"+sFilter+imgSrc+"\"'></div><span>40*40像素</span>";

              //60*60
              var hpmiddle = document.getElementById('hp-middle');
              hpmiddle.innerHTML = "<div id='img-middle' style='width:60px;height:60px;margin: 30px auto 10px;padding: 4px;border: 1px solid #dedede;"+sFilter+imgSrc+"\"'></div><span>60*60像素</span>";

              //100*100
              var hpbig = document.getElementById('hp-big');
              hpbig.innerHTML = "<div id='img-big' style='width:100px;height:100px;margin: 30px auto 10px;padding: 4px;border: 1px solid #dedede;"+sFilter+imgSrc+"\"'></div><span>100*100像素</span>";
          } catch (e) {
              alert("您上传的图片格式不正确，请重新选择!");
              return false;
          }
          //document.selection.empty();
      }
      //return true;
}

function isIE(ver){
    var b = document.createElement('b');
    b.innerHTML = '<!--[if lte IE ' + ver + ']><i></i><![endif]-->';
    return b.getElementsByTagName('i').length === 1;
} 

/* 点击上传头像按钮触发事件 */
function getFullPath(d){
  var strSrc = $("#loadFile").val();
  var pos = strSrc.lastIndexOf("."); 
  var lastname = strSrc.substring(pos, strSrc.length);

  var dom = document.getElementById('loadFile');
  if(strSrc == ''){
      return false;
  }else{    
    if (lastname.toLowerCase() != ".jpg" && lastname.toLowerCase() != ".gif" && lastname.toLowerCase() != ".png" && lastname.toLowerCase() != ".jpeg") {  
        $('#loadFile').val('');
        alert("您选择的文件类型为" + lastname + "，图片必须为 JPG,GIF,PNG 类型");
        return false;  
    }else{
        if( !isIE(9) ) {
            var size = dom.files.item(0).size/1024;
        }
        if (!isIE(9) && size>2*1024) {
            alert('图片大小请不要大于2MB');
            return false;
        }else{
          //上传头像按钮位置更改
          $(".hl-box em,.hl-box span,.hl-box p").hide();
          $("#upload_img").removeClass("btn_loadFile").addClass("btn-change");
          $("#loadFile").removeClass("input_file").addClass("btnl-change");
          //图片预览
          setImagePreview('loadFile', 'preview-img',400, 340);
          var url = $('#imghead').attr("src");
          $('#hp-small img, #hp-middle img, #hp-big img').attr('src',url);
        };
    }
  }
}