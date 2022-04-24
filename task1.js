// https://www.codewars.com/kata/5680781b6b7c2be860000036/train/javascript
// «A», «E», «I», «O», «U», «Y»

function vowelIndices(word) {
	let arr = [];
	for(let i = 0; i < word.length; i++) {
	  if(/[aeioyu]/i.test(word[i])) {
		arr.push(i+1);
	  }
	}
	return arr
  }

vowelIndices("nBjONbipjcoCHQWkPOQlJvtNkwYdrFP");
