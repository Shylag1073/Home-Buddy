const router = require('express').Router();
const {User, Item, Schedule } = require('../../models');

// get all schedules for all items
router.get('/', (req, res) => {
    Schedule.findAll ({
        include:[
            {
                model: Item,
                attributes: ["item_name","item_info"],
            }
        ],
    }) .then((dbScheduleData)=> res.json (dbScheduleData))
    .catch((err) =>{
        console.log(err);
        res.status(500).json(err);
    });
});

// get All schedules by item Id 
router.get('/byitem/:item_id', (req, res) => {
 Schedule.findAll ({
     where: {
         item_id: req.params.item_id
    },
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
        }
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

// get All schedules by item Id 
router.get('/air-conditioner', (req, res) => {
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
                //item_info: req.session.username
                item_info: 'tjefferson@usa.gov'
                }
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

// get One schedule by Id 
router.get('/:id', (req, res) => {
    Schedule.findOne ({
        where: {
            id: req.params.id
       },
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
           }
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
router.post('/', (req, res) => { 
    Schedule.create({
        item_id: req.body.item_id,
        schedule_date: req.body.schedule_date,
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
        schedule_date: req.body.schedule_date,
        action: req.body.action,
        notes: req.body.notes,
        status: req.body.status
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
        where: { id: req.params.id }
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