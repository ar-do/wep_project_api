module.exports = (sequelize, Sequelize) => {
    const Article = sequelize.define("tbl_article", {
        article_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        article_headerimg: {
            type: Sequelize.STRING
        },
        article_title: {
            type: Sequelize.STRING
        },
        article_introtxt: {
            type: Sequelize.STRING
        },
        article_content: {
            type: Sequelize.STRING(2000)
        },
        fk_article_user: {
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