const http = require('http');
const characters = require('./utils/data')

http.createServer(function (req, res) {
    const { url } = req;
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (url.includes('/rickandmorty/character')){    
    const id = Number(url.split('/').pop())
    const character = characters.find((char) => char.id === id)
    
    // if (character){
    //     res.writeHead(200, {'Content-Type': 'application/json'})
    //     return res.end(JSON.stringify(character))
    // } else{
    //     res.writeHead(404)
    //     return res.end()

    // WORKS TOO
    // }

    res.writeHead(200, { 'Content-Type': 'application/json' })
    characters.forEach(char => {  
        char.id === id ? res.end(JSON.stringify(char)) : null
    })
    }
  }).listen(3001, 'localhost');
    
