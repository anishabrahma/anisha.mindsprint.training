const fs = require('fs');

const directoryPath = './hello';

fs.mkdir(directoryPath, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory created successfully');
    }
});
