module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("Trucks", {
        businessName:{
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                len: [1,100]
            }
        },
        website: {
            type: DataTypes.STRING,
            validate: {
                isURL: true
            }
        },
        cuisine: {
            type: DataTypes.STRING,
            validate: {
                notNull: true,
                len: [1,100]
            }
        },
        menu:{
            type: DataTypes.STRING,
            validate: {
                isURL: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                notNull: true
            }
        },
        middleInitial: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                notNull: true
            }
        },
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            },
        },
        phone: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true,
                len: [9,10]
            }
        },
        address: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        address2: {
            type: DataTypes.INTEGER,
        },
        city:{
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        state: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                notNull: true
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