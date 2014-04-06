$(document).ready(function() {
	
	//taginputs
	$("input.make-tags").tagsInput();

	//tipsy
	$(".tipsified").tipsy({
		gravity:"w",
		offset:5,
	});

	//fixed position sidebar on scroll
	$(window).on("scroll",function() {
		var $filters = $(".filters");
		if($(this).scrollTop() > $(".sidebar").offset().top) {
			$filters.css({
				position:"fixed",
				top:10,
				width:$filters.outerWidth()
			});
		} else {
			$filters.css({
				position:'relative',
				top:0,
				width:'auto'
			})
		}
	});
});

