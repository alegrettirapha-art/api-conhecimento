const pool = require('../config/database');

exports.getAll = () => pool.query('SELECT * FROM questoes');

exports.listaView = () => pool.query('SELECT * FROM vw_questoes_completas');

exports.buscaPalavra = () => pool.query('SELECT enunciado, resposta FROM questoes WHERE enunciado ILIKE $1');


exports.getById = (idq) =>
  pool.query('SELECT * FROM questoes WHERE idq=$1', [idq]);

exports.create = (data) =>
  pool.query(
    `INSERT INTO questoes
    (topid, enunciado, resposta, linkbib, dtpesq)
    VALUES ($1,$2,$3,$4,$5)`,
    [data.topid, data.enunciado, data.resposta, data.linkbib, data.dtpesq]
  );

exports.update = (idq, data) =>
  pool.query(
    `UPDATE questoes SET
    topid=$1, enunciado=$2, resposta=$3, linkbib=$4, dtpesq=$5
    WHERE idq=$6`,
    [data.topid, data.enunciado, data.resposta, data.linkbib, data.dtpesq, idq]
  );

exports.delete = (idq) =>
  pool.query('DELETE FROM questoes WHERE idq=$1', [idq]);

exports.getByTopico = (topid) =>
  pool.query(
    'SELECT enunciado, resposta FROM questoes WHERE topid=$1',
    [topid]
  );

exports.searchByEnunciado = (texto) =>
  pool.query(
    `SELECT enunciado, resposta
     FROM questoes
     WHERE enunciado ILIKE $1`,
    [`%${texto}%`]
  );

exports.getView = () => pool.query('SELECT * FROM vw_questoes_completas');