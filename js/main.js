$(document).ready(function() {
	$("input.make-tags").tagsInput();

	$(".tipsified").tipsy({
		gravity:"w",
		offset:5,
	});
	$(window).on("scroll",function() {
		if($(this).scrollTop() > $(".sidebar").offset().top) {
			$(".filters").css({
				position:"fixed",
				top:10
			});
		} else {
			$(".filters").css({
				position:'relative',
				top:0
			})
		}
	});
});

