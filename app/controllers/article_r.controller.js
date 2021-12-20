/* const req = require("express/lib/request");
const res = require("express/lib/response"); */
const db = require("../models");
const Article = db.article_r;
const Op = db.Sequelize.Op;

// Gets articles based on Username
exports.getFromUsername = (req, res) => {
  const user = req.query.user;
  console.log("2", req.query.user);
  console.log("3", req.query);
  Article.findAll({ where: {Author: user}})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Article with id="
      });
    });
};

// Gets all articles
exports.getAll = (req, res) => {
  // ?? Build a condition (like top 10 or based on user variable)
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

// Gets articles based on ID
exports.getBasedOnID = (req, res) => {
    const id = req.params.id;

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


//Search function
exports.getFromSearch = (req, res) => {
  const search = req.query.search;
  console.log(req.query);
  var condition = search ? { Content: { [Op.like]: `%${search}%` } } : null;

  Article.findAll({ where: condition})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Article with id="
      });
    });
};

