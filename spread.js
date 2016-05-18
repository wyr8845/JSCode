function spread(){
  var arr = Array.prototype.slice.call(arguments);
  return arr;
}