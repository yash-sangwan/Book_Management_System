const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes")
const cors = require ('cors')
const app = express();



//Middleawares

app.use(express.json());  //allows Express application to understand JSON Data
app.use(cors());  //Cross Origin Resource Sharing 
app.use("/books",router)//localhost:5000/books, //The request is made to the URL  and the task will be handled by the router.




mongoose
  .connect(
    "Connect your mongodb API key"
  )
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5000);
  })
  .catch((err) => console.log(err));


  
