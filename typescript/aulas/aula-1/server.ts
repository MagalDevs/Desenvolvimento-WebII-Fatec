// npm i express
// npm i -D @types/node @types/express
import express from 'express'
import { Request, Response } from 'express'
const app = express()
const port = 3000
app.get('/',(req: Request, res: Response)=>{
    res.send('Olá!')    
})
app.get('/tabuada/:numero',(req: Request, res: Response)=>{
    const numero = Number(req.params.numero)
    res.send(numero)
})
app.listen(port, ()=>{
    console.log(`Server rodando em http://localhost:${port}`)
})

// npx tsc
// node server.js
// npm i -D nodemon ts-node
// Para remover - npm uninstall ts-node-dev
// npx nodemon --exec ts-node server.ts