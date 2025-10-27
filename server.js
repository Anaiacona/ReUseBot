const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

// Mock database
const ads = new Map([
  ['1234', { id: '1234', status: 'active' }],
  ['5678', { id: '5678', status: 'paused' }]
]);

// Pausar anúncio
app.post('/pause', (req, res) => {
  const { code } = req.body;
  if (!ads.has(code)) return res.json({ ok: false, message: 'Código não encontrado.' });
  ads.get(code).status = 'paused';
  res.json({ ok: true, message: `Anúncio ${code} pausado com sucesso.` });
});

// Reativar anúncio
app.post('/resume', (req, res) => {
  const { code } = req.body;
  if (!ads.has(code)) return res.json({ ok: false, message: 'Código não encontrado.' });
  ads.get(code).status = 'active';
  res.json({ ok: true, message: `Anúncio ${code} reativado com sucesso.` });
});

// Ver status das trocas
app.get('/trades', (req, res) => {
  res.json({
    negotiating: 3,
    awaiting: 2,
    pending_other: 1,
    done: 4
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`ReUseBot mock rodando na porta ${PORT}`));
