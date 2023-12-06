const fs = require("fs"); // File system module from Node.js

const readFileAsync = (file) => { // Function to read file asynchronously
    return new Promise((resolve, reject) => { // Promise to handle async operation
        fs.readFile(file, "utf8", (err, data) => { // Read file
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        }) 
    })
}

const file = "./file.txt"; // File path

readFileAsync(file) // Read file
    .then((fileData) => { // Handle file data
        console.log("File content: ", fileData); // Print file data
    })
    .catch((e) => { // Handle error
        console.log("Error reading file: ", e); // Print error
    })