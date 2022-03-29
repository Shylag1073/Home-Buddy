const router = require('express').Router();
const { User } = require('../../models');

// GET All Users
router.get('/', (req, res) => {
    User.findAll({
      attributes: { exclude: ['password'] }
    })
      .then(dbData => res.json(dbData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
