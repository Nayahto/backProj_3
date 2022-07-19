/*módulos necessários */
const Control = require('../controllers/Controller');
const swaggerui = require('swagger-ui-express');
const swagger = require('../../swagger.json');
const middleware = require('../middlewares/middleware');

const routes = require('express').Router();

const db = require('../dataBase/DataBase');

/*rotas do swagger*/

routes.use('/api-docs', swaggerui.serve);
routes.get('/api-docs', swaggerui.setup(swagger));

/*função de conexão com o mongo */
db();
/*rota final a parte final da requisição onde séra "setada" a rota selecionada e devolvida para o client */
routes.get('/', Control.index);
routes.get('/characters', Control.projAll);
routes.get('/characters/find/:id', middleware.valid, Control.projId);
routes.post('/characters/create', middleware.validreq, Control.projCreate);
routes.put('/characters/update/:id', middleware.valid, Control.projUp);
routes.delete('/characters/delete/:id', middleware.valid, Control.projDel);
module.exports = routes;
