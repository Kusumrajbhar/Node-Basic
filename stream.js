const fs = require('fs');

//const readStream = fs.createReadStream('./docs/streamDataFile.txt', {encoding: 'utf-8'});
 //const writeStream = fs.createWriteStream('./docs/writeStreamDataFile.txt');
// readStream.on('data', (chunk) => {    //.on is a eventListner on data
//     console.log('---Chunk---');     //data will come on chunk
//     //console.log(chunk.toString());  //due to toString() readable form of data
//     console.log(chunk)
//     writeStream.write('\nnew Chunk\n') //this add on new created file
//     writeStream.write(chunk); //this will add data of readStream file
// });

const readStream = fs.createReadStream('./docs/streamDataFile.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream('./docs/writeStreamDataFile.txt');

//Piping
readStream.pipe(writeStream);  //this line is similar to above lines of code



