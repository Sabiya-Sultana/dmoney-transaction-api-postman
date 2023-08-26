const newman = require('newman');
 
newman.run({
    //collection: require('./collection/dmoney.json'),
    collection:'https://api.postman.com/collections/27502964-64b0e731-d00c-4112-88d3-f48db92e3dcd?access_key=PMAT-01H8SSFH3Q33CQQR0FPARC2VBM',
    //environment:require('./collection/env.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});