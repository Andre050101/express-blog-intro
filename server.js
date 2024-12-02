const express = require('express'); //Richiamo express
const path = require('path');//Richiamo path per versatilità percorsi su diversi sistemi operativi
const posts = require('./data/post');
const app = express(); //Variabile che contene express
const port = 3000; //porta

//Serviamo asset statici di cartella public
app.use(express.static(path.join(__dirname, 'public')));

//Rotta principale
app.get('/', (req, res) => {
    res.send('Server del mio blog');
});

//Rotta bacheca
app.get('/bacheca', (req, res) => {
    res.json({
        posts: posts,
        conteggio: posts.length
    });
});


//Avvia server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})