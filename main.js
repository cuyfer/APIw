const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fs = require('fs');
const path = require('path');
const app = express()
const port = 2445

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'data.json');
    
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading the JSON file');
        }

        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseErr) {
            res.status(500).send('Error parsing the JSON file');
        }
    });
});

app.get('/warung', (req, res)=>{
    res.send('Selamat anda bisa menemukan route rahasia ini adalah Website warung program: https://warungpro.com')
})
app.listen(port, ()=>{
    console.log('Hubung! http://localhost:'+port )
})
