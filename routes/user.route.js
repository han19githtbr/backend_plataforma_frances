// routes/usuarios.js

const express = require('express');
const router = express.Router();
const Usuario = require('../models/user.model');

router.post('/register', async (req, res) => {
  try {
    const novoUsuario = new Usuario(req.body);
    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json(usuarioSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email, password });
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
