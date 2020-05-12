const router = require('express').Router();
const Workout = require('../../models/workout')


router.get("/workouts", (req, res) => {
   Workout.find()
   .then(data => {res.json(data)})
});
router.post("/workouts", (req, res) => {
   console.log(req.body)
   Workout.create({})
   .then(data => {res.json(data)})
});

router.put("/workouts/:id", (req, res) => {
   console.log(req.body)
   console.log(req.params)
   Workout.findByIdAndUpdate(req.params.id, {$push:{exercises: req.body}})
   .then(data => {res.json(data)})
});
router.get("/workouts/range", (req, res) => {
   Workout.find()
   .then(data => {res.json(data)})
});

module.exports = router;