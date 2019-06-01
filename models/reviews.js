module.exports = function (sequelize, DataTypes) {
	var Reviews = sequelize.define("Reviews", {
		truckName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		userName: {
			type:DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 20],
			},
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				isDecimal: true,
				max: 5,
				min: 0,
			},
		},
		comment: {
			type: DataTypes.STRING,
			validate: {
				len: [10, 180],
			},
		}
	})

	return Reviews

}