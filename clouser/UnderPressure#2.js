// https://www.codewars.com/kata/5546ea9bddfc5c0c38000026/train/javascript

function Counter() {
  
	this.value  = 0;
	this.check = function(){
	  return  this.value
	}
	this.increment = function(){
	  return this.value++;
	  
	}
  
  };

let myCounter = new Counter();

console.log(myCounter)

myCounter.increment();
myCounter.increment();
console.log(myCounter.check());