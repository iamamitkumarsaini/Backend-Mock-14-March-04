const jwt = require("jsonwebtoken");
require("dotenv").config();


const authentication = (req, res, next) => {

    const token = req.headers.authentication?.split(" ")[1];

    if(token){
        const decoded = jwt.verify(token,process.env.secret_key,(err, decoded) => {

            if(decoded){
                next()
            }
            else{
                res.status(401).send({"Message":"Please Login First"})
            }
        })
    }
    else{
        res.status(401).send({"Message":"Please Login First"})
    }
};


module.exports = { authentication };