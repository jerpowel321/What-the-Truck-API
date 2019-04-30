module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("trucks", {
        // image: {
        //     type: DataTypes.String,
        //     allowNull: true
        // },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: [1,100],
        },
        cuisine: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: [1,100]
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // confirm if we want to limit to only integer and look into methods for getting phone numbers
            // validate: [9,10]
        },
        // look to see if we can add an array/object into model
        // menu:{
        //     type: DataTypes.String
        // },
        approved: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        applicationOpen: {
            type: DataTypes.BOOLEAN,
            default: true
        },

    });

    var Food = sequelize.define("food",{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            max: 200
        },
        price: {
            type: DataTypes.INTEGER,
            isDecimal: true,
        }

    })
    // thinking we need to create another table for menu and join via name
    // one(truck) to many(food) relationship 
    return Trucks, Food;
}