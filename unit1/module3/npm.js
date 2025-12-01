console.log(`
    ============================ NPM Module ============================
    
`)

console.log(`
Q1🔥 -> What is NPM ?
Ans: NPM stands for Node Package Manager.
    It is a package manager for js programming lang.
    It is default package manager for Node.js runtime environment.
    It helps to isntall, update,manage external libraries and maintains dependecies and version though package.json

    NPM consists of 3 main components:
    1. Registry: A large public database of open-source JavaScript packages.
    2. CLI (Command Line Interface): A tool that allows developers to interact with the NPM registry from the command line.
    3. Depedency Management: Handles the installation and management of packages and their dependencies.
    

=====================================================================

Q2🔥 -> "npm init" — HOW PROJECT INITIALIZATION ACTUALLY WORKS
Ans: IT autogenerate a default package.json without asking questions.
    It creates a package.json file with default values for fields like name, version, description, main, scripts, keywords, author, and license.

    What happens behind the scenes:
    1. Create package.json
    2. records project metadata like name, version, description, entry point (main), scripts, keywords, author, and license.
    3. creates dependecies and dev devependencies sections
    4. act as single source of truth for project config


=====================================================================

Q3🔥 -> Difference between "npm init" and "npm init -y"
Ans: "npm init" command initializes a new Node.js project by creating a package.json file.
    It prompts the user to input various details about the project, such as name, version, description, entry point, test command, git repository, keywords, author, and license.

    On the other hand, "npm init -y" or "npm init --yes" command initializes a new Node.js project by creating a package.json file with default values.
    It skips the interactive prompts and automatically fills in the fields with default values.

=====================================================================


Q4🔥 -> What is NPM module types(core,local,third party)?
Ans: 1. Core Modules: These are built-in modules that come bundled with Node.js. Examples include fs (file system), http, path, os, and more.
    2. Local Modules: These are custom modules created by developers for specific projects. They are stored in the project's directory structure and can be imported using relative paths.
    3. Third-Party Modules: These are modules developed by the community and published on the NPM registry. Developers can install these modules using the npm install command. Examples include express, lodash, mongoose, etc.

=====================================================================

Q5🔥 -> npm start vs npm run dev?
Ans: "npm start" is a predefined script in the package.json file that is used to start the application. It is typically used to launch the main application server or entry point of the project. 
    By default, if no "start" script is defined in package.json, running "npm start" will execute the command "node server.js".

    "npm run dev" is a custom script that is often used for development purposes. It is not a predefined script and needs to be explicitly defined in the package.json file under the "scripts" section. 
    This script is commonly used to start a development server with features like hot-reloading, debugging, or other development-specific configurations.


=====================================================================

Q6🔥 -> Difference between package.json and package-lock.json ?
Ans: package.json is a file that contains metadata about the project, including its name, version, description, main entry point, scripts, dependencies, and more.
    It is created when you run "npm init" and is used to manage the project's dependencies and scripts.

    package-lock.json is automatically generated when you install packages using npm. 
    It records the exact versions of the installed packages and their dependencies, ensuring that the same versions are used when the project is installed on different machines or environments.
    It helps to maintain consistency and reproducibility of the project's dependencies.

=====================================================================

Q7🔥 -> What does require() do?
Ans: The require() function is used to import modules, JSON, and local files in Node.js.

    When you call require() with a module name or file path, Node.js looks for the specified module or file, loads it into memory, and returns the exported content (such as functions, objects, or values) to the calling code.

=====================================================================

Q11🔥 -> WHy node_modules so big?
Ans: The node_modules folder can become very large due to several reasons:
    1. Nested Dependencies: Many packages have their own dependencies, which can lead to a deep nesting of modules.
    2. Multiple Versions: Different packages may require different versions of the same dependency, resulting in multiple copies being installed.
    3. Large Packages: Some packages themselves are large in size due to the amount of code or assets they include.
    4. Development Dependencies: Including development dependencies can also contribute to the size of node_modules.
`);
