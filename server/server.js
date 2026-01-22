const express = require('express');
const { spawn } = require('child_process');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Route pour la résolution d'équations complexes via Python
app.post('/solve', (req, res) => {
    const { equation } = req.body;
    
    // On lance le script Python avec l'équation en argument
    const python = spawn('python3', ['solver.py', equation]);

    let result = '';
    python.stdout.on('data', (data) => {
        result += data.toString();
    });

    python.stderr.on('data', (data) => {
        console.error(`Erreur Python: ${data}`);
    });

    python.on('close', (code) => {
        if (code !== 0) {
            return res.status(500).json({ error: "Erreur de calcul interne" });
        }
        res.json({ result: result.trim() });
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveur Gamert Calc AI actif sur le port ${PORT}`);
});
