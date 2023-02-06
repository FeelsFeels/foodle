const fs = require("fs");

let foodObjectsHolder = {};
let foodHolder = [];
let ingredientHolder = [];
let originHolder = [];
let methodHolder = [];
let courseHolder = [];


fs.readFile("fooddeets.txt", (err, file) => {
    if(err){
        throw err;
    }
    console.log('woot');
    let details = file.toString();
    //removing of newlines
    details = details.replace(/(\r\n|\n|\r)/gm,"").split("#");
    details.shift();

    
    
    details.forEach(element => {
        foodInfo = element.split('/');

        foodHolder.push(foodInfo[0]);
        foodObjectsHolder[foodInfo[0]] = [[],[],[],[]];

        let ingredientArray = foodInfo[1].split(',');
        ingredientArray.forEach(element => {
            if(element == '???'){
                return;
            }
            foodObjectsHolder[foodInfo[0]][0].push(element);
            ingredientHolder.push(element);
        });

        let originArray = foodInfo[2].split(',');
        originArray.forEach(element => {
            if(element == '???'){
                return;
            }
            foodObjectsHolder[foodInfo[0]][1].push(element);
            originHolder.push(element);
        });

        let methodArray = foodInfo[3].split(',');
        methodArray.forEach(element => {
            if(element == '???'){
                return;
            }
            foodObjectsHolder[foodInfo[0]][2].push(element);
            methodHolder.push(element);
        });
        
        let courseArray = foodInfo[4].split(',');
        courseArray.forEach(element => {
            if(element == '???'){
                return;
            }
            foodObjectsHolder[foodInfo[0]][3].push(element);
            courseHolder.push(element);
        });

    });

    ingredientHolder = [...new Set(ingredientHolder)];
    originHolder = [...new Set(originHolder)];
    methodHolder = [...new Set(methodHolder)];
    courseHolder = [...new Set(courseHolder)];


    console.log(foodHolder);
    console.log(foodObjectsHolder);
    console.log(ingredientHolder);
    console.log(originHolder);
    console.log(methodHolder);
    console.log(courseHolder);

    let ingredientString = '[';
    ingredientHolder.forEach(element => {
        ingredientString += `'${element}',`
    });
    ingredientString += ']';

    fs.writeFile("parsedthedeetshaha.txt", ingredientString, function(err) {
        if(err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
});


  