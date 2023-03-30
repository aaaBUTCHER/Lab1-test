const express=require('express');
const router=express.Router();

router.get("/",(req, res)=>{
    res.render("libri.pug");
});

/**/


/**/

module.exports=router;