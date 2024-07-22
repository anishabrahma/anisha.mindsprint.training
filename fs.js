const fs = require('fs');

const message = 'Test from another file';
const filePath = '.Week 1\examples\node';

fs.writeFile(filePath, message, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Data written successfully');
    }
});
