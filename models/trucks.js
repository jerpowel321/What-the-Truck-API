module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("Trucks", {
        businessName:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            },
        },
        website: {
            type: DataTypes.STRING,
            validate: {
                isURL: true,
            }
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        menu:{
            type: DataTypes.STRING,
            validate: {
                isURL: true,
            }        
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        middleInitial: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                allowNull: false,
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }            // confirm if we want to limit to only integer and look into methods for getting phone numbers
            // validate: [9,10]
        },
        address: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        address2: {
            type: DataTypes.INTEGER,
        },
        city:{
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        state: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                allowNull: false,
            }
        },
        approved: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        applicationOpen: {
            type: DataTypes.BOOLEAN,
            default: true
        },

    });

    // thinking we need to create another table for menu and join via name
    // one(truck) to many(food) relationship 
    return Trucks;
}