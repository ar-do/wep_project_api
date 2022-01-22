module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("tbl_user", {
        user_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        user_username: {
            type: Sequelize.STRING
        },
        user_fname: {
            type: Sequelize.STRING
        },
        user_lname: {
            type: Sequelize.STRING
        },
        user_pwhash: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true,
        timestamps: false,
        createdAt: false,
        updatedAt: false
    });

    return User;
};