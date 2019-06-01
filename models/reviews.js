module.exports = function (sequelize, DataTypes) {
	var Reviews = sequelize.define("Reviews", {
		truckName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		rating: {
			type: DataTypes.INTEGER,
			max: 5,
			min: 0,
			isDecimal: true,
			allowNull: false,
		},
		comments: {
			type: DataTypes.STRING,
			len: [10, 180],
		}
	})

	return Reviews

}