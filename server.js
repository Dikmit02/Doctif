const express=require('express')
const path=require('path')
const mongoose=require('mongoose')
const hbs=require('hbs')
const http=require('http')
const socketio=require('socket.io')

const SERVER_PORT=process.env.PORT||3333



const app=express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())

const server=http.createServer(app)
const io=socketio(server)


app.set("view engine","hbs")
hbs.registerPartials(path.join(__dirname,'/partials'))
// mongoose.connect('mongodb+srv://dikmit02:dikmit02@cluster0-5upte.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser:true})
// .then(()=>{
//     console.log('connection is established')
// })
// .catch((x)=>{
//     console.log('failed'+x)
// })
// mongodb+srv://<username>:<password>@cluster0-5upte.mongodb.net/test?retryWrites=true&w=majority

mongoose.connect('mongodb://localhost/doctlif',{useNewUrlParser:true})


app.use("/",express.static(path.join(__dirname,'/public')))
app.use('/api',require('./src/routes/index').route)


app.use('/chat',(req,res)=>{
     res.render('chat')
 })



app.get('/',(req,res)=>{
    res.render('index')
})
app.get('/patient',(req,res)=>{
    res.render('patient')
})

app.get('/doctor',(req,res)=>{
    res.render('doctor')
})


io.on('connection', (socket) => {

    console.log('made socket connection', socket.id);

    // Handle chat event
    socket.on('chat', function(data){
        // console.log(data);
        io.emit('chat', data);
    });

    // Handle typing event
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});


SERVER_PORT.listen(3333,()=>{
    console.log("server started at 2323 port")
})