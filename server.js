const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const PORT = process.env.PORT || 3001;
const app = express();
// Setup middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Setup routes
app.use(routes);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitness_db', { useNewUrlParser: true,  useUnifiedTopology: true  });
app.listen(PORT, () => console.log("Server started"));