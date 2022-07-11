const mongo = require('mongoose');
const PrjDb = () => {
    mongo
        .connect('mongodb://localhost:27017/Project3Db', {
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('conectado ao mongoDb');
        })
        .catch(err => {
            return console.log(`erro ao logar no mongo ${err}`);
        });
};

module.exports = PrjDb;
