// https://www.codewars.com/kata/5458d4d2cbae2a9438000389/train/javascript


var double = function (n) {
	return n * 2;
};

  function add (a, b) {
	return a + b;
}

var make_lazy = function (...opr) {
	let fn  = opr.shift();
	return function(){
		return fn(...args)
	}

};


let s = make_lazy(add,5,3)
console.log(s())
