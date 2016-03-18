/*Workout Tracker
Adam Smith
CS290 - Winter 2016
*/

document.addEventListener("DOMContentLoaded", main);

function main(){
	var req1 = new XMLHttpRequest();
	req1.open("GET", "http://52.33.123.66:3000/", true);
	req1.withCredentials = true;
	req1.addEventListener("load", function(){
		var res = req1.responseText;
		document.getElementById("response").textContent = res;
		var obj = JSON.parse(res); //change it to an object
		console.log(typeof(obj)); //did it change to an object?
		var newRow = document.createElement("tr");
		document.getElementById("tableBody").appendChild(newRow);
		isObject(obj);
	});
	req1.send(null);

	function isObject(obj){
		console.log("made it to isObject");
/*
		for (var i=0; i<obj.length; i++){
			if(typeof(obj[i])=="object"){
				buildTable(obj[i]);
			}else{
				buildTable(obj);
			}
		}
*/
    	for (var prop in obj){
        	if(typeof prop =='object'){
        		console.log("type of first object is" + typeof(prop));
            	buildTable(prop);
        	}else{
        		buildTable(obj);
            }
    	}
	}

	function buildTable(obj){
		console.log("made it to buildTable");
/*
		for (var i=0; i<obj.length; i++){
			console.log(typeof(obj[i]));
			console.log(obj[i]);
			var addMe = document.createElement("td");
            document.getElementById("tableBody").appendChild(addMe);
            addMe.textContent = obj[i];
		}
*/
		for (var item in obj){
			//debug statements
			console.log("type of item is " + typeof(item));
			console.log(item);
			//add new table row
			var addMe = document.createElement("td");
            document.getElementById("tableBody").appendChild(addMe);
            addMe.textContent = item;
            //add edit button to row
            var edit = document.createElement("button");
            document.addMe.appendChild("edit");
            //add delete button to row
            var rowDelete = document.createElement("button");
            document.addMe.appendChild("rowDelete");
		}
	}

	document.getElementById("add").addEventListener("click", function(event){
		console.log("click is working");
		var name = document.getElementById("name").value;
		var req2 = new XMLHttpRequest();
		req2.open("GET", "http://52.33.123.66:3000/insert", name, reps, weight, date, lbs, false);
		req2.addEventListener("load", function(){
			if (req2.status >= 200 && req.status < 400){
				var res = req2.response;					
				document.getElementById("response").textContent = res;
			} else {
				console.log("error");
			}
		});
		req2.send(null);
		event.preventDefault();
	});
	event.preventDefault();
};
