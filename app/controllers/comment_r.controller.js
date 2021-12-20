const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Comment = db.comment_r;
const Op = db.Sequelize.Op;

exports.findAll = (req, res) => {
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


