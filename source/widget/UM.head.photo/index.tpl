<!--
    @require head.photo.less
    @require head.photo.js
-->
<div class="hp-content">
    <ul id="head_tab">
      <li class="current"><a href="#">推荐头像</a></li>
      <li class="tab-local"><a href="#">本地上传</a></li>
    </ul>
    <div class="hp-box-left">
        <div class="hp-recommend active">
            <div class="hpr-box">
                <img class="hpr-img" src="http://tx.haiqq.com/uploads/allimg/150321/110H2E40-6.jpg" data-id="12" alt="头像">
                <img class="hpr-img" src="img/head.photo.png" alt="头像">
            </div>
            <span id="btn_submit" class="btn btn-info hpr-btn">保存</span>
        </div>
        <div class="hp-local">
            <form action="" method="POST" enctype="multipart/form-data" id="headsImg" onsubmit="return headsSave();">
                <div class="img-error">
                    <span>后端返回上传失败提示</span>
                </div>
                <div class="img-success">
                    <span>后端返回成功信息</span>
                </div>
                <div class="hl-box">
                    <div id="preview" style="display:inline-block;">
                        <span id="preview-img"><img id="imghead" src='img/headp.jpg'></span>
                    </div>
                    <div class="btn_up">
                        <button id="upload_img" class="btn_loadFile btn btn-info">+ 上传头像</button>
                    </div>
                    <input id="loadFile" type="file" name="imginput" class="input_file" onchange="getFullPath(this);" />
                    <input type="hidden" name="img" value="" id="temp">
                    <em>每次上传消耗3000金币</em>
                    <span>仅支持JPG、GIF、PNG且文件小于2M，照片尺寸请大于200×200</span>
                    <p>学力等级达到16级，可以免费上传本地头像</p>
                </div>
                <button id="btn_submit" class="btn btn-info hpl-btn">保存</button>
            </form>
        </div>
    </div>
    <div class="hp-box-right">
        <h4>预览</h4>
        <p>您选定的头像会生成3种尺寸，请注意各尺寸的头像是否清晰</p>
        <div id="hp-small">
            <img src="img/head.photo.png" id="img-small">
            <span>40×40像素</span>
        </div>
        <div id="hp-middle">
            <img src="img/head.photo.png" id="img-middle">
            <span>60×60像素</span>
        </div>
        <div id="hp-big">
            <img src="img/head.photo.png" id="img-big">
            <span>100×100像素</span>
        </div>
    </div>
</div>