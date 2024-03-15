const User = require('../models/user.model');

exports.register = async (req, res) => {
  try {
    const novoUsuario = new User(req.body);
    const usuarioSalvo = await novoUsuario.save();
    res.status(201).json(usuarioSalvo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const usuario = await User.findOne({ email, password });
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.logout = (req, res) => {
  try {
    // Limpar o localStorage ou a sessão, se necessário
    // Exemplo para limpar o localStorage:
    localStorage.removeItem('user');

    // Responder ao cliente
    res.status(200).json({ message: 'Logout bem-sucedido' });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao fazer logout' });
  }
};
