const express = require("express");
const router = express.Router();
const app = express();
const bcrypt = require("bcrypt");
const user = require("../models/user");
const { Op, DATE } = require("sequelize");
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');
const users = require("../controllers/user.controller.js");

router.post('/signup',users.signup);
router.post('/login', users.login);
router.get('/logout', verifyToken, users.logout);


// router.post('/signup', (req, res, next) => {
//     // user.findAll().then((user) => {
//     //     if (user.length >= 1) {
//     //         return res.status(409).json({
//     //             message: 'Mail exists'
//     //         });
//     //     } else {
//     bcrypt.hash(req.body.password, 10, (err, hash) => {
//         if (err) {
//             return res.status(500).json({
//                 error: err
//             });
//         } else {
//             user.create({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: hash,
//                 roleId: req.body.roleId
//             }).then((user) => {
//                 res.json(user);
//             }).catch(err => {
//                 console.log(err);
//                 res.status(500).json({
//                     error: err
//                 });
//             });
//         }
//     });
//     // }
// });
// // });

// GET /users
router.get("/all", (req, res) => {
    user.findAll().then((user) => {
        res.json(user);
    });
});

// router.post('/login', (req, res, next) => {
//     user.findAll({ where: { email: req.body.email } })
//         .then((user) => {
//             if (user.length < 1) {
//                 return res.status(401).json({
//                     message: 'No user exist with this email and role'
//                 });
//             }



//             bcrypt.compare(req.body.password, user[0].password, (err, result) => {
//                 if (err) {
//                     return res.status(401).json({
//                         message: 'Auth failed2'
//                     });
//                 }

//                 if (result) {
//                     role = req.body.role_id
//                     const token = jwt.sign(
//                         {
//                             name: user[0].name,
//                             email: user[0].email,
//                             id: user[0].id
//                         },
//                         'secret',
//                         {
//                             expiresIn: "1h"
//                         }
//                     );
                    
//                     res.header("jwt", token, {
//                         expires:new Date(Date.now() + 30000)});
                 
//                     return res.status(200).json({
//                         message: 'Auth successful',
//                         token: token,
//                         role: user[0].role_id
//                     });
//                 }

//                 res.status(401).json({
//                     message: 'wrong password'
//                 });
//             });
//         })
//         .catch(err => {
//             console.log(err);
//             res.status(500).json({
//                 error: err
//             });
//         });
// });

router.delete('/:id', (req, res, next) => {
    let { id } = req.params;
    user.findByPk(id).then((user) => {
        user.destroy().then(() => {
            res.status(204).send();
        });
    });
});

router.put('/:id', (req, res, next) => {
    let { id } = req.params;
    user.findByPk(id).then((user) => {
        user.update({
            name: req.body.name,
            email: req.body.email,
            // password: hash,
            // roleId: req.body.roleId
        }).then((user) => {
            res.json(user);
        }).catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
    });
});

router.post('/test', verifyToken, (req, res, next) => {
    jwt.verify(req.token, 'secret', (err)=>{
if (err) {
    res.sendStatus(403);
} else{
    user.findAll().then(user => {res.json(user);});
    // user.findAll({where: {email: req.body.email}}).then(user => {res.json(user);});
    console.log("this works fine");
}
    })
});


var decodedToken='';
router.get('/dashboard', verifyToken, (req, res,next) =>{
    return res.status(200).json(decodedToken.name);
    // jwt.verify(req.token, 'secret', (err,tokenData)=>{
    //     if (err) {
    //         return res.status(403).json({message:"unauthorized request"});
    //     } else{
    // return res.status(200).json(tokenData.name);
    

        // }
        //     })
});

function verifyTok(req, res, next) {
    let token = req.query.token;
    jwt.verify(token, 'secret', (err, tokenData)=>{
        if (err) {
            return res.status(403).json({message:"unauthorized request"});
        }
        if(tokenData){
            decodedToken = tokenData;
            next();
        }
            })
}

function verifyToken(req, res, next) {
    //get auth header value
    const bearerHeader = req.headers['authorization'];

    //chek if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {

        //split at the space
        const bearer = bearerHeader.split(' ');

        //get token from the arrya
        const bearerToken = bearer[1];

        //set the token 
        req.token = bearerToken;
        let token = req.token;

        jwt.verify(token, 'secret', (err, tokenData)=>{
            if (err) {
                return res.status(403).json({message:"unauthorized request"});
            }
            if(tokenData){
                decodedToken = tokenData;
                next();
            }
                })


        //next middleware
        next();
    } else {
        res.sendStatus(403);
    }
}

module.exports = router;