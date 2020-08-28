'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'No puede tener el nombre.'
                }
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'No puede tener la descripción vacía.'
                }
            }
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: 'No puede tener fecha vacía.'
                },
                isDate: {
                    args: true,
                    msg: 'Debe introducir una Fecha'
                }
            }
        },
        status: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {});
    Task.associate = function(models) {
        // associations can be defined here
    };
    return Task;
};