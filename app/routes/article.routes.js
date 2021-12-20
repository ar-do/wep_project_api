module.exports = app => {
    const articles = require("../controllers/article.controller.js");

    var router = require("express").Router();

    router.get("/", articles.findAll);

    router.get("/:id", articles.findOne);

    app.use('/api/articles', router);
};