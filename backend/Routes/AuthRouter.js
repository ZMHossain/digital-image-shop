const { signup, login } = require("../Controllers/AuthCotroller");
const {
  signupValidation,
  loginValidation,
} = require("../Middlewares/AuthValidation");

const router = require("express").Router();

router.post("/signup", signupValidation, signup);
router.post("/login", loginValidation, login);

module.exports = router;
