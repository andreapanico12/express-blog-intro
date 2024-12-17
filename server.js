const express = require('express');
const app = express();
const port = 3001;

const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "Questo è il contenuto di Ciambellone",
    immagine:"/images/ciambellone.jpeg",
    tags:["ciambellone","dolci","lievitati"]
  },
  {
    titolo: "Cracker alla barbabietola",
    contenuto: "Questo è il contenuto di Cracker alla barbabietola",
    immagine:"/images/cracker_barbabietola.jpeg",
    tags:["cracker","aperitivo","barbabietola","merenda"]
  },
  {
    titolo: "Pane fritto dolce",
    contenuto: "Questo è il contenuto di Pane fritto dolce",
    immagine:"/images/pane_fritto_dolce.jpeg",
    tags:["pane", "fritto","dolci","lievitati","cinese"]
  },
  {
    titolo: "Pasta in crema di barbabietola",
    contenuto: "Questo è il contenuto di Pasta in crema di barbabietola",
    immagine:"/images/pasta_barbabietola.jpeg",
    tags:["pasta","primi","primi piatti", "barbabietola", "vegano"]
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Questo è il contenuto di Torta Paesana",
    immagine:"/images/torta_paesana.jpeg",
    tags:["canditi","dolci","cacao","frutta secca"]
  }
]



// http://localhost:3001/

app.get("/",(req,res) => {
  res.send(`Server del mio blog`);
})

app.listen(port,() => {
  console.log(`sono in ascolto della porta ${port}`);
})