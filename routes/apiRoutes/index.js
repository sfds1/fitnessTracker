const router = require('express').Router();
const Workout = require('../../models/workout');
const moment = require('moment');


router.get("/workouts", (req, res) => {
   Workout.find()
      .then(data => { res.json(data) })
});
router.post("/workouts", (req, res) => {
   // console.log(req.body)
   Workout.create({})
      .then(data => { res.json(data) })
});

router.put("/workouts/:id", (req, res) => {
   // console.log(req.body)
   // console.log(req.params)
   Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } })
      .then(data => { res.json(data) })
});
router.get("/workouts/range", (req, res) => {

      // got all data to list everything
   Workout.find()
   .then(data => {res.json(data)})


   // trying to edit to get the actual weeks data versus all aggregated
   // added moment to get actual last week of data from todays date
   // show data for the previous week as the current week is not done yet
   // moment week  =  week is Sun-Sat
   // format("X") turns the date into a digit
   // const from_date = moment().startOf('week').subtract('week', 1);
   // const to_date = moment().endOf('week').subtract('week', 1);

   // console.log(
   //    " from_date:", new Date(from_date), "-----", to_date
   // );
   // Workout.find({ day: { $gte: new Date(from_date), $lte: new Date(to_date) } })
   //    .then(data => { 

   //       let weekObj={}
   //  data.forEach(elem =>{
   //     var day = moment(elem.day).format("MM/DD/YYYY")
   //     console.log("day: ", day)
   //    // console.log(elem, elem.exercises)
   //     if (!weekObj[day]){
   //       weekObj[day] = {day: day, totalDuration: elem.totalDuration, exercises: elem.exercises}
   
   //    }
   //     else{
   //       let oldE = weekObj[day].exercises
   //       let newE = elem.exercises
   //      // console.log(oldE, newE)
   //       weekObj[day] = {day: day, totalDuration: weekObj[day].totalDuration+ elem.totalDuration, exercises: [...oldE, ...newE]}
   //     }
   //    // console.log("obj inside the loop:", weekObj)
   //       })
   //      // console.log("obj:", weekObj)
   //       let array = []
   //       for (key in weekObj){
   //          array.push(weekObj[key])
   //       }
   //       console.log(array)
   //       res.json(array) })



});

module.exports = router;