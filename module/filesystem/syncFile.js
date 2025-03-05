import fs from 'fs';


// readFileSync
const data = fs.readFileSync('file.txt', 'utf8');
// console.log(data);

// fs.writeFileSync
const write = fs.writeFileSync('file.txt', 'Hello');
// console.log(write)

const update = fs.appendFileSync('file.txt', ', We are learning NodeJS fie System Module');
console.log(update);