const express = require('express'); //Richiamo express
const path = require('path');//Richiamo path per versatilità percorsi su diversi sistemi operativi
const app = express(); //Variabile che contene express
const port = 3000; //porta

//Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//Avvia server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})