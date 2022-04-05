const express = require("express");
const app = express();
const port = 3001;
const { engine } = require("express-handlebars");
const path = require("path");

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    layoutsDir: __dirname + "/views/partials",
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("images"));

app.get("/static", (req, res) => {
  res.render("static");
});

app.get("/", (req, res) => {
  res.render("index", { layout: "main" });
});

app.get("/signup", (req, res) => {
  res.render("signup", {});
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/dashboard", (req, res) => {
  res.render("dashboard", {});
});

app.get("/dashboard/air-conditioner", (req, res) => {
  res.render("air-conditioner", {});
});

app.listen(port, () => console.log(`App listening to port ${port}`));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    layoutsDir: __dirname + "/views/partials",
    extname: "hbs",
  })
);