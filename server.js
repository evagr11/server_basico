const express = require('express');

const app = express();


const users =[
    {
        "username": "admin",
        "password": "admin",
        "email": "admin@gmail.com",
        "status": "active"
    },
    {
        "username": "user1",
        "password": "user1",
        "email": "user1@gmail.com",
        "status": "active"
    }
]

app.get("/", (req, response) => {
    response.send("Hola mundo")
})
app.get("/users", (req, res) =>{
    res.json(users)
})

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
})