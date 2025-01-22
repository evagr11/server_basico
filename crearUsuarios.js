const express = require('express');

const app = express();

const generateRandomWord = () => {
    const words = ['rojo', 'verde', 'amarillo', 'azul', 'rosa'];
    return words[Math.floor(Math.random() * words.length)];
};

const generateRandomUsername = () => {
    const word1 = generateRandomWord();
    const word2 = generateRandomWord();
    const randomNumber = Math.floor(Math.random() * 10000); 
    return word1 + word2 + randomNumber;
};

const generateRandomStatus = () => {
    const statuses = ['activo', 'inactivo']; 
    return statuses[Math.floor(Math.random() * statuses.length)]; 

};

const users = [];
for (let i = 0; i < 500; i++) {
    const username = generateRandomUsername();
    const user = {
        username: username,
        password: username, 
        email: username + "@gmail.com", 
        status: generateRandomStatus() 
    };
    users.push(user);
}

app.get("/", (req, response) => {
    response.send("Hola mundo")
})
app.get("/users", (req, res) =>{
    res.json(users)
})

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
})