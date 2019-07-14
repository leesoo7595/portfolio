const Sequelize = require('sequelize');
const credentials = require('../credentials/credentials');
const {Post} = require('./Post');

let initiated = false;
const sequelize = new Sequelize(
    credentials["database"]["name"],
    credentials["database"]["id"],
    credentials["database"]["password"], {
        host: credentials["database"]["host"],
        dialect: credentials["database"]["dialect"]
    });

function init() {
    Post.init(sequelize);
    return process.argv.indexOf("db") > 0 ? drop().then(setting) : setting();
}

function setting() {
    return sequelize.sync().then(() => initiated = true).then(() => console.log("synchronized"));
}

function drop() {
    return sequelize.drop().then(console.log);
}

/**
 *  connect database
 * @returns {Promise<this | never>}
 */
module.exports = () =>
    sequelize
        .authenticate()
        .then(() => console.log("connection success"))
        .then(init)
        .catch(err => console.error("connection failed", err));