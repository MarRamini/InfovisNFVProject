/**
 * creates a context menu opened by a right click on the path
 */

//handler to hide the context menu when click occurs outside a path
d3.select("body") 
	.on("click", function(){
		d3.select(".contextMenu").remove();
	})

//flag for the show/hide chains logic
var chainsHided = false;

//create a div for the menu and appends it to the mouse point
function createMenu(path){
	d3.select(".contextMenu").remove();
	menu = d3.select("body").append("menu")
			.attr("class", "contextMenu")
			.style("left", (d3.event.pageX + 20) + "px")		
	 		.style("top", (d3.event.pageY) + "px");
	setMenuVoices(menu, path);	
}

//create the menu voices ad adds functionality to them
function setMenuVoices(menu, path){	
	
	var addColorClass = path.attr("class") == "colored" ? "disabled" : "";
	var removeColorClass = path.attr("class") != "colored" ? "disabled" : "";
	
	var hideChainsClass = chainsHided ? "disabled" : "";
	var showChainsClass = chainsHided ? "" : "disabled";
		
	var div = menu.append("div")
		.attr("class", "menuVoicesContainer container");
	
	var voice = div.append("span")
			.html("Add color")
			.attr("class", "menuVoice " + addColorClass)
			.on("click", function(){
				colorPath(path);
				d3.select(".contextMenu").remove();
			});
	
	voice = div.append("span")
			.html("Remove color")
			.attr("class", "menuVoice " + removeColorClass)
			.on("click", function(){
				removeColor(path);
				d3.select(".contextMenu").remove();
			});
	
	voice = div.append("span")
			.html("Hide other chains")
			.attr("class", "menuVoice " + hideChainsClass)
			.on("click", function(){	
				var paths = d3.selectAll("path");
				for(i=0; i<paths._groups[0].length; i++){
					var elem = d3.select(paths._groups[0][i])
					if(path.attr("chainNumber") != elem.attr("chainNumber")){
						elem.style("visibility", "hidden");
					}
					chainsHided = true;
				}
				
				d3.select(".contextMenu").remove();
			});
	
	voice = div.append("span")
			.html("Show other chains")
			.attr("class", "menuVoice " + showChainsClass)
			.on("click", function(){
				var paths = d3.selectAll("path");
				for(i=0; i<paths._groups[0].length; i++){
					var elem = d3.select(paths._groups[0][i])
					elem.style("visibility", "visible");
				}
				chainsHided = true;
				d3.select(".contextMenu").remove();
			});
	
	voice = div.append("span")
			.html("Close menu")
			.attr("class", "menuVoice")
			.on("click", function(){
				d3.select(".contextMenu").remove();
			});
}
