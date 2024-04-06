const express = require("express")
const router=express.Router();
const { user } = require("../db");





router.post("/send",async (req,res)=>{
 const {name,email ,subject ,message}=req.body;
   try{
    if(!name || !email|| !subject ||!message){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
         }
    
         await user.create({name,email,subject,message});
         return res.status(200).json({
            success:true,
            message:"massage sent successfully"
           }  )
   } catch (error) {
    if (error.name === "ValidationError") {
      let errorMessage = "";
      if (error.errors.name) {
        errorMessage += error.errors.name.message + " ";
      }
      if (error.errors.email) {
        errorMessage += error.errors.email.message + " ";
      }
      if (error.errors.subject) {
        errorMessage += error.errors.subject.message + " ";
      }
      if (error.errors.message) {
        errorMessage += error.errors.message.message + " ";
      }
      return res.status(400).json({
        success: false,
        message: errorMessage,
      });
    }

    return res.status(500).json({
      success: false,
      message: "Unknown Error",
    });
}


}
)
module.exports = router;
