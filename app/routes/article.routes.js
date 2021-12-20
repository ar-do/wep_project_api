module.exports = app => {
    const articles_r = require("../controllers/article_r.controller.js");
    const articles_wd = require("../controllers/article_wd.controller.js");

    var router = require("express").Router();

    router.get("/", articles_r.findAll);

    router.get("/:id", articles_r.findOne);

    app.use('/api/articles', router);
};