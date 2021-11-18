const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    // try {
    //     const token = req.headers.authorization.split(" ")[1];
    //     const decoded = jwt.verify(token, 'secret');
    //     req.userData = decoded;
    //     next();

    // } catch (error) {
    //     return res.status(401).json({
    //         message: 'Auth failed token'
    //     });
    // }


    try {
        const token = req.cookies.jwt;
        const verifyUser = jwt.verify(token, 'secret');
        console.log(verifyUser);

        req.userData = verifyUser;
        next();

    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed token'
        });
    }
};