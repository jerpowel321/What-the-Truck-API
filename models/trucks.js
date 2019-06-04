module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("Trucks", {
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null || value.length < 5) {
                    throw new Error("Please provide a business name.");
                }
            },
            // validate: {len: [1,100]}
        },
        website: {
            type: DataTypes.STRING,
            validate: {isURL: true}
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            // validate: {len: [1,100]},
            customValidator(value) {
                if (value == null || value.length < 5) {
                    throw new Error("Please provide type of cusine.");
                }
            },
        },
        menu:{
            type: DataTypes.STRING,
            validate: {isURL: true}
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact first name.");
                }
            },
        },
        middleInitial: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact last name.");
                }
            },
        },
        email: {
            type: DataTypes.STRING,
            validate: {isEmail: true},
            unique: true
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact phone number.");
                }
                if (value.length < 9 || value.length >10) {
                    throw new Error("Please provide a valid contact phone number with 9 or 10 digits.");
                }
            },
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact address.");
                }
            },
        },
        address2: {
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact city.");
                }
            },
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact state.");
                }
            },
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
            customValidator(value) {
                if (value == null) {
                    throw new Error("Please provide contact zip code.");
                }
            },
        },
        monday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        tuesday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        wednesday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        thursday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        friday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        saturday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        sunday: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        wait: {
            type: DataTypes.INTEGER,
            allowNull: true,
            // validate: {
			// 	max: 120,
			// 	min: 0,
            // },
            customValidator(value) {
                if (value == null || value < 4) {
                    throw new Error("Please provide a wait time of at least 5 minutes.");
                }

                if (value == null || value > 120) {
                    throw new Error("Please provide a wait time of less than 2 hours.");
                }
            },
        },
        businessImages: {
			type: DataTypes.STRING,
			allowNull: true,
			get() {
				return JSON.parse(this.getDataValue('businessImages'));
			},
			set(val) {
			   this.setDataValue('businessImages', JSON.stringify(val));
			},
        },
        businessDescription: {
            type: DataTypes.STRING,
            allowNull: true,
			// validate: {
			// 	customValidator(value) {
			// 		if (value == null || value.length < 10) {
			// 			throw new Error("Please provide a longer business description.");
			// 		}

			// 		if (value.length > 180) {
			// 			throw new Error("Please shorten your business description to 180 characters.");
			// 		}
			// 	},
			// },
		},
        approved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        applicationOpen: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }

    });

    return Trucks;
}