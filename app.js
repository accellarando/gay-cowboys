function focusSection(prevSection,nextSection,direction){
	var prevDir = 
	$("#"+prevSection).hide("slide",{direction:"left"},1000);
	$("#"+nextSection).show("slide",{direction:"right"},1000);
}

$(document).ready(function(){
	$(".btn").click(function(e){
		var text = $(e.target).text();
		var prev = $(e.target).attr("data-prev");
		var next = $(e.target).attr("data-next");
		focusSection(prev,next,text);
	});
});
