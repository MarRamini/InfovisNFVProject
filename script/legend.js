/**
 * creates a legend to read the colors of the machines
 */

var popupContainer = svg.append("g")
						.attr("class", "popUpLegend")
						.attr("x", 0)
						.attr("y", 0)
						.attr("width", 75)
						.attr("height", 2000);
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
						.attr("width", 75)
						.attr("height", 2000)
						.style("fill", "navajowhite");

//defining text first for clickability issues
popupContainer.append("text").text("Legend").attr("class", "legendLabel").attr("transform", "translate(93,13)");
						
popupContainer.append("rect")
						.attr("width", 132)
						.attr("height", 16)
						.attr("open", true)
						.style("cursor", "pointer")
						.style("fill", "url(#popUpIcon)")
						.attr("transform", "translate(75,0)")
						.on("click", function(){
							var _this = d3.select(this);
							if(_this.attr("open") == "true"){
								popupContainer.attr("transform", "translate(-76,0)");	
								_this.attr("open", false);
								d3.select("#iconSprite").attr("transform", "translate(0,-16)");
							}
							else{
								popupContainer.attr("transform", "translate(0,0)");	
								_this.attr("open", true);
								d3.select("#iconSprite").attr("transform", "translate(0,0)");
							}
						});

						
popupContainer.append("text").text("low flux").attr("class", "legendLabel").attr("transform", "translate(10,20)");
popupContainer.append("text").text("high flux").attr("class", "legendLabel").attr("transform", "translate(10,760)");


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
.attr("transform", "translate(20,30)");