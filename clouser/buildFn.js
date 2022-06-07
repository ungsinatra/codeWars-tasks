// https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

function buildFun(n) {
  var res = [];
	for(let char = 0;char<n;char++){
		let counter = ()=>{
			return char
		}
		res.push(counter)
	}
	return res
}

// let newFn = buildFun(5)[1]()
console.log(buildFun(6)[1]());
