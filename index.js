// Global variables
const path = require("path");
const express = require("express");
const routes = require('./controllers');
const sequelize = require('./config/connection');
const { engine } = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 3001;


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("images"));
app.set("view engine", "handlebars");
app.engine(
  "handlebars",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    layoutsDir: __dirname + "/views/partials",
  })
);
app.set("view engine", "hbs");
app.engine(
  "hbs",
  engine({
    layoutsDir: __dirname + "/views/layouts",
    layoutsDir: __dirname + "/views/partials",
    extname: "hbs",
  })
);
app.use(routes);


// Start the app
//app.listen(PORT, () => console.log(`App listening to port ${PORT}`));
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

