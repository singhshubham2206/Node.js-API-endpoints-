const express = require("express");
const connectToMongooDB = require('./connection.js');
const userRoutes = require("./routes/userroute.js");
const workRoutes = require("./routes/workroutes.js");


const app = express();
PORT=3000

connectToMongooDB("mongodb://127.0.0.1:27017/user").then(( )=>
    console.log("MongooDB connected")
);

app.use(express.json());

// ROUTES

app.use("/", userRoutes);
app.use("/", workRoutes);


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });