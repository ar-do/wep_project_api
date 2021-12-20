const { comment_wd } = require("../models/index.js");

module.exports = app => {
    const articles_r = require("../controllers/article_r.controller.js");
    const articles_wd = require("../controllers/article_wd.controller.js");

    var router = require("express").Router();

    router.post("/", articles_wd.create);

    router.get("/", articles_r.getAll);

    router.get("/search", articles_r.getFromSearch);

    router.get("/user", articles_r.getFromUsername);

    router.get("/:id", articles_r.getBasedOnID);

    router.put("/:id", articles_wd.update);

    router.delete("/:id", articles_wd.delete);

    app.use('/api/articles', router);
};