const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Comment = db.comment_r;
const Op = db.Sequelize.Op;

exports.getAll = (req, res) => {
    Comment.findAll()
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

exports.getBasedOnArticle = (req, res) => {
  const article_id = req.query.id;
  Comment.findAll( {where: {ArticleID: article_id}})
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

exports.getBasedOnID = (req, res) => {
  const id = req.query.id;

  Comment.findAll({ where: { Id: id}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Article with id=" + id
      });
    });
    console.log(id);
};

