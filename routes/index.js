// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  app.get("/", function (req, res) {
    console.log("DATABASE: ", db)
    res.send("Welcome to the food trucks API!");
  });

  // --------------- Cyrus Routes ------------------------------
  // look into dbTrucks if it needs to be linked to schema.sql db
  // gets all the trucks: see if we should specify an area for the trucks
  app.get("/api/trucks", function(req, res){
    db.Trucks.findAll({}).then(function(dbTrucks){
      res.json(dbTrucks)
    })
  });
  // Get specific truck 
  app.get("/api/trucks/:id", function (req,res){
    db.Trucks.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbTrucks){
      res.json(dbTrucks)
    })
  });

  // add new truck
  app.post("/api/trucks", function(req, res){

    console.log("REQ BODY: ", req.body.name, req.body.cuisine, req.body.phone);

    db.Trucks.create({
      businessName: req.body.name,
      website: req.body.website,
      cuisine: req.body.cuisine,
      menu: req.body.menu,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      address2: req.body.address2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip
    }).then(function (dbTrucks){
      res.json(dbTrucks)
    })
    .catch(function(err){
      res.json(err)
    });
  });









  // --------------- Cyrus Routes ------------------------------









  // --------------- Jennifer Routes ------------------------------
  
// Find all trucks above in the database with /api/trucks
// Find all users in the database
app.get("/api/users", function(req, res){
  db.Users.findAll({}).then(function(result){
    res.json(result)
  })
});

//  Find all active users in the database
app.get("/api/users/active", function(req, res){
  db.Users.findAll({
    where: {active: true}
  }).then(function(result){
    res.json(result)
  })
});

//  Find all active users in the database
app.get("/api/users/active", function(req, res){
  db.Users.findAll({
    where: {active: true}
  }).then(function(result){
    res.json(result)
  })
});
  
//  Find all open applications in the database
app.get("/api/applications/open", function(req, res){
  db.Trucks.findAll({
    where: {applicationOpen: true}
  }).then(function(result){
      res.json(result)
  })
});
  
//  Find all approved applications in the database
app.get("/api/applications/approved", function(req, res){
  db.Trucks.findAll({
    where: {approved: true}
  }).then(function(result){
    res.json(result)
  })
});
//  Find all denied applications in the database
app.get("/api/applications/denied", function(req, res){
  db.Trucks.findAll({
  where: {approved: false}
  }).then(function(result){
    res.json(result)
  })
});







  
// --------------- Jennifer Routes ------------------------------


   // --------Melanie's Routes --------------------











   // --------Melanie's Routes --------------------



};