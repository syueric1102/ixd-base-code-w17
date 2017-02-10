var input = [];

//All time variables
var bubbleTime = 0;
var selectionTime = 0;
var insertionTime = 0;
var mergeTime = 0;
var quickTime = 0;

//Parse Input Into Array (User Input)
function getInput(str) {
	var str_split = str.split(" ");
	for(var i = 0; i < str_split.length; i++){
		input[i] = str_split[i];
	}
}


//Random Array of Length len
function getInputRand(len){
	//var len = prompt("Please Enter Size of Data Set (No Repeats):");
	var arr = [];
	for(var i = 0; i < len; i++){
		arr[i] = i;
	}
	input = arr;
}

//Shuffle function to shuffle input
function shuffle() {
	var j, x, i;
	for (i = input.length; i; i -= 1) {
		j = Math.floor(Math.random() * i);
		x = input[i - 1];
		input[i - 1] = input[j];
		input[j] = x;
	}
}

//Print the Array
function printArray(array){
	var ret = "";
	for(var i=0; i < array.length; i++){
		ret = ret.concat(array[i]);
		ret = ret.concat(" ");
	}
	alert(ret);
}

//Implement BubbleSort on Input Array
function bubbleSort(arr){
	var start = performance.now();
	var length = arr.length;
	for (var i = length-1; i>=0; i--){
		for(var j = 1; j<=i; j++){
			if(arr[j-1]>arr[j]){
				var temp = arr[j-1];
				arr[j-1] = arr[j];
				arr[j] = temp;
			}
		}
	}
	var end = performance.now();
	bubbleTime = end - start;
	return arr;
}

//Implement SelectionSort on Input Array
function selectionSort(arr){
	var start = performance.now();
	var minIdx, temp, 
	len = arr.length;
	for(var i = 0; i < len; i++){
		minIdx = i;
		for(var  j = i+1; j<len; j++){
			if(arr[j]<arr[minIdx]){
				minIdx = j;
			}
		}
		temp = arr[i];
		arr[i] = arr[minIdx];
		arr[minIdx] = temp;
	}
	var end = performance.now();
	selectionTime = end - start;
	return arr;
}

//Implement InsertionSort on Input Array
function insertionSort(arr){
	var start = performance.now();
	var len = arr.length;

	for(var i = 0; i < len; i++) {
		var tmp = arr[i];
		for(var j = i - 1; j >= 0 && (arr[j] > tmp); j--) {
			arr[j+1] = arr[j];
		}
		arr[j+1] = tmp;
	}
	var end = performance.now();
	insertionTime = end - start;
	return arr;
}

//mergeSort helper function
function merge(left, right){
	var result = [],
	lLen = left.length,
	rLen = right.length,
	l = 0,
	r = 0;
	while(l < lLen && r < rLen){
		if(left[l] < right[r]){
			result.push(left[l++]);
		}
		else{
			result.push(right[r++]);
		}
	}  
	return result.concat(left.slice(l)).concat(right.slice(r));
}
//Implement mergeSort on input array
function mergeSort(arr){
	var start = performance.now();
	var len = arr.length;
	if(len <2)
		return arr;
	var mid = Math.floor(len/2),
	left = arr.slice(0,mid),
	right =arr.slice(mid);
	var end = performance.now();
	mergeTime += end - start;
	return merge(mergeSort(left),mergeSort(right));
}

//Implement QuickSort on input array
function swap(items, firstIndex, secondIndex){
	var temp = items[firstIndex];
	items[firstIndex] = items[secondIndex];
	items[secondIndex] = temp;
}

function partition(items, left, right) {
	var pivot = items[Math.floor((right + left) / 2)],
	i = left,
	j = right;
	while (i <= j) {
		while (items[i] < pivot) {
			i++;
		}
		while (items[j] > pivot) {
			j--;
		}
		if (i <= j) {
			swap(items, i, j);
			i++;
			j--;
		}
	}
	return i;
}

function quickSort(items, left, right) {
	var start = performance.now();
	var index;
	if (items.length > 1) {
		index = partition(items, left, right);
		if (left < index - 1) {
			quickSort(items, left, index - 1);
		}
		if (index < right) {
			quickSort(items, index, right);
		}
	}
	var end = performance.now();
	quickTime += end - start;
	return items;
}

function myJsFunction(){
	input = [];
	bubbleTime = 0;
	selectionTime = 0;
	insertionTime = 0;
	mergeTime = 0;
	quickTime = 0;

	if (document.getElementById('input1').value.indexOf(' ') >= 0 || document.getElementById('input1').value == "") {
		alert("Invalid format, please enter only 1 number (Without space).");
	}
	else {
		getInputRand(document.getElementById('input1').value);
		shuffle();

	//printArray(input);

	quickSort(input.slice(0), 0, input.length-1);
	//alert('Execution time for QuickSort: ' + quickTime + 'ms');
	//printArray(input);

	bubbleSort(input.slice(0));
	//alert('Execution time for BubbleSort: ' + bubbleTime + 'ms');
	//printArray(input);

	mergeSort(input.slice(0));
	//alert('Execution time for MergeSort: ' + mergeTime + 'ms');
	//printArray(input);

	insertionSort(input.slice(0));
	//alert('Execution time for InsertionSort: ' + insertionTime + 'ms');
	//printArray(input);

	selectionSort(input.slice(0));
	//alert('Execution time for SelectionSort: ' + selectionTime + 'ms');
	//printArray(input);

	var chartData={
		globals:{
			fontFamily:"Palatino Linotype",
			fontColor:"#545454",
		},
    	"type":"bar",  // Specify your chart type here.
    	backgroundColor: "#adcceb",
    	title:{
 	 		text: "Algorithm Speed (ms)"
 		},
	"scale-y": {
    		label:{
        		text:"Sorting Time (Milliseconds)",
    		},
	},
    	"scale-x":{
 	   	  values:["QuickSort","BubbleSort","MergeSort","InsertionSort","SelectionSort"]
 		},
 		"plot":{
    	  alpha: 0.75,
   	  	  borderRadius:"4px",
   	  	  backgroundColor: "#6699ff",
   	  	  "styles":["#eed467","#8cb9ec","#7fb47d","#d487a2","#c797d0"],
   	  	  "animation":{
   	  	  	"effect":"ANIMATION_EXPAND_BOTTOM"
   	  	    }
   		},
    	"series":[  // Insert your series data here.
    	{ "values": [quickTime, bubbleTime, mergeTime, insertionTime, selectionTime]},
    	]
    };
  		zingchart.render({ // Render Method[3]
  			id:'chartDiv',
  			data:chartData,
  			height:400,
  			width:600
  		});	
  	}
  }

  function myJsFunction2(){
  	input = [];
  	bubbleTime = 0;
  	selectionTime = 0;
  	insertionTime = 0;
  	mergeTime = 0;
  	quickTime = 0;

  	if (document.getElementById('input1').value == "") {
  		alert("Invalid format, please enter only 1 number (Without space).");
  	}
  	else {
  		getInput(document.getElementById('input1').value);

  		quickSort(input.slice(0), 0, input.length-1);
	//alert('Execution time for QuickSort: ' + quickTime + 'ms');
	//printArray(input);

	bubbleSort(input.slice(0));
	//alert('Execution time for BubbleSort: ' + bubbleTime + 'ms');
	//printArray(input);

	mergeSort(input.slice(0));
	//alert('Execution time for MergeSort: ' + mergeTime + 'ms');
	//printArray(input);

	insertionSort(input.slice(0));
	//alert('Execution time for InsertionSort: ' + insertionTime + 'ms');
	//printArray(input);

	selectionSort(input.slice(0));
	//alert('Execution time for SelectionSort: ' + selectionTime + 'ms');
	//printArray(input);

	var chartData={
		globals:{
			fontFamily:"Palatino Linotype",
			fontColor:"#545454",
		},
    	"type":"bar",  // Specify your chart type here.
    	backgroundColor: "#adcceb",
    	title:{
 	  		text: "Algorithm Speed (ms)"
 	},
	"scale-y": {
    		label:{
        		text:"Sorting Time (Milliseconds)",
    		},
	},		
    	"scale-x":{
 	  	  values:["QuickSort","BubbleSort","MergeSort","InsertionSort","SelectionSort"]
 		},
 		"plot":{
   	  	  alpha:0.8,
   	  	  borderRadius:"4px",
   	  	  backgroundColor: "#6699ff",
   	  	  "styles":["#eed467","#8cb9ec","#7fb47d","#d487a2","#c797d0"],
   	  	  "animation":{
   	  	  	"effect":"ANIMATION_EXPAND_BOTTOM"
   	  	  }
   		},
    	"series":[  // Insert your series data here.
    	{ "values": [quickTime, bubbleTime, mergeTime, insertionTime, selectionTime]},
    	]
    };
  	zingchart.render({ // Render Method[3]
  		id:'chartDiv',
  		data:chartData,
  		height:400,
  		width:600
  	});	
  }
}

function instructions(){

	alert("Welcome to sort speed visualizer ZingSort!  ZingSort compares the runtimes in ms of 5 popular array sorting " +  
		"algorithms: QuickSort, BubbleSort, MergeSort, InsertionSort, and SelectionSort, and pops them onto a graph " + 
		"powered by ZingCharts.  To sort a random array of unique integers, " + 
		"enter an integer array size below and click 'Randomize and Sort!'.  Otherwise, build your own " +
		"array by entering integers separated by a space and click 'Sort!'.");
}





