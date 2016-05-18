function copy(obj){  //深拷贝
    function Clone(){}  
    Clone.prototype = obj;  
    var o = new Clone();  
    for(var i in o){  
        if(typeof o[i] == "object") {  
            o[i] = copy(o[i]);  
        }  
    }  
    return o;  
}  