function f() {
	
	//document.getElementById("out").innerHTML = sum(1,2,3,4);
	Object.defineProperty(Array.prototype, 'remove', {
		enumerable: false,
	  	value: function(){ //删除一个或多个元素
	  		var count = 0;
	  		var i = 0;
	  		var arrr = new Array();
	  		
	  		while (arguments.length > 0) {
	  			if (arguments[i] == this[count]) {
	  				this.splice(count, 1);
	  				arrr.push(arguments[i]);
	  				i++;
	  			} else if (count < this.length) {
	  				count++;
	  			} else {
	  				break;
	  			}
	  		}
	  		
	  		return arrr;
	    }
	});
	
	var arr = [1, 1, 1, 2, 2, 3, 4, 5];
	var ttt = arr.remove(1, 1, 2, 4, 6);
	console.log(arr);
	console.log(ttt);
}