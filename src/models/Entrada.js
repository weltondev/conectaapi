const mongoose = require('mongoose');

const entradaSchema = new mongoose.Schema({
  matricula: {
    type: String,
  },
  data: {
    type: Date,
    required: true
  },
  observacao: {
    type: String
  }
})

const Entrada = mongoose.model("Entrada", entradaSchema);

module.exports = Entrada;