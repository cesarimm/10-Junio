'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class payment extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    payment.init(
        {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: DataTypes.INTEGER,
            },
            fecha: { type: DataTypes.DATE, allowNull: true },
            cliente: { type: DataTypes.STRING, allowNull: true },
            monto: { type: DataTypes.FLOAT, allowNull: true },
            banco: { type: DataTypes.STRING, allowNull: true },
        },
        {
            sequelize,
            modelName: 'payment',
        }
    );
    return payment;
};
