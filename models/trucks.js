module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("Trucks", {
        businessName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1,100]}
        },
        website: {
            type: DataTypes.STRING,
            validate: {isURL: true}
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {len: [1,100]}
        },
        menu:{
            type: DataTypes.STRING,
            validate: {isURL: true}
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        middleInitial: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            validate: {isEmail: true},
            unique: true
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {len: [9,10]}
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address2: {
            type: DataTypes.STRING,
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
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
            validate: {
				max: 120,
				min: 0,
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
			validate: {
				customValidator(value) {
					if (value == null || value.length < 10) {
						throw new Error("Please provide a longer business description.");
					}

					if (value.length > 180) {
						throw new Error("Please shorten your business description to 180 characters.");
					}
				},
			},
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