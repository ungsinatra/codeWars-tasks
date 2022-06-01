function highAndLow(numbers) {
	let arr = numbers.split(" ");
	const arrRes = []
  	arrRes.push(Math.max(...arr),Math.min(...arr));
	
	return arrRes.sort((a,b)=>b-a).join(' ')

}

console.log(highAndLow("1 1 1 1 5"));
