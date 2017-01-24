$(document).ready(function () {
	$(".slider-main").touchSlider({
		flexible : true,
		speed : 300,
		btn_prev : $(".slider-prev"),
		btn_next : $(".slider-next"),
		paging : $(".slider-dot li"),
		counter : function (e) {
			$(".slider-dot li").removeClass("on").eq(e.current-1).addClass("on");
		}
	});
	timer = setInterval(function() { $(".slider-next").click();}, 10000);
});