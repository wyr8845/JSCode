function reverse(str){ //返回逆序字符串
  var t = "";
  var s = str.split("");
  
  for (var i = 0; i < s.length; i++) {
    t += s[str.length - 1 - i];
  }
  
  return t;
}