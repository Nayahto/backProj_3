/*controller, responsável por devolver respostas para as rotas que por sua vez devolve a resposta para o client*/

/*módulos necessários*/
const Serv = require('../Services/Service');

/*rota padrão ou default (a rota nao pode ser nomeada como default já quej o node não permite)*/
const index = (req, res) => {
    res.send('hello world');
};
/*rota getAllControl */
const projAll = async (req, res) => {
    const allId = await Serv.projAll();
    res.send(allId);
};
/*rota getByIdControl */
const projId = async (req, res) => {
    const id = req.params.id;
    const servBody = await Serv.projId(id);
    res.send(servBody);
};
/*rota createControl */
const projCreate = async (req, res) => {
    const body = req.body;
    const servBody2 = await Serv.projCreate(body);
    res.send(servBody2);
};
/*rota updateControl */
const projUp = async (req, res) => {
    const id2 = req.params.id;
    const reqBody = req.body;
    const servBody3 = await Serv.projUpdate(id2, reqBody);
    res.send(servBody3);
};
/*rota deleteControl */
const projDel = async (req, res) => {
    const id3 = req.params.id;
    const Servrespon = await Serv.projDelete(id3);
    res.send({ message: 'personagem deletado com sucesso!' });
};
module.exports = { index, projAll, projId, projCreate, projUp, projDel };
