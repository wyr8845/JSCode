function find(arr){
  var BiggestOdd = undefined;
  var leastEven = undefined;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) {
      BiggestOdd = arr[i];
    } else if (arr[i] % 2 == 0) {
      leastEven = arr[i];
    }
  }
  
  if (BiggestOdd == undefined || leastEven == undefined)
    return undefined;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > BiggestOdd && arr[i] % 2 == 1)
      BiggestOdd = arr[i];
    else if (arr[i] < leastEven && arr[i] % 2 == 0)
      leastEven = arr[i];
  }
  
  return BiggestOdd + leastEven;
}