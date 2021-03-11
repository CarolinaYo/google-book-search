const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  //TO FIND ONE
  findById: function (req, res) {
    db.Book.findById(req.params.id)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },
  // TO SAVE A BOOK
  create: function (req, res) {
    db.Book.create(req.body)
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));
  },

  //TO DELETE
  remove: function (req, res) {
    // db.Book.findById({ id: req.params.id })
    //   .then((dbModel) => dbModel.remove())
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
    //
    // db.Book.deleteOne({ _id: ObjectId(req.params.id) })
    //   .then((dbModel) => res.json(dbModel))
    //   .catch((err) => res.status(422).json(err));
    //
    // db.Book.findOne({
    //   id: req.params.id,
    // })
    //   .then((dbModel) => {
    //     console.log("dbModel: ", dbModel);
    //     res.json(dbModel);
    //   })
    //   .catch((err) => res.status(422).json(err));

    db.Book.findOne({
      id: req.params.id,
    })
      .then((dbModel) => dbModel.remove())
      .then((dbModel) => res.json(dbModel))
      .catch((err) => res.status(422).json(err));

    // db.Book.findById(req.params.id)
    //   .then((dbModel) => {
    //     console.log("dbModel: ", dbModel);
    //     res.json(dbModel);
    //   })

    //   .catch((err) => res.status(422).json(err));
  },
};
