/**
 * creates a legend to read the colors of the machines
*/

var popupContainer = svg.append("g")
						.attr("class", "popUpLegend")
						.attr("x", 0)
						.attr("y", 0);
svg.append("defs")
	.append("pattern")
	.attr("id", "popUpIcon")
	.attr("width", 16)
	.attr("height", 16)
	.append("image")
	.attr("id", "iconSprite")
	.attr("xlink:href", "../style/icons/popUpSprite.png")
	.attr("transform", "translate(0,0)");

popupContainer.append("rect")
						.attr("class", "popUpContainer")
						.attr("width", 94)
						.attr("height", 600);

var windowHeight = window.innerHeight;
var legendHeight = d3.select(".popUpContainer").attr("height");
var totalMargin = windowHeight - legendHeight;
var translation = parseInt(totalMargin/2);

console.log(translation);
function adjustLegend(offset){	
	var scrollingOffset = -offset -10; //for adjusting scroll offset purpose
	var legend = d3.select(".popUpLegend");
	var transform = legend.attr("transform");
	var currentTranslation = translate = transform.substring(transform.indexOf("(")+1, transform.indexOf(")")).split(",");
	var translationX = currentTranslation[0]; 
	var translationY =  currentTranslation[1];
	var newTranslationY = parseInt(translationY) + scrollingOffset;
	
	if(newTranslationY > 187 && newTranslationY < 2000 - legendHeight){//svg height
		legend.attr("transform", "translate(" + translationX + "," + newTranslationY + ")");
	}
	else if(newTranslationY < 187){
		legend.attr("transform", "translate(" + translationX + "," + translation + ")");
	}
}

d3.select(".popUpLegend").attr("transform", "translate(0,"+ translation + ")");

popupContainer.append("text").text("Legend").attr("class", "legendTitle").attr("transform", "translate(10,20)");
						
popupContainer.append("rect")
						.attr("width", 16)
						.attr("height", 16)
						.attr("open", true)
						.style("cursor", "pointer")
						.style("fill", "url(#popUpIcon)")
						.attr("transform", "translate(75,6)")
						.on("click", function(){
							var _this = d3.select(this);
							if(_this.attr("open") == "true"){
								popupContainer.transition()
								.duration(200)
								.attr("transform", "translate(-75,"+ translation + ")");	
								_this.attr("open", false);
								d3.select("#iconSprite").attr("transform", "translate(0,-16)");
								d3.select(".popUpContainer").attr("class", "popUpContainer closed");
							}
							else{
								popupContainer.transition()
								.duration(200)
								.attr("transform", "translate(0,"+ translation + ")");	
								_this.attr("open", true);
								d3.select("#iconSprite").attr("transform", "translate(0,0)");
								d3.select(".popUpContainer").attr("class", "popUpContainer");
							}
						});

						
popupContainer.append("text").text("Light load").attr("class", "legendLabel").attr("transform", "translate(10,60)");
popupContainer.append("text").text("Heavy load").attr("class", "legendLabel").attr("transform", "translate(10,590)");


var grad = popupContainer.append("defs")
.append("linearGradient")
.attr("id", "grad")
.attr("x1", "0%")
.attr("x2", "0%")
.attr("y1", "0%")
.attr("y2", "100%");

grad.selectAll("stop")
.data(statusColors)
.enter()
.append("stop")
.style("stop-color", function(d){ return d; })
.attr("offset", function(d,i){
  return 100 * (i / (statusColors.length - 1)) + "%";
})

var legendElement = popupContainer.append("rect")
.attr("class", "legendBar")
.style("fill", "url(#grad)")
.attr("transform", "translate(30,70)");