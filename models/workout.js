// Use this if want all mongoose
const mongoose = require('mongoose');

// destructure mongoose as only need Schema and model
const { Schema, model } = require('mongoose');


// create new Schema
const WorkoutSchema = new Schema({


  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String
      },
      name:
      {
        type: String
      },
      duration:
      {
        type: Number
      },
      weight: {
        type: Number
      },
      reps:
      {
        type: Number
      },
      sets:
      {
        type: Number
      },
      distance: {
        type: Number
      }
    }]
},
  {
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);
// adds a dynamically-created property to schema
WorkoutSchema.virtual("totalDuration").get(function () {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = model('Workout', WorkoutSchema)