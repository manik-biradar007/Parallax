function run(){
	var svg_xlg = document.getElementById("svg_xlg").contentDocument;

	svg_xlg.addEventListener("load", changeColor());

	function changeColor(){
		var cloud_xlg = svg_xlg.getElementById("cloud_xlg");
		cloud_xlg.style.fill = "#000";
	}
}