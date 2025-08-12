import express from 'express'
import mongoose from 'mongoose';
import Product from './models/product.model.js'
import productRoute from './routes/product.route.js'

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))

// Routes
app.use('/api/products',productRoute)


// Not Required

// app.get('/api/products', ...)
// app.get('/api/products/:id', ...)






// app.get('/', (req, res) => {
//   res.send('This is Node API !!!')
// })


// // Update a Product
// app.put('/api/products/:id', async (req,res) => {
//     try {

//       const { id } = req.params
//       const product = await Product.findByIdAndUpdate(id,req.body)

//       if(!product){
//         return res.status(404).json({message:"Product not Found"})
//       }

//       // ReCheck
//       const updatedProduct = await Product.findById(id)
//       res.status(200).json(updatedProduct)

//     } catch (error) {
//       res.status(500).json({message: error.message})
//     }
// })

// // Delete a Product
// app.delete('/api/products/:id', async (req,res) => {
//     try {

//       const { id } = req.params
//       const product = await Product.findByIdAndDelete(id)

//       if(!product){
//         return res.status(404).json({message:"Product not Found"})
//       }


//       res.status(200).json(product)

//     } catch (error) {
//       res.status(500).json({message: error.message})
//     }
// })



// // Add a Product
// app.post('/api/products', async (req,res) => {
//     try {

//       const product = await Product.create(req.body)
//       res.status(200).json(product)

//     } catch (error) {
//       res.status(500).json({message: error.message})
//     }
// })


mongoose.connect("mongodb+srv://bear_29:20195875Kk@cluster0.rncux1g.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Connected to database!")
    
    app.listen(3000, ()=>{
    console.log('Server is running on Port 3000 ')
})
})
.catch(()=>{
    console.log("Connection failed!")
})


