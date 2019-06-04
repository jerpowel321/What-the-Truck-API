module.exports = function (sequelize, DataTypes) {
	var OwnerImages = sequelize.define("OwnerImages", {
		truckName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		ownerImages: {
			type: DataTypes.STRING,
			allowNull: false,
			get() {
				return JSON.parse(this.getDataValue('ownerImages'));
			},
			set(val) {
			   this.setDataValue('ownerImages', JSON.stringify(val));
			},
		},
	})

	return OwnerImages

}