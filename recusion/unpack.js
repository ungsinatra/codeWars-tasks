function unpackNotTail(...arr){
	console.log(`ARR: ${arr}`)
	let newArr = []
	for(let i =0;i<arr.length;i++){
		let correntItem = arr[i];
		if(Array.isArray(correntItem)){
			newArr.push(...unpackNotTail(...correntItem))
			
		}else{
			newArr.push(correntItem)
		}
	}
	
	return newArr

}
let array = [1,2,[1,23,[1,2]]]
console.log(unpackNotTail(array))



let newArr = [];
function unpack(arr, output) {
  for (let item of arr) {
    if (Array.isArray(item)) {
      unpack(item, output);
    } else if (item instanceof Object) {
      unpack(Object.values(item), output);
    } else {
      output.push(item);
    }
  }

  return output;
}

console.log(unpack([{ name: "sardor" }, [1, 2, 3], ["bbb"]], newArr)); //['sardor',1,2,3,bbb]

//---------------------------------------------------------------------------------

function sequenSum(a, b) {
  if (a == b) {
    return a;
  } else if (a > b) {
    return NaN;
  }
  return b + sequenSum(a, b - 1);
}

console.log(sequenSum(7, 7));

//----------------------------------------------------------------------






function getStingCount(obj) {
  let count = 0;

	if (obj instanceof Object) {
		for (let value of Object.values(obj)) {
		  if (typeof value === "string") {
			count += 1;
		  }else{
	
			  count += getStingCount(value);
		  }
		}
	  }
	  
	  return count;
  }




let obj = {
	first: "1",
	second: "2",
	third: false,
	fourth: ["somthin", "2", 2],
	fifth: null,
	sixth: {
	  somthin: "asdasd",
	  alll: "true",
	},
  };


let getValue = getStingCount(obj)
console.log(getValue)
// console.log(getStingCount({ first: "1", second: "2", third: false, fourth: [1, 2, "Goof"] }));
// console.log(getStingCount({ first: "1", second: "2", third: false, fourth: [1, 2, "Goof"] }));
