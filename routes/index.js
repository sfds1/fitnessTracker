const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const path = require('path')
// anything with /api in front will use apiroutes index.js
router.use('/api', apiRoutes);

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
});
router.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router;