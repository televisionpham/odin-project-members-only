const User = require("../models/user");
const bcrypt = require("bcryptjs");

exports.signup_get = (req, res, next) => {
  res.render("signup");
};

exports.signup_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, password) => {
    if (err) {
      return next(err);
    }

    const userDetail = {
      username: req.body.username,
      password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
    };

    const user = new User(userDetail);
    user.save((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/");
    });
  });
};

exports.signin_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: signin_get");
};

exports.signin_post = (req, res, next) => {
  res.send("NOT IMPLEMENTED: signin_post");
};
