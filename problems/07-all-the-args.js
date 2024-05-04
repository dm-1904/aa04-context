function allTheArgs(func, ...args) {
  let word = ''
  return func.bind(null, ...args)
}
/*
the empty string or null works in this case, but it is better to pass in null
*/

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
