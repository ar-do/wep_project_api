const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    pool: {
        max: dbConfig.max,
        min: dbConfig.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle,
    },
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.article_r = require("./article_view.model.js")(sequelize, Sequelize);
db.comment_r = require("./comment_view.model.js")(sequelize, Sequelize);
db.article_wd = require("./article_tbl.model.js")(sequelize, Sequelize);
db.comment_wd = require("./comment_tbl.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;