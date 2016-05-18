function shuffle(arr){ //实现均匀洗牌
	var num;
	var temp;
	
	for (var i = 0; i < arr.length; i++) {
		num = Math.floor(Math.random() * (arr.length - i));
		temp = arr[arr.length - i - 1];
		arr[arr.length - i - 1] = arr[num];
		arr[num] = temp;
	}
	
 	return arr;
}