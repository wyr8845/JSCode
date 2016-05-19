function multicast(func) {
	return function(arr, ad) {
		var len = arr.length;
		var arResult = [];
    var result = 0;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        arResult.push(func(arr[i], ad));
      }
		  return arResult;
    } else {
      result = arguments[0] + arguments[1];
      return result;
    }
	}
}