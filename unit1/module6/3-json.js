console.log(`  
=============================== JSON in JavaScript ===================================
`)

console.log(`
 - JSON is not a file format or a database.
 It is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.   
 its means it is text-based format that represents structured data based on JavaScript object syntax.

 - JSON stands for JavaScript Object Notation.
 It is commonly used for transmitting data in web applications (e.g., sending data from a server to a client, or vice versa).

 - JSON supports the following data types:
    1. Strings
    2. Numbers
    3. Booleans
    4. Arrays
    5. Objects
    6. null
    

- Node.js deals with JSON in 2 fundamental opereations:
    1. Parse -> JSON string  -> JavaScript Object
    2. Stringify -> JavaScript Object -> JSON string

    means,
        JSON.parse()  -> converts JSON string to JavaScript Object
        JSON.stringify() -> converts JavaScript Object to JSON string
    
- Node's FS module treats JSON exactly like reading a .txt file
    WHenever read json file, it is read as a string 
    therefore, we need to use JSON.parse() to convert it into JavaScript Object
    Similarly, when writing to a JSON file, we need to use JSON.stringify() to convert JavaScript Object into JSON string before writing it to the file.
    if we skip JSON.parse() while reading, we will get a string instead of an object
    if we skip JSON.stringify() while writing, we will get [object Object] in the file instead of JSON string.

===========================================================================================

Ques: What JSON.parse really does ?
Ans: JSON.parse():
        1. Convert a JSON string into a JavaScript object.
        2. Creates:
            - object, arrays, strings, numbers, booleans, null
    IT cant parse:
        1. Functions
        2. Dates (they become iSO string format)
        3. Undefined
        4. Symbol
        5. class instances

===========================================================================================

Ques: What JSON.stringify really does ?
Ans: WHen we convert JS-> JSON:
        1. Functions are removed
        2. Undefined are removed
        3. Symbol are removed
        4. Date become ISO string format
        5. class instances become plain objects

===========================================================================================
`)
       
