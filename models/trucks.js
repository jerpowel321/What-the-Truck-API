module.exports = function(sequelize, DataTypes) {
    var Trucks = sequelize.define("Trucks", {
        businessName:{
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
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {len: [9,10]}
        },
        address: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        address2: {
            type: DataTypes.INTEGER,
        },
        city:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        zip: {
            type: DataTypes.INTEGER,
            allowNull: false,
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

    return Trucks;
}