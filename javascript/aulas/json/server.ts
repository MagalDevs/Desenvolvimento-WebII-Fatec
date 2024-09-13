//npm i express
//npm i -D @types/express @types/node
import express from 'express'
import Pessoa from './cadastro'

const app = express()
const port = 3000

app.get('/pessoas', (req, res) =>{
    const pessoa1 = new Pessoa('João', 30, ['Esportes', 'Cozinhar'])
    const pessoa2 = new Pessoa('Maria', 25, ['Ler', 'Cinema'])
    const listaPessoas = [pessoa1, pessoa2]
    res.json(listaPessoas)
})

app.listen(port, () =>{
    console.log(`API rodando em http://localhost:${port}`)
})