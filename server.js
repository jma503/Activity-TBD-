const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json)

app.listen(PORT, () => {
    console.log('App likes to listen to radio station: ', PORT);
})

app.get('/' (req, res) => {
    
})