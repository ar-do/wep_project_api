module.exports = app => {
    const comments_r = require("../controllers/comment_r.controller.js");
    const comments_wd = require("../controllers/comment_wd.controller.js");

    var router = require("express").Router();

    router.get("/", comments_r.findAll);

    app.use('/api/comments', router);
};