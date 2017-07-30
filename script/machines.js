/**
 * creates and sets the virtual machines numbered
 */
var statusColors = ["green", "red"];

function jobOccupation(machine, job){
	switch(machine){
	case "vm0" :
		for(i=0 ; i<vm0_job2chains.length ; i++){
			var elem = vm0_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm1" :
		for(i=0 ; i<vm1_job2chains.length ; i++){
			var elem = vm1_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm2" :
		for(i=0 ; i<vm2_job2chains.length ; i++){
			var elem = vm2_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;			
	case "vm3" :
		for(i=0 ; i<vm3_job2chains.length ; i++){
			var elem = vm3_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm4" :
		for(i=0 ; i<vm4_job2chains.length ; i++){
			var elem = vm4_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm5" :
		for(i=0 ; i<vm5_job2chains.length ; i++){
			var elem = vm5_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm6" :
		for(i=0 ; i<vm6_job2chains.length ; i++){
			var elem = vm6_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	case "vm7" :
		for(i=0 ; i<vm7_job2chains.length ; i++){
			var elem = vm7_job2chains[i];
			if(elem.job == job){
				var occupation = elem.chains;
			}
		}
		break;
	}
	return occupation;
}

function jobOccupationColor(machine, job){
	var colors = d3.scaleLinear()
    .domain([0,numberOfUsers])
    .range(statusColors);
		
	var color = colors(jobOccupation(machine,job));
	return color;		
}

var machineTooltip = d3.select("body").append("div")
		.attr("class", "machineTooltip")
		.attr("opacity", 0);

//defining functions for each VirtualMachine from A to J and assigning functions to each virtual machine
//VM0 functions A,J,F
var radiusOfFunction = 17;

//ordering the functions in a shape similar to the VMs

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
var vm = d3.select("#vm0");
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionA")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm0", "A"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(60,2)) +", 60)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm0", "A"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
	 		.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("A").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(0,2)) +", 65)");

//var radiusOfFunction = radiusOfMachine*20.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionJ")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm0", "J"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(0,2)) +", 0)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm0", "J"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("J").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(0,2)) +", 5)");

//var radiusOfFunction = radiusOfMachine*74.40 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionF")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm0", "F"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-60,2)) +", -60)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm0", "F"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("F").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(0,2)) +", -55)");

//VM1 functions A,C,J
vm = d3.select("#vm1");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionA")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm1", "A"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(195,2)) +", 195)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm1", "A"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("A").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(186,2)) +", 200)");

//var radiusOfFunction = radiusOfMachine*37.20 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionC")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm1", "C"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(245,2)) +", 245)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm1", "C"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("C").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(240,2)) +", 250)");

//var radiusOfFunction = radiusOfMachine*20.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionJ")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm1", "J"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(290,2)) +", 290)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm10", "J"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("J").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(290,2)) +", 295)");

//VM2 functions B,D,I
vm = d3.select("#vm2");

//var radiusOfFunction = radiusOfMachine*34.72 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionB")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm2", "B"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-195,2)) +", -195)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm2", "B"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("B").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-186,2)) +", -190)");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionD")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm2", "D"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-245,2)) +", -245)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm2", "D"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("D").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-240,2)) +", -240)");

//var radiusOfFunction = radiusOfMachine*44.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionI")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm2", "I"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-290,2)) +",-290)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm2", "I"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("I").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-288,2)) +", -285)");

//VM3 functions H,E,G
vm = d3.select("#vm3");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionH")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm3", "H"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(344,2)) +", 344)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm3", "H"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("H").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(343,2)) +", 350)");

//var radiusOfFunction = radiusOfMachine*44.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionE")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm3", "E"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(350,2)) +", 350)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm3", "E"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("E").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(350,2)) +", 355)");

//var radiusOfFunction = radiusOfMachine*30.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionG")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm3", "G"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(344,2)) +", 344)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm3", "G"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("G").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(345,2)) +", 348)");

//VM4 functions C,F
vm = d3.select("#vm4");

//var radiusOfFunction = radiusOfMachine*37.20 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionC")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm4", "C"))
		.attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-347,2)) +", -347)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm4", "C"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("C").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ -Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-346,2)) +", -343)");

//var radiusOfFunction = radiusOfMachine*74.40 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionF")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm4", "F"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-347,2)) +", -347)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm4", "F"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("F").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-347,2)) +", -343)");

//VM5 functions A,F,H,I,J
vm = d3.select("#vm5");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionA")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm5", "A"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(295,2)) +", 295)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm5", "A"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("A").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(298,2)) +", 299)");

//var radiusOfFunction = radiusOfMachine*74.40 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionF")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm5", "F"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(271,2)) +", 271)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm5", "F"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("F").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(274,2)) +", 275)");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionH")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm5", "H"))
		.attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(243,2)) +", 243)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm5", "H"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("H").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(246,2)) +", 247)");

//var radiusOfFunction = radiusOfMachine*44.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionI")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm5", "I"))
		.attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(213,2)) +", 213)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm5", "I"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("I").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(216,2)) +", 217)");

//var radiusOfFunction = radiusOfMachine*20.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionJ")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm5", "J"))
		.attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(181,2)) +", 181)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm5", "J"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("J").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(184,2)) +", 185)");

//VM6 functions D,B,E
vm = d3.select("#vm6");

//var radiusOfFunction = radiusOfMachine*29.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionD")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm6", "D"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-290,2)) +", -290)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm6", "D"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("D").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-294,2)) +", -285)");

//var radiusOfFunction = radiusOfMachine*34.72 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionB")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm6", "B"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-245,2)) +", -245)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm6", "B"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("B").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-248,2)) +", -240)");

//var radiusOfFunction = radiusOfMachine*44.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionE")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm6", "E"))
		.attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-195,2)) +", -195)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm6", "E"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("E").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate("+ Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-198,2)) +", -190)");

//VM7 functions J,I
vm = d3.select("#vm7");

//var radiusOfFunction = radiusOfMachine*20.48 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionJ")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm7", "J"))
		.attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-45,2)) +", -45)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm7", "J"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("J").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(-48,2)) +", -40)");

//var radiusOfFunction = radiusOfMachine*44.64 / 100;
svg.append("circle")
		.attr("r", radiusOfFunction)
		.attr("cx", vm.attr("cx"))
		.attr("cy", vm.attr("cy"))
		.attr("class", "functionI")
		.style("stroke", "black")
		.style("stroke-width", 1)
		.style("fill", jobOccupationColor("vm7", "I"))
		.attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(45,2)) +", 45)")
		.on("click", function(){
			var _this = d3.select(this);
			machineTooltip.html(_this.attr("class") + "<br/> Chains: " + jobOccupation("vm7", "I"));
			machineTooltip.transition()		
	 		.duration(200)		
	 		.style("opacity", .9);		
			machineTooltip
			.style("left", (d3.event.pageX +10) + "px")		
	 		.style("top", (d3.event.pageY - 40) + "px");
			setTimeout(function(){
				console.log("begin timeout");
				machineTooltip.transition()		
	            .duration(500)		
	            .style("opacity", 0);	
			}, 4000);
		});
svg.append("text").text("I").attr("x", vm.attr("cx")).attr("y", vm.attr("cy")).attr("transform", "translate(" + Math.sqrt(Math.pow(dispositionRadius,2) - Math.pow(48,2)) +", 50)");