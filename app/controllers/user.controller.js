const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // Emtpy for now, will be done with seperate service (due to security..)
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
  const id = req.params.id;
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
  const id = req.params.id;
  User.update(req.body, {
      where: {user_id: id}
  }).then(num => {
      if (num == 1) {
          res.send({
              message: "User Updated"
          });
      } else {
          res.send({
              message: "Cannot update" 
          });
      }
  }).catch(err => {
      res.status(500).send({
          message: "Error"
      });
  });
};


