const express = require("express");
const app = express();
const port = 3001;
const { engine } = require("express-handlebars");
const path = require("path");

app.set("view engine", "handlebars");

app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("images"));

app.get("/static", (req, res) => {
  res.render("static");
});

app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});

app.listen(port, () => console.log(`App listening to port ${port}`));

app.set("view engine", "hbs");

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
  })
);

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "alternate",
  })
);
app.get("/", (req, res) => {
  res.render("main");
});

app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    extname: "hbs",
    defaultLayout: "alternate",
    partialsDir: __dirname + "/views/partials/",
  })
);
app.get("/", (req, res) => {
  res.render("main", { layout: "index" });
});
