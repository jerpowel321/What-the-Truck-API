const db = require("./../models");

module.exports = {
    // create new truck
    createTruck: function (req,res) {
        console.log("I love spongebob")
        db.Trucks.create({
            businessName: req.body.businessName,
            website: req.body.website,
            cuisine: req.body.cuisine,
            menu: req.body.menu,
            firstName: req.body.firstName,
            middleInitial: req.body.middleInitial,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            address2: req.body.address2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip
        })
        .then(function (dbTrucks){
            res.json(dbTrucks)
        })
        .catch(function(err){
            res.json(err)
        });
    },
    // find all trucks
    findAllTrucks: function (req,res) {
        db.Trucks.findAll({})
        .then(function(dbTrucks){
            res.json(dbTrucks)
        });
    },
    // find specified truck
    findOneTruck: function(req, res){
        db.Trucks.findOne({
            where: {
                id:req.params.id
            }
        }).then(function(dbTrucks){
            res.json(dbTrucks)
        })
    },
    // find all trucks with an open application
    truckApplicationOpen: function(req, res){
        db.Trucks.findAll({
            where: {
                applicationsOpen: true
            }
        }).then(function(dbTrucks){
            res.json(dbTrucks)
        })
    },
    // find all trucks that are approved
    truckApplicationsApproved:function (req,res){
        db.Trucks.findAll({
            where: {
                approved: true
            }
        }).then(function(dbTrucks){
            res.json(dbTrucks)
        })
    },
    // find all trucks with applications that are denied
    truckApplicationsDenied:function (req,res){
        db.Trucks.findAll({
            where: {
                approved: false
            }
        }).then(function(dbTrucks){
            res.json(dbTrucks)
        })
    },
    // find all trucks with applications that are denied
    // findTruckThroughEmail:function (req,res){
    //     db.Trucks.findAll({
    //         where: {
    //             email: req.body.email
    //         }
    //     }).then(function(dbTrucks){
    //         res.json(dbTrucks)
    //     })
    // },
    // update info for 
    updateTruck: function (req, res){
        db.Trucks.update( {
            approved: req.body.approved,
            applicationOpen: req.body.applicationOpen
        }, 
        {
            where: {
                id: req.params.id
            }
        })
        .then(function(dbTrucks){
            res.json(dbTrucks)
        });
    }
}
  