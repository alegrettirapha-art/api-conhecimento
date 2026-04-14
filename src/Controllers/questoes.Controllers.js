const model = require('../Models/questoes.Models');

exports.getAll = async (req, res) => {
  const result = await model.getAll();
  res.json(result.rows);
};

exports.listaView = async (req, res) => {
  const result = await model.listaView();
  res.json(result.rows);
};

exports.getById = async (req, res) => {
  const result = await model.getById(req.params.idq);
  res.json(result.rows);
};

exports.buscaPalavra = async (req, res) => {
  const result = await model.buscaPalavra(req.params.idq);
  res.json(result.rows);
};

exports.create = async (req, res) => {
  await model.create(req.body);
  res.send('Criado');
};

exports.update = async (req, res) => {
  await model.update(req.params.idq, req.body);
  res.send('Atualizado');
};

exports.delete = async (req, res) => {
  await model.delete(req.params.idq);
  res.send('Deletado');
};

// SELECT 1
exports.getByTopico = async (req, res) => {
  const result = await model.getByTopico(req.params.topid);
  res.json(result.rows);
};

// SELECT 2
exports.search = async (req, res) => {
  const result = await model.searchByEnunciado(req.query.q);
  res.json(result.rows);
};

// VIEW
exports.getView = async (req, res) => {
  const result = await model.getView();
  res.json(result.rows);
};