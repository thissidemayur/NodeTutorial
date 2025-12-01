// Event emmiter example
import EventEmitter from "events"
const emitter = new EventEmitter();

//Q1🔥-> register a listner for "greet" event
emitter.on("greet", (name) => {
    console.log(`Namashkar, ${name}! \nWelcome to the EventEmitter example.\n`);
});

// emmit the "greet" event
emitter.emit("greet", "Mayur Pal");

console.log("===============================================================");    

//Q2🔥-> register multiple listners for login event
emitter.on("login", (username) => {
    console.log(`User ${username} has logged in.`);
});

emitter.on("login", (username) => {
    console.log(`Sending welcome email to ${username}.`);
});
    
emitter.on("login",()=>{
    console.log("Thank you for logging in!\n");
})

// emmit the "login" event
emitter.emit("login", "mayurpal123");

console.log("===============================================================");    

//Q3🔥-> using "once" method
emitter.once("disconnect", (username) => {
    console.log(`User ${username} has disconnected.\n`);
});

// emmit the "disconnect" event twice
emitter.emit("disconnect", "mayurpal123");
emitter.emit("disconnect", "mayurpal123"); // This will not trigger the listener


console.log("===============================================================");

//Q4🔥-> removing a listener
const msgListener = (msg)=>{
    console.log(`Message received: ${msg}\n`);
}

// register the listener
emitter.on("msg", msgListener);

// emmit the "msg" event
emitter.emit("msg", "Namashkar Brahmand! ");
// remove the listener
emitter.removeListener("msg", msgListener);

// emmit the "msg" event again
emitter.emit("msg", "This will not be logged.");

console.log("===============================================================");