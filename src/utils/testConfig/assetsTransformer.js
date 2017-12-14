
//This files helps jest loading static file like images, css ...
const path = require('path');

module.exports = {
    process(src, filename) {
        return `module.exports=${JSON.stringify(path.basename(filename))};`;
    },
};
