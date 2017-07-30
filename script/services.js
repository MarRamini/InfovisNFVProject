/**
 * creates and sets the service chains for the users
 *  
 */

//define some users
var numberOfUsers = 20;

var colorPool = ["Brown", "Coral", "Crimson", "DarkGoldenRod", "DarkOrange", "DarkRed", "DarkSalmon", "Firebrick", "IndianRed", "LightCoral", "LightSalmon", "Maroon", "OrangeRed", 
				 "PaleVioletRed", "Tomato", "DeepPink", "HotPink", "MediumVioletRed", "Salmon", "Sienna"];

function colorPath(path){
	var color;
	
	if(path.attr("class") != "colored"){
		path.attr("class", "colored");
		color = colorPool.pop();
		path.attr("stroke", color);
	}
}

function removeColor(path){
	var color;
	if(path.attr("class") == "colored"){
		color = path.attr("stroke");
		colorPool.push(color);
		path.attr("stroke", "#446ca2");
	}
}

//define jobs
var jobs = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

//defining Machines and jobs they can execute
var machine0 = ["A","J","F"];
var machine1 = ["A","C","J"];
var machine2 = ["B","D","I"];
var machine3 = ["H","E","G"];
var machine4 = ["C","F"];
var machine5 = ["A","J","F","H","I"];
var machine6 = ["B","D","E"];
var machine7 = ["I","J"];


//define for each machine an array of object representing each job and its points needed to draw lines of service chains
var vm0_job2points = [{"job": "A", "x": 255, "y": 535}, {"job": "J", "x": 250, "y": 475}, {"job": "F", "x": 256, "y": 415}];
var vm1_job2points = [{"job": "A", "x": 310, "y": 670}, {"job": "C", "x": 351, "y": 720}, {"job": "J", "x": 405, "y": 765}];
var vm2_job2points = [{"job": "B", "x": 310, "y": 280}, {"job": "D", "x": 351, "y": 230}, {"job": "I", "x": 405, "y": 185}];
var vm3_job2points = [{"job": "H", "x": 536, "y": 819}, {"job": "E", "x": 600, "y": 825}, {"job": "G", "x": 664, "y": 819}];
var vm4_job2points = [{"job": "C", "x": 555, "y": 128}, {"job": "F", "x": 645, "y": 128}];
var vm5_job2points = [{"job": "A", "x": 788, "y": 770}, {"job": "J", "x": 899, "y": 656}, {"job": "F", "x": 821, "y": 746}, {"job": "H", "x": 851, "y": 718}, {"job": "I", "x": 877, "y": 688}];
var vm6_job2points = [{"job": "B", "x": 849, "y": 230}, {"job": "D", "x": 795, "y": 185}, {"job": "E", "x": 890, "y": 280}];
var vm7_job2points = [{"job": "I", "x": 947, "y": 520}, {"job": "J", "x": 947, "y": 430}];

//defining arrays for each VM containing number of chains that request each job of the VM
var vm0_job2chains = [{"job": "A", "chains": 0}, {"job": "J", "chains": 0}, {"job": "F", "chains": 0}];
var vm1_job2chains = [{"job": "A", "chains": 0}, {"job": "C", "chains": 0}, {"job": "J", "chains": 0}];
var vm2_job2chains = [{"job": "B", "chains": 0}, {"job": "D", "chains": 0}, {"job": "I", "chains": 0}];
var vm3_job2chains = [{"job": "H", "chains": 0}, {"job": "E", "chains": 0}, {"job": "G", "chains": 0}];
var vm4_job2chains = [{"job": "C", "chains": 0}, {"job": "F", "chains": 0}];
var vm5_job2chains = [{"job": "A", "chains": 0}, {"job": "J", "chains": 0}, {"job": "F", "chains": 0}, {"job": "H", "chains": 0}, {"job": "I", "chains": 0}];
var vm6_job2chains = [{"job": "B", "chains": 0}, {"job": "D", "chains": 0}, {"job": "E", "chains": 0}];
var vm7_job2chains = [{"job": "I", "chains": 0}, {"job": "J", "chains": 0}];

//define center of the graph
var centerOfGraph = {"x": 600, "y": 475}

function pointAtX(a, b, x){
	var slope = (b[1] - a[1]) / (b[0] - a[0]);
	var y = a[1] + (x - a[0]) * slope;
	return [x, y];
}

