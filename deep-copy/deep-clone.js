/**
 *
 * @param input: this input will be copied
 * @returns A new copy
 */

  const deepClone = (input) => {
      //make sure the input is an object or array
  if ( input == null || typeof input !== "object") {
      return input;    //primitive
  }

  //initialization 初始化返回值 for recursion
    //determine the type of the input
  const initialOutput = Array.isArray(input) ? [] : {};
  //recursion
  return Object.keys(input).reduce((acc, key) => {
      //similar to for (let key in input)
      acc[key] = deepClone(input[key])
      return acc;
  }, initialOutput);
}

module.exports = deepClone





//simple test for objects
let obj1 = {
    name: "Thomas",
    schools: {
        toronto: "YU",
        edmonton: "NAIT"
    }
}

let obj2 = deepClone(obj1)
obj2.schools.edmonton = 'UA'
console.log(obj1);
console.log(obj2);
console.log(obj1 === obj2);

//test for array
const arr = [1,2,3];
let deepArr = deepClone(arr);
deepArr[0] = 2;
console.log(arr);
console.log(deepArr);
console.log(deepArr === arr);

