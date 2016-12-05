
//var second = list[1];

var a = "dan";
var b = "radu";

var c = a;
a = b;
b = c;

var car = {
	'name' : "dacia",
	"price": 1000,
	"km": 30000,
	"horn": function(){

	}
}



function sort(list){
	var len = list.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(list[j-1]>list[j]){
           var temp = list[j-1];
           list[j-1] = list[j];
           list[j] = temp;
        }
     }
   }
   return list;
	
}


var l1 = [3,2,5,1,15,12,9];
var sorted = sort(l1);


document.getElementById('result').innerHTML = car.price + " RON ";

function display(list){
	for (var i = list.length-1; i >=0; i--){
		document.getElementById('result').innerHTML += list[i] + " ";
	}
}

display(sorted);