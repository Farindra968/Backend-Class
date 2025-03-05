# Node.js  

Node.js is an open-source, cross-platform **JavaScript runtime environment** that allows developers to run JavaScript code outside a web browser. It is built on **Google Chrome’s V8 JavaScript engine** and is primarily used for building **scalable, fast, and lightweight** server-side and networking applications.  

## Key Features of Node.js  
- 🚀 **Asynchronous & Non-blocking:** Handles multiple requests simultaneously without waiting for previous tasks to complete.  
- ⚡ **Single-threaded & Event-driven:** Uses a single-threaded model with event looping, making it efficient for handling concurrent connections.  
- 🔥 **Fast Execution:** Powered by the V8 engine, which compiles JavaScript to machine code.  
- 💻 **Cross-platform:** Runs on Windows, macOS, and Linux.  
- 📦 **NPM (Node Package Manager):** Comes with a vast ecosystem of libraries and modules for extending functionality.  

## Use Cases of Node.js  
✔ Web servers and APIs  
✔ Real-time applications (e.g., chat apps, gaming servers)  
✔ Microservices  
✔ Serverless applications  
✔ Streaming applications  

Node.js is widely used for modern web development, especially with frameworks like **Express.js, Nest.js, and Fastify**. 🚀  


## Architecture
- Single threaded event-driven architecture
- Non-blocking I/O operation

## API
- HTTP methods
- Modules (HTTP, File System, URL, path)
- Callback, promises, async/await
- Server

### HTTP Methods
CRUD operation (Create, Read, Update, Delete)

1. GET (Read)
2. POST (Create)
3. PUT (Update)
4. DELETE (Delete)

# Creating HTTP server in Nodejs

This guide will help you create a basic HTTP server using Node.js.

## Steps to Create a Server

### Step 1: Import HTTP Module  
First, import the built-in `http` module in Node.js.

```javascript
import http from "http";
```
### Step 2: Create Server
Next, create a simple server that responds with a success message.

```javascript
const server = http.createServer((request, response) => {
    response.end("Server Running Successfully");
});
```
### Step 3: Run Server on Port
Now, make the server listen on a specific port (e.g., 5000).

```javascript
server.listen(5000, ()=>{
    console.log("Server Running Sucessfully at Port 5000")
})
```
# FileSystem in Nodejs
The File System (fs) module in Node.js allows you to interact with the file system on your computer. It provides methods to read, write, update, delete, and rename files and directories.


## Importing file System Modules
- Importing in commonjs (CJS)
```javascript
const fs = required {'fs'}
``` 
- Importing in Module (ESM)
```javascript
import fs from 'fs'
```
## Method of FileSystem (fs) in Nodejs
- fs.readFile()
- fs.readFileSync()
- fs.writeFile()
- fs.writeFileSync()
- fs.appendFile()
- fs.appendFileSync()
- fs.unlink()
- fs.rename()
- fs.copyFile()
- fs.mkdir()
- fs.readdir()
- fs.stat()
- fs.existsSync()
- fs.createReadStream()
- fs.createWriteStream()

Nodejs fileSystem is also divided into two part:
- Asynchronous
- Synchronous

## Synchronous
Synchronous code is executed in a sequential or discipline manner, meaning each operation or task is completed before moving on to the next (work done in queue). This is the default behavior of JavaScript, where code is executed line by line, and each line must finish before the next one starts.

### fs.readfile()
- fs.readFileSync() help to read the file content
```javascript
const data = fs.readfileSync("file.txt", "utf8")
console.log(data)
```

### fs.writeFileSync()
- fs.writeFileSync() help to rewrite the content by removig old content in the file
```javascript
const data = fs.writeFileSync("file.txt", "New text");
console.log(data);
```
## Asynchronous
Asynchronous programming in JavaScript is a fundamental concept that allows you to perform tasks without blocking the main execution thread. This is particularly useful for operations that take time to complete, such as network requests, file I/O, or timers. JavaScript provides several mechanisms to handle asynchronous operations:
