// https://www.codewars.com/kata/555a77eb65dd419534000016/train/javascript

let counter  = 0

function sometimes(fn) {
	return fn
}

function add (a, b) {
	counter++;
	if(counter==4){
		return "hmm, I don't know!"
	}else{
		if(counter%2==0 && counter>=4){

		return "hmm, I don't know!"
	
		}
	}
	
	return a + b;
	
	

}


let s = sometimes(add);
console.log( s(4, 6)) // returns 10
console.log( s(3, 6)) // returns 9
console.log( s(2, 6)) // 
console.log( s(1, 6)) // returns 'hmm, I don't know!'
console.log( s(1, 5)) // returns 6
console.log( s(1, 4)) // returns 'hmm, I don't know!'gj




