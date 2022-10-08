function focusSection(thisPage,direction){
	const sections = ["menu","instructions","saloon","end"];
	const indexNow = sections.indexOf(thisPage);
	const prevSection = thisPage;
	const nextSection = (direction == "Back") ?
		sections[indexNow-1] :
		sections[indexNow+1];
	console.log(prevSection);
	console.log(nextSection);
	const prevDir = direction == "Back" ? "right" : "left";
	const nextDir = prevDir == "right" ? "left" : "right";
	const animationDuration = 1000;
	if(nextSection == "menu"){
		$("#nav-btns").hide("slide",{direction:"right"},animationDuration);
	}
	$("#"+prevSection).hide("slide",{direction:prevDir},animationDuration);
	$("#"+nextSection).show("slide",{direction:nextDir},animationDuration);

	$(".btn").attr("data-now",nextSection);
}

$(document).ready(function(){
	$("#nav-btns").hide();
	$(".btn").click(function(e){
		var text = $(e.target).text();
		var me = $(e.target).attr("data-now");
		focusSection(me,text);
	});
});

/*** Gabby's code ***/
function zoomInOn(target) {
	$(target).parents(".card").removeClass('notClicked');
	$(target).parents(".card").addClass('zoom');

    setTimeout(function() {
        $(target).parents(".card").addClass('zoomed');
    }, 2000);
}

function flipOver(target) {	
	// Adds a `class` attribute with value `animate`
    $(target).parents(".card").removeClass('zoomed');
    $(target).parents(".card").addClass('animate');

    setTimeout(function() {
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
        $(".obj2").hasClass("zoom") ||
		$(".obj3").hasClass("zoom") ||
		$(".obj4").hasClass("zoom")
    );
}

$(document).ready(function(e){
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

	$(".item").click(function(e){
		if($(e.currentTarget).hasClass("notClicked") && nothingZoomed()){
			zoomInOn(e.target);
			return;
		}
		$(e.currentTarget).find(".card").show();
	});

});
