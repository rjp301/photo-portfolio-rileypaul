require("dotenv").config();
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.static("public"));
app.set("view engine", "ejs");

const albums = require('./src/helpers/readPhotos')()
console.log(albums)

app.get("/", (req, res) => {
  res.render("pages/index",{albums});
});

app.get("/portfolio/:id", (req, res) => {
  res.render("pages/gallery",{album:albums[req.params.id]})
})

app.get("/contact", (req, res) => {
  res.render("pages/contact");
});

app.get("/about", (req, res) => {
  res.render("pages/about");
});

app.listen(PORT, () => console.log(`Listening on localhost:${PORT}...`));
