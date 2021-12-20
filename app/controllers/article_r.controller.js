const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Article = db.article_r;
const Op = db.Sequelize.Op;

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


