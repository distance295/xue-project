function ConfirmDel() {
        if(!confirm("确认要删除？"))
        {
            window.event.returnValue = false;
        }
    }

//左侧导航高度自适应右侧
//document.getElementById("notice-l").style.height=document.getElementById("notice-r").scrollHeight+"px";