
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
            validate: {
                isEmail: true
                // unique: true
            },
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