function caculate(action,...values) {
	let result = 0;
	switch(action) {
		case '+' :
			for(let value of values) result += value;
				break;
		case '-' : 
			for(let value of values) result -= value;
				break;
	}
	return result;
}
console.log(caculate("+", 8 , 3 , 3 ,1 , 2));