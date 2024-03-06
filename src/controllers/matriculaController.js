const Matricula = require('../models/Matricula');

const matriculaController = {
  async listar(req, res) {
    try {
      const matriculas = await Matricula.find({});
      
      res.status(200).send({ matriculas });
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async listarId(req, res){
    try {
      const { matricula } = req.params;
      const infos = await Matricula.findOne({matricula});
      if(!infos) {
        res.status(400).json('Matrícula não encontrada!');
      }

      res.status(200).json({infos});

      
    } catch (error) {
      console.log(error);
      res.status(400).json('Falha ao listar');
    }
  },

  async cadastrar(req, res) {
    try {
      const { nome, rg, cpf, matricula, data, observacao } = req.body;
      const matriculaExiste = await Matricula.findOne({ rg, cpf, matricula });

      if(matriculaExiste) {
        return res.status(400).send(`Usuário já cadastrado!`);
      }

      await Matricula.create({ nome, rg, cpf, matricula, data, observacao });

      res.status(201).send('Matrícula cadastrada com sucesso!');
    } catch (error) {
      console.log(error);
      res.status(400).send(error.message);
    }
  },

  async atualizar(req, res) {
    try {
      const { id } = req.params;

      const userExist = await Matricula.findById(id);

      if(!userExist){
       return res.status(400).json(`Matrícula não encontrada!`);
      }
      
      await Matricula.findByIdAndUpdate(id, req.body);

      res.status(200).send(`Matrícula atualizada com sucesso!`);
    } catch (error) {
      console.error(error);
      res.status(400).json("Falha ao atualizar usuário");
    }
  },

  async remover(req, res) {
    try {
       const { id } = req.params;
       const userExist = await Matricula.findById(id);

       if(!userExist){
        return res.status(400).json(`Matrícula não encontrada!`);
       }
       await Matricula.findByIdAndDelete(id);

       return res.status(200).send(`Matrícula removida com sucesso!`);
    } catch (error) {
        console.log(error);
        res.status(400).send(`Falha ao remover matrícula tente novamnte!`);
    }
}
}

module.exports = matriculaController;