// importing the express module dotenv and errorhandler from the middleware folder
const express = require("express");
const dotenv = require("dotenv");
const { errorHandler } = require("./middleware/errormiddleware");
const port = process.env.PORT || 4000;

// initializing the express app, dotenv and setting the port
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// importing the routes
app.use("/api/goal", require("./routes/Firstroutes"));

// error handling middleware
app.use(errorHandler);

// starting the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
