import Express  from 'express';

const app = Express()
const port = 3000;

app.get('/', (requisicao, resposta) => {
    resposta.send('Olá mundo!')
})

app.get('/tabuada', (requisicao, resposta) => {
    let concatenagem = "";
    const numero = 7;
    for (let i = 0; i <= 10; i++) {
        concatenagem += `${numero} X ${i} = ${numero*i} <br>`
    }
    resposta.send(concatenagem)
})

// node server.js - rodar a API
app.listen(port, () => {
    console.log(`API Rodando em http://localhost:${port}`)
})