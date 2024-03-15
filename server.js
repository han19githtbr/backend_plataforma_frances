const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Permitindo acesso do frontend na Netlify
app.use(cors({
  origin: 'https://pataformafranceshjf.netlify.app/'
}));

//app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://frances_plataforma:19handyrio@francescluster.m8koll3.mongodb.net/',{
  useNewUrlParser: true,
  useUnifiedTopology: true

}).then(() => {
  console.log('Conexão com o MongoDB estabelecida com sucesso');
}).catch((err) => {
  console.error('Erro de conexão com o MongoDB:', err);
  process.exit();
});

const usersRoute = require('./routes/user.route');
const membersRoute = require('./routes/member.route');

// Configurar rotas
app.use('/api/users', usersRoute);
app.use('/api/members', membersRoute);

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
