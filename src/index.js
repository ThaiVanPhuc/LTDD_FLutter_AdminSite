const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const port = 3000;
app.set("view engine", "ejs");
app.use(morgan("combined"));
app.set("views", path.join(__dirname, "resources/views"));
app.use(express.static(path.join(__dirname, "resources/public")));

app.get("/", (req, res) => res.render("home"));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
