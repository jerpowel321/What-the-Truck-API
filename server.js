const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;

// var routes = require("./routes");
var db = require("./models");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Add routes, both API and view
// app.use(routes);
require("./routes")(app);


// Start the API server after syncing sequelize models
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
});