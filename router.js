const express = require("express");
const router = express.Router();
const conexión = require("./database/db");

router.get("/",(req,res)=>{
   conexión.query("SELECT * FROM users",(e,results)=>{
      if(e){
         console.error();
      }else{
         res.render("C:/Users/Santiago/OneDrive/Escritorio/TCC-BD/view/index.ejs",{results:results})
      }
   })
})

router.get("/create",(req,res)=>{
   res.render("C:/Users/Santiago/OneDrive/Escritorio/TCC-BD/view/create.ejs");
   
})

router.get("/edit/:id",(req,res)=>{
   const id = req.params.id;
   conexión.query("SELECT * FROM users WHERE id=?",[id],(error,results) =>{
      if(error){
        throw error;
      }else{
         res.render("C:/Users/Santiago/OneDrive/Escritorio/TCC-BD/view/edit.ejs",{user:results[0]})
      }
   })
})

router.get("/delete/:id",(req, res)=>{
   const id = req.params.id;
   conexión.query("DELETE FROM users WHERE id = ?",[id], (error,results)=>{
      if(error){
         console.log(error);;
       }else{
          res.redirect("/")
       }
   })
});

const crud = require("./controllers/crud")
router.post("/save", crud.save)
router.post("/update", crud.update)





module.exports=router;