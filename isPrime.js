function isPrime(n){ //��������true������������false
  if (n == 2)
    return true;
  
  var flag = 0;
  
  for (var i = 2; i < n; i++) {
     if (n % i == 0)
       return false;
    
    flag = 1;
  }
  
  if (flag == 1)
    return true;
  else
    return false;
}