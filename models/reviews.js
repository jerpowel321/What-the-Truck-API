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
				customValidator(value) {
					if (value == null || value.length < 2) {
						throw new Error("Your name must have two or more characters.");
					}

					if (value.length > 20) {
						throw new Error("Your name must have twenty characters or less.");
					}
				},
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
				customValidator(value) {
					if (value == null || value.length < 10) {
						throw new Error("Please provide a longer comment.");
					}

					if (value.length > 180) {
						throw new Error("Please shorten your comment to 180 characters.");
					}
				},
			},
		},
		userImages: {
			type: DataTypes.STRING,
			allowNull: false,
			get() {
				return JSON.parse(this.getDataValue('userImages'));
			},
			set(val) {
			   this.setDataValue('userImages', JSON.stringify(val));
			},
		}
	})

	return Reviews

}