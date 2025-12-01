console.log(`
============================= Event Emitter in Node.js ============================
`)

console.log(`

Q1🔥 -> What is eventEmitter ?
Ans: Node is event-driven. Its means that node is heavily relaying on events to handle async opereations. EventEmitter is a class in the events module that helps to handle and emit events in Node.js. It allows us to create, listen to, and manage events in our applications.
     Event driven architecture means:
        1. Action dont happen immediately.
        2. Actions happen when an event occurs.
        3. Functions called listeners or handlers are run when an event occurs

    therefore, EventEmitter is Node's built in pub-sub system that allow registering listens and emmiting async events.


===============================================================================

Q2🔥 -> Why eventEmmiter exists?
Ans: Before Promises, streams, HTTP, FS, Net modules, Node.js used EventEmitter to handle aschnronoys operations.
    They need:
        1. Registering action
        2. Triggering events
        3. Handling async flows
    Every major node api uses eventEmitter under the hood
    EventEmmiter provides a way to handle async operations in a more manageable way.


=============================================================================== 

Q3🔥 -> How to use eventEmitter?
Ans: 
    1. Import the events module
    2. Create an instance of EventEmitter class
    3. Register an event listener using on() method or addListener() methid
    4. Emmit events using emit() method
    

===============================================================================

Q4🔥 -> Example of eventEmitter?
Ans: Next file (2-eventEmitterExample.js) in same directory


===============================================================================

Q5🔥 -> What is difference between "on" and "emmit" methods?
Ans: "On" method is used to register an event listener for specific event. 
        "It takes 2 arguments: event name and callback fn to be executed when an event is emitted."

     "Emmit" method is used to trigger the event and execute all the registered listeners for that event.
        "It takes event name as first argument and optional arguments to be passed to the listener functions."


===============================================================================

Q6🔥 -> What is listner?
Ans: A lister is a callback fn that is ececuted when a specific event is emmitted.
        Listner are registered using on() or addListener() methods of EventEmitter class.
        When an event is emmitted using emit() method, all the listners registered for that event are called in the order they were registered.


===============================================================================

Q7🔥 -> "Once" vs "on" method?
Ans: 
     On -> it reister a listner that will be called every time the event is emmitted.
     Once -> it register a listner that will be called only the first time the event is emmitted, and then it will be removed automatically.

===============================================================================

Q8🔥 -> How to remove listner from eventEmitter?
Ans: We can remove a listner using removeListener() or off() method of EventEmitter class.
     Both methods take 2 arguments: event name and the callback fn to be removed.
     Example:
        const myListner = () => { console.log("Event triggered"); }
        emitter.on("myEvent", myListner);

        emitter.removeListener("myEvent", myListner);
        // or
        emitter.off("myEvent", myListner);
===============================================================================

Q9🔥 -> EventEmitter behind the scenes
Ans: When you call:
    emitter.on("eventName", callback);

    Node does:
        1. Insert the callback into an internal  map or object where the key is the event name and the value is an array of callbacks.
            this._events["eventName"].push(callback);
        2. When you call:
            emitter.emit("eventName");
            Node does:
                1. Find all listners(callbacks) associated with "eventName" in the internal map.
                2. Iterate one by one and call each callback function.
                3. Pass any additional arguments provided to emit() to each callback.

This is how eventEmitter manages event registration and triggering behind the scenes.

===============================================================================

Q10🔥 -> Are EventEmitter callbacks(listners) executed async?
Ans: No, EventEmitter callbacks are executed synchronously in the order they were registered.
     When an event is emmitted using emit() method, all the registered listners for that event are called one by one before moving to the next line of code.

        If you want to execute a callback asynchronously, you can use setImmediate(), setTimeout(), or process.nextTick() inside the callback function.

=============================================================================== 

Q11🔥 -> What is maxListeners in eventEmitter?
Ans: By default, EventEmitter allows a maximum of 10 listeners for a single event to prevent memory leaks.
        If more than 10 listeners are added for an event, Node.js will emit a warning.
        You can change this limit using setMaxListeners() method.

        Example:
            const EventEmitter = require('events');
            const emitter = new EventEmitter();
            emitter.setMaxListeners(20);

        You can also set the maxListeners to 0 to remove the limit entirely:
            emitter.setMaxListeners(0);
===============================================================================

Q12🔥 -> Why an event listner cause memory leaks?
Ans: An event listener can cause memory leaks if it is not removed after it is no longer needed.
     If you keep adding listeners to an event without removing them, the internal array of listeners will grow indefinitely, consuming more and more memory.
     This can lead to performance issues and eventually crash the application.

     To prevent memory leaks, always remove listeners when they are no longer needed using removeListener() or off() methods.

===============================================================================

Q13🔥 -> How to handle errors in eventEmitter?
Ans: In Node.js, the 'error' event is a special event that is used to handle errors in EventEmitter.
     If an 'error' event is emitted and there are no listeners registered for it, Node.js will throw an uncaught exception and crash the application.
     To handle errors, always register a listener for the 'error' event:
        emitter.on('error', (err) => {
            console.error('An error occurred:', err);
        });
     This way, when an error occurs and the 'error' event is emitted, your listener will be called, allowing you to handle the error gracefully.

===============================================================================

Q14🔥 -> What does emitter.emit("event") return?
Ans: The emit() method returns a boolean value:
        - true if the event had listeners that were called.
        - false if the event had no listeners.

===============================================================================

Q15🔥 -> Can eventEmitter be used to communicate between two files?
Ans: Yes, EventEmitter can be used to communicate between two files by exporting an instance of EventEmitter from one file and importing it in another file.


`);