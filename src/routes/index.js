const route = require('express').Router()

route.use('/patient',require('./patient'))
route.use('/doctor',require('./doctor'))


exports=module.exports={
    route
}