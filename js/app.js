$(document).ready(function(){
	$(".purchase").click(function(){
		if ($(this).hasClass("complete")){
			$(this).removeClass("complete").animate({left:'0px'}).find("i").hide();
		}
		else{
			$(this).addClass("complete").animate({left:'150px'}).find("i").show();
		}
	});
});