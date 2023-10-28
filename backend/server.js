const express = require("express");
const app = express();
const cors=require('cors')
const mongoose=require('mongoose')

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors({credentials:true,origin:["http://localhost:3000"]}))
app.use(express.json())
//Setting PORT to 5000 if PORT is not listed in environmental variables.
const PORT = process.env.PORT || 5000;
const MONGO_URL = "mongodb://mymongo:27017/ec"
mongoose.connect(MONGO_URL,{
  useNewUrlParser: true,
  useUnifiedTopology:true,
}).then(()=>{
  console.log("mongodb connected..")
  // app.listen(PORT,()=>console.log(`Mongodb connected port:${PORT}`))

}).catch((err) => {
  console.log(`${err} didnot connect`)
})
// Creating the `GET` route
app.get("/", (req, res) => {
  res.json({
    message:"msg from backend"
  });
});

//Starting the express server
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);