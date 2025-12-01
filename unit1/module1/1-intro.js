console.log(`
QUES:🔥1. What Exactly is Node.js?
ANS=> nodejs is not a language, framework or library
    it is simiply:
        1. JS runtime enviornment
        2. Built on chrome v8 engine
        3. using libuv for async I/O
        4. event driven, non-blocking,single threaded achitecture
        5. singe threaded but can handle multiple clients(connections) using event loop and callback function


-------------------------------------------------------------------------


QUES:🔥2. Why Node.js Exists ?
ANS => Browser run js only inside browser
    NodeJs allow js to run outside the browser . so js can build:
    1. Servers
    2. CLI
    3. APIs
    4.Microservices
    5. Real time chat application


-------------------------------------------------------------------------


QUES: 🔥3. Node.js Architecture?
ANS => Event Loop: Handle async tasks
       Call Stack: Run js code line by line
       libuv Thread Pool: Handles JS code line by line(file system, DNS,Crypto, etc)
       Callbacks/Promise/Async-Await: used to habdke async tasks


---------------------------------------------------------------------------


QUES What is V8 Engine?
ANS => V8 is an open-source JavaScript engine developed by Google.
       It is written in C++ and is used in Google Chrome and Node.js to execute JavaScript code.
       V8 compiles JavaScript directly to native machine code, which makes it very fast.


-------------------------------------------------------------------------

QUES: What is Event Loop in Node.js?
ANS => It allows it to handle asynchronous operations.
       It continuously checks the call stack and the callback queue, executing callbacks when the call stack is empty.
       This enables Node.js to perform non-blocking I/O operations, allowing it to handle multiple connections efficiently.


-------------------------------------------------------------------------

QUES: What is libuv in Node.js?
ANS => libuv is a multi-platform support library with a focus on asynchronous I/O.
       It provides the event loop and handles operations such as file system access, DNS resolution, and network communication.
       libuv uses a thread pool to offload blocking tasks, allowing Node.js to remain non-blocking and efficient.


-------------------------------------------------------------------------

QUES: How does Node.js handle asynchronous operations?
ANS => Node.js handles asynchronous operations using the event loop, callbacks, Promises, and async/await.
       When an asynchronous operation is initiated, Node.js offloads it to the libuv thread pool or the appropriate system API.
       Once the operation is complete, a callback function is placed in the callback queue, which the event loop processes when the call stack is empty.


-------------------------------------------------------------------------

QUES: What are some common use cases for Node.js?
ANS => 1. Web Servers and APIs
       2. Real-time Applications (e.g., chat applications, online gaming)
       3. Microservices Architecture
       4. Command Line Tools
       5. Streaming Applications
       6. Server-side Rendering for Web Applications


-------------------------------------------------------------------------


Ques: when to not use Node.js?
ANS => 1. CPU-Intensive Applications
       2. Heavy Computation Tasks
       beacuse it block the event loop and slow down the performance of application
       How it blocks: Node.js is single-threaded, so if a CPU-intensive task is running, it can block the event loop, preventing other operations from being processed.


-------------------------------------------------------------------------

Ques WHen to use Node.js?
ANS => 1. I/O-Intensive Applications
       2. Real-time Applications
       3. JSON APIs
       4. Microservices
       5. Single Page Applications (SPAs)
       because Node.js excels in handling multiple concurrent connections and asynchronous operations efficiently.

       I/O means Input/Output operations, such as reading from or writing to a database, file system, or network. as it is built on non-blocking, event-driven architecture on top of V8 engine and libuv which is built on c++


-------------------------------------------------------------------------


Ques: Synchronous vs Asynchronous in Node.js?
ANS => Synchronous:
        1. Blocking opereation
        2. code executtes line by line
        3. wait for each opereation to complete before moving to next

        means: Line execute -> waits -> next line

       Asynchronous:
        1. Non-blocking operation
        2. code can execute without waiting for previous operation to complete
        3. uses callbacks, promises, async-await to handle async tasks

        means: Line execute -> move to next line -> when previous complete, execute its callback

`);