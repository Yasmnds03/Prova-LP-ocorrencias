export const CREATE_TABLE_VITIMA = `
  create table if not exists vitima (
    id integer primary key,
    nome text not null,
    idade integer not null,
    genero text not null
  )
`

export const CREATE_TABLE_OCORRENCIA = `
    create table if not exists ocorrencia (
      id integer primary key,
      descricao text not null,
      endereco text not null,
      id_vitima integer not null,
      houve_obito integer not null check(houve_obito in (0, 1)),
      foreign key(id_vitima)
        references vitima(id)
    )
`

export const INSERT_VITIMA = `
      insert into vitima values (
        ?, ?, ?, ?
      )
`

export const INSERT_OCORRENCIA = `
      insert into ocorrencia values (
        ?, ?, ?, ?, ?
      )
`

export const SELECT_VITIMA_BY_FAIXA_DE_DADE = `
        select * from vitima where idade between ? and ?
`

export const SELECT_VITIMA_BY_GENERO_FEMININO_AND_HOUVE_OBITO = `
        select ocorrencia.*, vitima.nome as nome_vitima from ocorrencia inner join vitima on ocorrencia.id_vitima = vitima.id where vitima.genero = ? and ocorrencia.houve_obito = ?
`

export const SELECT_VITIMA_BY_OCORRENCIA_BY_ENDERECO_IGNORING_CASE = `
        select vitima.*, ocorrencia.descricao as descricao_ocorrencia from vitima inner join ocorrencia on vitima.id = ocorrencia.id_vitima where lower(ocorrencia.endereco) like ?
`

export const TRUNCATE_VITIMA = `
        delete from vitima
`

export const TRUNCATE_OCORRENCIA = `
        delete from ocorrencia
`
