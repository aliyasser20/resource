// Basic express setup:
const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
const PORT  = 3000;

// ? Home page
router.get("/",function(req, res) {
  res.sendFile(path.join(__dirname + "/public/dist" + "/index.html"));
});

// ? About page
router.get("/about",function(req, res) {
  res.sendFile(path.join(__dirname  + "/public/dist" + "/about.html"));
});

// Store all HTML files in dist folder.
app.use(express.static(__dirname + "/public/dist"));
app.use(express.static(__dirname + "/public/dist"));

// Add the router
app.use("/", router);
app.listen(process.env.port || PORT);

console.log("Running at Port 3000");


