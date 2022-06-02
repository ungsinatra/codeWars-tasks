// https://www.codewars.com/kata/580dda86c40fa6c45f00028a/train/javascript
function cubeOdd(arr) {
	let count = 0;
	let squre = arr.filter(el=>el%2==1).forEach(el=>count+=el**3)

	
	
	return count;
	}

console.log(cubeOdd(["a",12,9,"z",42]))