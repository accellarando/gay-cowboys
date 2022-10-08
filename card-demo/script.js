function zoomInOn(target) {
	$(target).parents(".card").removeClass('notClicked');
	$(target).parents(".card").addClass('zoom');

    setTimeout(function() {
        // $(target).parents(".card").removeClass('zoom');
        $(target).parents(".card").addClass('zoomed');
    }, 2000);
}

function flipOver(target) {	
	// Adds a `class` attribute with value `animate`
    $(target).parents(".card").removeClass('zoomed');
    $(target).parents(".card").addClass('animate');

    setTimeout(function() {
        // $(target).parents(".card").removeClass('animate');
        $(target).parents(".card").addClass('animated');
    }, 2000);
}

function zoomOut(target) {
    $(target).parents(".card").removeClass('zoom');
	$(target).parents(".card").removeClass('animate');
    $(target).parents(".card").removeClass('animated');
}

function nothingZoomed() {
    return !(
        $(".obj1").hasClass("zoom") || 
        $(".obj2").hasClass("zoom")
    );
}

$(document).ready(function(e){
    // $(".obj1").css("width: 560px; height: 400px;");
	$(".card").click(function(e) {
		if ($(e.currentTarget).hasClass("notClicked") && nothingZoomed()) {
			zoomInOn(e.target);
            return;
		}
        if ($(e.currentTarget).hasClass("zoomed")) {
			flipOver(e.target);
            return;
		}
        if ($(e.currentTarget).hasClass("animated")) {
			zoomOut(e.target);
            return;
		}
	});
});
