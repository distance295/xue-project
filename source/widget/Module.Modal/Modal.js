/**
 * Created by yangmengyuan on 15/11/17.
 */
var createModal = createModal || {};

createModal.opt = {};
createModal.target = '';
createModal.show = function(e){
    $.extend(this.opt, e);
    //console.log(this.opt);
    $('body').append("<div id='"+ this.opt.id +"' class='modal fade "+this.opt.cls+"' tabindex='-1' role='dialog' aria-labelledby='gridSystemModalLabel'><div class='modal-dialog' style='width:"+ this.opt.width +"px; overflow:hidden;' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>"+this.opt.title+"</h4></div><div class='modal-body'>"+this.opt.content+"</div></div>");
    $('.modal').on('hidden.bs.modal',function(e){
        $(this).remove();
    })
};



