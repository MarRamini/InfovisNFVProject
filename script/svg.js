/**
 * creates and sets the svg
 */

var currentWidth = window.innerWidth;
var currentHeight = window.innerHeight;

var svg = d3.select("body")
				.append("svg")
				.attr("class", "drawingArea")				
				.on("wheel", function(event){
					var offset = d3.event.wheelDeltaY;
					console.log(offset)
					console.log(window.innerWidth)
					console.log(window.innerHeight)
					currentWidth = currentWidth + offset;
					currentHeight = currentHeight + offset;
					d3.select("svg")
						.attr("viewBox", "0 0 "+ (currentWidth) + " " + (currentHeight))
						d3.event.preventDefault()
						//d3.event.stopPropagation()
					//adjustLegend(d3.event.wheelDeltaY);
				});
d3.select('svg')
  .attr( 'preserveAspectRatio',"xMinYMin meet")
  //.attr("viewBox", "0 0 " + window.innerWidth + " " + window.innerHeight)
  .attr('width', '100%')


var vms = 8 //number of virtual machines

for(i=0 ; i<vms ; i++){
	
	svg.append("text")
		.attr("id", "vmLabel"+i)
		.attr("class", "vmLabel")
		.attr("x", "670")
		.attr("y", "450")
		.text("VM" + i);
	
	var machine = svg.append("circle")
			.attr("r", "100")
			.attr("cx", "600")
			.attr("cy", "475")
			.attr("class", "virtualMachine")
			.attr("id", "vm" + i)
			.style("stroke", "black")
			.style("stroke-width", 1)
			.style("fill", "#f9ecd2");
}

//ordering the VMs in a circle shape
var dispositionRadius = 350;
d3.select("#vm0").attr("transform", "translate(-350," + Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(-350, 2)) + ")");
d3.select("#vmLabel0").attr("transform", "translate(-570, 50)");
d3.select("#vm1").attr("transform", "translate(-250," + Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(-250, 2)) + ")");
d3.select("#vmLabel1").attr("transform", "translate(-430, 380)");
d3.select("#vm2").attr("transform", "translate(-250," + -Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(-250, 2)) + ")");
d3.select("#vmLabel2").attr("transform", "translate(-430, -330)");
d3.select("#vm3").attr("transform", "translate(-0," + Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(-0, 2)) + ")");
d3.select("#vmLabel3").attr("transform", "translate(30, 480)");
d3.select("#vm4").attr("transform", "translate(-0," + -Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(-0, 2)) + ")");
d3.select("#vmLabel4").attr("transform", "translate(30, -430)");
d3.select("#vm5").attr("transform", "translate(250," + Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(250, 2)) + ")");
d3.select("#vmLabel5").attr("transform", "translate(280, 330)");
d3.select("#vm6").attr("transform", "translate(250," + -Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(250, 2)) + ")");
d3.select("#vmLabel6").attr("transform", "translate(280, -280)");
d3.select("#vm7").attr("transform", "translate(350," + Math.sqrt(Math.pow(dispositionRadius, 2) - Math.pow(350, 2)) + ")");
d3.select("#vmLabel7").attr("transform", "translate(390, 50)");
