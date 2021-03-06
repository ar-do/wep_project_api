module.exports = app => {
    const user = require("../controllers/user.controller.js");

    var router = require("express").Router();

    router.post("/", user.create);

    router.get("/", user.findAll);
    
    router.get("/un", user.findBasedOnUsername);

    router.get("/:id", user.findOne);

    router.put("/:id", user.update);



    app.use('/api/users', router);
};