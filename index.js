// const {Console} = require("console");
var fs = require("fs");

// //synchronous
// console.log("Synchronous");
// var data = fs.readFileSync("info.txt");
// console.log(data.toString());

// fs.openSync("info1.txt","w");
// fs.openSync("info.txt","r");

// //Asynchronous
// console.log("Asynchronous");
// fs.readFile("info.txt",(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
// console.log(data.toString());
// });

// fs.open("info.txt","w",(err,fd)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     fs.write(fd,"welcome to NodeJS",(err)=>{
//         if(err)
//         console.log(err);

//         console.log("file created");
//     })
// })
// fs.stat("info.txt",(err,stats)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stats.isFile());
// })

// fs.unlink("info.txt",(err)=>{
//     if(err){
//     console.log(err);
//         return;
// }
// console.log("file deleted");

// })
fs.mkdir("directory",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("directory created");
    }
})

console.log("Program End");