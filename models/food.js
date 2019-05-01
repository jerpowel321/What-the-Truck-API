module.exports = function (sequelize, DataTypes) {


    var Food = sequelize.define("Food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            validate: {len: [1,200]}
        },
        price: {
            type: DataTypes.INTEGER,
            isDecimal: true,
        }

    })

    return Food

}