const Member = require('../models/member.model');

exports.getAllMembers = async (req, res) => {
  try {
    const membros = await Member.find();
    res.json(membros);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    const membro = await Member.findById(id);
    if (!membro) {
      return res.status(404).json({ message: 'Membro não encontrado' });
    }
    res.json(membro);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
