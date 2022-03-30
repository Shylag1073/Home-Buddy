// Define global variables
const router = require('express').Router();
const { User } = require('../../models');

// Define route for GET All Users
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

// Export variables
module.exports = router;
