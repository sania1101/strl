const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json({extended:true}))
app.use('/api/auth/', require('./routes/auth'))



const PORT = 5000

async function start(){
    try{
       
        await mongoose.connect('mongodb://localhost:27017/app', {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        app.listen(PORT, ()=>console.log(`App has been started on port ${PORT}...`))
    }catch(e){
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()