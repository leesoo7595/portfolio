const Sequelize = require('sequelize');

class Post extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
            title: {type: Sequelize.STRING(200), allowNull: false},
            description: {type: Sequelize.TEXT, allowNull: false},
            image: {type: Sequelize.STRING, allowNull: true},
            createdAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: false},
            updatedAt: {type: Sequelize.DATE, defaultValue: Sequelize.NOW, allowNull: true}
        }, {sequelize, modelName: 'post'})
    }
}

module.exports = {Post};