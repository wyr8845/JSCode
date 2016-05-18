function sort(arr){
  var temp;
  
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (Math.abs(3 - arr[i]) > Math.abs(3 - arr[j])) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  
  return arr;
}