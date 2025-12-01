console.log(`
========================= NODE REPL =========================

`)

console.log(`
Q1🔥 -> What is REPL?
Ans: REPL is a runtime shelll for js inside node.js enviornment
    REPL stands for read-eval-print-loop
    means, it reads your input, evalute the js expression, print the result, and loop back to read the next input

therefore, REPL is Node's interactive shell that read JS input, evaluate it, print the output and repeat the process without ending the session.
    

========================================================

Q2🔥 -> Why REPL used? 
Ans: REPL is used for testing, debugging, and evaluating JS expression without creating a js file.
    It provides an interactive environment to quickly run and test code snippets.

========================================================

Q3🔥 -> How to start REPL in Node.js?
Ans: Open ternminal and enter command "node" or "node -i"
    This will start the Node.js REPL environment where you can type and execute JS code directly.

========================================================

Q4🔥 -> REPL features
ANS: 
    1. Evalute JS instantly: eg 10+20 will return 30
    2. Support multi-line code: You can write functions, loops, and conditionals over multiple lines.
    3, Access to Node.js modules: You can require and use Node.js modules directly in the REPL.
    4. Auto-completion: Pressing the Tab key will provide suggestions for variable names and functions.
    5. Underscores "_" store last result. 
        eg: > 5+5
            10
            > _ * 2
            20
    6. cannot use modern JS features like import/export, top-level await etc.
    7. ".editor" mode for writing multi-line code blocks.
    
========================================================

Q5🔥 -> Common REPL commands
Ans: 
    > .help          -> Show help information
    > .break         -> Exit multi-line expression mode
    > .clear         -> Clear the REPL screen
    > .exit          -> Exit the REPL session
    > .load <file>   -> Load and execute a JS file in the REPL
    > .save <file>   -> Save the current REPL session to a JS file
    > .editor        -> Enter editor mode for multi-line code input
    > ctrl + C     -> Abort current input
    > ctrl + D or ctrl+c twice     -> Exit REPL

========================================================

Q6🔥 -> Difference between REPL and running js file?
Ans: 
    1. REPL is interactive shell for executing js code line by line, while running js file executes the entire file at once.
    2. REPL allows immediate feedback and testing, while running js file is used for executing complete programs.
    3. REPL maintains state between commands, while running js file starts fresh each time.
`);