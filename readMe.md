# Node.js  

## What is Node.js?  
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

---


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

