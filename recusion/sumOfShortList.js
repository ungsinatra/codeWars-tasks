



var test = [1, 1, 1, [1, 1, [1, [1, [ [1], [1] ]], 1], 1], 1];

function sumNested(arr, i = 0) {

  if (isFinite(arr)){
	  return Number(arr);
  }
  else if (Array.isArray(arr) && i < arr.length){
	  return sumNested(arr[i]) +sumNested(arr, i + 1);
	  
  } 
  return 0
}

console.log(sumNested(test));