function getSecond(arr){ //返回数组中第二大的数，注意边界条件
  var first;
  var second;
  
  if (arr.constructor != Array)
    return undefined;
  
  first = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  
  return second;
}