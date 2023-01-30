const Message = require("../models/message");

exports.create_message_get = (req, res, next) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    res.render("createMessage", { user: req.user });
  }
};

exports.create_message_post = (req, res, next) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    const messageDetail = {
      title: req.body.title,
      text: req.body.text,
      user: req.user,
    };

    const message = new Message(messageDetail);
    message.save((err) => {
      if (err) {
        return next(err);
      } else {
        res.redirect("/");
      }
    });
  }
};

exports.delete_message_post = (req, res, next) => {
  if (!req.user || !req.user.admin) {
    res.redirect("/users/login");
  } else {
    Message.findByIdAndDelete(req.params.id).exec((err) => {
      if (err) {
        return next(err);
      } else {
        res.redirect("/");
      }
    });
  }
};
