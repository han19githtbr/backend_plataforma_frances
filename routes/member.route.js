const express = require('express');
const router = express.Router();
const Member = require('../models/member.model');

router.get('/', async (req, res) => {
  try {
    const membros = await Member.find();
    console.log('Membros encontrados:', membros); // Adicionando um log dos membros encontrados
    res.json(membros);
  } catch (err) {
    console.error('Erro ao buscar membros:', err); // Adicionando um log de erro, se houver
    res.status(500).json({ message: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const membro = await Member.findById(req.params.id);
    console.log('Membro encontrado por ID:', membro); // Adicionando um log do membro encontrado
    res.json(membro);
  } catch (err) {
    console.error('Erro ao buscar membro por ID:', err); // Adicionando um log de erro, se houver
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
