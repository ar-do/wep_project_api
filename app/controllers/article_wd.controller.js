const req = require("express/lib/request");
const res = require("express/lib/response");
const db = require("../models");
const Article = db.article_wd;
const Op = db.Sequelize.Op;


exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Article
  const article = {
    article_headerimg: req.body.headerimg,
    article_title: req.body.title,
    article_introtxt: req.body.introtxt,
    article_content:  req.body.content,
    fk_article_user: req.body.user
  };

  // Save Tutorial in the database
  Article.create(article)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Article."
      });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;
    Article.update(req.body, {
        where: {article_id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Article Updated"
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

    Article.destroy({
        where: {article_id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Article deleted."
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




