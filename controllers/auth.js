const User = require("../models/user");

const { errorHandler } = require("../helpers/dbErrorHandler");

exports.signup = (req, res) => {
  // console.log(req)
  console.log("req.body", req.body);
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    user.salt = undefined;
    res.json({
      user,
    });
  });
};

exports.signin = (req, res) => {
  //encontar atraves do email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "Esse email não existe pf crie uma conta",
      });
    }
    // se encontrar verificar se o email está certo

    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: "A password está errada",
      });
    }

    // console.log(user)
    const {
      _id,
      nome,
      email,
      role,
      idade,
      doenca,
      alergia,
      sangue,
      nif,
      covid,
      vacinacao,
      dose,
    } = user;
    return res.json({
      user: {
        _id,
        nome,
        email,
        role,
        idade,
        doenca,
        alergia,
        sangue,
        nif,
        covid,
        vacinacao,
        dose,
      },
    });
  });
};

exports.signout = (req, res) => {
  res.json({ message: "Signout success" });
};
