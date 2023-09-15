const express = require('express');
const router = express.Router();
const idea = require("../models/ideamodel.js");

router.post("/idea", async(req , res )=>{
 
     try{
     await idea.create({
        Team_name:req.body.Team_name,
        Team_leadername:req.body.Team_leadername,
        PPt:req.body.ppt,
      })
      res.json({success:true});
     }catch(e){
        console.log(e);
        res.json({success:false});
     }
})


module.exports = router;