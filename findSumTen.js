function find(arr){
  var res = new Array();
  var k = 0;
  
  for (var i = 0; i < arr.length - 1; i++)
    for (var j = i + 1; j < arr.length; j++)
      if (arr[i] + arr[j] == 10) {
        res[k] = new Array();
        res[k][0] = arr[i];
        res[k][1] = arr[j];
        k++;
      }
  
  return res;
}