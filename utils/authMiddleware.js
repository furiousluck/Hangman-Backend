const jwt = require('jsonwebtoken');
const Player = require('../models/Player');

/**
 * The protect function is used to verify a JWT token in the request headers and retrieve player
 * information if the token is valid.
 * @param req - The `req` parameter in the `protect` function is an object representing the HTTP
 * request. It contains information about the request made by the client, such as headers, body,
 * parameters, and query strings. In this function, the `req` object is used to access the request
 * headers to extract
 * @param res - The `res` parameter in the `protect` function is the response object that will be sent
 * back to the client with the response data. It is used to send HTTP responses back to the client,
 * such as status codes, headers, and response data.
 * @param next - The `next` parameter in the `protect` function is a callback function that is used to
 * pass control to the next middleware function in the stack. When called, it will execute the next
 * middleware function in the chain. This is commonly used in Express.js middleware to move to the next
 * middleware function after
 */
const protect = async (req, res, next) => {
    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.player = await Player.findById(decoded.id).select('-password');
            next();
        } catch (error) {
            console.error(error);
            res.status(401).json({message: "Not authorized, token failed"});
        }
    }
    if(!token){
        res.status(401).json({message: "Not authorized, no token"});
    }
};

module.exports = {protect};