const express= require('express');
const router= express.Router();

router.get("/", (req,res)=>{
    res.render("dashboard/libratEBlere",{isAuthenticated: req.session.isLoggedIn});
});

module.exports=router;