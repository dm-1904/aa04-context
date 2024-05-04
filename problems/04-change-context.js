function changeContext(func, obj) {
  // return func.call(obj)

 const bound = func.bind(obj)
 return bound();


  }

//func will work as thought it was created in the context of obj
// const bound is binding the function extractName to the instance of a Class.


class Person {
  constructor(name) {
    this.name = name;
  }
}

function extractName() {
  return this.name;
}
const kristen = new Person('Kristen');
console.log(changeContext(extractName, kristen)); // => Kristen
/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = changeContext;
