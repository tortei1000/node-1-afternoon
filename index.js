const express = require('express')
const app = express()
const port = 5000
const getProducts = require("./server/getProducts")
const getProduct = require("./server/getProduct")



app.get("/api/products", getProducts)

app.get("/api/product/:id", getProduct)

app.listen(port, ()=>{
  console.log("listening on port", port)
})

