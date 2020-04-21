const express = require("express");

// Create the server instance
const app = express();
const PORT = 3000;

// Sets a middleware to be used during the request/reponse
// middleware for static files
app.use(express.static("public"));

// supporting files that are loaded with HTML pages

//       /         GET    - route/endpoint
app.get("/", (req, res, next) => {
  console.log(__dirname);
  res.sendFile(__dirname + "/public/views/index.html");
});

//       /about    GET     - route/endpoint
app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

// GET    /test    GET     - route/endpoint
app.get("/works", (req, res, next) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.get("/gallery", (req, res, next) => {
    res.sendFile(__dirname + "/public/views/gallery.html");
  });

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
