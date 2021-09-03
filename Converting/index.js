//student is a JS object.
let student = {
    name: "Sourav Dhali",
    age: 22,
    dept: "CSE"
}

//Converting in to JSON format.
console.log(JSON.stringify(student));

// studentInJson = JSON.stringify(student);
// console.log(studentInJson);


//Converting into JS object.
console.log(JSON.parse('{"Name" : "Samapti", "Age": 22}'));