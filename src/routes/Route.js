/*módulos necessários */
const Control = require('../controllers/Controller');

const routes = require('express').Router();

const db = require('../dataBase/DataBase');

/*função de conexão com o mongo */
db();
/*rota final a parte final da requisição onde séra "setada" a rota selecionada e devolvida para o client */
routes.get('/', Control.index);
routes.get('/allid/:id', Control.projId);
routes.get('/allid', Control.projAll);
routes.post('/create', Control.projCreate);
routes.put('/up/:id', Control.projUp);
routes.delete('/del/:id', Control.projDel);
module.exports = routes;
