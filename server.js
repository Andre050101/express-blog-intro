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
app.get('/bacheca', (req, res, next) => {
    if (!posts || posts.length === 0) {
        return res.status(404).json({
            message: 'Nessun post disponibile'
        });
    }
    res.json({
        posts: posts,
        conteggio: posts.length
    });
});

//Gestione rotte inesistenti
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Risorsa non trovata'
    });
});


//Avvia server
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
})