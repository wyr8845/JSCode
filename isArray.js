function isArray(obj){ //判断数组，注意 instanceof 的局限性
  //return Object.prototype.toString.call(obj) === '[object Array]';
  return toString.apply(obj) === '[object Array]';
}