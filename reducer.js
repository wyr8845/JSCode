function f() {
	function reducer(func){
	    return function (){
	      var ar = Array.prototype.slice.call(arguments);
	      return ar.reduce(func);
	    }
	}
	
	function add(x, y){
	    return x + y;
	}
	function mul(x, y){
	    return x * y;
	}
	function concat(x, y){
	    return x.concat(y);
	}
	
	var add_many = reducer(add);
	var mul_many = reducer(mul);
	var concat_many = reducer(concat);
	
	add_many(1,2,3,4); //10
	mul_many(1,2,3,4); //24
	concat_many([1,2,3],[4,5],[6,7,8]); //[1,2,3,4,5,6,7,8]
	
	console.log(add_many(1,2,3,4,5,6));
	console.log(mul_many(1,2,3,4));
	console.log(concat_many([1,2,3,4],[4,5,6,7]));
}