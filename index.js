// Definimi i Variablave
const express = require('express');
const app = express();
const path = require('path');
const port = 8000;
const fs = require('fs');

// Gjerat Specifike te EXPRESS
app.use('/static', express.static('static'));
app.use(express.urlencoded()); //Pur url qe shfaqet ne seatch bar qe marrimnga file ose faqja e webit

// Gjerat Specifike te PUG
app.set('view engine','pug');
app.set('views', path.join(__dirname,'views')); //Ketu kemi marrur path directory te file

/**/
const biblioteka= require('./routers/librat');
const librat= require('./routers/librat');
const libri= require('./routers/libri');
const profil= require('./routers/profil');
const hyr= require('./routers/hyr');
const regjistrohu= require('./routers/regjistrohu');

app.use('/', biblioteka);
app.use('/', librat);
app.use('/', libri);
app.use('/', profil);
app.use('/', hyr);
app.use('/', regjistrohu);

const pages={'':'Home','librat':'Librat','hyr':'Hyr','regjistrohu':'Regjistrohu','profil':'Profili'};

/**/

// Pika e Fundit
app.get('/', (req,res)=>{
    res.status(200).render('index.pug');
});

// Fillo Serverin
app.listen(port,()=>{
    console.log(`application start on port ${port}`);
});
