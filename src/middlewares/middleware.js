const mongoose = require('mongoose');

const valid = (req, res, next) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(401).send({ message: 'indice inválido' });
    }
    next();
};

const validreq = (req, res, next) => {
    const body = req.body;
    if (!body.nome || !body.descricao || !body.foto) {
        res.status(401).send({ message: 'erro na criação do indice' });
    }
    next();
};

module.exports = { valid, validreq };
