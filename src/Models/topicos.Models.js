const pool = require('../config/database');

exports.getAll = () => pool.query('SELECT * FROM topicos');

exports.getById = (idt) =>
  pool.query('SELECT * FROM topicos WHERE idt = $1', [idt]);

exports.create = (data) =>
  pool.query(
    'INSERT INTO topicos (nomet, disciplina, professor) VALUES ($1,$2,$3)',
    [data.nomet, data.disciplina, data.professor]
  );

exports.update = (idt, data) =>
  pool.query(
    'UPDATE topicos SET nomet=$1, disciplina=$2, professor=$3 WHERE idt=$4',
    [data.nomet, data.disciplina, data.professor, idt]
  );

exports.delete = (idt) =>
  pool.query('DELETE FROM topicos WHERE idt=$1', [idt]);