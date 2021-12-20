const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const User = db.user;
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
    const user = {
    };

    // Save Article in DB
    User.create(article).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occured while creating an article."
        });
    });

};

exports.findAll = (req, res) => {
    User.findAll()
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
    User.findByPk(id)
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


