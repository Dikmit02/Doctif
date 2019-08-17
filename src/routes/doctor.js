const express=require('express')
const router=new express.Router()
const Doctor= require('../models/doctor')


router.post('/',async(req,res)=>{
    const doctor=new Doctor(req.body)
    try{
        await doctor.save({
            name:req.body.name,
            qualification:req.body.qualification,
            yearOfExp:req.body.yearOfExp,
            department:req.body.department
        })
        res.status(201).send(doctor)
    } catch (e) {
        res.status(400).send(e)
    }
})


router.get('/',async(req,res)=>{
    const doctor=await Doctor.find({})
    try{
        // res.send(doc)
        res.send(doctor)

    }
    catch(e){
        res.status(500).send(e)
    }
})

// router.get('/doctor/:department',async(req,res)=>{
//     const department=req.params.department
  
   

//    try{
//        const DepartmentDoc=await Doctor.find({department})
//        if(!DepartmentDoc){
//            return res.status(404).send()
//        }
//        res.send(DepartmentDoc)
//        } catch (e) {
//        res.status(500).send()
//    }
   
// })
module.exports = router