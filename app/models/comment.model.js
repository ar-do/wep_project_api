module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("v_comment", {
        Id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        Content: {
            type: Sequelize.STRING
        },
        Username: {
            type: Sequelize.STRING
        },
        ArticleID: {
            type: Sequelize.INTEGER
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return Comment;
};