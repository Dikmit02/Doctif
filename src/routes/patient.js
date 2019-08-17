const express=require('express')
const router=new express.Router()

const Patient=require('../models/patient')


// router.post('/patient',async(req,res)=>{   http://localhost:2323/api/patient/patient

router.post('/',async(req,res)=>{
    //http://localhost:2323/api/patient
    

    
    const patient=new Patient(req.body)
        
 
    
    try{
        await patient.save(
            {
            name:req.body.name,
            age:req.body.age,
            department:req.body.department

        })


       res.status(201).send(patient)
        // res.redirect('/patient',{patient})
    } catch (e) {
        res.status(400).send(e)
    }
})



router.get('/',async(req,res)=>{
    const patient=await Patient.find({})
    // console.log(patient)
    try{
     res.send(patient)
    }
    catch(e){
        res.status(500).send(e)
 
    }
 })
 
 
//  router.get('/patient/:department',async(req,res)=>{
//      const department=req.params.department
   
    
 
//     try{
//         const DepartmentPat=await Patient.find({department})
//         if(!DepartmentPat){
//             return res.status(404).send()
//         }
//         res.send(DepartmentPat)
//         } catch (e) {
//         res.status(500).send()
//     }
    
//  })
 
 module.exports = router