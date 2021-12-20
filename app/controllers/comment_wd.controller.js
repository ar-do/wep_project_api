const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Comment = db.comment_r;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

    // Validate Request
    if (!req.body.article_title) {
        res.status(400).sed({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Article
    const comment = {
    };

    // Save Article in DB
    Comment.create(article).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating an article."
        });
    });

};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};


