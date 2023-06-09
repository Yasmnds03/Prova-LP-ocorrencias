import { openDB } from './config/db.js'
import {
  CREATE_TABLE_VITIMA,
  CREATE_TABLE_OCORRENCIA,
  INSERT_VITIMA,
  INSERT_OCORRENCIA,
  TRUNCATE_VITIMA,
  TRUNCATE_OCORRENCIA,
} from './config/queries.js'

const vitimas = [
  {
    id: 1,
    nome: 'Ana', 
    idade: 25, 
    genero: 'Feminino'
  },
  {
    id: 2,
    nome: 'Sidney', 
    idade: 65, 
    genero: 'Masculino'
  },
  {
    id: 3,
    nome: 'Izabel', 
    idade: 30,
    genero: 'Feminino'
  },
]

const ocorrencias = [
  {
    id: 1,
    descricao: 'Ocorrência 1', 
    endereco: 'Rua A', 
    idVitima: 1, 
    houve_obito: 0
  },
  {
    id: 2,
    descricao: 'Ocorrência 2', 
    endereco: 'Rua B', 
    idVitima: 1, 
    houve_obito: 1
  },
  {
    id: 3,
    descricao: 'Ocorrência 3', 
    endereco: 'Rua C', 
    idVitima: 2, 
    houve_obito: 0
  },
  {
    id: 4,
    descricao: 'Ocorrência 4', 
    endereco: 'Rua D', 
    idVitima: 2, 
    houve_obito: 1
  },
  {
    id: 5,
    descricao: 'Ocorrência 5', 
    endereco: 'Rua E', 
    idVitima: 3, 
    houve_obito: 0
  },
  {
    id: 6,
    descricao: 'Ocorrência 6', 
    endereco: 'Rua F', 
    idVitima: 3, 
    houve_obito: 1
  }
]

;(async () => {
  const db = await openDB()
  await db.exec(CREATE_TABLE_VITIMA)
  await db.exec(CREATE_TABLE_OCORRENCIA)

  await db.exec(TRUNCATE_VITIMA)
  await db.exec(TRUNCATE_OCORRENCIA)

  for (let i = 0; i < vitimas.length; i++) {
    const { id, nome, idade, genero } =
      vitimas[i]

    console.log({ id, nome, idade, genero })

    await db.run(
      INSERT_VITIMA,
      id,
      nome,
      idade,
      genero
    )

    console.log(`Vítima #${i + 1} criada`)
  }

  for (let i = 0; i < ocorrencias.length; i++) {
    const { id, descricao, endereco, idVitima, houve_obito } = ocorrencias[i]

    console.log({
      id,
      descricao,
      endereco,
      idVitima,
      houve_obito
    })

    await db.run(INSERT_OCORRENCIA, id, descricao, endereco, idVitima, houve_obito)
    console.log(`--> Ocorrência #${i + 1} criada`)
  }

  console.log('Mal feito desfeito')
})()
