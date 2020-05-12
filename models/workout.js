// Use this if want all mongoose
// const mongoose = require('mongoose');

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
  })

module.exports = model('Workout', WorkoutSchema)