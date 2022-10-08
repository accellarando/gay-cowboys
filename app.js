function focusSection(prevSection,nextSection){
	$("#"+prevSection).hide("slide",{direction:"left"},1000);
	$("#"+nextSection).show("slide",{direction:"right"},1000);
}
