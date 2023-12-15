const express = require('express');
const fs = require('fs');
const users = require('./data/user');
const app = express();

app.use(express.json());

app.post('/addUser', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    fs.writeFile('./data/user.js', `export default ${JSON.stringify(users, null, 2)};`, (err) => {
        if (err) {
            res.status(500).send('Erro ao adicionar usuário');
        } else {
            res.status(200).send('Usuário adicionado com sucesso');
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});