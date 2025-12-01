console.log(`
================================= File System (fs) Module in Node.js ==================================  
`)

import fs from "fs";
import fsPromise from "fs/promises"

const filePath = "sample.txt"

//  ============================================ Read File Examples ============================================

// read file sync
function readFileSync() {
    console.log("Synchronous File Start reading:\n");
    try {
        const data = fs.readFileSync(filePath, "utf-8")
        console.log(data);
        console.log("\nSynchronous File End reading.");
    } catch (error) {
        console.error("Error reading file synchronously:", error);
    }

}

// read file with async
function readFileWithCallback() {
    console.log("Asynchronous File Start reading with callbacks:\n");
    fs.readFile(filePath,"utf-8",(err,data)=>{
        if (err){
            console.error("Error reading file asynchronously:", err);
        } else {
            console.log(data);
            console.log("\nAsynchronous File End reading.");
        }
    })
}

// read file with async/await or promises
async function readFileWithPromises() {
    console.log("Asynchronous File Start reading with Promises/async-await:\n");
    try {
        const data =  await fsPromise.readFile(filePath, "utf-8");      
        console.log(data);
        console.log("\nAsynchronous File End reading.");
    } catch (error) {
        console.error("Error reading file with Promises:", error);
    }
}



// ============================================ Write File Examples ============================================

const writeFilePath1 = "output1.txt"
const writeFilePath2 = "output2.txt"
const writeFilePath3 = "output3.txt"
// write file sync
const writeFileSync = ()=>{
    console.log("Synchronous File Start writing:\n");
    try {
        fs.writeFileSync(writeFilePath1, "This is some sample text written synchronously.");
        console.log("File written successfully.");
        console.log("\nSynchronous File End writing.");
    } catch (error) {
        console.error("Error writing file synchronously:", error);
    }
}

// write file with async
const writeFileWithCallback = ()=>{
    console.log("Asynchronous File Start writing with callbacks:\n");
    try {
        fs.writeFile(writeFilePath2, "This is some sample text written asynchronously with callbacks.", (err) => {
            if (err) {
                console.error("Error writing file asynchronously:", err);
            } else {
                console.log("File written successfully.");
                console.log("\nAsynchronous File End writing.");
            }
        });
    } catch (error) {
      console.error("Error writing file asynchronously:", error);  
    }
}

// write file with async/await or promises
const writeFileWithPromises = async ()=>{
    console.log("Asynchronous File Start writing with Promises/async-await:\n");

    try {
        await fsPromise.writeFile(writeFilePath3, "This is some sample text written asynchronously with Promises/async-await.");
        console.log("File written successfully.");
        console.log("\nAsynchronous File End writing.");
    } catch (error) {
        console.error("Error writing file with Promises:", error);
    }

}



// ============================================ Append File Examples ============================================

const appendFilePath = filePath;
const appendData = "\n\nThis text is appended to the file.\n";

// append file sync
const appendFileSync = ()=>{
    console.log("Synchronous File Start appending:\n");
    try {
        fs.appendFileSync(appendFilePath, appendData);
        console.log("File appended successfully.");
        console.log("\nSynchronous File End appending.");
    } catch (error) {
        console.error("Error appending file synchronously:", error);
    }
}

// append file with async
const appendFileWithCallback = ()=>{
    console.log("Asynchronous File Start appending with callbacks:\n");
    try {
        fs.appendFile(appendFilePath, appendData, (err) => {
            if (err) {
                console.error("Error appending file asynchronously:", err);
            } else {
                console.log("File appended successfully.");
                console.log("\nAsynchronous File End appending.");
            }
        });
    } catch (error) {
      console.error("Error appending file asynchronously:", error);  
    }
}

// append file with async/await or promises
const appendFileWithPromises = async ()=>{
    console.log("Asynchronous File Start appending with Promises/async-await:\n");

    try {
        await fsPromise.appendFile(appendFilePath, appendData);
        console.log("File appended successfully.");
        console.log("\nAsynchronous File End appending.");
    } catch (error) {
        console.error("Error appending file with Promises:", error);
    }

}   



// ============================================ Delete File Examples ============================================
const deleteFilePath1 = writeFilePath1;
const deleteFilePath2 = writeFilePath2;
const deleteFilePath3 = writeFilePath3;

// delete file sync
const deleteFileSync = ()=>{
    console.log("Synchronous File Start deleting:\n");
    try {
        fs.unlinkSync(deleteFilePath1);
        console.log("File deleted successfully.");
        console.log("\nSynchronous File End deleting.");
    } catch (error) {
        console.error("Error deleting file synchronously:", error);
    }
}

// delete file with async
const deleteFileWithCallback = ()=>{
    console.log("Asynchronous File Start deleting with callbacks:\n");
    try {
        fs.unlink(deleteFilePath2, (err) => {
            if (err) {
                console.error("Error deleting file asynchronously:", err);
            } else {
                console.log("File deleted successfully.");
                console.log("\nAsynchronous File End deleting.");
            }
        });
    } catch (error) {
      console.error("Error deleting file asynchronously:",      error);
    }
}

// delete file with async/await or promises
const deleteFileWithPromises = async ()=>{
    console.log("Asynchronous File Start deleting with Promises/async-await:\n");

    try {
        await fsPromise.unlink(deleteFilePath3);
        console.log("File deleted successfully.");
        console.log("\nAsynchronous File End deleting.");
    } catch (error) {
        console.error("Error deleting file with Promises:", error);
    }

}



// ============================================ Mkdir and readdir ============================================
const dirPath = "sampleDir";
function CreateAndReadDir(){
    fs.mkdir(dirPath, (err) => {
      if (err) {
        console.error("Error creating directory:", err);
      } else {
        console.log("Directory created successfully.");

        // Read contents of the current directory
        fs.readdir(".", (err, files) => {
          if (err) {
            console.error("Error reading directory:", err);
          } else {
            console.log("Contents of the current directory:");
            files.forEach((file) => {
              console.log(file);
            });
          }
        });
      }
    });
}



// read opereations
readFileSync();
readFileWithCallback();
readFileWithPromises();

// write operations
writeFileSync();
writeFileWithCallback();
writeFileWithPromises();

// append operations
appendFileSync();
appendFileWithCallback();
appendFileWithPromises();

// delete operations
deleteFileSync();
deleteFileWithCallback();
deleteFileWithPromises();

// create and read directory
CreateAndReadDir();