function initialPointFunction(currentMachine, job){
	var initialPoint;
	switch(currentMachine){
		case "vm0" :
			switch(job){
				case "A":
					var x1 = [255, 535];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 30);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "F":
					var x1 = [256, 415];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 30);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "J":
					var x1 = [250, 475];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 30);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm1" : 
			switch(job){
				case "A":
					var x1 = [310, 670];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 30);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "C":
					var x1 = [351, 720];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 50);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "J":
					var x1 = [405, 765];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;	
			}
		case "vm2" :
			switch(job){
				case "B":
					var x1 = [310, 280];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 20);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "D":
					var x1 = [351, 230];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 20);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "I":
					var x1 = [405, 185];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 20);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm3" :
			switch(job){
				case "H":
					var x1 = [536, 819];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 500);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "E":
					var x1 = [600, 825];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "G":
					var x1 = [664, 819];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 700);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm4" :
			switch(job){
				case "C":
					var x1 = [555, 128];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 20);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "F":
					var x1 = [645, 128];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm5" :
			switch(job){
				case "A":
					var x1 = [788, 770];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "J":
					var x1 = [899, 656];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "F":
					var x1 = [821, 746];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "H":
					var x1 = [851, 718];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "I":
					var x1 = [877, 688];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm6" :
			switch(job){
				case "B":
					var x1 = [849, 230];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "D":
					var x1 = [759, 185];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "E":
					var x1 = [890, 280];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1000);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
			break;
		case "vm7" :
			switch(job){
				case "I":
					var x1 = [947, 520];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
				case "J":
					var x1 = [947, 430];
					var x2 = [600, 475];
					var temp = pointAtX(x1, x2, 1200);
					initialPoint = {};
					initialPoint["x"] = temp[0];
					initialPoint["y"] = temp[1];
					break;
			}
	}
	return initialPoint;
}

//increments chain counter for each job
function incrementCounter(machine, job){
	switch(machine){
		case "vm0" :
			switch(job){
				case "A" :
					vm0_job2chains[0].chains ++;
					break;
				case "J" :
					vm0_job2chains[1].chains ++;
					break;
				case "F" :
					vm0_job2chains[2].chains ++;
					break;
			}
			break;
		case "vm1" :
			switch(job){
				case "A" :
					vm1_job2chains[0].chains ++;
					break;
				case "C" :
					vm1_job2chains[1].chains ++;
					break;
				case "J" :
					vm1_job2chains[2].chains ++;
					break;
			}
			break;
		case "vm2" :
			switch(job){
				case "B" :
					vm2_job2chains[0].chains ++;
					break;
				case "D" :
					vm2_job2chains[1].chains ++;
					break;
				case "I" :
					vm2_job2chains[2].chains ++;
					break;
			}
			break;			
		case "vm3" :
			switch(job){
				case "H" :
					vm3_job2chains[0].chains ++;
					break;
				case "E" :
					vm3_job2chains[1].chains ++;
					break;
				case "G" :
					vm3_job2chains[2].chains ++;
					break;
			}
			break;
		case "vm4" :
			switch(job){
				case "C" :
					vm4_job2chains[0].chains ++;
					break;
				case "F" :
					vm4_job2chains[1].chains ++;
					break;
			}
			break;
		case "vm5" :
			switch(job){
				case "A" :
					vm5_job2chains[0].chains ++;
					break;
				case "J" :
					vm5_job2chains[1].chains ++;
					break;
				case "F" :
					vm5_job2chains[2].chains ++;
					break;
				case "H" :
					vm5_job2chains[3].chains ++;
					break;
				case "I" :
					vm5_job2chains[4].chains ++;
					break;
			}
			break;
		case "vm6" :
			switch(job){
				case "B" :
					vm6_job2chains[0].chains ++;
					break;
				case "D" :
					vm6_job2chains[1].chains ++;
					break;
				case "E" :
					vm6_job2chains[2].chains ++;
					break;
			}
			break;
		case "vm7" :
			switch(job){
				case "I" :
					vm7_job2chains[0].chains ++;
					break;
				case "J" :
					vm7_job2chains[1].chains ++;
					break;
			}
			break;
	}
}

