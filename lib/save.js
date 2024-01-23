const fs = require('fs');


function save(filename, svgContent) { 
    if (!fs.existsSync('./examples')){
        fs.mkdirSync('./examples');
    }
    fs.writeFileSync(`./examples/${filename}.svg`, svgContent);
};


module.exports = save;