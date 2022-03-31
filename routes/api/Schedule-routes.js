const router = require('express').Router();
const {User, Item, Schedule } = require('../../models');
const sequelize = require ("../../config/connection");
const { where } = require('sequelize/types');

// get all schedules for all items
router.get('/', (req, res) => {
    Schedule.findAll ({
        include:[
            {
                model: User,
                attributes: ["username" , "space_name"],
            },
            {
                model: Item,
                attributes: ["item_name","item_info"],
            },
            {
                model: Schedule,
                attributes: ["schedule_date","action","status"],
            },
        ],
    }) .then((dbScheduleData)=> res.json (dbScheduleData))
    .catch((err) =>{
        console.log(err);
        res.status(500).json(err);
    });
});
 // get schedule by item Id 
router.get('/:id', (req, res) => {
 Schedule.findOne ({
     where: {id: req.params.id},
     include:[
        {
            model: User,
            attributes: ["username" , "space_name"],
        },
         {
            model: Schedule,
            attributes: ["item_id","schedule_date","action","status"],
        },
     ],
 }) .then ((dbScheduleData) => {
     if(!dbScheduleData) {
         res.status(404).json({message:"No schedule found for this item."});
         return;
     }
     res.json(dbScheduleData);
 })
 .catch((err) =>{
    console.log(err);
    res.status(500).json(err);
});
});

// adding a new schedule 

router.post('/new', (req, res) => { 
    Schedule.create({
        item_id: req.body.item_id,
        schedule_date:req.body.schedule_date,
        action: req.body.action,
        notes: req.body.notes,
    }) .then ((dbScheduleData) => res.json(dbScheduleData))
    .catch((err)=> {
        res.status(404).json(err);
    });

});
// edit schedule 

router.put('/:id', (req, res) => {
    Schedule.update(
    {
        item_id: req.body.item_id,
        schedule_date:req.body.schedule_date,
        action: req.body.action,
        notes: req.body.notes,
    },
    {
        where: {
            id: req.params.id
        },
    },    
).then ((dbScheduleData) => {
    if(!dbScheduleData) {
        res.status(404).json({message:"No schedule found for this item."});
        return;
    }
    res.json(dbScheduleData);
})
.catch((err) =>{
   console.log(err);
   res.status(500).json(err);
});

});
// delete schedule 

router.delete('/:id', (req, res) => {
    Schedule.destroy({
            where: { id: req.params.id },
        })
        
        .then ((dbScheduleData) => {
        if(!dbScheduleData) {
            res.status(404).json({message:"No schedule found for this item."});
            return;
        }
        res.json(dbScheduleData);
    })
    .catch((err) =>{
       console.log(err);
       res.status(500).json(err);
    });



});

module.exports = router;
