
const express = require('express')
const uuid = require('uuid')
const port = 3000
const app = express()
app.use(express.json())

const orders = []

app.post('/orders', (request, response) => {

    const {order, clienteName, price} = request.body  // recebendo pelo body 
    const status = "Em preparação"
    const newOrder = {id: uuid.v4(), order, clienteName, price, status} // Montando um objeto

    orders.push(newOrder) // enviando o objeto montado para o array 

    return response.status(201).json(newOrder) // retorna o objeto criado com status de sucesso (201)
    

})

app.get ('/orders', (request, response) => {
   
    return response.json(orders)   // retorna o array


    
})





















app.listen(port, () => {
    console.log(`🚀 Server started on port ${port}`)
})