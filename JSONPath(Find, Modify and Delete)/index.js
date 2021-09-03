const data = require("./friends.json");  //The JSON file is store into data variable or constant.

//printing full JSON file.
console.log(data);

//Accessing element.
console.log(data.friends[0].name);

let ageOfAnamika = data.friends[0].age;
console.log("Anamika's age(2020) is : "+ageOfAnamika);

//Modify element.
data.friends[0].age = 22;
console.log("Anamika's age(2021) is : "+data.friends[0].age);

data.friends[1].age = 21;
console.log("Kabita's age(2021) is : "+data.friends[1].age);

//Delete element.
delete data.friends[1].age;

console.log(data);