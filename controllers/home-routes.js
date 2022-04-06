// Define global variables
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Item, Schedule } = require('../models');

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

//router.get("/dashboard/air-conditioner", (req, res) => {
//    Schedule.findall
//    res.render("air-conditioner", {});
//});

router.get('/dashboard/air-conditioner', (req, res) => {
    console.log("===== Username: " + req.session.username + "=====");
    Schedule.findAll ({
       attributes: [
           'id',
           'schedule_date',
           'item_id',
           'action',
           'notes',
           'status',
           'created_at'
       ],
       include:[
           {
               model: Item,
               attributes: ["item_name","item_info"],
               where: {
                item_name: 'air-conditioner',
                item_info: req.session.username
                //item_info: 'tjefferson@usa.gov'
                }
           },
       ],
    }) .then (dbScheduleData => {
        const schedules = dbScheduleData.map(schedule => schedule.get({ plain: true }));
        res.render('air-conditioner', { schedules });
    })
    .catch((err) =>{
       console.log(err);
       res.status(500).json(err);
   });
});

router.get('/dashboard/air-conditioner/edit/:id', (req, res) => {
    Schedule.findOne ({
       attributes: [
           'id',
           'schedule_date',
           'item_id',
           'action',
           'notes',
           'status',
           'created_at'
       ],
       where: {
           id: req.params.id
       },
       include:[
           {
               model: Item,
               attributes: ["item_name","item_info"]
           },
       ],
    }) .then (dbScheduleData => {
        if (dbScheduleData) {
            const schedule = dbScheduleData.get({ plain: true });
            res.render('air-conditioner-edit', { schedule });
        } else {
            res.status(404).end();
        }
    })
    .catch((err) =>{
       console.log(err);
       res.status(500).json(err);
   });
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