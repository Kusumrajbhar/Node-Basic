const fs = require('fs');

//reading files
// fs.readFile('./docs/files.txt', (err, data) => {   //this is asynchronous method. after it completes callback fun executes
// if(err) {
//     console.log('err', err);
// }
// console.log('data', data.toString());
// })
// console.log('read last line');

//writing files
// fs.writeFile("./docs/files.txt", "Hello Rajbhar", () => {
//     console.log('file written')
// });
// fs.writeFile("./docs/files2.txt", "Hello New File", () => {
//     console.log('file written')
// });

//directories
// if(!fs.existsSync('./assets')) {        //synchrounous will not proceed unless it checks
//     fs.mkdir('./assets', (err)=> {      //asynchronous function
//         if(err) {
//             console.log(err);
//         }
//         console.log('directory created');
//     })
// } else {
//     fs.rmdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log("directory deleted");
//     })
// }

//deleting files
if(fs.existsSync('./docs/delete.txt')){   //check whether exists
    fs.unlink('./docs/delete.txt', (err) => { // deletes file not directory
        if (err) {
            console.log(err);
        }
        console.log("file deleted");
    })
}
