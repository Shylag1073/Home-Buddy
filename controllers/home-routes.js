// Define global variables
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get("/static", (req, res) => {
    res.render("static");
});

router.get("/", (req, res) => {
    res.render("index", { layout: "main" });
});

router.get("/signup", (req, res) => {
    res.render("signup", {});
});

router.get("/login", (req, res) => {
    res.render("login", {});
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard", {});
});

router.get("/dashboard/air-conditioner", (req, res) => {
    res.render("air-conditioner", {});
});

router.get("/dashboard/fireplace", (req, res) => {
    res.render("fireplace", {});
});

router.get("/dashboard/gas", (req, res) => {
    res.render("gas", {});
});

router.get("/dashboard/lawn", (req, res) => {
    res.render("lawn", {});
});

router.get("/dashboard/trash", (req, res) => {
    res.render("trash", {});
});

router.get("/dashboard/water-tank", (req, res) => {
    res.render("water-tank", {});
});

router.get("/dashboard/phone", (req, res) => {
    res.render("phone", {});
});

router.get("/dashboard/add", (req, res) => {
    res.render("add", {});
});

// Export variables
module.exports = router;