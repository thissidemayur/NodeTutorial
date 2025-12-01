console.log("SYNCHRONOus and ASYNChronous Code Example");
import fs from 'fs';
console.log(fs.Dir)
const filePath = "module1/50mb_file.txt";
// Synchronous chrnounous
const SynchrnousEx = ()=>{
    console.log("SYNCHRONOUS CODE START");
    const data = fs.readFileSync(filePath,"utf-8")
    console.log(data);
    console.log("SYNCHRONOUS CODE END");
}

// Asynchronous
const AsynchrnousEx = ()=>{
    console.log("ASYNCHRONOUS CODE START");
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if(err) {
            console.log("Error reading file:", err);
        } else {
            console.log(data);
        }

        console.log("ASYNCHRONOUS CODE END");
    })
}

SynchrnousEx()   // crashes the program until the file is read
// AsynchrnousEx()