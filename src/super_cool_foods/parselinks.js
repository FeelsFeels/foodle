const fs = require("fs");

let linksHolder = {};

fs.readFile("fooddeets_links.txt", (err, file) => {
    if(err){
        throw err;
    }
    console.log('woot');
    let details = file.toString();

    //removing of newlines
    details = details.replace(/(\r\n|\n|\r)/gm,"").split("#");
    details.shift();

    details.forEach(element => {
        let foodInfo = element.split('\\');
        linksHolder[foodInfo[0]] = [foodInfo[1], foodInfo[2]];
    });
    console.log(linksHolder);
});