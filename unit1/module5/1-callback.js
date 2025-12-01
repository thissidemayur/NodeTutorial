console.log(`
================================ Callback Functions in JavaScript ===================================  
`)


console.log(`
Q1🔥 -> What is a callback function?    
Ans: A callback is fn passed as an argument to another fn so that it can run later
    In Nodejs callbacks are the foundational mechanisam behind async opereations Before Promises/async-await existed

    Eg of opereations that need callbacks:
        1. Reading and writing  files
        2. Making HTTP requests
        3. Database queries
        4. Timers (setTimeout, setInterval)
        5. Streams 
        6. Network operations(eg: TCP sockets)

    Callbacks allow us to:
        1. Handle async operations
        2. Avoid blocking the main thread
        3. Execute code after an async operation completes
     
========================================================================================================

Q2🔥 -> How do callback functions work in Node.js?
Ans: In Node.js, when an async operation is initiated, we pass a callback fn as an argument to that operation.
    Once the operation completes, Node.js invokes the callback fn, passing any results or errors as arguments.
    This allows us to handle the outcome of the async operation without blocking the main thread.

    eg: present in next file (2-callbackExample.js)
    
========================================================================================================

Q3🔥 -> Synchronous vs Asynchronous Callback?
Ans: Synchronous Callback:
    1. Executed immediately within the same call stack
    2. Blocks the main thread until it completes
    3. Used in operations that are quick and do not involve waiting (eg: array methods like map, filter)

Asynchronous Callback:
    1. Executed after the current call stack is cleared
    2. Does not block the main thread
    3. Used in operations that involve waiting (eg: file I/O, network requests)

    eg: present in next file (2-callbackExample.js)
    
========================================================================================================

Q4🔥 ->  Callback Signature?
Ans: Callback signature refers to the specific parameters and their order that a callback function expects.
    In Node.js, the common convention for async callbacks is the "error-first" pattern.
    This means the first parameter is reserved for an error object (if any), and the subsequent parameters are for successful results.

    i.e: callback(err, data)
    Example of error-first callback signature:
       function add(x,y,callback){
              if(typeof x !== 'number' || typeof y !== 'number'){   
                    return callback(new Error("Invalid input: both arguments must be numbers"));
              }
              const result = x + y;
              callback(null, result); // no error, pass null as first argument
        }

    This pattern helps in consistent error handling across different async operations in Node.js.

========================================================================================================

Q5 🔥 -> Execution Flow of Callbacks in Node.js?
Ans: 
    1. Call Stack: When a function is called, it is added to the call stack. If this function initiates an async operation with a callback, the async operation is offloaded to the appropriate system (like libuv for I/O operations).
    
    2. Event Loop: The event loop continuously checks the call stack and the callback queue. If the call stack is empty, it takes the first callback from the queue and pushes it onto the call stack for execution.
    
    3. Callback Queue: When an async operation completes, its associated callback is added to the callback queue. This queue holds all callbacks that are ready to be executed once the call stack is free.

    This mechanism ensures that async operations do not block the main thread, allowing Node.js to handle multiple operations concurrently.

========================================================================================================

Q6🔥 -> Common Issues with Callbacks?
Ans: 
    1. Callback Hell: Deeply nested callbacks can make code hard to read and maintain. This is often referred to as "callback hell" or "pyramid of doom".
        Solution: Use Promises or async/await to flatten the structure.

    2. Error Handling: Inconsistent error handling can lead to unhandled exceptions.
        Solution: Follow the error-first callback pattern consistently.

    3. Multiple Calls: A callback might be called multiple times unintentionally.
        Solution: Ensure that callbacks are called only once, and consider using flags or other mechanisms to prevent multiple invocations.

    4. Losing Context: The value of 'this' may not be what you expect inside a callback.
        Solution: Use arrow functions or bind the correct context.

    5. Performance Issues: Excessive use of callbacks can lead to performance bottlenecks.
        Solution: Optimize the number of async operations and consider using batching or throttling techniques.

// ========================================================================================================    

Q7🔥 -> Alternatives to Callbacks in Node.js?
Ans: 
    1. Promises: Promises provide a cleaner way to handle async operations by allowing chaining of .then() and .catch() methods for success and error handling respectively.
    2. Async/Await: Built on top of Promises, async/await syntax allows writing async code that looks synchronous, making it easier to read and maintain.

==============================================================================================================

Q8🔥 -> Does callback run on separate thread in Node.js?
Ans: No, callbacks do not run on separate threads in Node.js. Node.js operates on a single-threaded event loop architecture. When an asynchronous operation is initiated, it is offloaded to the system's thread pool (managed by libuv) for execution. Once the operation completes, the associated callback is queued in the event loop to be executed on the main thread when the call stack is empty. This allows Node.js to handle multiple asynchronous operations efficiently without blocking the main thread.

==============================================================================================================

Q9🔥 -> How does node execute callbacks internally?
Ans: 
    1. When an async operation is initiated, Node.js offloads it to the libuv thread pool.
    2. Once the operation completes, libuv places the associated callback into the event loop's callback queue.
    3. The event loop continuously checks the call stack and the callback queue.
    4. When the call stack is empty, the event loop takes the first callback from the queue and pushes it onto the call stack for execution.
    5. The callback is executed on the main thread, allowing it to interact with other parts of the application.

==============================================================================================================
`);