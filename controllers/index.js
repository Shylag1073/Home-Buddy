// Define global variables
const router = require('express').Router();
const apiRoutes = require('../routes/api');

// Use middleware
router.use('/api', apiRoutes);
router.use((req, res) => {
  res.status(404).end();
});

// Export variables
module.exports = router;
