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
