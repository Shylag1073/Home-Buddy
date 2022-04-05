// Define global variables
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Item, Schedule } = require('../models');

// Define default route
router.get('/', (req, res) => {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/signup', (req, res) => {
    res.render('signup');
});

// Export variables
module.exports = router;