const User = require("../models/user");
const bcrypt = require("bcryptjs");
const passport = require("passport");

exports.register_get = (req, res, next) => {
  res.render("register");
};

exports.register_post = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, password) => {
    if (err) {
      return next(err);
    }

    const userDetail = {
      username: req.body.username.trim(),
      password: password,
      firstname: req.body.firstname.trim(),
      lastname: req.body.lastname.trim(),
    };

    const user = new User(userDetail);
    console.log(userDetail);
    user.save((err) => {
      if (err) {
        return next(err);
      }

      res.redirect("/");
    });
  });
};

exports.login_get = (req, res, next) => {
  res.render("login");
};

exports.login_post = passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/users/login",
});

exports.logout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.join_get = (req, res, next) => {
  if (!req.user) {
    res.redirect("/users/login");
  } else {
    res.render("joinform", { user: req.user });
  }
};

exports.join_post = (req, res, next) => {
  if (req.user) {
    bcrypt.compare(req.body.passcode, req.user.password, (err) => {
      if (err) {
        return next(err);
      } else {
        User.findByIdAndUpdate(req.user.id, {
          member: true,
        }).exec((err) => {
          if (err) {
            return next(err);
          }

          res.redirect("/");
        });
      }
    });
  } else {
    res.redirect("/users/login");
  }
};
