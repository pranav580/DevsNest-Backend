node
var fs = require("fs");
fs.mkdirSync('Day_1');
fs.writeFileSync("Day_1/hello.txt","Hello World", (err) =>{ 
    if(err)
    {
        console.log(err);
    }
});

fs.appendFileSync("Day_1/hello.txt", " Appended");

fs.readFileSync("Day_1/hello.txt");
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 41 70 70 65 6e 64 65 64>

fs.readFileSync("Day_1/hello.txt", "utf-8");
'Hello World Appended'

> var data = fs.readFileSync("Day_1/hello.txt", "utf-8");
> console.log(data)
Hello World Appended

fs.renameSync("Day_1/hello.txt" , "Day_1/hello2.txt");

fs.unlinkSync("Day_1/hello2.txt");

fs.rmdirSync('Day_1');

<h1>for working on multiple file</h1>
npm init

node file_Name  //for running js 