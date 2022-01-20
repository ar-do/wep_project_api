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
        err.message || "Some error occurred while retrieving comments."
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
        message: "Error retrieving comment with id=" + id
      });
    });
    console.log(id);
};

exports.getBasedOnUsername = (req, res) => {
  const user = req.query.user;

  Comment.findAll({ where: { Username: user}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving comment with username=" + user
      });
    });
    console.log(user);
};