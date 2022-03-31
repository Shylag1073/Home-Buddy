const router = require("express").Router();
const { User, Item, Schedule } = require("../../models");

//get all items
router.get('/', (req, res) => {
    Item.findAll({
        order: [["created_at", "DESC"]],
        include: [
            {
                model: User,
                attributes: ["username", "space_name"],
            },
            {
                model: Schedule,
                attributes: ["schedule_date", "action", "notes", "status"],
            },
        ],
    })
        .then((dbItemData) => res.json(dbItemData))
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

//get item by id
router.get('/:id', (req, res) => {
    Item.findOne({
        where: { id: req.params.id },
        include: [
            {
                model: User,
                attributes: ["username", "space_name"],
            },
            {
                model: Schedule,
                attributes: ["schedule_date", "action", "notes", "status"],
            },
        ],
    })
        .then((dbItemData) => {
            if (!dbItemData) {
                res.status(404).json({ message: "No item found with this id." });
                return;
            }
            res.json(dbItemData);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

//create new item
router.post('/', (req, res) => {
    Item.create({
        item_name: req.body.item_name,
        item_info: req.body.item_info,
        user_id: req.body.user_id,
    })
        .then((dbItemData) => res.json(dbItemData))
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

//edit item
router.put('/:id', (req, res) => {
    Item.update(
        {
            item_name: req.body.item_name,
            item_info: req.body.item_info,
            user_id: req.body.user_id,
        },
        {
            where: {
                id: req.params.id,
            },
        }
    )
        .then((dbItemData) => {
            if (!dbItemData) {
                res.status(404).json({ message: "No item found with this id" });
                return;
            }
            res.json(dbItemData);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

//delete item
router.delete('/:id', (req, res) => {
    Item.destroy({
        where: { id: req.params.id },
    })
        .then((dbItemData) => {
            if (!dbItemData) {
                res.status(404).json({ message: "No item found with this id" });
                return;
            }
            res.json(dbItemData);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json(err);
        });
});

module.exports = router;