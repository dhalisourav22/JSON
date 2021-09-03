const data = require("./students.json");  //The JSON file is store into data variable or constant.

for(x in data){
    console.log(x);  //This will print the all key of a json file one by one. Which we store in data variable.
    console.log(data[x]);  //This will print value corresponding the x or key one by one.
}