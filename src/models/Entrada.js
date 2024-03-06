const mongoose = require('mongoose');

const entradaSchema = new mongoose.Schema({
  matricula: {
    type: String,
    required: true,
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