function allTheArgs(func, ...args) {
  let word = ''
  return func.bind(word, ...args)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = allTheArgs;
