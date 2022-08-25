const person = {
    name: "Peidong",
    age: "19",
    gender: "male",
    school:{
        Toronto: "York",
        Edmonton: "NAIT"
    }
}

const {name, age, gender, school} = person;
console.log(name);
console.log(school);
console.log(school.Toronto);
