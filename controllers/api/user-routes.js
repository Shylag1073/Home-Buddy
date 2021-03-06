// Define global variables
const router = require('express').Router();
const { User, Item, Schedule } = require('../../models');

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

// Define route for GET One User
router.get('/:id', (req, res) => {
  User.findOne({
    attributes: { exclude: ['password'] },
    where: {
      id: req.params.id
    }
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No User found with this id.' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// CREATE User
router.post('/', (req, res) => {
  // expects {username: 'someusername', email: 'someemail@gmail.com', password: 'somepassword'}
  User.create({
    username: req.body.email,
    email: req.body.email,
    password: req.body.password
  })
    .then(dbData => {
      req.session.save(() => {
        req.session.user_id = dbData.id;
        req.session.username = dbData.username;
        req.session.loggedIn = true;
        console.log("===== Adding Items =====");
        Item.create({
          item_name: "air-conditioner",
          item_info: dbData.username,
          user_id: dbData.id
        })
        .then(dbItemData => {
          console.log("===== Adding Schedules =====");
          Schedule.create({
            item_id: dbItemData.id,
            schedule_date: new Date(),
            action: 'Change Air Filter',
            notes: 'Filter model: 12x25x1'
          })
        })
        res.json(dbData);
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.post('/login', (req, res) => {
  // expects {email: 'someemail@gmail.com', password: 'somepassword'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(dbData => {
    if (!dbData) {
      res.status(400).json({ message: 'No User with that email address!' });
      return;
    }

    const passwordCheck = dbData.checkPW(req.body.password);

    if (!passwordCheck) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = dbData.id;
      req.session.username = dbData.username;
      req.session.loggedIn = true;
      res.json({ user: dbData, message: 'You are logged in!' });
    });
  });
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  }
  else {
    res.status(404).end();
  }
});

// UPDATE User
router.put('/:id', (req, res) => {
  // expects {username: 'someusername', email: 'someemail@gmail.com', password: 'somepassword'}
  User.update(req.body, {
    individualHooks: true,
    where: {
      id: req.params.id
    }
  })
    .then(dbData => {
      if (!dbData[0]) {
        res.status(404).json({ message: 'No User found with this id.' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE User
router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No User found with this id.' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Export variables
module.exports = router;
