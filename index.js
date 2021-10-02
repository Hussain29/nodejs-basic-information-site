const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public/"));

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html")); // Home Page Display
});
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public/about.html")); // About Page Display
});
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "public/contact-me.html")); // Contact Page Display
});
app.listen(process.env.PORT || 8080, () => {
  console.log("Running!");
});
