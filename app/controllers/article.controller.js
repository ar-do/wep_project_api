const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Article = db.article;
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
    const article = {
        title: req.body.article_title,
        description : req.body.article_introtxt,
        content: req.body.article_content
    };

    // Save Article in DB
    Article.create(article).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating an article."
        });
    });

};

exports.findAll = (req, res) => {
    Article.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving articles."
      });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.article_id;

    Article.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Article with id=" + id
        });
      });
};

exports.update = (req, res) => {

};

exports.delete = (req, res) => {

};


