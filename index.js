const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

const PORT = 3000;




app.post('/add-user', (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    const newUser = req.body;

    users.push(newUser);

    fs.writeFileSync(
        'users.json',
        JSON.stringify(users, null, 2)
    );

    res.send({ message: 'User added successfully' });
});





app.get('/get-users', (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    res.send(users);
});





app.delete('/delete-user/:name', (req, res) => {
    const users = JSON.parse(fs.readFileSync('users.json'));

    const filteredUsers = users.filter(
        user => user.name !== req.params.name
    );

    fs.writeFileSync(
        'users.json',
        JSON.stringify(filteredUsers, null, 2)
    );

    res.send({ message: 'User deleted successfully' });
});





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
