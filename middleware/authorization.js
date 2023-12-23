const authorization = (req, res, next) => {
    const {token} = req.query;
    if (token === "my_token") {
      next();
    }
    else {
      return res.status(401).json({error: "Unauthorized"});
    }
  }
  
  module.exports = authorization;