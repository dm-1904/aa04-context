function changeContext(func, obj) {
  // return func.call(obj)

 const bound = func.bind(obj)
 return bound();


  }





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
