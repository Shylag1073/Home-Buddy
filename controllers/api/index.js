// Define global variables
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js');
const scheduleRoutes = require('./schedule-routes.js');

// Use middleware
router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/schedules', scheduleRoutes);

// Export variables
module.exports = router;
