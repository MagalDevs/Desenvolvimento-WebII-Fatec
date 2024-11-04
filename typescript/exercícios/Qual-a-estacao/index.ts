import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const PORT = 3000;

const getSeason = (month: string): string | null => {
    const lowerMonth = month.toLowerCase();

    switch (lowerMonth) {
        case 'dezembro':
        case 'janeiro':
        case 'fevereiro':
            return 'Verão';
        case 'março':
        case 'abril':
        case 'maio':
            return 'Outono';
        case 'junho':
        case 'julho':
        case 'agosto':
            return 'Inverno';
        case 'setembro':
        case 'outubro':
        case 'novembro':
            return 'Primavera';
        default:
            return null;
    }
};

app.post('/estacao', (req: Request, res: Response) => {
    const { mes } = req.body;

    if (!mes || typeof mes !== 'string') {
        return res.status(400).json({ error: 'O nome do mês é obrigatório e deve ser uma string válida.' });
    }

    const estacao = getSeason(mes);

    if (!estacao) {
        return res.status(400).json({ error: 'Mês inválido. Por favor, envie um nome de mês válido.' });
    }

    return res.json({ estacao });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});