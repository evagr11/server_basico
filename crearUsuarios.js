const express = require('express');

const app = express();

const generateRandomWord = () => {
    const words = ['rojo', 'verde', 'amarillo', 'azul', 'rosa'];
    return words[Math.floor(Math.random() * words.length)];
};

const generateRandomUsername = () => {
    const word1 = generateRandomWord();
    const word2 = generateRandomWord();
    const randomNumber = Math.floor(Math.random() * 1000); 
    return word1 + word2 + randomNumber;
};

const generateRandomStatus = () => {
    const statuses = ['active', 'inactive', 'pending']; // Cambié de 'activo' a 'active' y 'inactivo' a 'inactive'
    return statuses[Math.floor(Math.random() * statuses.length)];
};

const users = [];
for (let i = 0; i < 500; i++) {
    const username = generateRandomUsername();
    const user = {
        username: username,
        password: username, 
        email: username + "@gmail.com", 
        status: generateRandomStatus() // 'active' o 'inactive'
    };
    users.push(user);
}

app.use(express.static("public"));
app.get("/users", (req, res) => {
    res.json(users);
});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);
    res.json(users[id]);
});

app.listen(3000, () => {
    console.log("El servidor está funcionando en el puerto 3000");
});
