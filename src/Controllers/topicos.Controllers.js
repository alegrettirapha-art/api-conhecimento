const model = require('../Models/topicos.Models');

exports.getAll = async (req, res) => {
  const result = await model.getAll();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await model.getById(req.params.idt);
  res.json(result.rows);
};

exports.create = async (req, res) => {
  await model.create(req.body);
  res.send('Criado com sucesso');
};

exports.update = async (req, res) => {
  await model.update(req.params.idt, req.body);
  res.send('Atualizado');
};

exports.delete = async (req, res) => {
  await model.delete(req.params.idt);
  res.send('Deletado');
};