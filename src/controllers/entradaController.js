const Entrada = require('../models/Entrada');
const Matricula = require('../models/Matricula');

const entradaController = {
  async listar(req, res) {
    try {
      const entradas = await Entrada.find({});
      
      res.status(200).send({ entradas });
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async cadastrar(req, res) {
    try {
      const { matricula, data, observacao } = req.body;
      // const entrada = await Entrada.findOne({ matricula });
      const matriculaExiste = await Matricula.findOne({ matricula });

      if(!matriculaExiste) {
        return res.status(400).json(`Matrícula não cadastrada!`);
      }

      await Entrada.create({ matricula, data, observacao });

      res.status(201).send('Matrícula cadastrada com sucesso!');
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const userExist = await Entrada.findById(id);

      if(!userExist){
       return res.status(400).json(`Matrícula não encontrada!`);
      }
      
      await Entrada.findByIdAndUpdate(id, req.body);

      res.status(200).send(`Registro atualizado com sucesso!`);
    } catch (error) {
      console.error(error);
      res.status(400).json("Falha ao atualizar usuário");
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const userExist = await Entrada.findById(id);

       if(!userExist){
        return res.status(400).json(`Registro não encontrado!`);
       }
       await Entrada.findByIdAndDelete(id);

       return res.status(200).send(`Registro removido com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).send(`Falha ao remover registro tente novamnte!`);
    }
}
}

module.exports = entradaController;