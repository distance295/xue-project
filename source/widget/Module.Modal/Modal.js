/**
 * Created by yangmengyuan on 15/11/17.
 */
//var createModal = createModal || {},
//    $uiCreateModal = $('.ui-createModal');
//
//createModal.opt = {};
//createModal.target = '';
//
//createModal.opt = {
//    title :'modalTitle',
//    cls :'modalClass',
//    content : 'modalBody'
//};
//createModal.show = function(e){
//    $('body').append("<div class='modal fade "+createModal.opt.cls+"'tabindex='-1' role='dialog'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>"+createModal.opt.title+"</h4></div><div class='modal-body'>"+createModal.opt.content+"</div></div>")
//    $('.modal').on('hidden.bs.modal',function(e){
//        $(this).remove();
//    })
//};
//createModal.init = function(o){
//    $.extend(this.opt, o);
//    $.each(arguments,function(k,v){
//        createModal.opt[v.cls] = v;
//    })
//    $uiCreateModal.on('click',function(){
//        //console.log(this);
//        createModal.show(this);
//    })
//};
var createModal = createModal || {},
    $uiCreateModal = $('.ui-createModal');

createModal.opt = {};
createModal.target = '';
createModal.show = function(e){
    $('body').append("<div class='modal fade "+createModal.opt[createModal.target].cls+"'tabindex='-1' role='dialog'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>"+createModal.opt[createModal.target].title+"</h4></div><div class='modal-body'>"+createModal.opt[createModal.target].content+"</div></div>")
    $('.modal').on('hidden.bs.modal',function(e){
        $(this).remove();
    })
};
createModal.init = function(o){
    $.each(arguments,function(k,v){
        createModal.opt[v.cls] = v;
    });
    $uiCreateModal.on('click',function(){
        createModal.target = $(this).attr('data-target').replace('.','');
        createModal.show();
    })
};