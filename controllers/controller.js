const db = require("./../models");

module.exports = {
	// create new truck
	createTruck: function (req, res) {
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
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},
	// find all trucks
	findAllTrucks: function (req, res) {
		console.log("This should find all trucks")
		db.Trucks.findAll({})
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},

	// find specified truck
	findOneTruck: function (req, res) {
		db.Trucks.findOne({
			where: {
				id: req.params.id
			}
		}).then(function (dbTrucks) {
			res.json(dbTrucks)
		})
			.catch(function (err) {
				res.json(err)
			});
	},
	// find all trucks with an open application

	open: function (req, res) {
		db.Trucks.findAll({
			where: {
				applicationOpen: 1
			}
		})
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},

	// find all trucks that are approved
	approved: function (req, res) {
		db.Trucks.findAll({
			where: {
				approved: 1
			}
		})
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},
	// find all trucks with applications that are denied
	denied: function (req, res) {
		db.Trucks.findAll({
			where: {
				approved: 0,
				applicationOpen: 0
			}
		})
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},

	updateTruck: function (req, res) {
		db.Trucks.update({
			approved: req.body.approved,
			applicationOpen: req.body.applicationOpen
		},
			{
				where: {
					id: req.params.id
				}
			})
			.then(function (dbTrucks) {
				res.json(dbTrucks)
			})
			.catch(function (err) {
				res.json(err)
			});
	},
	// create reviews
	createReview: function (req, res) {
		console.log("Creating Review")
		db.Reviews.create({
			truckName: req.body.truckName,
			rating: req.body.rating,
			userName: req.body.userName,
			comment: req.body.comment,
			userImages: req.body.userImages,
		})
			.then(function (dbReview) {
				res.json(dbReview)
			})
			.catch(function (err) {
				res.json(err)
			});
	},
 	// view all reviews
	 findAllReviews: function (req, res) {
		console.log("This should find all Reviews")
		db.Reviews.findAll({})
			.then(function (dbReviews) {
				res.json(dbReviews)
			})
			.catch(function (err) {
				res.json(err)
			});
	},	
	// create ownerImages
	saveOwnerImages: function (req, res) {
	console.log("Uploading Owner Images")
	db.OwnerImages.create({
		truckName: req.body.truckName,
		userImages: req.body.userImages,
	})
		.then(function (dbOwnerImages) {
			res.json(dbReviewOwnerImages)
		})
		.catch(function (err) {
			res.json(err)
		});
	},

 	// view all ownerImages
	findAllOwnerImages: function (req, res) {
		console.log("This should find all Owner Images")
		db.OwnerImages.findAll({})
			.then(function (dbOwnerImages) {
				res.json(dbOwnerImages)
			})
			.catch(function (err) {
				res.json(err)
			});
	},

	// find specified review
	findOneTruckReviews: function (req, res) {
		db.Reviews.findAll({
			where: {
				truckName: req.params.truckName
			}
		}).then(function (dbReviews) {
			res.json(dbReviews)
		})
			.catch(function (err) {
				res.json(err)
			});
	}
}

