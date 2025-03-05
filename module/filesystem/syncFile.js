import fs from 'fs';


// readFileSync
const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

// fs.writeFileSync
const write = fs.writeFileSync('file.txt', 'Hello');
console.log(write)