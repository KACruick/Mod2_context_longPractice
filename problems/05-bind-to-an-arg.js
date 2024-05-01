function bindToAnArg(func, arg) {
  let result = func.bind(null, arg);
  return result;
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
