function isString(obj){ //判断对象是否是字符串
  return obj != null && (typeof obj == 'string' || obj.constructor == String);
}