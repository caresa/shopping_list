$(document).ready(function(){
	$("#addItem").keyup(function(event){
		if (event.which == 13) {
			newItem = $(this).val();
			$("#food").append('<div class="purchase"><span><i class="icon-remove-circle"></i>'+newItem+'</span></div>');
			addItemClick();
			$(this).val("");
		}
	});
	addItemClick();
});

function addItemClick(){
	$(".purchase").unbind("click");
	$(".purchase").on('click', function(){
		if ($(this).hasClass("complete")){
			$(this).removeClass("complete").animate({left:'0px'}).find("i").hide();
		}
		else{
			$(this).addClass("complete").animate({left:'150px'}).find("i").show();
		}
	});
	$('.icon-remove-circle').unbind('click');
	$(".icon-remove-circle").on('click', function(){
		$(this).closest(".purchase").remove();
	});
}