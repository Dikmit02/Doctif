const mongoose=require('mongoose')

const Doc=mongoose.model('doctor',{
    name:{
        type:String,
        required:true,
        default:""

    },
    qualification:{
        type:String,
        required:true,
        uppercase:true

    },
    yearOfExp:{
        type:Number,
        required:true,
        min:2
    },
    department:{
        type:String,
        require:true,
        
    }
    

})


module.exports=Doc