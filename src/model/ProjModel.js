/*módulos necessários */
const mongo = require('mongoose');
/*constante responsável pelo "shape" do corpo da resquisição */
const projSchema = new mongo.Schema({
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    foto: { type: String, required: true },
});
const Proj = mongo.model('pro', projSchema);

module.exports = Proj;
