/**
 * Created by yangmengyuan on 15/11/17.
 */
 var createModal = createModal || {},
 $uiCreateModal = $('.ui-createModal');

 createModal.opt = {};
 createModal.target = '';
 createModal.show = function(e){
 	$.extend(this.opt, e);
 	// console.log(this.opt);
 	$('body').append("<div id='"+ this.opt.id +"' class='modal fade "+this.opt.cls+"' tabindex='-1' role='dialog'><div class='modal-dialog' role='document'><div class='modal-content'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button><h4 class='modal-title'>"+this.opt.title+"</h4></div><div class='modal-body'>"+this.opt.content+"</div></div>");
 	$('.modal').on('hidden.bs.modal',function(e){
 		$(this).remove();
 	});
 	// function centerModals() {   
 	// 	$('.modal').each(function(i) {   
 	// 		var $clone = $(this).clone().css('display', 'block').appendTo('body'); var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);   
 	// 		top = top > 0 ? top : 0;   
 	// 		$clone.remove();   
 	// 		$(this).find('.modal-dialog').css("margin-top", top);   
 	// 	});   
 	// } 
 	// $('.modal').on('shown.bs.modal',centerModals);
 };



