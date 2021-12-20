const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Comment = db.comment_wd;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
          message: "Content can not be empty!"
        });
        return;
      }
    
      // Create a Tutorial
      const comment = {
        comment_content: req.body.content,
        fk_comment_user: req.body.userid,
        fk_comment_article: req.body.articleid
      };
    
      // Save Tutorial in the database
      Comment.create(comment)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating the Tutorial."
          });
        });
};

exports.update = (req, res) => {
    const id = req.params.id;
    console.log(req.body);
    Comment.update(req.body, {
        where: {Id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Comment Updated"
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

exports.delete = (req, res) => {
    const id = req.params.id;

    Comment.destroy({
        where: {comment_id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Comment deleted."
            });
        } else {
            res.send({
                message: "Cannot delete."
            });
        }
    })
    .catch(err=> {
        res.status(500).send({
            message: "Could not delete"
        });
    });
};


