const express=require ("express");
const cors = require ("cors");

const rootrouter = require("./routes/user")

const app =express();

app.use(express.json());
app.use(cors({
    origin: ' http://localhost:5173 ',
    methods: ["POST"],
    credentials: true,
  }

));
app.use("/api/v1/message",rootrouter);

app.listen(3000,()=>{
    console.log("app running on 3000 port")
});