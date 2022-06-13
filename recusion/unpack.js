let newArr = []
function unpack(arr,output){
	for(let item of arr){
		if(Array.isArray(item)){

			unpack(item,output)
		}
		else if(item instanceof Object){
			unpack(Object.values(item),output)
		}
		else{

			output.push(item)
		}
		
	}

	return output

}


console.log(unpack([{name:'sardor'},[1,2,3],['bbb']],newArr))//['sardor',1,2,3,bbb]
