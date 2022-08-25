//npm i http-server -g
//http-server
//Available on: http://localhost:8080

//create an object
const obj1 = {
  name: 'Thomas'
}

//deep copy to create obj2
let obj2 = JSON.parse(JSON.stringify(obj1));

//get all the methods in the prototype
console.log(Object.getPrototypeOf(obj2));

//create custom prototype for an object
//custom prototype:
const customPrototype = {
    greeting(){
        alert('Hello world')
    }
}

obj2 = Object.create(customPrototype)
obj2.greeting()  //works

