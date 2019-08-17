const mongoose=require('mongoose')

const Patient=mongoose.model('patients',{
    name:{
        type:String,
        required:true,
        default:""

    },
    age:{
        type:Number,
        required:true
            
            
    },
    department:{
        type:String,
        require:true,
        
    },

})
module.exports=Patient