module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("v_article", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Image: {
            type: Sequelize.STRING
        },
        Title: {
            type: Sequelize.STRING
        },
        Intro: {
            type: Sequelize.STRING
        },
        Content: {
            type: Sequelize.STRING(2000)
        },
        Author: {
            type: Sequelize.STRING
        },
        Likes: {
            type: Sequelize.INTEGER
        },
        Views: {
            type: Sequelize.INTEGER
        }

    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return Article;
};