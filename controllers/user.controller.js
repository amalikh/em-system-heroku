const db = require("../models");
const User = db.user;
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const Op = db.Sequelize.Op;

exports.login = (req, res, next) => {
    User.findAll({ where: { email: req.body.email } })
        .then((user) => {
            if (user.length < 1) {
                return res.status(401).json({
                    message: 'No user exist with this email and role'
                });
            }



            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: 'Auth failed2'
                    });
                }

                if (result) {
                    role = req.body.role_id
                    const token = jwt.sign(
                        {
                            name: user[0].name,
                            email: user[0].email,
                            id: user[0].id
                        },
                        'secret',
                        {
                            expiresIn: "1h"
                        }
                    );
                    
                    res.header("jwt", token, {
                        expires:new Date(Date.now() + 30000)});
                 
                    return res.status(200).json({
                        message: 'Auth successful',
                        token: token,
                        role: user[0].role_id
                    });
                }

                res.status(401).json({
                    message: 'wrong password'
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.signup = (req, res, next) => {
    // user.findAll().then((user) => {
    //     if (user.length >= 1) {
    //         return res.status(409).json({
    //             message: 'Mail exists'
    //         });
    //     } else {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            });
        } else {
            User.create({
                name: req.body.name,
                email: req.body.email,
                password: hash,
                role_d: req.body.role_id
            }).then((user) => {
                res.json(user);
            }).catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
        }
    });
    // }
};

exports.logout = (req, res) =>{
    try {
        console.log("logout successfully");
    } catch (error) {
        res.status(500).send(error);
    }
};