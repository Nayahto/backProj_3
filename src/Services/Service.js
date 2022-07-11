/*Sevice, lado responsavel por devolder as respostas para o controller*/

/*modulos necessários*/
const projmodel = require('../model/ProjModel');

/*rota getAllServc*/
const projAll = async () => {
    const getAll = await projmodel.find();
    return getAll;
};
/*rota getByIdServc*/
const projId = async id => {
    const getById = await projmodel.findById(id);
    return getById;
};
/*rota createServc*/
const projCreate = async body => {
    const create = await projmodel.create(body);
    return create;
};
/*rota updateServc*/
const projUpdate = async (id, body) => {
    const update = await projmodel.findByIdAndUpdate(id, body);
    return update;
};
/*deleteServc*/
const projDelete = async id => {
    const idDeleted = await projmodel.findByIdAndDelete(id);
    return idDeleted;
};

module.exports = { projAll, projId, projCreate, projUpdate, projDelete };
