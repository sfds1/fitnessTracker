const router = require('express').Router();
const apiRoutes = require('./apiRoutes');

// anything with /api in front will use apiroutes index.js
router.use('/api', apiRoutes);

module.exports = router;