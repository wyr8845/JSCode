var res = [];
function tick(n){
	var count = 0;
	for(var i = 0; i < n; i++){
    	setTimeout(function(){
    		
        	res.push(count);
        	//console.log(res.slice(-1));
        	count++;
        	return res.slice(-1);
        }, i * 50);
    }
}