$(document).ready(function(){
	$(".header__burger").click(function(event){
		$(".header__list").toggleClass("active");
		$(".header__main").toggleClass("active");
		$("body").toggleClass("lock");
	})
})