var express = require("express");
var router = express.Router();
var NoteTracker = require('../db/db.json') // import database model
var axios = require('axios');              

router.get('/',(req,res)=>{
   res.render('index.html')   
})

router.get('/notes',async(req,res)=>{
   const getAll = await axios.get("http://localhost:3003/noteTracker");
      console.log(getAll.data)
      res.render('notes.html',{
         getAll:getAll.data,
      });   
})

router.get('/api/notes',async (req,res)=>{
   const getAll = await axios.get("http://localhost:3003/noteTracker");
      console.log(getAll.data)
      res.render('notes.html',{
         getAll:getAll.data,
      }); 
})

router.post('/api/notes',async (req,res)=>{
   try{
   let idGen = await Math.floor(11000 + Math.random() * 19000);
   var id = idGen;
   var noteTitle = req.body.noteTitle;
   var noteText = req.body.noteText;
  const newNote = await axios.post("http://localhost:3003/noteTracker",{
      id:id, 
      noteTitle:noteTitle,
      noteText:noteText,
  });
  console.log(newNote.data)
  res.json({success:true,message:"added successfullyy"})
//   res.redirect('/api/notes')
  

   }catch(error){
     console.log(error)
   }
})

module.exports = router;