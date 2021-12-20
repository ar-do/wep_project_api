module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("tbl_comment", {
        comment_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        comment_content: {
            type: Sequelize.STRING
        },
        fk_comment_user: {
            type: Sequelize.INTEGER
        },
        fk_comment_article: {
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