//define service chains
for(i=0 ; i<numberOfUsers ; i++){
	var user = "user"+i
	var lengthOfServiceChain = parseInt(Math.random()*10 + 1); //randomly selecting a number of jobs, assuming maximum number is the number of jobs
	var serviceChain = [];
	for(j=0 ; j<lengthOfServiceChain ; j++){
		var randomJobPicker = parseInt(Math.random()*10); //randomly picking up a job and
		serviceChain.push(jobs[randomJobPicker]); 			  //pushing into an array representing the service chain
	}
	
	var serviceChainCopy = []; //storing information about the service chain for later use
	for(z=0 ; z<serviceChain.length ; z++){
		serviceChainCopy.push(serviceChain[z]);
	}
	
	var svg = d3.select("svg");
	var lineData = [];
	
	
	var currentJob = serviceChain.shift();
	var firstJob = true; //flag to set the initialPoint only in the first iteration
	
	while(currentJob != undefined){
		var machines = [];
		var currentMachine;
		//for each job randomly picking up a virtual machine that can execute it
		switch(currentJob){
			case "A" : 
				machines = [0,1,5];
				currentMachine = "vm" + machines[parseInt(Math.random()*3)];
				break;
			case "B" : 
				machines = [2,6];
				currentMachine = "vm" + machines[parseInt(Math.random()*2)];
				break;
			case "C" : 
				machines = [1,4];
				currentMachine = "vm" + machines[parseInt(Math.random()*2)];
				break;
			case "D" : machines = [2,6];
			currentMachine = "vm" + machines[parseInt(Math.random()*2)];
				break;
			case "E" : 
				machines = [3,6];
				currentMachine = "vm" + machines[parseInt(Math.random()*2)];
				break;
			case "F" : 
				machines = [0,4,5];
				currentMachine = "vm" + machines[parseInt(Math.random()*3)];
				break;
			case "G" : 
				machines = [3];
				currentMachine = "vm" + machines[parseInt(Math.random()*1)];
				break;
			case "H" : 
				machines = [3,5];
				currentMachine = "vm" + machines[parseInt(Math.random()*2)];
				break;
			case "I" : 
				machines = [2,5,7];
				currentMachine = "vm" + machines[parseInt(Math.random()*3)];
				break;
			case "J" : 
				machines = [0,1,5,7];
				currentMachine = "vm" + machines[parseInt(Math.random()*4)];
				break;
		}
		
		incrementCounter(currentMachine, currentJob);
		
		//if it's the first iteration the line begins outside the graph otherwise the beginning point of the line is already defined
		if(firstJob){
			var initialPoint = initialPointFunction(currentMachine, currentJob);
			firstJob = false;
			lineData.push(initialPoint);
		}
		
		
		//pushing the selected job point into an array of points to draw the line
		var endPoint;
		switch(currentMachine){
			case "vm0":
					for(m=0 ; m<vm0_job2points.length; m++){
						var elem = vm0_job2points[m];
						if(currentJob == elem.job){
							endPoint = {"x": elem.x, "y": elem.y}
						}
					}
					break;
			case "vm1":
				for(m=0 ; m<vm1_job2points.length; m++){
					var elem = vm1_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm2":
				for(m=0 ; m<vm2_job2points.length; m++){
					var elem = vm2_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm3":
				for(m=0 ; m<vm3_job2points.length; m++){
					var elem = vm3_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm4":
				for(m=0 ; m<vm4_job2points.length; m++){
					var elem = vm4_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm5":
				for(m=0 ; m<vm5_job2points.length; m++){
					var elem = vm5_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm6":
				for(m=0 ; m<vm6_job2points.length; m++){
					var elem = vm6_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
			case "vm7":
				for(m=0 ; m<vm7_job2points.length; m++){
					var elem = vm7_job2points[m];
					if(currentJob == elem.job){
						endPoint = {"x": elem.x, "y": elem.y}
					}
				}
				break;
		}
		lineData.push(endPoint);
		
		currentJob = serviceChain.shift();
	}
	//to do: insert here and end point outside the graph after the last job
	
	//a tooltip to display useful information about the path of the service chain
	var pathTooltip = d3.select("body").append("div")
					.attr("class", "pathTooltip tooltip")
					.attr("id", "pathTooltip" + i)
					.attr("opacity", 0)
					
	var container = pathTooltip.append("div")
					.attr("class", "tooltipVoicesContainer container");
	
	var tooltipVoice = container.append("span")
					.html("User" + i)
					.attr("class", "tooltipVoice");
	tooltipVoice = container.append("span")
					.html("Service Chain: {" + serviceChainCopy.toString() + "}")
					.attr("class", "tooltipVoice");
	pathTooltip.append("div")
					.attr("class", "tooltipArrow");
	
	var lineFunction = d3.line()
		.x(function(d){return d.x})
		.y(function(d){return d.y});

	var line = svg.append("path")
		.attr("d", lineFunction(lineData))
		.attr("id", "chain" + i)
		.attr("stroke", "#446ca2")
		.attr("stroke-width", 3)
		.attr("chainNumber", i)
		.attr("fill", "none")
		.on("click", function(){
			var _this = d3.select(this);
			
			//code to select single path
			var previousClicked = d3.selectAll(".clicked")._groups[0]; //previous clicked paths deselected
			for(i=0; i<previousClicked.length; i++){
				d3.select(previousClicked[i]).attr("class", "");
				d3.select(previousClicked[i]).attr("stroke", "#446ca2");
			}
			_this.attr("class", "clicked"); //select clicked path
			_this.attr("stroke", "chocolate");
			/*
			//code to select multiple paths
			pathClicked(_this);*/
		})
		.on("mouseover", function(d) {		
			var _this = d3.select(this);
			var chainNumber = _this.attr("chainNumber");
		 	d3.select("#pathTooltip" + chainNumber).transition()		
		 		.duration(200)		
		 		.style("opacity", .9);		
		 	d3.select("#pathTooltip" + chainNumber)
		 		.style("left", (d3.event.pageX -12) + "px")		
		 		.style("top", (d3.event.pageY - 65) + "px");	
            })					
        .on("mouseout", function(d) {
        	var _this = d3.select(this);
			var chainNumber = _this.attr("chainNumber");
        	d3.select("#pathTooltip" + chainNumber).transition()		
                .duration(500)		
                .style("opacity", 0);	
        })
        .on("contextmenu", function(){
        	var _this = d3.select(this);
        	var menu = createMenu(_this);        	
        	event.preventDefault();
        });	
}