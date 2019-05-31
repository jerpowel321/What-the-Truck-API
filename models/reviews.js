module.exports = function (sequelize, DataTypes) {
	var Reviews = sequelize.define("Reviews", {
		reviewBusiness: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		reviewRating: {
			type: DataTypes.INTEGER,
			max: 5,
			min: 0,
			isDecimal: true,
			allowNull: false,
		},
		reviewComments: {
			type: DataTypes.STRING,
			len: [10, 180],
		}
	})

	return Reviews

}