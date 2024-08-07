// Middleware for handling auth
const jwt = require("jsonwebtoken");
const secret = require("../index");
function userMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const word = token.split("");
  const jwtToken = word[1];
  const decodedValue = jwt.verify(jwtToken, secret);
  if (decodedValue.username) {
    next();
  } else {
    res.status(403).json({
      msg: "you are not authenticated",
    });
  }
}

module.exports = userMiddleware;
