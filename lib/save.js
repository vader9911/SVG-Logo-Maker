//file dependencies 
const fs = require('fs');

//method for saving the file to the example directory
//creates directory if it does not already exist
function save(filename, svgContent) { 
    if (!fs.existsSync('./examples')){
        fs.mkdirSync('./examples');
    }
    fs.writeFileSync(`./examples/${filename}.svg`, svgContent);
};


module.exports = save;