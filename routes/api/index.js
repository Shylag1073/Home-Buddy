// Define global variables
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const scheduleRoutes = require('./Schedule-routes');

// Use middleware
router.use('/users', userRoutes);
router.use('/schedule', scheduleRoutes);

// Export variables
module.exports = router;
