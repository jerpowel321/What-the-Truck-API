module.exports = function (sequelize, DataTypes) {


    var Food = sequelize.define("Food", {
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

    return Food

}