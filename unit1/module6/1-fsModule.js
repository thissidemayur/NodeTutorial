console.log(`
================================ FS module in JavaScript ===================================
`)

console.log(`
  There are 3 way to use FS module:
    1. Synchronous (blocking)
    2. Asynchronous (non-blocking) with Callbacks
    3. Asynchronous (non-blocking) with Promises
    
==========================================================================================    
`)

console.log(`SyncFs
    Sync = Blocking = node literally halts your entire js process untill opereation finishes
    Eg: readFileSync, writeFileSync, appendFileSync, mkdirSync, rmdirSync, readdirSync, statSync etc.

    What happens under the hood?
    1. Node ask OS to read the file
    2. OS reads the file from disk (this can take time depending on file size and disk speed)
    3. Node waits like and idiot until OS replies
    4. At that time, event loop is blocked and no other code can run
    5. therefore CPU stays idle during I/O waits
    6. Once OS replies with file data, Node resumes execution and returns the data

    When to use Sync FS?
    1. During startup tasks (eg: loading config files)
    2. Small scripts where blocking is not an issue
    3. When simplicity is more important than performance

`)


console.log(`AsyncFs with Callbacks
    Async = Non-Blocking = node can continue executing other code while waiting for the FS operation to complete
    Eg: readFile, writeFile, appendFile, mkdir, rmdir, readdir, stat etc.

    What happens under the hood?
    1. Node ask OS to read the file
    2. OS reads the file from disk (this can take time depending on file size and disk speed)
       I/O us handled by separate thread pool (libuv-4threads by default)
    3. Meanwhile, Node continues executing other code and handling other events
    4. Once OS replies with file data, Node places the callback in the event queue
    5. When the call stack is empty, event loop picks up the callback and executes it with the file data
    
    
    When to use Async FS with Callbacks?
    1. In most server applications where responsiveness is crucial
    2. When performing multiple I/O operations concurrently
    3. When handling large files or slow disks to avoid blocking the event loop
    
`)

console.log(`AsyncFs with Promises
    Internally similar to async FS with callbacks, but wrapped in Promises for better readability and error handling
    Eg: fs.promises.readFile, fs.promises.writeFile, fs.promises.appendFile, fs.promises.mkdir, fs.promises.rmdir, fs.promises.readdir, fs.promises.stat etc.

`)