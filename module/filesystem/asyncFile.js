import fs from "fs";

// readFile
fs.readFile("file.txt", "utf8", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data);
});


// writeFile
fs.writeFile('file.txt', 'This is new content', (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)
})

// appendFile
fs.appendFile("file.txt", "New content add", (error, data) => {
    if (error) {
        console.log(error)
    }
    console.log(data)
})