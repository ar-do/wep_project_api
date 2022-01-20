const { comment_wd } = require("../models/index.js");

module.exports = app => {
    const comments_r = require("../controllers/comment_r.controller.js");
    const comments_wd = require("../controllers/comment_wd.controller.js");

    var router = require("express").Router();

    router.get("/", comments_r.getAll);

    router.get("/articleid", comments_r.getBasedOnArticle);

    router.get("/id", comments_r.getBasedOnID);

    router.put("/:id", comments_wd.update);

    router.post("/", comments_wd.create);

    //router.delete("/:id", comments_wd.delete);

    app.use('/api/comments', router);
};