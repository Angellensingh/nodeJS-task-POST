// const express = require ('express')
// const app = express()
// // const port = 3000
// const mongoose = require("mongoose")
// const {Cat} = require ('./modal')
// const {Dog} = require ('./modal')


// const connectDB = async()=>{
//     await mongoose.connect('mongodb+srv://Angel_2003:Angel_2003@cluster0.q9wva.mongodb.net/employee')
//     console.log(`db is connect with ${mongoose.connection.host}`)
// }
// connectDB()

// app.get('/',async(req,res) => {
    
//     const cat = new Cat({
//         name:'julie'
//     })
//     const dog = new Dog({
//         name:'max'
//     })

//     const data = await cat.save()
//     const dat = await dog.save()

//     res.send({ cat: data, dog: dat });

// })

// app.listen(3001)


const Model = require('./model');
const express = require ('express')
const router= require('./routes');
const app = express()
// const port = 3000
const mongoose = require("mongoose")
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router)
const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://Angel_2003:Angel_2003@cluster0.q9wva.mongodb.net/employee')
    console.log(`db is connect with ${mongoose.connection.host}`)
}
connectDB()


app.listen(3001)